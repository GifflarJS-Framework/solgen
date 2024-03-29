import helpers from "@utils/helpers";
import { IVariable } from "@models/definitions/stateVariable/types/IVariable";
import { IContent } from "../types/IContent";
import { inject, injectable } from "tsyringe";
import { IAssignmentModel } from "@models/statements/assignment/types/IAssignmentModel";
import { IVariableModel } from "@models/statements/variable/types/IVariableModel";
import { IIfModel } from "@models/statements/if/types/IIfModel";
import { IMethodCallModel } from "@models/statements/methodcall/types/IMethodCallModel";
import { IEventCallModel } from "@models/statements/eventCall/types/IEventCallModel";
import { ICreateContentDTO } from "../types/ICreateContentDTO";
import { IIf } from "@models/statements/if/types/IIf";
import { ITypeName } from "@modules/types/ITypeName";
import { IContinueModel } from "@models/statements/continue/types/IContinueModel";
import { IReturnModel } from "@models/statements/return/types/IReturnModel";
import { IAssertModel } from "@models/statements/assert/types/IAssertModel";
import { IBreakModel } from "@models/statements/break/types/IBreakModel";
import { ICatchModel } from "@models/statements/catch/types/ICatchModel";
import { IDoWhileModel } from "@models/statements/dowhile/types/IDoWhileModel";
import { IDoWhile } from "@models/statements/dowhile/types/IDoWhile";
import { IForModel } from "@models/statements/for/types/IForModel";
import { IDataLocation } from "@modules/types/IDataLocation";
import { IFor } from "@models/statements/for/types/IFor";
import { IRequireModel } from "@models/statements/require/types/IRequireModel";
import { IRevertModel } from "@models/statements/revert/types/IRevertModel";
import { ITryModel } from "@models/statements/try/types/ITryModel";
import { ITryExpression } from "@models/statements/try/types/ITryExpression";
import { IWhileModel } from "@models/statements/while/types/IWhileModel";
import { IWhile } from "@models/statements/while/types/IWhile";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";
import { IVariableDataLocation } from "@modules/types/IVariableDataLocation";
import { ITry } from "@modules/models/statements/try/types/ITry";
import { ICatch } from "@modules/models/statements/catch/types/ICatch";
import { ICustomCodeModel } from "@modules/models/custom/customCode/types/ICustomCodeModel";

interface ITryContent extends ITry, IContent {}
interface ICatchContent extends ICatch, IContent {}
interface IIfContent extends IIf, IContent {}
interface IDoWhileContent extends IDoWhile, IContent {}
interface IWhileContent extends IWhile, IContent {}
interface IForContent extends IFor, IContent {}

@injectable()
class ContentModel {
  constructor(
    @inject("AssertModel")
    private assertModel: IAssertModel,
    @inject("BreakModel")
    private breakModel: IBreakModel,
    @inject("CatchModel")
    private catchModel: ICatchModel,
    @inject("AssignmentModel")
    private assignmnetModel: IAssignmentModel,
    @inject("VariableModel")
    private variableModel: IVariableModel,
    @inject("IfModel")
    private ifModel: IIfModel,
    @inject("MethodCallModel")
    private methodCallModel: IMethodCallModel,
    @inject("EventCallModel")
    private eventCallModel: IEventCallModel,
    @inject("ContinueModel")
    private continueModel: IContinueModel,
    @inject("DoWhileModel")
    private doWhileModel: IDoWhileModel,
    @inject("ReturnModel")
    private returnModel: IReturnModel,
    @inject("ForModel")
    private forModel: IForModel,
    @inject("RequireModel")
    private requireModel: IRequireModel,
    @inject("RevertModel")
    private revertModel: IRevertModel,
    @inject("TryModel")
    private tryModel: ITryModel,
    @inject("WhileModel")
    private whileModel: IWhileModel,
    @inject("CustomCodeModel")
    private customCodeModel: ICustomCodeModel
  ) {}

  execute({ stateVars = [] }: ICreateContentDTO): IContent {
    const contentVars: Array<IVariable> = [].concat(Object.assign(stateVars));
    const stack: Array<any> = [
      {
        content: [],
      },
    ];
    let top = 0;

    const setAssert = (condition: string): IContent => {
      const _assert = this.assertModel.execute({ condition });
      stack[top].content.push(_assert);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setBreak = (): IContent => {
      const _break = this.breakModel.execute();
      stack[top].content.push(_break);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const beginTry = (
      expression: ITryExpression,
      parameters: Array<ITypeNameInput>
    ): IContent => {
      // Casting ITypeNameInput to IInput
      const _parameters = helpers.castITypeNameInputsToInputs(parameters);
      const _try = this.tryModel.execute({
        parameters: _parameters,
        expression,
      });
      const newTryContent: ITryContent = _assignFunctions(_try);
      stack.push(newTryContent);
      top += 1;
      return newTryContent;
    };

    const beginCatch = (
      parameters: Array<ITypeNameInput>,
      identifier?: string
    ): IContent => {
      // Casting ITypeNameInput to IInput
      const _parameters = helpers.castITypeNameInputsToInputs(parameters);
      const _catch = this.catchModel.execute({
        parameters: _parameters,
        identifier,
      });
      const newCatchContent: ICatchContent = _assignFunctions(_catch);
      stack.push(newCatchContent);
      top += 1;
      return newCatchContent;
    };

    const setVariable = (
      type: ITypeName,
      name: string,
      options?: {
        expressionValue?: IExpressionValue;
        dataLocation?: IVariableDataLocation;
      }
    ): IContent => {
      const newVariable = this.variableModel.execute({
        type: helpers.writeTypeName(type),
        name,
        expressionValue: options?.expressionValue,
        dataLocation: options?.dataLocation,
      });
      contentVars.push(newVariable);
      stack[top].content.push(newVariable);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setMethodCall = (
      variable: string,
      method: string,
      args: Array<string>
    ): IContent => {
      const newMethodCall = this.methodCallModel.execute({
        variable,
        method,
        args,
      });
      stack[top].content.push(newMethodCall);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setAssignment = (
      variable: string,
      expressionValue: IExpressionValue
    ): IContent => {
      const newAssignment = this.assignmnetModel.execute({
        variable,
        expressionValue,
      });
      stack[top].content.push(newAssignment);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setEventCall = (
      name: string,
      inputNames: Array<string>
    ): IContent => {
      const newEventCall = this.eventCallModel.execute({
        name,
        variables: inputNames,
      });
      stack[top].content.push(newEventCall);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setContinue = (): IContent => {
      const _continue = this.continueModel.execute();
      stack[top].content.push(_continue);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setReturn = (expressions: Array<string>): IContent => {
      const _return = this.returnModel.execute({ expressions });
      stack[top].content.push(_return);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setRequire = (condition: string, errorMessage?: string): IContent => {
      const _require = this.requireModel.execute({ condition, errorMessage });
      stack[top].content.push(_require);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setRevert = (errorMessage: string): IContent => {
      const _revert = this.revertModel.execute({
        message: errorMessage,
      });
      stack[top].content.push(_revert);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setCustomCode = (code: string): IContent => {
      const _customCode = this.customCodeModel.execute({
        code,
      });
      stack[top].content.push(_customCode);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    // Decision and loop structures

    const beginFor = (
      variable: {
        type: ITypeName;
        name: string;
        expressionValue: IExpressionValue;
        dataLocation: IDataLocation;
      },
      condition: string,
      expression: string
    ): IContent => {
      const newFor = this.forModel.execute({
        variable: {
          statement: "variable",
          type: helpers.writeTypeName(variable.type),
          name: variable.name,
          expressionValue: variable.expressionValue,
          dataLocation: variable.dataLocation,
        },
        condition,
        expression,
      });
      const newForContent: IForContent = _assignFunctions(newFor);
      stack.push(newForContent);
      top += 1;
      return newForContent;
    };

    const beginDoWhile = (condition: string): IContent => {
      const newDoWhile = this.doWhileModel.execute({ condition });
      const newDoWhileContent: IDoWhileContent = _assignFunctions(newDoWhile);
      stack.push(newDoWhileContent);
      top += 1;
      return newDoWhileContent;
    };

    const beginWhile = (condition: string): IContent => {
      const newWhile = this.whileModel.execute({ condition });
      const newWhileContent: IWhileContent = _assignFunctions(newWhile);
      stack.push(newWhileContent);
      top += 1;
      return newWhileContent;
    };

    const _beginIf = (condition: string, onElse: boolean): IContent => {
      const newIf = this.ifModel.execute({ condition, onElse });
      const newIfContent: IIfContent = _assignFunctions(newIf);
      stack.push(newIfContent);
      top += 1;
      return newIfContent;
    };

    const beginIf = (condition: string): IContent => {
      return _beginIf(condition, false);
    };

    const beginElseIf = (condition: string): IContent => {
      if (!condition) {
        throw new Error("Condition cannot be ommited.");
      }
      return _beginIf(condition, true);
    };

    const beginElse = (): IContent => {
      return _beginIf("", true);
    };

    const _endContentStructure = (): IContent => {
      if (stack.length > 1) {
        const json = stack.pop();
        top -= 1;
        if (json) {
          stack[top].content.push(json);
        }
      }
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const [
      endTry,
      endCatch,
      endIf,
      endElse,
      endElseIf,
      endDoWhile,
      endWhile,
      endFor,
    ] = Array<() => IContent>(6).fill(_endContentStructure);

    const _assignFunctions = <T>(obj: any): T => {
      const _obj = {
        ...obj,
        beginTry,
        beginCatch,
        beginIf,
        beginElse,
        beginElseIf,
        beginDoWhile,
        beginFor,
        endTry,
        endCatch,
        endIf,
        endElseIf,
        endElse,
        endDoWhile,
        endFor,
        endWhile,
        setEventCall,
        setAssignment,
        setVariable,
        setMethodCall,
        setContinue,
        setReturn,
        setAssert,
        setBreak,
        setRequire,
        setRevert,
        setCustomCode,
        beginWhile,
      };

      return _obj;
    };

    const json: IContent = _assignFunctions(stack[top]);
    return json;
  }
}

export default ContentModel;

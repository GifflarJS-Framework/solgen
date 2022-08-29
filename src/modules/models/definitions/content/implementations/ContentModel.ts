/* eslint-disable no-use-before-define */
import helpers from "@utils/helpers";
import { INewContract } from "@models/statements/newcontract/types/INewContract";
import { IVariable } from "@models/definitions/stateVariable/types/IVariable";
import { IContent } from "../types/IContent";
import { inject, injectable } from "tsyringe";
import { IAssignmentModel } from "@models/statements/assignment/types/IAssignmentModel";
import { IExpressionModel } from "@models/statements/expression/types/IExpressionModel";
import { IVariableModel } from "@models/statements/variable/types/IVariableModel";
import { INewContractModel } from "@models/statements/newcontract/types/INewContractModel";
import { IIfModel } from "@models/statements/if/types/IIfModel";
import { IMethodCallModel } from "@models/statements/methodcall/types/IMethodCallModel";
import { IEventCallModel } from "@models/statements/eventCall/types/IEventCallModel";
import { ICreateContentDTO } from "../types/ICreateContentDTO";
import { IIf } from "@models/statements/if/types/IIf";
import { ITypeName } from "modules/types/ITypeName";
import { IContinueModel } from "@models/statements/continue/types/IContinueModel";
import { IReturnModel } from "@models/statements/return/types/IReturnModel";
import { IAssertModel } from "@models/statements/assert/types/IAssertModel";
import { IBreakModel } from "@models/statements/break/types/IBreakModel";
import { ICatchModel } from "@models/statements/catch/types/ICatchModel";
import { IInput } from "@models/definitions/function/types/IInput";
import { IDoWhileModel } from "@models/statements/dowhile/types/IDoWhileModel";
import { IDoWhile } from "@models/statements/dowhile/types/IDoWhile";
import { IForModel } from "@models/statements/for/types/IForModel";
import { IDataLocation } from "modules/types/IDataLocation";
import { IFor } from "@models/statements/for/types/IFor";
import { IMappingModel } from "@models/statements/mapping/types/IMappingModel";
import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { IRequireModel } from "@models/statements/require/types/IRequireModel";
import { IRevertModel } from "@models/statements/revert/types/IRevertModel";
import { ICustomErrorcall } from "@models/statements/revert/types/ICustomErrorCall";
import { ITryModel } from "@models/statements/try/types/ITryModel";
import { ITryExpression } from "@models/statements/try/types/ITryExpression";
import { IWhileModel } from "@models/statements/while/types/IWhileModel";
import { IWhile } from "@models/statements/while/types/IWhile";

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
    @inject("ExpressionModel")
    private expressionModel: IExpressionModel,
    @inject("VariableModel")
    private variableModel: IVariableModel,
    @inject("NewContractModel")
    private newContractModel: INewContractModel,
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
    @inject("MappingModel")
    private mappingModel: IMappingModel,
    @inject("RequireModel")
    private requireModel: IRequireModel,
    @inject("RevertModel")
    private revertModel: IRevertModel,
    @inject("TryModel")
    private tryModel: ITryModel,
    @inject("WhileModel")
    private whileModel: IWhileModel
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

    const setTry = (
      parameters: Array<IInput>,
      expression: ITryExpression
    ): IContent => {
      const _catch = this.tryModel.execute({ parameters, expression });
      stack[top].content.push(_catch);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setCatch = (
      parameters: Array<IInput>,
      identifier?: string
    ): IContent => {
      const _catch = this.catchModel.execute({ identifier, parameters });
      stack[top].content.push(_catch);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setVariable = (
      type: ITypeName,
      name: string,
      value?: string | INewContract
    ): IContent => {
      const newVariable = this.variableModel.execute({
        type: helpers.writeTypeName(type),
        name,
        value,
      });
      contentVars.push(newVariable);
      stack[top].content.push(newVariable);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setMethodCall = (
      variable: string,
      method: string,
      value: string
    ): IContent => {
      const newMethodCall = this.methodCallModel.execute({
        variable,
        method,
        value,
      });
      stack[top].content.push(newMethodCall);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setAssignment = (variable: string, expression: string): IContent => {
      const expressionModel = this.expressionModel.execute({
        value: expression,
      });
      const newAssignment = this.assignmnetModel.execute({
        variable,
        value: expressionModel,
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

    const setContractVariable = (
      variable: string,
      contractName: string,
      args: Array<string>
    ): IContent => {
      const newContract = this.newContractModel.execute({ contractName, args });
      return setVariable({ customType: contractName }, variable, newContract);
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

    const setMapping = (
      type: IMappingKeyType,
      typeName: IMappingTypeName,
      name: string
    ): IContent => {
      const _mapping = this.mappingModel.execute({ type, typeName, name });
      stack[top].content.push(_mapping);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setRequire = (condition: string, errorMessage?: string): IContent => {
      const _require = this.requireModel.execute({ condition, errorMessage });
      stack[top].content.push(_require);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    const setRevert = (errorDefinition: {
      message?: string;
      customErrorCall?: ICustomErrorcall;
    }): IContent => {
      const _revert = this.revertModel.execute({
        message: errorDefinition.message,
        customErrorCall: errorDefinition.customErrorCall,
      });
      stack[top].content.push(_revert);
      const contentItem: IContent = _assignFunctions(stack[top]);
      return contentItem;
    };

    // Decision and loop structures

    const beginFor = (
      variable: {
        type: string;
        name: string;
        value: string;
        dataLocation: IDataLocation;
      },
      condition: string,
      expression: string
    ): IContent => {
      const newFor = this.forModel.execute({
        variable: {
          statement: "variable",
          ...variable,
        },
        condition,
        expression: { statement: "expression", value: expression },
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

    const beginIf = (condition: string, onElse?: boolean): IContent => {
      const newIf = this.ifModel.execute({ condition, onElse });
      const newIfContent: IIfContent = _assignFunctions(newIf);
      stack.push(newIfContent);
      top += 1;
      return newIfContent;
    };

    const beginElseIf = (condition: string): IContent => {
      if (!condition) {
        throw new Error("Condition cannot be ommited.");
      }
      return beginIf(condition, true);
    };

    const beginElse = (): IContent => {
      return beginIf("", true);
    };

    const _endDecisionStructure = (): IContent => {
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

    const [endIf, endElse, endElseIf, endDoWhile, endWhile, endFor] = Array<
      () => IContent
    >(6).fill(_endDecisionStructure);

    const _assignFunctions = <T>(obj: any): T => {
      const _obj = {
        ...obj,
        beginIf,
        beginElse,
        beginElseIf,
        beginDoWhile,
        beginFor,
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
        setContractVariable,
        setContinue,
        setReturn,
        setAssert,
        setBreak,
        setCatch,
        setMapping,
        setRequire,
        setRevert,
        setTry,
        beginWhile,
      };

      return _obj;
    };

    const json: IContent = _assignFunctions(stack[top]);
    return json;
  }
}

export default ContentModel;

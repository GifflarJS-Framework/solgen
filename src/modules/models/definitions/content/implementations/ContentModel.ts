/* eslint-disable no-use-before-define */
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
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IContinueModel } from "@models/statements/continue/types/IContinueModel";
import { IReturnModel } from "@models/statements/return/types/IReturnModel";
import helpers from "@utils/helpers";

interface IIfContent extends IIf, IContent {}

@injectable()
class ContentModel {
  constructor(
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
    @inject("ReturnModel")
    private returnModel: IReturnModel
  ) {}

  execute({ stateVars = [] }: ICreateContentDTO): IContent {
    const contentVars: Array<IVariable> = [].concat(Object.assign(stateVars));
    const stack: Array<any> = [
      {
        content: [],
      },
    ];
    let top = 0;

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

    const endIf = (): IContent => {
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

    const _assignFunctions = <T>(obj: any): T => {
      const _obj = {
        ...obj,
        beginIf,
        beginElse,
        beginElseIf,
        endIf,
        endElseIf: endIf,
        endElse: endIf,
        setEventCall,
        setAssignment,
        setVariable,
        setMethodCall,
        setContractVariable,
        setContinue,
        setReturn,
      };

      return _obj;
    };

    const json: IContent = _assignFunctions(stack[top]);
    return json;
  }
}

export default ContentModel;

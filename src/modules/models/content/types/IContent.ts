import { IStackItem } from "./IStackItem";

export interface IContent extends IStackItem {
  setVariable(type: string, name: string, value?: string): IContent;
  setMethodCall(variable: string, method: string, value: string): IContent;
  setAssignment(variable: string, expression: string | undefined): IContent;
  setEventCall(name: string, inputNames: Array<string>): IContent;
  setContractVariable(
    variable: string,
    contractName: string,
    args: Array<string>
  ): IContent;

  /**
   * Remember to use the "endIf" function when finishing "if" conditions actions,
   * or else all the conditions made will have any effect.
   *  */
  beginIf(condition: string, onElse?: boolean): IContent;
  beginElseIf(condition: string): IContent;
  beginElse(): IContent;
  endIf(): IContent;
  endElseIf(): IContent;
  endElse(): IContent;
}

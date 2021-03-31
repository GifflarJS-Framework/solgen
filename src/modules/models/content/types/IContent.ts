import { IContents } from "./IContents";
import { IStackItem } from "./IStackItem";

export interface IContent extends IStackItem {
  setVariable(type: string, name: string, value: string): IContent;
  setMethodCall(variable: string, method: string, value: string): IContent;
  setAssignment(variable: string, expression: string | undefined): IContent;
  setEventCall(name: string, inputNames: Array<string>): IContent;
  setContractVariable(
    variable: string,
    contractName: string,
    args: Array<string>
  ): IContent;
  beginIf(condition: string, onElse?: boolean): IContent;
  beginElseIf(condition: string): IContent;
  beginElse(): IContent;
  endIf(): IContent;
  endElseIf(): IContent;
}

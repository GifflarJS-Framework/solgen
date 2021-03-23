export interface IContent {
  setVariable(type: string, name: string, value: string): IContent;
  setCallMethod(variable: string, method: string, value: string): IContent;
  setAssignment(variable: string, expression: string | undefined): IContent;
  setCallEvent(name: string, inputNames: Array<string>): IContent;
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

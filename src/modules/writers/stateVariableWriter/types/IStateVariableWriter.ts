import { IStateVariable } from "@models/stateVariable/types/IStateVariable";

export interface IStateVariableWriter {
  write(variables: Array<IStateVariable>): string;
}

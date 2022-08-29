import { IStateVariable } from "../../../../models/definitions/stateVariable/types/IStateVariable";
export interface IStateVariableWriter {
    write(variables: Array<IStateVariable>): string;
}

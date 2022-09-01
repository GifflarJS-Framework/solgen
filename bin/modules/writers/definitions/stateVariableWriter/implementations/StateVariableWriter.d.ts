import { IStateVariable } from "../../../../models/definitions/stateVariable/types/IStateVariable";
import { IStateVariableWriter } from "../types/IStateVariableWriter";
declare class StateVariableWriter implements IStateVariableWriter {
    write(variables: Array<IStateVariable>): string;
}
export default StateVariableWriter;

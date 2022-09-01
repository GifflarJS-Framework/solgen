import { IStateMapping } from "../../../../models/definitions/stateMapping/types/IStateMapping";
export interface IStateMappingWriter {
    write(mapping: Array<IStateMapping>): string;
}

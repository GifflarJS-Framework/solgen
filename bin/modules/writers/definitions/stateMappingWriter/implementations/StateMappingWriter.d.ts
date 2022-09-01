import { IStateMapping } from "../../../../models/definitions/stateMapping/types/IStateMapping";
import { IStateMappingWriter } from "../types/IStateMappingWriter";
declare class StateMappingWriter implements IStateMappingWriter {
    private _writeTypeName;
    private _writeNestedMapping;
    write(mappings: Array<IStateMapping>): string;
}
export default StateMappingWriter;

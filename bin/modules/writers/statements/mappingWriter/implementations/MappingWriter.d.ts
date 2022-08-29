import { IMapping } from "../../../../models/statements/mapping/types/IMapping";
import { IMappingWriter } from "../types/IMappingWriter";
declare class MappingWriter implements IMappingWriter {
    private _writeTypeName;
    private _writeNestedMapping;
    write(mapping: IMapping): string;
}
export default MappingWriter;

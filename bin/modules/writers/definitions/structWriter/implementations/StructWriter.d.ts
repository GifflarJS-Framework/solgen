import { IStruct } from "../../../../models/definitions/struct/types/IStruct";
import { IMappingWriter } from "../../../statements/mappingWriter/types/IMappingWriter";
import { IVariableWriter } from "../../../statements/variableWriter/types/IVariableWriter";
import { IStructWriter } from "../types/IStructWriter";
declare class StructWriter implements IStructWriter {
    private variableWriter;
    private mappingWriter;
    constructor(variableWriter: IVariableWriter, mappingWriter: IMappingWriter);
    write(struct: IStruct): string;
}
export default StructWriter;

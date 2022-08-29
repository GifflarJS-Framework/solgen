import { IStruct } from "../../../../models/definitions/struct/types/IStruct";
import { IMappingModel } from "../../../../models/statements/mapping/types/IMappingModel";
import { IVariableModel } from "../../../../models/statements/variable/types/IVariableModel";
import { IMappingWriter } from "../../../statements/mappingWriter/types/IMappingWriter";
import { IVariableWriter } from "../../../statements/variableWriter/types/IVariableWriter";
import { IStructWriter } from "../types/IStructWriter";
declare class StructWriter implements IStructWriter {
    private variableModel;
    private mappingModel;
    private variableWriter;
    private mappingWriter;
    constructor(variableModel: IVariableModel, mappingModel: IMappingModel, variableWriter: IVariableWriter, mappingWriter: IMappingWriter);
    write(struct: IStruct): string;
}
export default StructWriter;

import { ICompiler } from "../../../compiler/types/ICompiler";
import { IImportModel } from "../../../models/toplevels/import/types/IImportModel";
import { IInterfaceModel } from "../../../models/toplevels/interface/types/IInterfaceModel";
import { IImportWriter } from "../../../writers/toplevels/importWriter/types/IImportWriter";
import { IInterfaceWriter } from "../../../writers/toplevels/interfaceWriter/types/IInterfaceWriter";
import { IGifflarInterface } from "../types/IGifflarInterface";
import { IGifflarInterfaceModel } from "../types/IGifflarInterfaceModel";
declare class GifflarInterfaceModel implements IGifflarInterfaceModel {
    private importModel;
    private importWriter;
    private compiler;
    private interfaceWriter;
    private interfaceModel;
    private imports;
    constructor(importModel: IImportModel, importWriter: IImportWriter, compiler: ICompiler, interfaceWriter: IInterfaceWriter, interfaceModel: IInterfaceModel);
    execute(interfaceName: string): IGifflarInterface;
}
export default GifflarInterfaceModel;

import { IContractBodyModel } from "../../contractBody/types/IContractBodyModel";
import { ILibrary } from "../types/ILibrary";
import { ILibraryModel } from "../types/ILibraryModel";
declare class LibraryModel implements ILibraryModel {
    private contractBodyModel;
    constructor(contractBodyModel: IContractBodyModel);
    execute(libraryName: string): ILibrary;
}
export default LibraryModel;

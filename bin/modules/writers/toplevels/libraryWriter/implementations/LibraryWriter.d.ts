import { ILibrary } from "../../../../models/toplevels/library/types/ILibrary";
import { IContractBodyWriter } from "../../contractBodyWriter/types/IContractBodyWriter";
import { ILibraryWriter } from "../types/ILibraryWriter";
declare class LibraryWriter implements ILibraryWriter {
    private contractBodyWriter;
    constructor(contractBodyWriter: IContractBodyWriter);
    write(libraries: Array<ILibrary>, 
    /** To get every library text individually. */
    callback?: (individualLibraryText: string, index: number) => void): string;
}
export default LibraryWriter;

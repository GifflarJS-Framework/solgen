import { IContractItem } from "../../../models/toplevels/contract/types/IContractItem";
import { IInterfaceItem } from "../../../models/toplevels/interface/types/IInterfaceItem";
import { ILibraryItem } from "../../../models/toplevels/library/types/ILibraryItem";
export interface ITopLevel {
    contract?: IContractItem;
    library?: ILibraryItem;
    interface?: IInterfaceItem;
    json?: any;
    code?: string;
    getName(): string;
    compile(callback: (errors: any) => void): any;
    write(): string;
}

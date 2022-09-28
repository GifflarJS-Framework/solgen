import { IImport } from "../../../models/toplevels/import/types/IImport";
import { IInterface } from "../../../models/toplevels/interface/types/IInterface";
import { IInterfaceJson } from "../../../models/toplevels/interface/types/IInterfaceJson";
export interface IGifflarInterface extends IInterface {
    setName(newName: string): void;
    getName(): string;
    setImport(identifierPath: string, alias?: string): IImport;
    write(contracts?: Array<IInterfaceJson>): string;
    compile(callback?: (errors: any[]) => void): any;
    written(): string | undefined;
    compiled(): any | undefined;
}

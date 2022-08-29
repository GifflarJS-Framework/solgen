import { IContractItem } from "@models/directives/contract/types/IContractItem";
import { IInterfaceItem } from "@models/directives/interface/types/IInterfaceItem";
import { ILibraryItem } from "@models/directives/library/types/ILibraryItem";

export interface IDirective {
  contract?: IContractItem;
  library?: ILibraryItem;
  interface?: IInterfaceItem;
  json?: any;
  code?: string;
  getName(): string;
  compile(callback: (errors: any) => void): any;
  write(): string;
}

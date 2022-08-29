import { IInterface } from "@models/directives/interface/types/IInterface";
import { IInterfaceJson } from "@models/directives/interface/types/IInterfaceJson";

export interface IGifflarInterface extends IInterface {
  setName(newName: string): void;
  write(contracts?: Array<IInterfaceJson>): string;
  compile(callback: (errors: any) => void): any;
  written(): string | undefined;
  compiled(): any | undefined;
}

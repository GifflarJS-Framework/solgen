import { IContractBody } from "@models/toplevels/contractBody/types/IContractBody";
import { ILibraryJson } from "./ILibraryJson";

export interface ILibrary extends ILibraryJson, IContractBody {
  toJson(): ILibraryJson;
  toString(): string;
}

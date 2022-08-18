import { IType } from "@models/type/types/IType";

export interface ITypeWriter {
  write(types: Array<IType>): string;
}

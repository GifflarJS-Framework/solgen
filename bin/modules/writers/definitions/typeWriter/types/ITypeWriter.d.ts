import { IType } from "../../../../models/definitions/type/types/IType";
export interface ITypeWriter {
    write(types: Array<IType>): string;
}

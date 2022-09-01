import { IType } from "../../../../models/definitions/type/types/IType";
import { ITypeWriter } from "../types/ITypeWriter";
declare class TypeWriter implements ITypeWriter {
    write(types: Array<IType>): string;
}
export default TypeWriter;

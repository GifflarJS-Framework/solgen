import { IEnum } from "../../../../models/definitions/enum/types/IEnum";
import { IEnumWriter } from "../types/IEnumWriter";
declare class EnumWriter implements IEnumWriter {
    write(_enums: Array<IEnum>): string;
}
export default EnumWriter;

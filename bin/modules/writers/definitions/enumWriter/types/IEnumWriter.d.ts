import { IEnum } from "../../../../models/definitions/enum/types/IEnum";
export interface IEnumWriter {
    write(_enums: Array<IEnum>): string;
}

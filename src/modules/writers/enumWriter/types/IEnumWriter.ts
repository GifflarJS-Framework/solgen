import { IEnum } from "@models/enum/types/IEnum";

export interface IEnumWriter {
  write(_enums: Array<IEnum>): string;
}

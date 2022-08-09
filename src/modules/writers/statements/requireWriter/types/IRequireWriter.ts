import { IRequire } from "@models/require/types/IRequire";

export interface IRequireWriter {
  write(require: IRequire): string;
}

import { IRequire } from "../../../../models/statements/require/types/IRequire";
export interface IRequireWriter {
    write(require: IRequire): string;
}

import { IRequire } from "../../../../models/statements/require/types/IRequire";
import { IRequireWriter } from "../types/IRequireWriter";
declare class RequireWriter implements IRequireWriter {
    write(require: IRequire): string;
}
export default RequireWriter;

import { IUsing } from "../../../../models/definitions/using/types/IUsing";
import { IUsingWriter } from "../types/IUsingWriter";
declare class UsingWriter implements IUsingWriter {
    write(usings: Array<IUsing>): string;
}
export default UsingWriter;

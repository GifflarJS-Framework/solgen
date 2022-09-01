import { ICustomError } from "../../../../models/definitions/customError/types/ICustomError";
import { IInputWriter } from "../../../statements/inputWriter/types/IInputWriter";
import { ICustomErrorWriter } from "../types/ICustomErrorWriter";
declare class CustomErrorWriter implements ICustomErrorWriter {
    private inputWriter;
    constructor(inputWriter: IInputWriter);
    write(customErrors: Array<ICustomError>): string;
}
export default CustomErrorWriter;

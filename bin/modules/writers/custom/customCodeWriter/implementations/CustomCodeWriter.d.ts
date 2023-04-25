import { ICustomCode } from "../../../../models/custom/customCode/types/ICustomCode";
import { ICustomCodeWriter } from "../types/ICustomCodeWriter";
declare class CustomCodeWriter implements ICustomCodeWriter {
    write(customCodes: ICustomCode[]): string;
}
export default CustomCodeWriter;

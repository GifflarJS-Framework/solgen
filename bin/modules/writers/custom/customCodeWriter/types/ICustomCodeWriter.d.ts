import { ICustomCode } from "../../../../models/custom/customCode/types/ICustomCode";
export interface ICustomCodeWriter {
    write(customCodes: Array<ICustomCode>): string;
}

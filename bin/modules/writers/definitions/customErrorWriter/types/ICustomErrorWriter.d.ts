import { ICustomError } from "../../../../models/definitions/customError/types/ICustomError";
export interface ICustomErrorWriter {
    write(customError: Array<ICustomError>): string;
}

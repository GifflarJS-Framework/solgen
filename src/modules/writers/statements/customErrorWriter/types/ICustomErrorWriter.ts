import { ICustomError } from "@models/customError/types/ICustomError";

export interface ICustomErrorWriter {
  write(customError: Array<ICustomError>): string;
}

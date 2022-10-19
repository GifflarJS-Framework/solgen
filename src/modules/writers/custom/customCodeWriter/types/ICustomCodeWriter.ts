import { ICustomCode } from "@modules/models/custom/customCode/types/ICustomCode";

export interface ICustomCodeWriter {
  write(customCodes: Array<ICustomCode>): string;
}

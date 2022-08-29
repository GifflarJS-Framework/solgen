import { IOutput } from "../../../../models/definitions/function/types/IOutput";
export interface IOutputWriter {
    write(outputs: Array<IOutput>): string;
}

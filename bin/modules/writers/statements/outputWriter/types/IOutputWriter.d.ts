import { IOutput } from "../../../../types/IOutput";
export interface IOutputWriter {
    write(outputs: Array<IOutput>): string;
}

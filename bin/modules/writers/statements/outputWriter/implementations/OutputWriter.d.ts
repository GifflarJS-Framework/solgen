import { IOutput } from "../../../../models/definitions/function/types/IOutput";
import { IOutputWriter } from "../types/IOutputWriter";
declare class OutputWriter implements IOutputWriter {
    write(outputs: Array<IOutput>): string;
}
export default OutputWriter;

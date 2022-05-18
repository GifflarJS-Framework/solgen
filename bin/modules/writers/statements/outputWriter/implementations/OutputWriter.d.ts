import { IVariable } from "../../../../models/variable/types/IVariable";
import { IOutputWriter } from "../types/IOutputWriter";
import { IOutputWriterCallbackObject } from "../types/IOutputWriterCallbackObject";
declare class OutputWriter implements IOutputWriter {
    write(outputs: Array<string>, variables: IVariable[] | undefined, callback: (object: IOutputWriterCallbackObject) => void): string;
}
export default OutputWriter;

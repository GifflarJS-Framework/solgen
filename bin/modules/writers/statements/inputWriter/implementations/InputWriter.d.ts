import { IInput } from "../../../../models/definitions/function/types/IInput";
import { IInputWriter } from "../types/IInputWriter";
declare class InputWriter implements IInputWriter {
    write(inputs: Array<IInput>, typeon?: boolean): string;
}
export default InputWriter;

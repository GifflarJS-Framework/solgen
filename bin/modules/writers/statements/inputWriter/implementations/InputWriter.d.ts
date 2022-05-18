import { IInput } from "../../../../models/function/types/IInput";
import { IInputWriter } from "../types/IInputWriter";
declare class InputWriter implements IInputWriter {
    write(inputs: Array<IInput>, typeon?: boolean): string;
}
export default InputWriter;

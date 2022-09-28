import { IInput } from "../../../../types/IInput";
import { IInputWriter } from "../types/IInputWriter";
declare class InputWriter implements IInputWriter {
    write(inputs: Array<IInput>, typeon?: boolean, handleDataLocation?: boolean): string;
}
export default InputWriter;
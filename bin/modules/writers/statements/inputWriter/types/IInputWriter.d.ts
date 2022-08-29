import { IInput } from "../../../../models/definitions/function/types/IInput";
export interface IInputWriter {
    write(inputs: Array<IInput>, typeon?: boolean): string;
}

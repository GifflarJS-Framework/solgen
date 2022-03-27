import { IInput } from "@models/function/types/IInput";

export interface IInputWriter {
  write(inputs: Array<IInput>, typeon?: boolean): string;
}

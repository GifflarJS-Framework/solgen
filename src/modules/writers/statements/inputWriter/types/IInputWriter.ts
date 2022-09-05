import { IInput } from "@modules/types/IInput";

export interface IInputWriter {
  write(inputs: Array<IInput>, typeon?: boolean): string;
}

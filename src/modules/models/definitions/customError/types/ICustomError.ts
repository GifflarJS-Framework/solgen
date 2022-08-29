import { IInput } from "@models/definitions/function/types/IInput";

export interface ICustomError {
  name: string;
  args: Array<IInput>;
}

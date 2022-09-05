import { IInput } from "@modules/types/IInput";

export interface ICustomError {
  name: string;
  args: Array<IInput>;
}

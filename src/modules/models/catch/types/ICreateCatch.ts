import { IInput } from "@models/function/types/IInput";

export interface ICreateCatch {
  identifier: string;
  parameters: Array<IInput>;
}

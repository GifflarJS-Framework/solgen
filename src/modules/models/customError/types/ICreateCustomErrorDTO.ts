import { IInput } from "@models/function/types/IInput";

export interface ICreateCustomErrorDTO {
  name: string;
  args?: Array<IInput>;
}

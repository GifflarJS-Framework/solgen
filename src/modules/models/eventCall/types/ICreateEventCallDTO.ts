import { IInput } from "@models/function/types/IInput";

export interface ICreateEventCallDTO {
  name: string;
  inputs: Array<IInput>;
}

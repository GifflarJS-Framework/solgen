import { IInput } from "@models/function/types/IInput";

export interface ICreateEventDTO {
  name: string;
  inputs: Array<IInput>;
}

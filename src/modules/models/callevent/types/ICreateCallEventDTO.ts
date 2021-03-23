import { IInput } from "@models/function/types/IInput";

export interface ICreateCallEventDTO {
  name: string;
  inputs: Array<IInput>;
}

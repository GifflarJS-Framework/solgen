import { IInput } from "@models/definitions/function/types/IInput";

export interface ICreateEventDTO {
  name: string;
  inputs: Array<IInput>;
}

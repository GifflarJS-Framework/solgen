import { IInput } from "@models/definitions/function/types/IInput";

export interface IEvent {
  name: string;
  inputs: Array<IInput>;
}

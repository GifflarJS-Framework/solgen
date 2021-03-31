import { IInput } from "@models/function/types/IInput";

export interface IEvent {
  name: string;
  inputs: Array<IInput>;
}

import { IInput } from "@models/function/types/IInput";

export interface IEvent {
  statement: string;
  name: string;
  inputs: Array<IInput>;
}

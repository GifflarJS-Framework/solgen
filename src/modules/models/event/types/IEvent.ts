import { IInput } from "@models/function/types/IInput";

export interface IEvent {
  statement: "event";
  name: string;
  inputs: Array<IInput>;
}

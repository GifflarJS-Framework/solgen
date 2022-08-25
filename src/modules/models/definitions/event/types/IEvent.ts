import { IInput } from "@models/definitions/function/types/IInput";

export interface IEvent {
  statement: "event";
  name: string;
  inputs: Array<IInput>;
}

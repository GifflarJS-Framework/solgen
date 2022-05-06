import { IInput } from "@models/function/types/IInput";
import { ICreateEventDTO } from "./ICreateEventDTO";
import { IEvent } from "./IEvent";

export default interface IEventModel {
  execute({ name, inputs }: ICreateEventDTO): IEvent;
}

import { ICreateEventDTO } from "../types/ICreateEventDTO";
import { IEvent } from "../types/IEvent";
import IEventModel from "../types/IEventModel";

class EventModel implements IEventModel {
  execute({ name, inputs }: ICreateEventDTO): IEvent {
    const event: IEvent = {
      statement: "event",
      name,
      inputs,
    };

    return event;
  }
}

export default EventModel;

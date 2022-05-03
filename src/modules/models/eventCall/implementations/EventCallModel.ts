import { ICreateEventCallDTO } from "../types/ICreateEventCallDTO";
import { IEventCall } from "../types/IEventCall";
import { IEventCallModel } from "../types/IEventCallModel";

class EventCallModel implements IEventCallModel {
  execute({ name, inputs = [] }: ICreateEventCallDTO): IEventCall {
    const event: IEventCall = {
      statement: "event_call",
      name,
      inputs,
    };

    return event;
  }
}

export default EventCallModel;

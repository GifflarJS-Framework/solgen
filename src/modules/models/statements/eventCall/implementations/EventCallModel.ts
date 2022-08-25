import { ICreateEventCallDTO } from "../types/ICreateEventCallDTO";
import { IEventCall } from "../types/IEventCall";
import { IEventCallModel } from "../types/IEventCallModel";

class EventCallModel implements IEventCallModel {
  execute({ name, variables = [] }: ICreateEventCallDTO): IEventCall {
    const event: IEventCall = {
      statement: "event_call",
      name,
      variables,
    };

    return event;
  }
}

export default EventCallModel;

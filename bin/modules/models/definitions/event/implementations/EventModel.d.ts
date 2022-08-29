import { ICreateEventDTO } from "../types/ICreateEventDTO";
import { IEvent } from "../types/IEvent";
import IEventModel from "../types/IEventModel";
declare class EventModel implements IEventModel {
    execute({ name, inputs }: ICreateEventDTO): IEvent;
}
export default EventModel;

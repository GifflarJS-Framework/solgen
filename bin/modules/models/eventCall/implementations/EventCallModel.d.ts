import { ICreateEventCallDTO } from "../types/ICreateEventCallDTO";
import { IEventCall } from "../types/IEventCall";
import { IEventCallModel } from "../types/IEventCallModel";
declare class EventCallModel implements IEventCallModel {
    execute({ name, variables }: ICreateEventCallDTO): IEventCall;
}
export default EventCallModel;

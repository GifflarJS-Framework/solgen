import { ICreateEventCallDTO } from "./ICreateEventCallDTO";
import { IEventCall } from "./IEventCall";
export interface IEventCallModel {
    execute({ name, variables }: ICreateEventCallDTO): IEventCall;
}

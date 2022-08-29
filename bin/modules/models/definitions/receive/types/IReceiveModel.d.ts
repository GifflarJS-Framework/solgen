import { ICreateReceiveDTO } from "./ICreateReceiveDTO";
import { IReceive } from "./IReceive";
export interface IReceiveModel {
    execute(data: ICreateReceiveDTO): IReceive;
}

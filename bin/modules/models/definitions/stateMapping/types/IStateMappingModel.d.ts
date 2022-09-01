import { ICreateStateMappingDTO } from "./ICreateStateMappingDTO";
import { IStateMapping } from "./IStateMapping";
export interface IStateMappingModel {
    execute(data: ICreateStateMappingDTO): IStateMapping;
}

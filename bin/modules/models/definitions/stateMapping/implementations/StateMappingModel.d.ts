import { ICreateStateMappingDTO } from "../types/ICreateStateMappingDTO";
import { IStateMapping } from "../types/IStateMapping";
import { IStateMappingModel } from "../types/IStateMappingModel";
declare class StateMappingModel implements IStateMappingModel {
    execute({ type, typeName, name, scope, }: ICreateStateMappingDTO): IStateMapping;
}
export default StateMappingModel;

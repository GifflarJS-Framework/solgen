import { ICreateMappingDTO } from "../types/ICreateMappingDTO";
import { IMapping } from "../types/IMapping";
import { IMappingModel } from "../types/IMappingModel";
declare class MappingModel implements IMappingModel {
    execute({ type, typeName, name }: ICreateMappingDTO): IMapping;
}
export default MappingModel;

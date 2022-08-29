import { ICreateMappingDTO } from "./ICreateMappingDTO";
import { IMapping } from "./IMapping";
export interface IMappingModel {
    execute(data: ICreateMappingDTO): IMapping;
}

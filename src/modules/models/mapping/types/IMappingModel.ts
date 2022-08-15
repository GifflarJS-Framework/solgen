import { ICreateMapping } from "./ICreateMapping";
import { IMapping } from "./IMapping";

export interface IMappingModel {
  execute(data: ICreateMapping): IMapping;
}

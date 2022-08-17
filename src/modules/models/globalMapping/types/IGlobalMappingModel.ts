import { ICreateGlobalMapping } from "./ICreateGlobalMapping";
import { IGlobalMapping } from "./IGlobalMapping";

export interface IGlobalMappingModel {
  execute(data: ICreateGlobalMapping): IGlobalMapping;
}

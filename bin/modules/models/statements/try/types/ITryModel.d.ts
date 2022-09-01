import { ICreateTryDTO } from "./ICreateTryDTO";
import { ITry } from "./ITry";
export interface ITryModel {
    execute(data: ICreateTryDTO): ITry;
}

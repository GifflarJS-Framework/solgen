import { ICreateTry } from "./ICreateTry";
import { ITry } from "./ITry";

export interface ITryModel {
  execute(data: ICreateTry): ITry;
}

import { ICreateDoWhileModel } from "./ICreateDoWhileModel";
import { IDoWhile } from "./IDoWhile";

export interface IDoWhileModel {
  execute({ condition }: ICreateDoWhileModel): IDoWhile;
}

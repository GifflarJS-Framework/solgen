import { ICreateWhileModel } from "./ICreateWhileModel";
import { IWhile } from "./IWhile";

export interface IWhileModel {
  execute({ condition }: ICreateWhileModel): IWhile;
}

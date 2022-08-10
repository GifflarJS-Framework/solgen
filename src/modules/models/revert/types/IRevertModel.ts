import { ICreateRevert } from "./ICreateRevert";
import { IRevert } from "./IRevert";

export interface IRevertModel {
  execute(data?: ICreateRevert): IRevert;
}

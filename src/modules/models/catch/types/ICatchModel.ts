import { ICatch } from "./ICatch";
import { ICreateCatch } from "./ICreateCatch";

export interface ICatchModel {
  execute(data: ICreateCatch): ICatch;
}

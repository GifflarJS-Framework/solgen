import { ICreateIf } from "./ICreateIf";
import { IIf } from "./IIf";

export interface IIfModel {
  execute({ condition, onElse }: ICreateIf): IIf;
}

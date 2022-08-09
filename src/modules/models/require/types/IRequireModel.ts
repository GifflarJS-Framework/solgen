import { ICreateRequireModel } from "./ICreateRequireModel";
import { IRequire } from "./IRequire";

export interface IRequireModel {
  execute({ condition, errorMessage }: ICreateRequireModel): IRequire;
}

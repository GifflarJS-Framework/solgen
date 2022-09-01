import { ICreateRequireDTO } from "./ICreateRequireDTO";
import { IRequire } from "./IRequire";
export interface IRequireModel {
    execute({ condition, errorMessage }: ICreateRequireDTO): IRequire;
}

import { ICreateIfDTO } from "./ICreateIfDTO";
import { IIf } from "./IIf";
export interface IIfModel {
    execute({ condition, onElse }: ICreateIfDTO): IIf;
}

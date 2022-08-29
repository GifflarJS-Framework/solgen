import { IAssert } from "./IAssert";
import { ICreateAssertDTO } from "./ICreateAssertDTO";
export interface IAssertModel {
    execute({ condition }: ICreateAssertDTO): IAssert;
}

import { ICreateInheritsDTO } from "./ICreateInheritsDTO";
import { IInherits } from "./IInherits";
export interface IInheritsModel {
    execute(data: ICreateInheritsDTO): IInherits;
}

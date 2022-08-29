import { ICreateUsingDTO } from "./ICreateUsingDTO";
import { IUsing } from "./IUsing";
export interface IUsingModel {
    execute(data: ICreateUsingDTO): IUsing;
}

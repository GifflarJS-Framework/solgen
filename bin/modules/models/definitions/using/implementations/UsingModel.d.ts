import { ICreateUsingDTO } from "../types/ICreateUsingDTO";
import { IUsing } from "../types/IUsing";
import { IUsingModel } from "../types/IUsingModel";
declare class UsingModel implements IUsingModel {
    execute({ identifier, type }: ICreateUsingDTO): IUsing;
}
export default UsingModel;

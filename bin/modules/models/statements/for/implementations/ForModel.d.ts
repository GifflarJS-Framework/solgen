import { ICreateForDTO } from "../types/ICreateForDTO";
import { IFor } from "../types/IFor";
import { IForModel } from "../types/IForModel";
declare class ForModel implements IForModel {
    execute({ variable, condition, expressionValue }: ICreateForDTO): IFor;
}
export default ForModel;
import { ICreateReturnDTO } from "../types/ICreateReturnDTO";
import { IReturn } from "../types/IReturn";
import { IReturnModel } from "../types/IReturnModel";
declare class ReturnModel implements IReturnModel {
    execute({ expressions }: ICreateReturnDTO): IReturn;
}
export default ReturnModel;

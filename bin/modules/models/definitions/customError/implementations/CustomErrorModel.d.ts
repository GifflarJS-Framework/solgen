import { ICreateCustomErrorDTO } from "../types/ICreateCustomErrorDTO";
import { ICustomError } from "../types/ICustomError";
import { ICustomErrorModel } from "../types/ICustomErrorModel";
declare class CustomError implements ICustomErrorModel {
    execute({ name, args }: ICreateCustomErrorDTO): ICustomError;
}
export default CustomError;

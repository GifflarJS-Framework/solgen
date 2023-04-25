import { ICreateCustomCodeDTO } from "../types/ICreateCustomCodeDTO";
import { ICustomCode } from "../types/ICustomCode";
import { ICustomCodeModel } from "../types/ICustomCodeModel";
declare class CustomCodeModel implements ICustomCodeModel {
    execute({ code }: ICreateCustomCodeDTO): ICustomCode;
}
export default CustomCodeModel;

import { ICreateWhileDTO } from "../types/ICreateWhileDTO";
import { IWhile } from "../types/IWhile";
import { IWhileModel } from "../types/IWhileModel";
declare class WhileModel implements IWhileModel {
    execute({ condition }: ICreateWhileDTO): IWhile;
}
export default WhileModel;

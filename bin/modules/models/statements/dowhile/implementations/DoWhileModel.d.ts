import { ICreateDoWhileDTO } from "../types/ICreateDoWhileDTO";
import { IDoWhile } from "../types/IDoWhile";
import { IDoWhileModel } from "../types/IDoWhileModel";
declare class DoWhileModel implements IDoWhileModel {
    execute({ condition }: ICreateDoWhileDTO): IDoWhile;
}
export default DoWhileModel;

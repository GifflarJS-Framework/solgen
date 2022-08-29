import { ICatch } from "../types/ICatch";
import { ICatchModel } from "../types/ICatchModel";
import { ICreateCatchDTO } from "../types/ICreateCatchDTO";
declare class CatchModel implements ICatchModel {
    execute({ identifier, parameters }: ICreateCatchDTO): ICatch;
}
export default CatchModel;

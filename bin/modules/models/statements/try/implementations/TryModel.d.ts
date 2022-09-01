import { ICreateTryDTO } from "../types/ICreateTryDTO";
import { ITry } from "../types/ITry";
import { ITryModel } from "../types/ITryModel";
declare class TryModel implements ITryModel {
    execute({ expression, parameters }: ICreateTryDTO): ITry;
}
export default TryModel;

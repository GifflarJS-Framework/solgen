import { ICreateFallbackDTO } from "./ICreateFallbackDTO";
import { IFallback } from "./IFallback";
export interface IFallbackModel {
    execute({ stateVars }: ICreateFallbackDTO): IFallback;
}

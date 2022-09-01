import { IContentModel } from "../../content/types/IContentModel";
import { ICreateFallbackDTO } from "../types/ICreateFallbackDTO";
import { IFallback } from "../types/IFallback";
import { IFallbackModel } from "../types/IFallbackModel";
declare class FallbackModel implements IFallbackModel {
    private contentModel;
    constructor(contentModel: IContentModel);
    execute({ stateVars, isPayable, }: ICreateFallbackDTO): IFallback;
}
export default FallbackModel;

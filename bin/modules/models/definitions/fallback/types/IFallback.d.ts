import { IContent } from "../../content/types/IContent";
import { IFallbackJson } from "./IFallbackJson";
export interface IFallback extends IFallbackJson, IContent {
    setModifier(name: string, args?: string[]): IFallback;
}

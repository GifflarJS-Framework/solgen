import { IContent } from "@models/definitions/content/types/IContent";
import { IFallbackJson } from "./IFallbackJson";

export interface IFallback extends IFallbackJson, IContent {
  setModifier(name: string, args?: string[]): IFallback;
}

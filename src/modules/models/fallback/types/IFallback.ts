import { IContent } from "@models/content/types/IContent";

export interface IFallback extends IContent {
  isPayable: boolean;
}

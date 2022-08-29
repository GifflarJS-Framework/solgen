import { IContent } from "@models/definitions/content/types/IContent";

export interface IFallback extends IContent {
  isPayable: boolean;
}

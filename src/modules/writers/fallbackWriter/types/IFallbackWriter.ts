import { IFallback } from "@models/fallback/types/IFallback";

export interface IFallbackWriter {
  write(fallback: IFallback): string;
}

import { IFallback } from "../../../../models/definitions/fallback/types/IFallback";
export interface IFallbackWriter {
    write(fallback: IFallback): string;
}

import { IIf } from "../../../../models/if/types/IIf";
import { IContentWriter } from "../../../contentWriter/types/IContentWriter";
export interface IIfWriter {
    _init(contentWriter: IContentWriter): void;
    write(json: IIf): string;
}

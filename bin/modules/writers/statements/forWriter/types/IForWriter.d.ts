import { IFor } from "../../../../models/for/types/IFor";
import { IContentWriter } from "../../../contentWriter/types/IContentWriter";
export interface IForWriter {
    _init(contentWriter: IContentWriter): void;
    write: (json: IFor) => string;
}

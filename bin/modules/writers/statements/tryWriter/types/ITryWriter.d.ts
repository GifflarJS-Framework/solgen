import { ITry } from "../../../../models/statements/try/types/ITry";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
export interface ITryWriter {
    _init(contentWriter: IContentWriter): void;
    write(_try: ITry): string;
}

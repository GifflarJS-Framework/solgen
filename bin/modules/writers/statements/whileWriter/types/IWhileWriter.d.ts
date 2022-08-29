import { IWhile } from "../../../../models/statements/while/types/IWhile";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
export interface IWhileWriter {
    _init(contentWriter: IContentWriter): void;
    write(_while: IWhile): string;
}

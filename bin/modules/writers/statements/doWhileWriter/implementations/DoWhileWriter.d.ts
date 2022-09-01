import { IDoWhile } from "../../../../models/statements/dowhile/types/IDoWhile";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IDoWhileWriter } from "../types/IDoWhileWriter";
declare class DoWhileWriter implements IDoWhileWriter {
    private contentWriter;
    _init(contentWriter: IContentWriter): void;
    write(_doWhile: IDoWhile): string;
}
export default DoWhileWriter;

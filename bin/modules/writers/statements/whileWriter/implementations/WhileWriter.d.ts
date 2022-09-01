import { IWhile } from "../../../../models/statements/while/types/IWhile";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IWhileWriter } from "../types/IWhileWriter";
declare class WhileWriter implements IWhileWriter {
    private contentWriter;
    _init(contentWriter: IContentWriter): void;
    write(_while: IWhile): string;
}
export default WhileWriter;

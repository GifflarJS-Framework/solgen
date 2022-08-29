import { IIf } from "../../../../models/statements/if/types/IIf";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IIfWriter } from "../types/IIfWriter";
declare class IfWriter implements IIfWriter {
    private contentWriter;
    constructor();
    _init(contentWriter: IContentWriter): void;
    write(json: IIf): string;
}
export default IfWriter;

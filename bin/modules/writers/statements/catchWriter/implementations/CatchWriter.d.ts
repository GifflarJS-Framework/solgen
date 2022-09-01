import { ICatch } from "../../../../models/statements/catch/types/ICatch";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IInputWriter } from "../../inputWriter/types/IInputWriter";
import { ICatchWriter } from "../types/ICatchWriter";
declare class CatchWriter implements ICatchWriter {
    private inputWriter;
    private contentWriter;
    constructor(inputWriter: IInputWriter);
    _init(contentWriter: IContentWriter): void;
    write(_catch: ICatch): string;
}
export default CatchWriter;

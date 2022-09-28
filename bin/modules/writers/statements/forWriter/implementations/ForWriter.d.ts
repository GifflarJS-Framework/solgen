import { IFor } from "../../../../models/statements/for/types/IFor";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IVariableWriter } from "../../variableWriter/types/IVariableWriter";
import { IForWriter } from "../types/IForWriter";
declare class ForWriter implements IForWriter {
    private variableWriter;
    private contentWriter;
    constructor(variableWriter: IVariableWriter);
    _init(contentWriter: IContentWriter): void;
    write(json: IFor): string;
}
export default ForWriter;

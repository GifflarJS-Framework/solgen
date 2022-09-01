import { IReceive } from "../../../../models/definitions/receive/types/IReceive";
import { IContentWriter } from "../../contentWriter/types/IContentWriter";
import { IReceiveWriter } from "../types/IReceiveWriter";
declare class ReceiveWriter implements IReceiveWriter {
    private contentWriter;
    constructor(contentWriter: IContentWriter);
    write(receive: IReceive): string;
}
export default ReceiveWriter;

import { IReceive } from "../../../../models/definitions/receive/types/IReceive";
export interface IReceiveWriter {
    write(receive: IReceive): string;
}

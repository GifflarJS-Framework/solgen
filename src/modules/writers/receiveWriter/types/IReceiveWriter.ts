import { IReceive } from "@models/receive/types/IReceive";

export interface IReceiveWriter {
  write(receive: IReceive): string;
}

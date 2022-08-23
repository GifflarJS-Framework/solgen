import { IInterfaceJson } from "@models/interface/types/IInterfaceJson";

export interface IInterfaceWriter {
  write(
    interfaces: Array<IInterfaceJson>,
    /** To get every interface text individually. */
    callback?: (individualInterfaceText: string, index: number) => void
  ): string;
}

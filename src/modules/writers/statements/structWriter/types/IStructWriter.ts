import { IStruct } from "@models/struct/types/IStruct";

export interface IStructWriter {
  write(struct: IStruct): string;
}

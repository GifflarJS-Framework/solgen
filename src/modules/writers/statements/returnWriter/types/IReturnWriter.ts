import { IReturn } from "@models/return/types/IReturn";

export interface IReturnWriter {
  write(_return: IReturn): string;
}

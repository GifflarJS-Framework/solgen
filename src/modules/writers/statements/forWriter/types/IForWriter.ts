import { IFor } from "@models/for/types/IFor";

export interface IForWriter {
  write: (json: IFor) => string;
}

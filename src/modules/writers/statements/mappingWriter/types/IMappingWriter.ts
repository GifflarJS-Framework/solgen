import { IMapping } from "@models/mapping/types/IMapping";

export interface IMappingWriter {
  write(mapping: IMapping): string;
}

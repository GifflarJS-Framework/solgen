import { IGlobalMapping } from "@models/globalMapping/types/IGlobalMapping";

export interface IGlobalMappingWriter {
  write(mapping: Array<IGlobalMapping>): string;
}

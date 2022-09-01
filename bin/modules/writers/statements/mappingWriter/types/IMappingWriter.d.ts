import { IMapping } from "../../../../models/statements/mapping/types/IMapping";
export interface IMappingWriter {
    write(mapping: IMapping): string;
}

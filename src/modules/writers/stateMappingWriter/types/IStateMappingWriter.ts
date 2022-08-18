import { IStateMapping } from "@models/stateMapping/types/IStateMapping";

export interface IStateMappingWriter {
  write(mapping: Array<IStateMapping>): string;
}

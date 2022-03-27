import { IIf } from "@models/if/types/IIf";

export interface IIfWriter {
  write(json: IIf): string;
}

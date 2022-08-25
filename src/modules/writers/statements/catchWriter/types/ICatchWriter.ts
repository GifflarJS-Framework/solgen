import { ICatch } from "@models/statements/catch/types/ICatch";

export interface ICatchWriter {
  write(_catch: ICatch): string;
}

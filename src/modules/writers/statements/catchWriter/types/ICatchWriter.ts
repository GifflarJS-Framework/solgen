import { ICatch } from "@models/catch/types/ICatch";

export interface ICatchWriter {
  write(_catch: ICatch): string;
}

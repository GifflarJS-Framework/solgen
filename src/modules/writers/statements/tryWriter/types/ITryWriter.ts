import { ITry } from "@models/try/types/ITry";

export interface ITryWriter {
  write(_try: ITry): string;
}

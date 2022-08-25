import { ITry } from "@models/statements/try/types/ITry";

export interface ITryWriter {
  write(_try: ITry): string;
}

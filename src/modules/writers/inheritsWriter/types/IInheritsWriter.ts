import { IInherits } from "@models/inherits/types/IInherits";

export interface IInheritsWriter {
  write(inheritances: Array<IInherits>): string;
}

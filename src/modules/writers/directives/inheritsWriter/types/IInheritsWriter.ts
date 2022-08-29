import { IInherits } from "@models/directives/inherits/types/IInherits";

export interface IInheritsWriter {
  write(inheritances: Array<IInherits>): string;
}

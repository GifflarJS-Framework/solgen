import { IInherits } from "../../../../models/toplevels/inherits/types/IInherits";
export interface IInheritsWriter {
    write(inheritances: Array<IInherits>): string;
}

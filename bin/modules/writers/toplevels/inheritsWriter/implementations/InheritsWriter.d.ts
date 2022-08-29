import { IInherits } from "../../../../models/toplevels/inherits/types/IInherits";
import { IInheritsWriter } from "../types/IInheritsWriter";
declare class InheritsWriter implements IInheritsWriter {
    write(inheritances: Array<IInherits>): string;
}
export default InheritsWriter;

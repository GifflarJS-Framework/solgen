import { ICreateInheritsDTO } from "../types/ICreateInheritsDTO";
import { IInherits } from "../types/IInherits";
import { IInheritsModel } from "../types/IInheritsModel";
declare class InheritsModel implements IInheritsModel {
    execute({ identifier, args }: ICreateInheritsDTO): IInherits;
}
export default InheritsModel;

import { IAssert } from "../types/IAssert";
import { IAssertModel } from "../types/IAssertModel";
import { ICreateAssertDTO } from "../types/ICreateAssertDTO";
declare class AssertModel implements IAssertModel {
    execute({ condition }: ICreateAssertDTO): IAssert;
}
export default AssertModel;

import { ICreateRevertDTO } from "../types/ICreateRevertDTO";
import { IRevert } from "../types/IRevert";
import { IRevertModel } from "../types/IRevertModel";
declare class RevertModel implements IRevertModel {
    execute(data?: ICreateRevertDTO): IRevert;
}
export default RevertModel;

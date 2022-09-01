import { ICreateRequireDTO } from "../types/ICreateRequireDTO";
import { IRequire } from "../types/IRequire";
import { IRequireModel } from "../types/IRequireModel";
declare class RequireModel implements IRequireModel {
    execute({ condition, errorMessage }: ICreateRequireDTO): IRequire;
}
export default RequireModel;

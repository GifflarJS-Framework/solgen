import { ICreateIf } from "../types/ICreateIf";
import { IIf } from "../types/IIf";
import { IIfModel } from "../types/IIfModel";
declare class IfModel implements IIfModel {
    execute({ condition, onElse }: ICreateIf): IIf;
}
export default IfModel;

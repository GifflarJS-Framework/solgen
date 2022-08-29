import { ICreateIfDTO } from "../types/ICreateIfDTO";
import { IIf } from "../types/IIf";
import { IIfModel } from "../types/IIfModel";
declare class IfModel implements IIfModel {
    execute({ condition, onElse }: ICreateIfDTO): IIf;
}
export default IfModel;

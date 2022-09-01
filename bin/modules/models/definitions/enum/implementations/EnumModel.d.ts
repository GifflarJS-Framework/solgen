import { ICreateEnumDTO } from "../types/ICreateEnumDTO";
import { IEnum } from "../types/IEnum";
import { IEnumModel } from "../types/IEnumModel";
declare class EnumModel implements IEnumModel {
    execute({ identifier, identifiersOptions }: ICreateEnumDTO): IEnum;
}
export default EnumModel;

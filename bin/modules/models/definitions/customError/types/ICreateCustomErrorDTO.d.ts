import { IInput } from "../../function/types/IInput";
export interface ICreateCustomErrorDTO {
    name: string;
    args?: Array<IInput>;
}

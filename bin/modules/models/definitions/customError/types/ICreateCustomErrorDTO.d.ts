import { IInput } from "../../../../types/IInput";
export interface ICreateCustomErrorDTO {
    name: string;
    args?: Array<IInput>;
}

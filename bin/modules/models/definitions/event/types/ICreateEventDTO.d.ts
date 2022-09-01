import { IInput } from "../../function/types/IInput";
export interface ICreateEventDTO {
    name: string;
    inputs: Array<IInput>;
}

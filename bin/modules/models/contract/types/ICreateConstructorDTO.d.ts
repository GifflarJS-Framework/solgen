import { IInput } from "../../function/types/IInput";
export interface ICreateConstructorDTO {
    scope: string;
    inputs: Array<IInput>;
    outputs: Array<string>;
}

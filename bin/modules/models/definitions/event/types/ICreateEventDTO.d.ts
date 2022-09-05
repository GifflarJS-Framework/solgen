import { IInput } from "../../../../types/IInput";
export interface ICreateEventDTO {
    name: string;
    inputs: Array<IInput>;
}

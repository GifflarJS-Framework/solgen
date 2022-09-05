import { IInput } from "../../../../types/IInput";
export interface ICreateCatchDTO {
    identifier?: string;
    parameters: Array<IInput>;
}

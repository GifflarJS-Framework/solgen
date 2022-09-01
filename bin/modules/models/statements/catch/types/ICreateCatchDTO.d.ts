import { IInput } from "../../../definitions/function/types/IInput";
export interface ICreateCatchDTO {
    identifier?: string;
    parameters: Array<IInput>;
}

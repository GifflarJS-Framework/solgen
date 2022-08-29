import { ICustomErrorcall } from "./ICustomErrorCall";
export interface ICreateRevertDTO {
    message?: string;
    customErrorCall?: ICustomErrorcall;
}

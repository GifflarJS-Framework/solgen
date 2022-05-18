import { INewContract } from "../../newcontract/types/INewContract";
export interface ICreateVariableDTO {
    type: string;
    name: string;
    value?: string | INewContract;
}

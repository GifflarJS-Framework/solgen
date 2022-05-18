import { INewContract } from "../../newcontract/types/INewContract";
export interface IVariable {
    type: string;
    name: string;
    value?: string | INewContract;
}

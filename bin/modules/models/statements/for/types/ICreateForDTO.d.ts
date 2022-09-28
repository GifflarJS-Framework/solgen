import { ILocalVariable } from "../../variable/types/ILocalVariable";
export interface ICreateForDTO {
    variable?: ILocalVariable;
    condition?: string;
    expression?: string;
}

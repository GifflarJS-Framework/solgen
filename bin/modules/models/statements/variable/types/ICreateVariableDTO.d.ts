import { INewContract } from "../../newcontract/types/INewContract";
import { IDataLocation } from "../../../../types/IDataLocation";
export interface ICreateVariableDTO {
    type: string;
    dataLocation?: IDataLocation;
    name: string;
    value?: string | INewContract;
}

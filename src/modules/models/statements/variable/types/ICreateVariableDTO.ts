import { INewContract } from "@models/statements/newcontract/types/INewContract";
import { IDataLocation } from "@modules/types/IDataLocation";

export interface ICreateVariableDTO {
  type: string;
  dataLocation?: IDataLocation;
  name: string;
  value?: string | INewContract;
}

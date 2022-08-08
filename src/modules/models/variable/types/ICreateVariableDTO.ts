import { INewContract } from "@models/newcontract/types/INewContract";
import { ITypeName } from "modules/types/ITypeName";

export interface ICreateVariableDTO {
  type: string;
  name: string;
  value?: string | INewContract;
}

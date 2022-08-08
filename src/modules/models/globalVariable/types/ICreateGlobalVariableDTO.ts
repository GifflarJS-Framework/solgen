import { INewContract } from "@models/newcontract/types/INewContract";
import { ITypeName } from "modules/types/ITypeName";

export interface ICreateGlobalVariableDTO {
  type: string;
  name: string;
  scope: string;
  value?: string | INewContract;
}

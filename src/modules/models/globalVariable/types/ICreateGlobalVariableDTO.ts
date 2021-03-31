import { INewContract } from "@models/newcontract/types/INewContract";

export interface ICreateGlobalVariableDTO {
  type: string;
  name: string;
  scope: string;
  value?: string | INewContract;
  setMethod?: boolean;
}

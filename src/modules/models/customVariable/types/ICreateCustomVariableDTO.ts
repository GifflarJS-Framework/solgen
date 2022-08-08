import { INewContract } from "@models/newcontract/types/INewContract";

export interface ICreateCustomVariableDTO {
  type: string;
  name: string;
  value?: string | INewContract;
}

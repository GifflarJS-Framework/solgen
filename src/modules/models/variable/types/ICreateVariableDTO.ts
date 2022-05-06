import { INewContract } from "@models/newcontract/types/INewContract";

export interface ICreateVariableDTO {
  type: string;
  name: string;
  value?: string | INewContract;
}

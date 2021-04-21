import { INewContract } from "@models/newcontract/types/INewContract";

export interface ICreateVariableDTO {
  type: string;
  name: string;
  // scope?: string;
  // setMethod?: boolean;
  value?: string | INewContract;
}

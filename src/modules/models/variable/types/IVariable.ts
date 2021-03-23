import { INewContract } from "@models/newcontract/types/INewContract";

export interface IVariable {
  statement?: string;
  type: string;
  name: string;
  scope?: string;
  setMethod?: boolean;
  value?: string | INewContract;
}

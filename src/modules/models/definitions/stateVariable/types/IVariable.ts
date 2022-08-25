import { INewContract } from "@models/statements/newcontract/types/INewContract";

export interface IVariable {
  type: string;
  name: string;
  value?: string | INewContract;
}

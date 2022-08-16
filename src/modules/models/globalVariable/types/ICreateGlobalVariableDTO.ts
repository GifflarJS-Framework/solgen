import { INewContract } from "@models/newcontract/types/INewContract";
import { IVisibility } from "modules/types/IVisibility";

export interface ICreateGlobalVariableDTO {
  type: string;
  name: string;
  scope: IVisibility | undefined;
  value?: string | INewContract;
}

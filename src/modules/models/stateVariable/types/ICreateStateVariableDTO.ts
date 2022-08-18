import { INewContract } from "@models/newcontract/types/INewContract";
import { IVisibility } from "modules/types/IVisibility";

export interface ICreateStateVariableDTO {
  type: string;
  name: string;
  scope: IVisibility | undefined;
  value?: string | INewContract;
}

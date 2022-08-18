import { INewContract } from "@models/newcontract/types/INewContract";
import { IVariableStateMutabilityType } from "modules/types/IVariableStateMutabilityType";
import { IVisibility } from "modules/types/IVisibility";

export interface ICreateStateVariableDTO {
  type: string;
  name: string;
  scope: IVisibility | undefined;
  stateMutability?: IVariableStateMutabilityType;
  value?: string | INewContract;
}

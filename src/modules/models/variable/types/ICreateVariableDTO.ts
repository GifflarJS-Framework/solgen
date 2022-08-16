import { INewContract } from "@models/newcontract/types/INewContract";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";

export interface ICreateVariableDTO {
  type: string;
  name: string;
  value?: string | INewContract;
}

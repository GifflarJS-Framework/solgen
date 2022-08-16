import { INewContract } from "@models/newcontract/types/INewContract";
import { IElementaryTypeName } from "modules/types/IElementaryTypeName";
import { IVisibility } from "modules/types/IVisibility";

export interface ICreateGlobalVariableDTO {
  type?: IElementaryTypeName;
  customType?: string;
  name: string;
  scope: IVisibility | undefined;
  value?: string | INewContract;
}

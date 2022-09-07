import { INewContract } from "@models/statements/newcontract/types/INewContract";
import { IDataLocation } from "@modules/types/IDataLocation";
import { IExpression } from "../../expression/types/IExpression";

export interface ICreateVariableDTO {
  type: string;
  dataLocation?: IDataLocation;
  name: string;
  expressionValue?: IExpression;
}

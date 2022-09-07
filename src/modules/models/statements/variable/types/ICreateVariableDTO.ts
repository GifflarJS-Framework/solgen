import { IDataLocation } from "@modules/types/IDataLocation";
import { IExpressionValue } from "../../expression/types/IExpressionValue";

export interface ICreateVariableDTO {
  type: string;
  dataLocation?: IDataLocation;
  name: string;
  expressionValue?: IExpressionValue;
}

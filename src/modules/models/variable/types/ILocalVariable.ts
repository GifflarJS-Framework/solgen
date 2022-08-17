import { IDataLocation } from "modules/types/IDataLocation";
import { IVariable } from "./IVariable";

export interface ILocalVariable extends IVariable {
  statement: "variable";
  dataLocation?: IDataLocation;
}

import { IVariable } from "@models/definitions/stateVariable/types/IVariable";
import { IDataLocation } from "@modules/types/IDataLocation";

export interface ILocalVariable extends IVariable {
  statement: "variable";
  dataLocation?: IDataLocation;
}

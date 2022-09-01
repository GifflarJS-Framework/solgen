import { IVariable } from "../../../definitions/stateVariable/types/IVariable";
import { IDataLocation } from "../../../../types/IDataLocation";
export interface ILocalVariable extends IVariable {
    statement: "variable";
    dataLocation?: IDataLocation;
}

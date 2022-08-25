import { IVariable } from "@models/definitions/stateVariable/types/IVariable";

export interface ICreateFallbackDTO {
  stateVars: Array<IVariable>;
  isPayable?: boolean;
}

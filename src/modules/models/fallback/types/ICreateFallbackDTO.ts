import { IVariable } from "@models/variable/types/IVariable";

export interface ICreateFallbackDTO {
  stateVars: Array<IVariable>;
  isPayable?: boolean;
}

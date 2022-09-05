import { IInput } from "@modules/types/IInput";
import { IVariable } from "@models/definitions/stateVariable/types/IVariable";

export interface ICreateModifierDTO {
  title: string;
  args: Array<IInput>;
  stateVars?: Array<IVariable>;
  isVirtual?: boolean;
  isOverriding?: boolean;
}

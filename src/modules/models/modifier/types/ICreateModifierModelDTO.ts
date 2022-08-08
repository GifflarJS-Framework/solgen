import { IInput } from "@models/function/types/IInput";
import { IVariable } from "@models/variable/types/IVariable";

export interface ICreateModifierModelDTO {
  title: string;
  args: Array<IInput>;
  globalVars?: Array<IVariable>;
}

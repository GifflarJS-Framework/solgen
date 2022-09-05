import { IInput } from "@modules/types/IInput";
import { ITryExpression } from "./ITryExpression";

export interface ICreateTryDTO {
  expression: ITryExpression;
  parameters: Array<IInput>;
}

import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";
import { IVariableStateMutabilityType } from "@modules/types/IVariableStateMutabilityType";
import { IVisibility } from "@modules/types/IVisibility";

export interface ICreateStateVariableDTO {
  type: string;
  name: string;
  scope: IVisibility | undefined;
  stateMutability?: IVariableStateMutabilityType;
  expressionValue?: IExpressionValue;
}

import { IExpressionValue } from "../../../statements/expression/types/IExpressionValue";
import { IVariableStateMutabilityType } from "../../../../types/IVariableStateMutabilityType";
import { IVisibility } from "../../../../types/IVisibility";
export interface ICreateStateVariableDTO {
    type: string;
    name: string;
    scope: IVisibility | undefined;
    stateMutability?: IVariableStateMutabilityType;
    expressionValue?: IExpressionValue;
}

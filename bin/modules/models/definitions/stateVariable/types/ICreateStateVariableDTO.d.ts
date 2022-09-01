import { INewContract } from "../../../statements/newcontract/types/INewContract";
import { IVariableStateMutabilityType } from "../../../../types/IVariableStateMutabilityType";
import { IVisibility } from "../../../../types/IVisibility";
export interface ICreateStateVariableDTO {
    type: string;
    name: string;
    scope: IVisibility | undefined;
    stateMutability?: IVariableStateMutabilityType;
    value?: string | INewContract;
}

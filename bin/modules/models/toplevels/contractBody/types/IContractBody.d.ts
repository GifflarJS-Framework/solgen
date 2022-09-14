import { IEnum } from "../../../definitions/enum/types/IEnum";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
import { IStateMapping } from "../../../definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { IStruct } from "../../../definitions/struct/types/IStruct";
import { IUsing } from "../../../definitions/using/types/IUsing";
import { ICreateMappingDTO } from "../../../statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "../../../statements/variable/types/ICreateVariableDTO";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { IMappingKeyType } from "../../../../types/IMappingKeyType";
import { IMappingTypeName } from "../../../../types/IMappingTypeName";
import { ITypeName } from "../../../../types/ITypeName";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
import { IVisibility } from "../../../../types/IVisibility";
import { IContractBodyItem } from "./IContractBodyItem";
import { ITypeNameOutput } from "../../../../types/ITypeNameOutput";
import { IExpressionValue } from "../../../statements/expression/types/IExpressionValue";
export interface IContractBody {
    body: IContractBodyItem;
    createUsing(identifier: string, type: ITypeName): IUsing;
    createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;
    createModifier(title: string, args: Array<ITypeNameInput>, options: {
        isOverriding?: boolean;
        isVirtual?: boolean;
    }): IModifier;
    /**
     * *Custom errors are only available starting from v0.8.4 solidity version
     */
    createEnum(identifier: string, identifiersOptions: string[]): IEnum;
    createMapping(type: IMappingKeyType, typeName: IMappingTypeName, name: string, scope?: IVisibility): IStateMapping;
    createVariable(type: ITypeName, name: string, scope: string, expression?: IExpressionValue): IStateVariable;
    createFunction(name: string, scope: string, inputs?: Array<ITypeNameInput>, outputs?: Array<ITypeNameOutput>, stateMutability?: IFunctionStateMutabilityType): IFunction;
    createStruct(identifier: string, variables: Array<ICreateVariableDTO>, mappings: Array<ICreateMappingDTO>): IStruct;
}
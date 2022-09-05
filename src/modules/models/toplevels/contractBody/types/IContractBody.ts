import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IEnum } from "@models/definitions/enum/types/IEnum";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IUsing } from "@models/definitions/using/types/IUsing";
import { ICreateMappingDTO } from "@models/statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "@models/statements/variable/types/ICreateVariableDTO";
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
import { IMappingKeyType } from "@modules/types/IMappingKeyType";
import { IMappingTypeName } from "@modules/types/IMappingTypeName";
import { ITypeName } from "@modules/types/ITypeName";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IVisibility } from "@modules/types/IVisibility";
import { IContractBodyItem } from "./IContractBodyItem";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";

export interface IContractBody {
  body: IContractBodyItem;

  createUsing(identifier: string, type: ITypeName): IUsing;

  createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;

  createModifier(
    title: string,
    args: Array<ITypeNameInput>,
    options: { isOverriding?: boolean; isVirtual?: boolean }
  ): IModifier;

  createCustomError(name: string, args: Array<ITypeNameInput>): ICustomError;

  createEnum(identifier: string, identifiersOptions: string[]): IEnum;

  createMapping(
    type: IMappingKeyType,
    typeName: IMappingTypeName,
    name: string,
    scope?: IVisibility
  ): IStateMapping;

  createVariable(
    type: ITypeName,
    name: string,
    scope: string,
    value?: string
  ): IStateVariable;

  createFunction(
    name: string,
    scope: string,
    inputs?: Array<ITypeNameInput>,
    outputs?: Array<ITypeNameOutput>,
    stateMutability?: IFunctionStateMutabilityType
  ): IFunction;

  createStruct(
    identifier: string,
    variables: Array<ICreateVariableDTO>,
    mappings: Array<ICreateMappingDTO>
  ): IStruct;
}

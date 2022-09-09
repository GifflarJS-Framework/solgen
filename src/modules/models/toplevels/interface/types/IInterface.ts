import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IInterfaceJson } from "./IInterfaceJson";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";
import { ICreateVariableDTO } from "@modules/models/statements/variable/types/ICreateVariableDTO";
import { ICreateMappingDTO } from "@modules/models/statements/mapping/types/ICreateMappingDTO";
import { IStruct } from "@modules/models/definitions/struct/types/IStruct";
import { IModifier } from "@modules/models/definitions/modifier/types/IModifier";
import { IEnum } from "@modules/models/definitions/enum/types/IEnum";

export interface IInterface extends IInterfaceJson {
  setInheritance(identifier: string, args?: Array<string>): IInherits;

  createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;

  createEnum(identifier: string, identifiersOptions: string[]): IEnum;

  createFunction(
    name: string,
    scope?: "external",
    inputs?: Array<ITypeNameInput>,
    outputs?: Array<ITypeNameOutput>,
    stateMutability?: IFunctionStateMutabilityType
  ): IFunction;

  createModifier(
    title: string,
    args: Array<ITypeNameInput>,
    options: { isOverriding?: boolean; isVirtual?: boolean }
  ): IModifier;

  createStruct(
    identifier: string,
    variables: Array<ICreateVariableDTO>,
    mappings: Array<ICreateMappingDTO>
  ): IStruct;

  toJson(): IInterfaceJson;
  toString(): string;
}

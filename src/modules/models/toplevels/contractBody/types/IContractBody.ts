import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInput } from "@models/definitions/function/types/IInput";
import { IOutput } from "@models/definitions/function/types/IOutput";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IUsing } from "@models/definitions/using/types/IUsing";
import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { ITypeName } from "modules/types/ITypeName";
import { IVisibility } from "modules/types/IVisibility";
import { IContractBodyItem } from "./IContractBodyItem";

export interface IContractBody {
  body: IContractBodyItem;

  createUsing(identifier: string, type: ITypeName): IUsing;

  createEvent(name: string, inputs: Array<IInput>): IEvent;

  createModifier(
    title: string,
    args: Array<IInput>,
    options: { isOverriding?: boolean; isVirtual?: boolean }
  ): IModifier;

  createCustomError(name: string, args: Array<IInput>): ICustomError;

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
    inputs?: Array<IInput>,
    outputs?: Array<IOutput>
  ): IFunction;
}

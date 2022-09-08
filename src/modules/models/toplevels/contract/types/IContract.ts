import { IContractBody } from "@models/toplevels/contractBody/types/IContractBody";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { ITypeName } from "@modules/types/ITypeName";
import { IContractJson } from "./IContractJson";
import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IReceive } from "@models/definitions/receive/types/IReceive";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";

export interface IContract extends IContractJson, IContractBody {
  toJson(): IContractJson;

  setInheritance(identifier: string, args?: Array<string>): IInherits;

  createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;

  createVariable(
    type: ITypeName,
    name: string,
    scope: string,
    value?: IExpressionValue
  ): IStateVariable;

  createConstructor(scope: string, inputs?: Array<ITypeNameInput>): IFunction;

  createFallback(isPayable?: boolean): IFallback;

  createReceive(): IReceive;

  toString(): string;
}

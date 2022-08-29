import { IContractBody } from "../../contractBody/types/IContractBody";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInput } from "../../../definitions/function/types/IInput";
import { IOutput } from "../../../definitions/function/types/IOutput";
import { IInherits } from "../../inherits/types/IInherits";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { ITypeName } from "modules/types/ITypeName";
import { IVariableOptions } from "modules/types/IVariableOptions";
import { IContractJson } from "./IContractJson";
import { IFallback } from "../../../definitions/fallback/types/IFallback";
import { IReceive } from "../../../definitions/receive/types/IReceive";
export interface IContract extends IContractJson, IContractBody {
    toJson(): IContractJson;
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createVariable(type: ITypeName, name: string, scope: string, value?: string, options?: IVariableOptions): IStateVariable;
    createConstructor(scope: string, inputs?: Array<IInput>, outputs?: Array<IOutput>): IFunction;
    createFunction(name: string, scope: string, inputs?: Array<IInput>, outputs?: Array<IOutput>): IFunction;
    createFallback(isPayable?: boolean): IFallback;
    createReceive(): IReceive;
    toString(): string;
}

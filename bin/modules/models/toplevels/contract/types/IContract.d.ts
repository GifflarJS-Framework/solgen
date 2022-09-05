import { IContractBody } from "../../contractBody/types/IContractBody";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInherits } from "../../inherits/types/IInherits";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { ITypeName } from "../../../../types/ITypeName";
import { IVariableOptions } from "../../../../types/IVariableOptions";
import { IContractJson } from "./IContractJson";
import { IFallback } from "../../../definitions/fallback/types/IFallback";
import { IReceive } from "../../../definitions/receive/types/IReceive";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
export interface IContract extends IContractJson, IContractBody {
    toJson(): IContractJson;
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;
    createVariable(type: ITypeName, name: string, scope: string, value?: string, options?: IVariableOptions): IStateVariable;
    createConstructor(scope: string, inputs?: Array<ITypeNameInput>): IFunction;
    createFallback(isPayable?: boolean): IFallback;
    createReceive(): IReceive;
    toString(): string;
}

import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInput } from "../../../definitions/function/types/IInput";
import { IOutput } from "../../../definitions/function/types/IOutput";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { IUsing } from "../../../definitions/using/types/IUsing";
import { ITypeName } from "modules/types/ITypeName";
import { IContractBodyItem } from "./IContractBodyItem";
export interface IContractBody {
    body: IContractBodyItem;
    createUsing(identifier: string, type: ITypeName): IUsing;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createVariable(type: ITypeName, name: string, scope: string, value?: string): IStateVariable;
    createFunction(name: string, scope: string, inputs?: Array<IInput>, outputs?: Array<IOutput>): IFunction;
}

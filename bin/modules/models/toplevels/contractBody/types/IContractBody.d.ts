import { ICustomError } from "../../../definitions/customError/types/ICustomError";
import { IEnum } from "../../../definitions/enum/types/IEnum";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInput } from "../../../definitions/function/types/IInput";
import { IOutput } from "../../../definitions/function/types/IOutput";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
import { IStateMapping } from "../../../definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { IStruct } from "../../../definitions/struct/types/IStruct";
import { IUsing } from "../../../definitions/using/types/IUsing";
import { ICreateMappingDTO } from "../../../statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "../../../statements/variable/types/ICreateVariableDTO";
import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { ITypeName } from "modules/types/ITypeName";
import { IVisibility } from "modules/types/IVisibility";
import { IContractBodyItem } from "./IContractBodyItem";
export interface IContractBody {
    body: IContractBodyItem;
    createUsing(identifier: string, type: ITypeName): IUsing;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createModifier(title: string, args: Array<IInput>, options: {
        isOverriding?: boolean;
        isVirtual?: boolean;
    }): IModifier;
    createCustomError(name: string, args: Array<IInput>): ICustomError;
    createEnum(identifier: string, identifiersOptions: string[]): IEnum;
    createMapping(type: IMappingKeyType, typeName: IMappingTypeName, name: string, scope?: IVisibility): IStateMapping;
    createVariable(type: ITypeName, name: string, scope: string, value?: string): IStateVariable;
    createFunction(name: string, scope: string, inputs?: Array<IInput>, outputs?: Array<IOutput>): IFunction;
    createStruct(identifier: string, variables: Array<ICreateVariableDTO>, mappings: Array<ICreateMappingDTO>): IStruct;
}

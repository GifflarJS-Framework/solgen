import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInherits } from "../../inherits/types/IInherits";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
import { IInterfaceJson } from "./IInterfaceJson";
import { ITypeNameOutput } from "../../../../types/ITypeNameOutput";
import { ICreateVariableDTO } from "../../../statements/variable/types/ICreateVariableDTO";
import { ICreateMappingDTO } from "../../../statements/mapping/types/ICreateMappingDTO";
import { IStruct } from "../../../definitions/struct/types/IStruct";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
import { IEnum } from "../../../definitions/enum/types/IEnum";
export interface IInterface extends IInterfaceJson {
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;
    createEnum(identifier: string, identifiersOptions: string[]): IEnum;
    createFunction(name: string, scope?: "external", inputs?: Array<ITypeNameInput>, outputs?: Array<ITypeNameOutput>, stateMutability?: IFunctionStateMutabilityType): IFunction;
    createModifier(title: string, args: Array<ITypeNameInput>, options: {
        isOverriding?: boolean;
        isVirtual?: boolean;
    }): IModifier;
    createStruct(identifier: string, variables: Array<ICreateVariableDTO>, mappings: Array<ICreateMappingDTO>): IStruct;
    toJson(): IInterfaceJson;
    toString(): string;
}

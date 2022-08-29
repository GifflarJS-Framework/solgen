import { IInput } from "../../function/types/IInput";
import { ICustomErrorcall } from "../../../statements/revert/types/ICustomErrorCall";
import { ITryExpression } from "../../../statements/try/types/ITryExpression";
import { IDataLocation } from "modules/types/IDataLocation";
import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { ITypeName } from "modules/types/ITypeName";
import { IStackItem } from "./IStackItem";
export interface IContent extends IStackItem {
    setAssert(condition: string): IContent;
    setBreak(): IContent;
    setVariable(type: ITypeName, name: string, value?: string): IContent;
    setMethodCall(variable: string, method: string, value: string): IContent;
    setAssignment(variable: string, expression: string | undefined): IContent;
    setEventCall(name: string, inputNames: Array<string>): IContent;
    setContractVariable(variable: string, contractName: string, args: Array<string>): IContent;
    setReturn(expressions: Array<string>): IContent;
    setContinue(): IContent;
    setMapping(type: IMappingKeyType, typeName: IMappingTypeName, name: string): IContent;
    setCatch(parameters: Array<IInput>, identifier?: string): IContent;
    setRequire(condition: string, errorMessage?: string): IContent;
    setRevert(errorDefinition: {
        message?: string;
        customErrorCall?: ICustomErrorcall;
    }): IContent;
    setTry(parameters: Array<IInput>, expression: ITryExpression): IContent;
    /**
     * Remember to use the "endIf" function when finishing "if" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginIf(condition: string, onElse?: boolean): IContent;
    /**
     * Remember to use the "endElseIf" function when finishing "elseIf" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginElseIf(condition: string): IContent;
    /**
     * Remember to use the "endElse" function when finishing "else" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginElse(): IContent;
    /**
     * Remember to use the "endDoWhile" function when finishing "doWhile" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginDoWhile(condition: string): IContent;
    /**
     * Remember to use the "endWhile" function when finishing "while" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginWhile(condition: string): IContent;
    /**
     * Remember to use the "endFor" function when finishing "for" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginFor(variable: {
        type: string;
        name: string;
        value: string;
        dataLocation: IDataLocation;
    }, condition: string, expression: string): IContent;
    endIf(): IContent;
    endElseIf(): IContent;
    endElse(): IContent;
    endDoWhile(): IContent;
    endWhile(): IContent;
    endFor(): IContent;
}

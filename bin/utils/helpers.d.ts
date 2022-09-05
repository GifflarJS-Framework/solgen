import { IInput } from "../modules/types/IInput";
import { IOutput } from "../modules/types/IOutput";
import { ITypeName } from "../modules/types/ITypeName";
import { ITypeNameInput } from "../modules/types/ITypeNameInput";
import { ITypeNameOutput } from "../modules/types/ITypeNameOutput";
interface IObjectParameters {
    keys: Array<string>;
    values: Array<any>;
}
declare const helpers: {
    sleep: (ms: number) => Promise<void>;
    capitalize: (str: string) => string;
    isObjEmpty: (obj: any) => boolean;
    isObject: (obj: any) => boolean;
    writeTypeName: (type: ITypeName) => string;
    castITypeNameInputsToInputs: (typeNameInputs: Array<ITypeNameInput>) => Array<IInput>;
    castITypeNameOutputsToOutputs: (typeNameOutputs: Array<ITypeNameOutput>) => Array<IOutput>;
    getCommaExpression(list: Array<string>): string;
    getKeysValuesFrom: (obj: any) => IObjectParameters;
};
export default helpers;

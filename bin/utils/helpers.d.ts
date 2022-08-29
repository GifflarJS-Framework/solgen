import { ITypeName } from "modules/types/ITypeName";
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
    getCommaExpression(list: Array<string>): string;
    getKeysValuesFrom: (obj: any) => IObjectParameters;
};
export default helpers;

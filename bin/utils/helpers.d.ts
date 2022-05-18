interface IObjectParameters {
    keys: Array<string>;
    values: Array<any>;
}
declare const helpers: {
    sleep: (ms: number) => Promise<void>;
    capitalize: (str: string) => string;
    isObjEmpty: (obj: any) => boolean;
    isObject: (obj: any) => boolean;
    getCommaExpression(list: Array<string>): string;
    getKeysValuesFrom: (obj: any) => IObjectParameters;
};
export default helpers;

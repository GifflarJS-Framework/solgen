export interface IMethodCall {
    statement: "method_call";
    variable: string;
    method: string;
    args: Array<string>;
}

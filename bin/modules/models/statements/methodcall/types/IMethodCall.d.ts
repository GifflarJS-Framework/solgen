export interface IMethodCall {
    statement: "method_call";
    variable: string;
    method: string;
    value: string;
}

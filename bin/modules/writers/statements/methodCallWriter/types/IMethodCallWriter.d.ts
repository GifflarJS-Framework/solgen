import { IMethodCall } from "../../../../models/statements/methodcall/types/IMethodCall";
export interface IMethodCallWriter {
    write(json: IMethodCall): string;
}

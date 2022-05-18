import { IMethodCall } from "../../../../models/methodcall/types/IMethodCall";
export interface IMethodCallWriter {
    write(json: IMethodCall): string;
}

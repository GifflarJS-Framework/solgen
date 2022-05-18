import { IMethodCall } from "../../../../models/methodcall/types/IMethodCall";
import { IMethodCallWriter } from "../types/IMethodCallWriter";
declare class MethodCallWriter implements IMethodCallWriter {
    write(json: IMethodCall): string;
}
export default MethodCallWriter;

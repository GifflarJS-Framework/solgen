import { ICompiler } from "../types/ICompiler";
declare class Compiler implements ICompiler {
    compile(code: string): any;
}
export default Compiler;

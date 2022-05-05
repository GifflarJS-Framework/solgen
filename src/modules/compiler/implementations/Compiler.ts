import { solc } from "solc";
import { ICompiler } from "../types/ICompiler";

class Compiler implements ICompiler {
  compile(code: string) {
    const output = solc.compile(
      JSON.stringify({
        language: "Solidity",
        sources: {
          jsons: {
            content: code,
          },
        },
        settings: {
          outputSelection: {
            // return everything
            "*": {
              "*": ["*"],
            },
          },
        },
      })
    );
    return JSON.parse(output);
  }
}
export default Compiler;

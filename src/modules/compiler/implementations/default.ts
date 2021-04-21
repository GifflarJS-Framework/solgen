import solc from "solc";
// import { solc } from "types-solc";
import { ICompiler } from "../types/ICompiler";

function createCompiler(): ICompiler {
  const compiler: ICompiler = {
    /**
     * Compiles a Solidity code
     * @param {string} code
     */
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
    },
  };

  return compiler;
}

export default createCompiler;

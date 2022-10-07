import { IContent } from "../../content/types/IContent";
import { ITypeName } from "../../../../types/ITypeName";
import { IFunctionJson } from "./IFunctionJson";
export interface IFunction extends IFunctionJson, IContent {
    json: () => IFunctionJson;
    toString: () => string;
    /**
     * Sets a new input to the function definition.
     * @param type The type of input
     * @param variable The input name
     * @example
     * ```ts
     * gFunction
     *   .setInput({ regularType: "address" }, "to")
     *   .setInput({ regularType: "uint256" }, "amount");
     * ```
     *
     * // Example in solidity
     * ```solidity
     * function myFunction(address to, uint256 amount){
     *   //[...]
     * }
     * ```
     */
    setInput: (type: ITypeName, name: string) => IFunction;
    /**
     * Sets a new output to the function definition.
     * @param type The type of output
     * @param variable The output name
     * @example
     * ```ts
     * gFunction
     *   .setOutput({ regularType: "address" }, "to")
     *   .setOutput({ regularType: "uint256" }, "amount");
     *
     * // or
     *
     * gFunction2
     *   .setOutput({ regularType: "address" })
     *   .setOutput({ regularType: "uint256" });
     * ```
     *
     * // Example in solidity
     * ```solidity
     * function myFunction() returns (address to, uint256 amount){
     *   //[...]
     * }
     *
     * function myFunction2() returns (address, uint256){
     *   //[...]
     * }
     * ```
     */
    setOutput: (type: ITypeName, name?: string) => IFunction;
    /**
     * sets a new modifier to the function.
     * @param name The modifier name.
     * @param args The modifier parameters. (optional)
     * @example
     * ```ts
     * gFunction
     *   .setModifier("onlyOwner")
     *   .setModifier("expired", ["timestamp"])
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * function myFunction(uint256 timestamp) public onlyOwner expired(timestamp) {
     *   //[...]
     * }
     * ```
     */
    setModifier(name: string, args?: string[]): IFunction;
}

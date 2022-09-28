import { IContractBody } from "../../contractBody/types/IContractBody";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInherits } from "../../inherits/types/IInherits";
import { IContractJson } from "./IContractJson";
import { IFallback } from "../../../definitions/fallback/types/IFallback";
import { IReceive } from "../../../definitions/receive/types/IReceive";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
export interface IContract extends IContractJson, IContractBody {
    /**
     * Returns the contract content in JSON without the methods.
     * @example
     * const json = gContract.toJson();
     */
    toJson(): IContractJson;
    /**
     * Defines a contract inheritance.
     * @param identifier The parent's name
     * @param args Any argument that might be needed (optional)
     * @example
     * ```ts
     * gContract.setInheritance("Ownable", ["0x0000000000000000000000000000000000000000"])
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * contract MyContract is Ownable("0x0000000000000000000000000000000000000000"){
     *   // [...]
     * }
     * ```
     */
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    /**
     * Defines a contract constructor function.
     * @param inputs The constructor inputs
     * @example
     * ```ts
     * gContract.createConstructor([{ type: { regularType: "address" }, name: "_owner" }])
     *   // setting function content
     *   .setRequire("_owner != address(0)", "Invalid address")
     *   .setAssignment("owner", { customExpression: "_owner" });
     *   //[...]
     *
     * // or you can set the inputs sepparately
     *
     * gContract.createConstructor()
     *   .setInput({ type: { regularType: "address" }, name: "_owner" });
     *   //[...]
     * ```
     *
     * // Example in solidity
     * ```solidity
     * constructor(address _owner){
     *   require(_owner != address(0), "Invalid address");
     *   owner = _owner;
     * }
     * ```
     *
     * OBS: For 'string' inputs, the 'memory' keywork will automatically be set.
     */
    createConstructor(inputs?: Array<ITypeNameInput>): IFunction;
    /**
     * Defines a contract fallback function.
     * @param isPayable If the function state mutability is payable or not. Default is 'false'.
     * @example
     * ```ts
     * gContract.createFallback(true)
     *   .setRequire("msg.value > 10000", "Invalid value");
     *   //[...]
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * function () external payable{
     *   require(msg.value > 10000, "Invalid value");
     * }
     * ```
     *
     * OBS: The 'external' is automatically set.
     */
    createFallback(isPayable?: boolean): IFallback;
    /**
     * Defines a contract receive function.
     * @example
     * ```ts
     * gContract.createReceive()
     *   .setRequire("msg.sender != owner", "Sender must not be the owner");
     *   //[...]
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * receive() external payable{
     *   require(msg.sender != owner, "Sender must not be the owner");
     * }
     * ```
     *
     * OBS: The 'external' and 'payable' are automatically set.
     */
    createReceive(): IReceive;
    /**
     * Stringify the contract content
     * @example
     * const strJson = gContract.toString();
     */
    toString(): string;
}

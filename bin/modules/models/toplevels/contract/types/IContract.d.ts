import { IContractBody } from "../../contractBody/types/IContractBody";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IInherits } from "../../inherits/types/IInherits";
import { IContractJson } from "./IContractJson";
import { IFallback } from "../../../definitions/fallback/types/IFallback";
import { IReceive } from "../../../definitions/receive/types/IReceive";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
import { IModifierInvocation } from "../../../definitions/function/types/IModifierInvocation";
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
     * Defines a contract 'constructor' function.
     * @param inputs The 'constructor' inputs
     * @param options.modifiers The 'constructor' modifiers. (optional)
     * @param options.overrides If the 'constructor' overrides another implementation. (optional)
     * @param options.virtual If the 'constructor' can be overridden by other implementations. (optional)
     * @example
     * ```ts
     * gContract.createConstructor([{ type: { regularType: "address" }, name: "_owner" }])
     *   // setting function content
     *   .setRequire("_owner != address(0)", "Invalid address")
     *   .setAssignment("owner", { customExpression: "_owner" });
     *   //[...]
     *
     * // Optionally, you can set the inputs sepparately
     *
     * gContract.createConstructor()
     *   .setInput({ regularType: "address" }, "_owner");
     *   //[...]
     * ```
     *
     * // Example in solidity
     * ```solidity
     * constructor(address _owner) public{
     *   require(_owner != address(0), "Invalid address");
     *   owner = _owner;
     * }
     * ```
     * OBS: The 'public' scope in this case will automatically be set.
     *
     * OBS: For 'string' and 'bytes' inputs, the 'memory' keyword will automatically be set.
     *
     */
    createConstructor(inputs?: Array<ITypeNameInput>, options?: {
        overrides?: boolean;
        virtual?: boolean;
        modifiers?: IModifierInvocation[];
    }): IFunction;
    /**
     * Defines a contract 'fallback' function.
     * @param options.isPayable If the function state mutability is payable or not. Default is 'false'.(optional)
     * @param options.modifiers The 'fallback' modifiers. (optional)
     * @param options.overrides If the 'fallback' overrides another implementation. (optional)
     * @param options.virtual If the 'fallback' can be overridden by other implementations. (optional)
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
     * OBS: The 'external' keyword is automatically set.
     */
    createFallback(options?: {
        isPayable?: boolean;
        modifiers?: IModifierInvocation[];
        overrides?: boolean;
        virtual?: boolean;
    }): IFallback;
    /**
     * Defines a contract 'receive' function.
     * @param options.modifiers The 'receive' modifiers. (optional)
     * @param options.overrides If the 'receive' overrides another implementation. (optional)
     * @param options.virtual If the 'receive' can be overridden by other implementations. (optional)
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
     * OBS: The 'external' and 'payable' keywords are automatically set.
     */
    createReceive(options?: {
        modifiers?: IModifierInvocation[];
        overrides?: boolean;
        virtual?: boolean;
    }): IReceive;
    /**
     * Stringify the contract content
     * @example
     * const strJson = gContract.toString();
     */
    toString(): string;
}

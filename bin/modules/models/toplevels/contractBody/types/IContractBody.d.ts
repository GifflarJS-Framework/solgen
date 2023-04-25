import { IEnum } from "../../../definitions/enum/types/IEnum";
import { IEvent } from "../../../definitions/event/types/IEvent";
import { IFunction } from "../../../definitions/function/types/IFunction";
import { IModifier } from "../../../definitions/modifier/types/IModifier";
import { IStateMapping } from "../../../definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "../../../definitions/stateVariable/types/IStateVariable";
import { IStruct } from "../../../definitions/struct/types/IStruct";
import { IUsing } from "../../../definitions/using/types/IUsing";
import { ICreateMappingDTO } from "../../../statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "../../../statements/variable/types/ICreateVariableDTO";
import { IFunctionStateMutabilityType } from "../../../../types/IFunctionStateMutabilityType";
import { IMappingKeyType } from "../../../../types/IMappingKeyType";
import { IMappingTypeName } from "../../../../types/IMappingTypeName";
import { ITypeName } from "../../../../types/ITypeName";
import { ITypeNameInput } from "../../../../types/ITypeNameInput";
import { IVisibility } from "../../../../types/IVisibility";
import { IContractBodyItem } from "./IContractBodyItem";
import { ITypeNameOutput } from "../../../../types/ITypeNameOutput";
import { IExpressionValue } from "../../../statements/expression/types/IExpressionValue";
import { IVariableStateMutabilityType } from "../../../../types/IVariableStateMutabilityType";
import { IModifierInvocation } from "../../../definitions/function/types/IModifierInvocation";
import { ICustomCode } from "../../../custom/customCode/types/ICustomCode";
export interface IContractBody {
    body: IContractBodyItem;
    /**
     * Defines a contract custom directive code. You can use this method if you want to add your own personalized code inside the contract scope.
     * @param {string} code The customized code to include in the contract scope
     * @example
     * ```ts
     * gContract.createCustomCode(`
     * modifier onlyOwner() {
     * require(msg.sender != owner, "Invalid address");
     * _;
     * }
     * `);
     * ```
     *
     * // Example in solidiy
     * ```solidity
     * modifier onlyOwner() {
     * require(msg.sender != owner, "Invalid address");
     * _;
     * }
     * ```
     */
    createCustomCode(code: string): ICustomCode;
    /**
     * Defines a contract 'using' directive.
     * @param identifier Name of identifier to be used in types.
     * @param type The type that will use the identifier configuration.
     * @example
     * ```ts
     * gContract.createUsing("SafeMath", { regularType: "uint" });
     * ```
     *
     * // Example in solidiy
     * ```solidity
     * using SafeMath for uint;
     * ```
     */
    createUsing(identifier: string, type: ITypeName): IUsing;
    /**
     * Defines a contract event.
     * @param name Event name
     * @param inputs Inputs of this event
     * @example
     * ```ts
     * gContract.createEvent("Transfer", [
     *   { type: { regularType: "address" }, name: "from" },
     *   { type: { regularType: "address" }, name: "to" },
     *   { type: { regularType: "uint256" }, name: "amount" },
     * ]);
     * ```
     * // Example in solidiy
     * ```solidity
     * event Transfer(address from, address to, uint256 amount);
     * ```
     */
    createEvent(name: string, inputs: Array<ITypeNameInput>): IEvent;
    /**
     * Defines a contract modifier.
     * @param name The modifier name
     * @param args The modifier arguments
     * @param options Options to set more configurations.
     * @example
     * ```ts
     * gContract.createModifier(
     *   "onlyOwner",
     *   [{ name: "sender", type: { regularType: "address" } }],
     *   {
     *     isOverriding: true, // If this modifier is overriding an inherited one
     *     isVirtual: false // If is virtual
     *   }
     * )
     *  // setting modifier content
     *  .setRequire("owner != address(0)", "Forbidden");
     *  // .[...]
     * ```
     *
     * // Example in solidiy
     * ```solidity
     * modifier onlyOwner(address from) override {
     *   require(from == owner, "Forbidden");
     *   _;
     * }
     * ```
     */
    createModifier(name: string, args: Array<ITypeNameInput>, options?: {
        isOverriding?: boolean;
        isVirtual?: boolean;
    }): IModifier;
    /**
     * *Custom errors are only available starting from v0.8.4 solidity version
     */
    /**
     * Defines a contract 'enum' directive.
     * @param identifier The enum identifier
     * @param identifiersOptions The enum options
     * @example
     * ```ts
     * gContract.createEnum("Status", ["ON", "OFF"]);
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * enum Status{ ON, OFF }
     * ```
     */
    createEnum(identifier: string, identifiersOptions: string[]): IEnum;
    /**
     * Defines a contract mapping.
     * @param type Type of the mapping key
     * @param typeName Type of the mapping value
     * @param name Mapping name
     * @param scope Mapping scope (public, private...)
     * @example
     * ```ts
     * gContract.createMapping(
     *   { regularType: "address" },
     *   { regularType: "uint256" },
     *   "balances",
     *   "public"
     * );
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * mapping(address => uint256) public balances;
     * ```
     */
    createMapping(type: IMappingKeyType, typeName: IMappingTypeName, name: string, scope?: IVisibility): IStateMapping;
    /**
     * Defines a contract state variable creation.
     * @param type Variable type
     * @param name Variable name
     * @param scope Variable scope
     * @param options.expressionValue Variable expression value to assign (optional)
     * @param options.stateMutability Variable state mutability type (optional)
     * @example
     * ```ts
     * gContract.createVariable(
     *   { regularType: "address" },
     *   "owner",
     *   "public",
     *   {
     *     expressionValue: { customExpression: "0x0000000000000000000000000000000000000000" },
     *     stateMutability: "constant",
     *   }
     * );
     *
     * gContract.createVariable(
     *   { regularType: "address" },
     *   "manager",
     *   "public",
     * );
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * address public constant owner = "0x0000000000000000000000000000000000000000";
     * address public manager;
     * ```
     */
    createVariable(type: ITypeName, name: string, scope: IVisibility, options?: {
        expressionValue?: IExpressionValue;
        stateMutability?: IVariableStateMutabilityType;
    }): IStateVariable;
    /**
     * Defines a contract function.
     * @param name Function name
     * @param scope Function scope
     * @param inputs Function inputs (optional)
     * @param outputs Function outputs (optional)
     * @param options.stateMutability Function stateMutability (view, pure, payable...). (optional)
     * @param options.modifiers The function modifiers. (optional)
     * @param options.overrides If the function overrides another implementation. (optional)
     * @param options.virtual If the function can be overridden by other implementations. (optional)
     * @example
     * ```ts
     * gContract
     *   .createFunction(
     *     "setOwner",
     *     "public",
     *     [{ type: { regularType: "address" }, name: "_owner" }],
     *     [{ type: { regularType: "address" } }],
     *     { modifiers: [{ name: "onlyOwner", args: [] }] }
     *   )
     *    // setting function content
     *   .setRequire("_owner != address(0)", "Invalid address")
     *   .setAssignment("owner", { customExpression: "_owner" })
     *   .setReturn(["owner"]);
     *   //[...]
     *
     * // Optionally, you can set the inputs, outputs and modifiers sepparately
     *
     * gContract.createFunction("setOwner", "public")
     *   .setInput({ regularType: "address" }, "_owner" )
     *   .setOutput({ regularType: "address" })
     *   .setModifier("onlyOwner");
     *   //[...]
     * ```
     *
     * // Example in solidity
     *
     * ```solidity
     * function setOwner(address _owner) public onlyOwner returns (address){
     *   require(_owner != address(0), "Invalid address");
     *   owner = _owner;
     *   return (owner);
     *   // [...]
     * }
     * ```
     *
     * OBS: For 'string' and 'bytes' inputs, the 'memory' keyword will automatically be set.
     */
    createFunction(name: string, scope: IVisibility, inputs?: Array<ITypeNameInput>, outputs?: Array<ITypeNameOutput>, options?: {
        stateMutability?: IFunctionStateMutabilityType;
        modifiers?: IModifierInvocation[];
        overrides?: boolean;
        virtual?: boolean;
    }): IFunction;
    /**
     * Defines a contract structure.
     * @param identifier The struct identifier
     * @param variables The list of variables
     * @param mappings The list of mappings
     * @example
     *```ts
     * gContract.createStruct("Person", [
     *   { name: "name", type: "string" },
     *   { name: "age", type: "uint" },
     * ]);
     * ```
     *
     * // Example in solidity:
     *
     * ```solidity
     * struct Person {
     *   string name;
     *   uint age;
     * }
     * ```
     */
    createStruct(identifier: string, variables?: Array<ICreateVariableDTO>, mappings?: Array<ICreateMappingDTO>): IStruct;
}

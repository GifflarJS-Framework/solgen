import { IEnum } from "@models/definitions/enum/types/IEnum";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IUsing } from "@models/definitions/using/types/IUsing";
import { ICreateMappingDTO } from "@models/statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "@models/statements/variable/types/ICreateVariableDTO";
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
import { IMappingKeyType } from "@modules/types/IMappingKeyType";
import { IMappingTypeName } from "@modules/types/IMappingTypeName";
import { ITypeName } from "@modules/types/ITypeName";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IVisibility } from "@modules/types/IVisibility";
import { IContractBodyItem } from "./IContractBodyItem";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";
import { IVariableStateMutabilityType } from "@modules/types/IVariableStateMutabilityType";

export interface IContractBody {
  body: IContractBodyItem;

  /**
   * Defines a contract 'using' directive.
   * @param identifier Name of identifier to be used in types.
   * @param type The type that will use the identifier configuration.
   * @example
   * ```ts
   * gContract.createUsing("SafeMath", { regularType: "uint" });
   * ```
   *
   * // Generate in solidity
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
   * gContract.createEvent("Transfer", [
   *   { type: "address", name: "from" },
   *   { type: "address", name: "to" },
   *   { type: "uint256", name: "amount" },
   * ]);
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
   * );
   * ```
   */
  createModifier(
    name: string,
    args: Array<ITypeNameInput>,
    options?: { isOverriding?: boolean; isVirtual?: boolean }
  ): IModifier;

  /**
   * *Custom errors are only available starting from v0.8.4 solidity version
   */
  // createCustomError(name: string, args: Array<ITypeNameInput>): ICustomError;

  /**
   * Defines a contract 'enum' directive.
   * @param identifier The enum identifier
   * @param identifiersOptions The enum options
   * @example
   * gContract.createEnum("Status", ["ON", "OFF"]);
   */
  createEnum(identifier: string, identifiersOptions: string[]): IEnum;

  /**
   * Defines a contract mapping.
   * @param type Type of the mapping key
   * @param typeName Type of the mapping value
   * @param name Mapping name
   * @param scope Mapping scope (public, private...)
   * @example
   * gContract.createMapping(
   *   { regularType: "address" },
   *   { regularType: "uint256" },
   *   "balances",
   *   "public"
   * );
   */
  createMapping(
    type: IMappingKeyType,
    typeName: IMappingTypeName,
    name: string,
    scope?: IVisibility
  ): IStateMapping;

  /**
   * Defines a contract state variable creation.
   * @param type Variable type
   * @param name Variable name
   * @param scope Variable scope
   * @param value Variable expression value to assign
   * @example
   * gContract.createVariable(
   *   "address",
   *   "owner",
   *   "public",
   *   "0x0000000000000000000000000000000000000000",
   *   "immutable"
   * );
   */
  createVariable(
    type: ITypeName,
    name: string,
    scope: IVisibility,
    expression?: IExpressionValue,
    stateMutability?: IVariableStateMutabilityType
  ): IStateVariable;

  /**
   * Defines a contract function.
   * @param name Function name
   * @param scope Function scope
   * @param inputs Function inputs
   * @param outputs Function outputs
   * @param stateMutability Function stateMutability (view, pure, payable...)
   * @example
   * gContract
   *   .createFunction(
   *     "setOwner",
   *     "public",
   *     [{ type: { regularType: "address" }, name: "_owner" }],
   *     []
   *   )
   *    // setting function content
   *   .setRequire("owner != address(0)", "Invalid address")
   *   .setAssignment("owner", { customExpression: "_owner" });
   *   //[...]
   *
   * // or you can set the inputs sepparately
   *
   * gContract.createFunction("setOwner", "public")
   *   .setInput({ type: { regularType: "address" }, name: "_owner" });
   *   //[...]
   */
  createFunction(
    name: string,
    scope: IVisibility,
    inputs?: Array<ITypeNameInput>,
    outputs?: Array<ITypeNameOutput>,
    stateMutability?: IFunctionStateMutabilityType
  ): IFunction;

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
   * // This represents in solidity:
   *
   * ```solidity
   * struct Person {
   *   string name;
   *   uint age;
   * }
   * ```
   */
  createStruct(
    identifier: string,
    variables?: Array<ICreateVariableDTO>,
    mappings?: Array<ICreateMappingDTO>
  ): IStruct;
}

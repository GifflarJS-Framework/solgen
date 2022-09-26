import { IContractBody } from "@models/toplevels/contractBody/types/IContractBody";
import { IEvent } from "@models/definitions/event/types/IEvent";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { ITypeName } from "@modules/types/ITypeName";
import { IContractJson } from "./IContractJson";
import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IReceive } from "@models/definitions/receive/types/IReceive";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";
import { IVisibility } from "@modules/types/IVisibility";
import { IVariableStateMutabilityType } from "@modules/types/IVariableStateMutabilityType";

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
   * @param args Any argument that might be needed
   * @example
   * gContract.setInheritance("Ownable", ["0x0000000000000000000000000000000000000000"])
   */
  setInheritance(identifier: string, args?: Array<string>): IInherits;

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
    value?: IExpressionValue,
    stateMutability?: IVariableStateMutabilityType
  ): IStateVariable;

  /**
   * Defines a contract constructor function.
   * @param inputs The constructor inputs
   * @example
   * gContract.createConstructor([{ type: "address", name: "_owner" }])
   *   .setRequire("owner != address(0)", "Invalid address")
   *   .setAssignment("owner", { customExpression: "_owner" });
   *   //[...]
   *
   * // or you can set the inputs sepparately
   *
   * gContract.createConstructor()
   *   .setInput({ type: "address", name: "_owner" });
   *   //[...]
   */
  createConstructor(inputs?: Array<ITypeNameInput>): IFunction;

  /**
   * Defines a contract fallback function.
   * @param isPayable If the function state mutability is payable or not. Default is 'false'.
   * @example
   * gContract.createFallback(true)
   *   .setRequire("msg.value > 10000", "Invalid value");
   *   //[...]
   */
  createFallback(isPayable?: boolean): IFallback;

  /**
   * Defines a contract receive function.
   * @example
   * gContract.createReceive()
   *   .setRequire("msg.sender != owner", "Sender must not be the owner");
   *   //[...]
   */
  createReceive(): IReceive;

  /**
   * Stringify the contract content
   * @example
   * const strJson = gContract.toString();
   */
  toString(): string;
}

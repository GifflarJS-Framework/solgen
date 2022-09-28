import { IContractBody } from "@models/toplevels/contractBody/types/IContractBody";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IContractJson } from "./IContractJson";
import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IReceive } from "@models/definitions/receive/types/IReceive";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";

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
   * Defines a contract constructor function.
   * @param inputs The constructor inputs
   * @example
   * gContract.createConstructor([{ type: { regularType: "address" }, name: "_owner" }])
   *   // setting function content
   *   .setRequire("owner != address(0)", "Invalid address")
   *   .setAssignment("owner", { customExpression: "_owner" });
   *   //[...]
   *
   * // or you can set the inputs sepparately
   *
   * gContract.createConstructor()
   *   .setInput({ type: { regularType: "address" }, name: "_owner" });
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

import { ITryExpression } from "@models/statements/try/types/ITryExpression";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";
import { IDataLocation } from "@modules/types/IDataLocation";
import { IMappingKeyType } from "@modules/types/IMappingKeyType";
import { IMappingTypeName } from "@modules/types/IMappingTypeName";
import { ITypeName } from "@modules/types/ITypeName";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { IStackItem } from "./IStackItem";

export interface IContent extends IStackItem {
  /**
   * Defines a new assert statement.
   * @param condition The assert condition
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setAssert("owner != address(0)");
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * assert(owner != address(0));
   * // [...]
   * ```
   */
  setAssert(condition: string): IContent;

  /**
   * Defines a new break statement.
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setBreak();
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * break;
   * // [...]
   * ```
   */
  setBreak(): IContent;

  /**
   * Defines a new local variable statement.
   * @param type The variable type
   * @param name The variable name
   * @param expression The expression to assign to variable initial value
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setVariable({ regularType: "uint256" }, "balance", "100000");
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * uint256 balance = 100000;
   * // [...]
   * ```
   */
  setVariable(
    type: ITypeName,
    name: string,
    expression?: IExpressionValue
  ): IContent;

  /**
   * Defines a new Method call statement
   * @param variable The name of the object that contains the method
   * @param method The name of the object's method
   * @param args The method's arguments
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setMethod("ERC20Contract", "balanceOf", ["address(this)"]);
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * ERC20Contract.balanceOf(address(this));
   * // [...]
   * ```
   */
  setMethodCall(
    variable: string,
    method: string,
    args: Array<string>
  ): IContent;

  /**
   * Defines a new assignment statement.
   * @param variable The variable to receive the assignment.
   * @param expressionValue The expression to assign to variable.
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setAssignment("owner", { customExpression: "newOwner" });
   *   .setAssignment("erc20Contract", {
   *     newContract: { contractName: "ERC20", args: ['"TokenName"', '"TKN"'] },
   *   });
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * owner = newOwner;
   * erc20Contract = new ERC20("TokenName", "TKN");
   * // [...]
   * ```
   */
  setAssignment(
    variable: string,
    expressionValue: IExpressionValue | undefined
  ): IContent;

  /**
   * Defines a new event call.
   * @param name The name of the event
   * @param inputNames Inputs of the event call
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setEventCall("Transfered", ["from", "to", "100000"]);
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * emit Transfered(from, to, 100000);
   * // [...]
   * ```
   */
  setEventCall(name: string, inputNames: Array<string>): IContent;

  /**
   * Defines a new return statement.
   * @param expressions The expression list to return
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setReturn(["owner", "balance"]);
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * return (owner, balance);
   * ```
   */
  setReturn(expressions: Array<string>): IContent;

  /**
   * Defines a new 'continue' statement.
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .continue();
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * continue;
   * // [...]
   * ```
   */
  setContinue(): IContent;

  setTry(
    parameters: Array<ITypeNameInput>,
    expression: ITryExpression
  ): IContent;
  setCatch(parameters: Array<ITypeNameInput>, identifier?: string): IContent;

  /**
   * Defines a 'require' statement.
   * @param condition The 'require' condition
   * @param errorMessage The message that will be thrown if the condition fails.
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setRequire("a == b", "Operation failed")
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * require(a == b, "Operation failed");
   * // [...]
   * ```
   */
  setRequire(condition: string, errorMessage?: string): IContent;

  /**
   * Defines a 'revert' statement.
   * @param errorMessage The message to be thrown
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .setRevert("Operation failed")
   *   // .[...]
   * ```
   *
   * // Example in solidity
   * ```solidity
   * // [...]
   * revert("Operation failed");
   * // [...]
   * ```
   */
  setRevert(errorMessage: string): IContent;

  /**
   * Defines a 'if' statement. Remember to use the "endIf" function when finishing "if" conditions actions,
   * or else all the conditions made will have any effect.
   * @param condition The condition to enter the 'if'
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .beginIf("a == b")
   *   // .[...] (Content inside 'if')
   *   .endIf()
   *   // .[...]
   * ```
   *
   * // Example in solidity
   *
   * ```solidity
   * // [...]
   * if(a == b){
   *   // [...] (Content inside 'if')
   * }
   * // [...]
   * ```
   **/
  beginIf(condition: string): IContent;

  /**
   * Defines a 'else if' statement. Remember to use the "endElseIf" function when finishing "else if" conditions actions,
   * or else all the conditions made will have any effect.
   * @param condition The condition to enter the 'else if'
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .beginElseIf("a == b")
   *   // .[...] (Content inside 'else if')
   *   .endElseIf()
   *   // .[...]
   * ```
   *
   * // Example in solidity
   *
   * ```solidity
   * // [...]
   * else if(a == b){
   *   // [...] (Content inside 'else if')
   * }
   * // [...]
   * ```
   **/
  beginElseIf(condition: string): IContent;

  /**
   * Defines a 'else' statement. Remember to use the "endElse" function when finishing "else" conditions actions,
   * or else all the conditions made will have any effect.
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .beginElse()
   *   // .[...] (Content inside 'else')
   *   .endElse()
   *   // .[...]
   * ```
   *
   * // Example in solidity
   *
   * ```solidity
   * // [...]
   * else {
   *   // [...] (Content inside 'else')
   * }
   * // [...]
   * ```
   **/
  beginElse(): IContent;

  /**
   * Defines a 'do while' statement. Remember to use the "endDoWhile" function when finishing "do while" conditions actions,
   * or else all the conditions made will have any effect.
   * @param condition The condition to stop the 'do while' loop when false
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .beginDoWhile("a == b")
   *   // .[...] (Content inside 'do while')
   *   .endDoWhile()
   *   // .[...]
   * ```
   *
   * // Example in solidity
   *
   * ```solidity
   * // [...]
   * do {
   *   // [...] (Content inside 'do while')
   * } while(a == b);
   * // [...]
   * ```
   **/
  beginDoWhile(condition: string): IContent;

  /**
   * Defines a 'while' statement. Remember to use the "endWhile" function when finishing "while" conditions actions,
   * or else all the conditions made will have any effect.
   * @param condition The condition to stop the 'while' loop when false
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .beginWhile("a == b")
   *   // .[...] (Content inside 'while')
   *   .endWhile()
   *   // .[...]
   * ```
   *
   * // Example in solidity
   *
   * ```solidity
   * // [...]
   * while(a == b) {
   *   // [...] (Content inside 'while')
   * }
   * // [...]
   * ```
   **/
  beginWhile(condition: string): IContent;

  /**
   * Defines a 'for' statement. Remember to use the "endFor" function when finishing "for" conditions actions,
   * or else all the conditions made will have any effect.
   * @param condition The condition to stop the 'for' loop when false
   * @example
   * ```ts
   * gContract.createFunction(...)
   *   // .[...]
   *   .beginFor(
   *     {
   *       type: { regularType: "uint" },
   *       name: "i",
   *       expression: "0",
   *       dataLocation: "memory",
   *     },
   *     "i < 10",
   *     "i++"
   *   );
   *   // .[...] (Content inside 'for')
   *   .endFor()
   *   // .[...]
   * ```
   *
   * // Example in solidity
   *
   * ```solidity
   * // [...]
   * for(uint memory i = 0;i < 10;i++) {
   *   // [...] (Content inside 'for')
   * }
   * // [...]
   * ```
   **/
  beginFor(
    variable: {
      type: ITypeName;
      name: string;
      expressionValue: IExpressionValue;
      dataLocation: IDataLocation;
    },
    condition: string,
    expression: string
  ): IContent;

  /**
   * Defines the end of 'if' statement.
   */
  endIf(): IContent;
  /**
   * Defines the end of 'else if' statement.
   */
  endElseIf(): IContent;
  /**
   * Defines the end of 'else' statement.
   */
  endElse(): IContent;
  /**
   * Defines the end of 'do while' statement.
   */
  endDoWhile(): IContent;
  /**
   * Defines the end of 'while' statement.
   */
  endWhile(): IContent;
  /**
   * Defines the end of 'for' statement.
   */
  endFor(): IContent;
}

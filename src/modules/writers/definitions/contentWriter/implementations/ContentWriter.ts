import { IContents } from "@models/definitions/content/types/IContents";
import { IAssignmentWriter } from "@writers/statements/assignmentWriter/types/IAssignmentWriter";
import { IBreakWriter } from "@writers/statements/breakWriter/types/IBreakWriter";
import { IDoWhileWriter } from "@writers/statements/doWhileWriter/types/IDoWhileWriter";
import { IEventCallWriter } from "@writers/statements/eventCallWriter/types/IEventCallWriter";
import { IForWriter } from "@writers/statements/forWriter/types/IForWriter";
import { IIfWriter } from "@writers/statements/ifWriter/types/IIfWriter";
import { IMethodCallWriter } from "@writers/statements/methodCallWriter/types/IMethodCallWriter";
import { IRequireWriter } from "@writers/statements/requireWriter/types/IRequireWriter";
import { IRevertWriter } from "@writers/statements/revertWriter/types/IRevertWriter";
import { IWhileWriter } from "@writers/statements/whileWriter/types/IWhileWriter";
import { IVariableWriter } from "@writers/statements/variableWriter/types/IVariableWriter";
import { inject, injectable } from "tsyringe";
import { IContentWriter } from "../types/IContentWriter";
import { IReturnWriter } from "@writers/statements/returnWriter/types/IReturnWriter";
import { IAssert } from "@models/statements/assert/types/IAssert";
import { ITryWriter } from "@writers/statements/tryWriter/types/ITryWriter";
import { ICatchWriter } from "@writers/statements/catchWriter/types/ICatchWriter";
import { IContinueWriter } from "@writers/statements/continueWriter/types/IContinueWriter";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { INewContractWriter } from "@writers/statements/newContractWriter/types/INewContractWriter";
import { ICustomCodeWriter } from "@modules/writers/custom/customCodeWriter/types/ICustomCodeWriter";

@injectable()
class ContentWriter implements IContentWriter {
  constructor(
    @inject("AssertWriter")
    private assertWriter: IAssert,
    @inject("AssignmentWriter")
    private assignmentWriter: IAssignmentWriter,
    @inject("IfWriter")
    private ifWriter: IIfWriter,
    @inject("ForWriter")
    private forWriter: IForWriter,
    @inject("EventCallWriter")
    private eventCallWriter: IEventCallWriter,
    @inject("VariableWriter")
    private variableWriter: IVariableWriter,
    @inject("MethodCallWriter")
    private methodCallWriter: IMethodCallWriter,
    @inject("RequireWriter")
    private requireWriter: IRequireWriter,
    @inject("RevertWriter")
    private revertWriter: IRevertWriter,
    @inject("BreakWriter")
    private breakWriter: IBreakWriter,
    @inject("WhileWriter")
    private whileWriter: IWhileWriter,
    @inject("DoWhileWriter")
    private doWhileWriter: IDoWhileWriter,
    @inject("ReturnWriter")
    private returnWriter: IReturnWriter,
    @inject("TryWriter")
    private tryWriter: ITryWriter,
    @inject("CatchWriter")
    private catchWriter: ICatchWriter,
    @inject("ContinueWriter")
    private continueWriter: IContinueWriter,
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter,
    @inject("NewContractWriter")
    private newContractWriter: INewContractWriter,
    @inject("CustomCodeWriter")
    private customCodeWriter: ICustomCodeWriter
  ) {
    // Avoiding infinite dependency injection
    ifWriter._init(this);
    forWriter._init(this);
    whileWriter._init(this);
    doWhileWriter._init(this);
    tryWriter._init(this);
    catchWriter._init(this);
  }

  statements = {
    assert: this.assertWriter,
    assignment: this.assignmentWriter,
    if: this.ifWriter,
    for: this.forWriter,
    event_call: this.eventCallWriter,
    variable: this.variableWriter,
    method_call: this.methodCallWriter,
    require: this.requireWriter,
    revert: this.revertWriter,
    break: this.breakWriter,
    while: this.whileWriter,
    doWhile: this.doWhileWriter,
    return: this.returnWriter,
    try: this.tryWriter,
    catch: this.catchWriter,
    continue: this.continueWriter,
    expression: this.expressionWriter,
    newContract: this.newContractWriter,
    customCode: this.customCodeWriter,
  };

  // All statement control that doesn't need the ; in the end
  controls = ["if", "for", "while", "doWhile", "try", "catch", "customCode"];

  write(content: Array<IContents>): string {
    let text = "";

    // Defining the statement content
    content.map((item) => {
      const handler = this.statements[item.statement];
      if (handler) {
        const anyItem: any = item;
        text += handler.write(anyItem);

        if (!this.controls.includes(item.statement)) {
          text += ";\n";
        }
      }

      return text;
    });

    return text;
  }
}

export default ContentWriter;

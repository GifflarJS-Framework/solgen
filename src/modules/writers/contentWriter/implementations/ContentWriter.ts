import { IContents } from "@models/content/types/IContents";
import { IAssignmentWriter } from "@writers/statements/assignmentWriter/types/IAssignmentWriter";
import { IEventCallWriter } from "@writers/statements/eventCallWriter/types/IEventCallWriter";
import { IForWriter } from "@writers/statements/forWriter/types/IForWriter";
import { IIfWriter } from "@writers/statements/ifWriter/types/IIfWriter";
import { IMethodCallWriter } from "@writers/statements/methodCallWriter/types/IMethodCallWriter";
import { IVariableWriter } from "@writers/variableWriter/types/IVariableWriter";
import { inject, injectable } from "tsyringe";
import { IContentWriter } from "../types/IContentWriter";

@injectable()
class ContentWriter implements IContentWriter {
  constructor(
    @inject("AssignmentWriter")
    private assignmentWriter: IAssignmentWriter,
    @inject("IfWriter")
    private ifWriter: IIfWriter,
    @inject("ForWriter")
    private forWriter: IForWriter,
    @inject("EventCall")
    private eventCallWriter: IEventCallWriter,
    @inject("VariableWriter")
    private variableWriter: IVariableWriter,
    @inject("MethodCallWriter")
    private methodCallWriter: IMethodCallWriter
  ) {
    ifWriter._init(this.write);
    forWriter._init(this.write);
  }

  statements = {
    assignment: this.assignmentWriter.write,
    if: this.ifWriter.write,
    for: this.forWriter.write,
    event_call: this.eventCallWriter.write,
    variable: this.variableWriter.write,
    method_call: this.methodCallWriter.write,
  };

  // All statement control that doesn't need the ; in the end
  controls = ["if", "for"];

  write(content: Array<IContents>): string {
    let text = "";

    // Defining the statement content
    content.map((item) => {
      const handler = this.statements[item.statement];
      if (handler) {
        const anyItem: any = item;
        text += handler(anyItem);

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

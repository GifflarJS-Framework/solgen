import { IContents } from "@models/content/types/IContents";
import { IFor } from "@models/for/types/IFor";
import { IAssignmentWriter } from "@writers/statements/assignmentWriter/types/IAssignmentWriter";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

@injectable()
class ForWriter implements IForWriter {
  private writeContent: (content: Array<IContents>) => string;

  constructor(
    @inject("AssignmentWriter")
    private assignmentWriter: IAssignmentWriter,
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

  _init(_writeContent: (content: Array<IContents>) => string): void {
    this.writeContent = _writeContent;
  }

  write(json: IFor) {
    if (!this.writeContent) throw new Error("writeContent Function not set.");

    const assigment = this.assignmentWriter.write(json.assignment);
    const expression = this.expressionWriter.write(json.expression);
    let text = `for(uint ${assigment};${json.condition};${expression})`;
    text += "{\n";
    text += this.writeContent(json.content);
    text += "}\n";

    return text;
  }
}

export default ForWriter;

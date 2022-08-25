import { IFor } from "@models/statements/for/types/IFor";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IAssignmentWriter } from "@writers/statements/assignmentWriter/types/IAssignmentWriter";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

@injectable()
class ForWriter implements IForWriter {
  private contentWriter: IContentWriter;

  constructor(
    @inject("AssignmentWriter")
    private assignmentWriter: IAssignmentWriter,
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

  _init(contentWriter: IContentWriter): void {
    this.contentWriter = contentWriter;
  }

  write(json: IFor) {
    if (!this.contentWriter) throw new Error("Content Writer not set.");

    const assigment = this.assignmentWriter.write(json.assignment);
    const expression = this.expressionWriter.write(json.expression);
    let text = `for(uint ${assigment};${json.condition};${expression})`;
    text += "{\n";
    text += this.contentWriter.write(json.content);
    text += "}\n";

    return text;
  }
}

export default ForWriter;

import { IFor } from "@models/for/types/IFor";
import { IAssignmentWriter } from "@writers/statements/assignmentWriter/types/IAssignmentWriter";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

@injectable()
class ForWriter implements IForWriter {
  constructor(
    @inject("AssignmentWriter")
    private assignmentWriter: IAssignmentWriter,
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

  write(json: IFor) {
    const assigment = this.assignmentWriter.write(json.assignment);
    const expression = this.expressionWriter.write(json.expression);
    let text = `for(uint ${assigment};${json.condition};${expression})`;
    text += "{\n";
    text += "}\n";

    return text;
  }
}

export default ForWriter;

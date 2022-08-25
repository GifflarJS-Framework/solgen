import { IAssignment } from "@models/statements/assignment/types/IAssignment";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IAssignmentWriter } from "../types/IAssignmentWriter";

@injectable()
class AssignmentWriter implements IAssignmentWriter {
  constructor(
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

  write(json: IAssignment): string {
    let expression = json.value;
    // if (typeof expressionValue === "object") {
    // const expression: IExpression = createExpressionModel({
    //   value: expressionValue.value,
    // });
    const expressionText = this.expressionWriter.write(expression);
    // }
    const text = `${json.variable} = ${expressionText}`;
    return text;
  }
}

export default AssignmentWriter;

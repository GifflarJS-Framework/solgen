import { IAssignment } from "@models/statements/assignment/types/IAssignment";
import { IExpressionModel } from "@modules/models/statements/expression/types/IExpressionModel";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IAssignmentWriter } from "../types/IAssignmentWriter";

@injectable()
class AssignmentWriter implements IAssignmentWriter {
  constructor(
    @inject("ExpressionModel")
    private expressionModel: IExpressionModel,
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

  write(json: IAssignment): string {
    // if (typeof expressionValue === "object") {
    // const expression: IExpression = createExpressionModel({
    //   value: expressionValue.value,
    // });
    const expression = this.expressionModel.execute({
      value: json.expressionValue,
    });
    const expressionText = this.expressionWriter.write(expression);
    // }
    const text = `${json.variable} = ${expressionText}`;
    return text;
  }
}

export default AssignmentWriter;

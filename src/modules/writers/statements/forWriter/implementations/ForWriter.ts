import { IFor } from "@models/statements/for/types/IFor";
import { IExpressionModel } from "@modules/models/statements/expression/types/IExpressionModel";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { IVariableWriter } from "@writers/statements/variableWriter/types/IVariableWriter";
import { inject, injectable } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

@injectable()
class ForWriter implements IForWriter {
  private contentWriter: IContentWriter;

  constructor(
    @inject("VariableWriter")
    private variableWriter: IVariableWriter,
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter,
    @inject("ExpressionModel")
    private expressionModel: IExpressionModel
  ) {}

  _init(contentWriter: IContentWriter): void {
    this.contentWriter = contentWriter;
  }

  write(json: IFor) {
    if (!this.contentWriter) throw new Error("Content Writer not set.");

    let txt_variable = ``;
    if (json.variable) {
      txt_variable = this.variableWriter.write(json.variable);
    }

    let txt_condition = ``;
    if (json.condition) {
      txt_condition = json.condition;
    }

    let txt_expression = ``;
    if (json.expressionValue) {
      const expression = this.expressionModel.execute({
        value: json.expressionValue,
      });
      txt_expression = this.expressionWriter.write(expression);
    }

    let text = `for(${txt_variable};${txt_condition};${txt_expression})`;
    text += "{\n";
    text += this.contentWriter.write(json.content);
    text += "}\n";

    return text;
  }
}

export default ForWriter;

import { IExpression } from "@models/statements/expression/types/IExpression";
import { INewContractModel } from "@modules/models/statements/newcontract/types/INewContractModel";
import { inject, injectable } from "tsyringe";
import { INewContractWriter } from "../../newContractWriter/types/INewContractWriter";
import { IExpressionWriter } from "../types/IExpressionWriter";

@injectable()
class ExpressionWriter implements IExpressionWriter {
  constructor(
    @inject("NewContractModel")
    private newContractModel: INewContractModel,
    @inject("NewContractWriter")
    private newContractWriter: INewContractWriter
  ) {}

  write(expression: IExpression): string {
    let text = expression.value?.customExpression;

    // If value is the creation of a new contract
    if (expression.value?.newContract) {
      const newContract = this.newContractModel.execute(
        expression.value.newContract
      );
      text = this.newContractWriter.write(newContract);
    }

    return text || "";
  }
}

export default ExpressionWriter;

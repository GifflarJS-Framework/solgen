import { ITry } from "@models/try/types/ITry";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { IMethodCallWriter } from "@writers/statements/methodCallWriter/types/IMethodCallWriter";
import { INewContractWriter } from "@writers/statements/newContractWriter/types/INewContractWriter";
import { inject, injectable } from "tsyringe";
import { ITryWriter } from "../types/ITryWriter";

@injectable()
class TryWriter implements ITryWriter {
  constructor(
    @inject("NewContractWriter")
    private newContractWriter: INewContractWriter,
    @inject("MethodCallWriter")
    private methodCallWriter: IMethodCallWriter,
    @inject("InputWriter")
    private inputWriter: IInputWriter,
    @inject("ContentWriter")
    private contentWriter: IContentWriter
  ) {}

  write(_try: ITry): string {
    // Writing expression
    let expressionText = ``;
    if (_try.expression.statement === "method_call") {
      expressionText = this.methodCallWriter.write(_try.expression);
    } else {
      expressionText = this.newContractWriter.write(_try.expression);
    }

    // Writing parameters
    const parametersText = this.inputWriter.write(_try.parameters);

    // Writing content
    const contentText = this.contentWriter.write(_try.content);

    // Writing final text
    const text = `try ${expressionText} returns(${parametersText}){\n${contentText}}`;

    return text;
  }
}

export default TryWriter;

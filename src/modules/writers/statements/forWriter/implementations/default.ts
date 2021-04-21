import { IContents } from "@models/content/types/IContents";
import { IFor } from "@models/for/types/IFor";
import { IRequest } from "@models/request/types/IRequest";
import createAssignmentWriter from "@writers/statements/assignmentWriter/implementations/default";
import { IAssignmentWriter } from "@writers/statements/assignmentWriter/types/IAssignmentWriter";
import createExpressionWriter from "@writers/statements/expressionWriter/implementations/default";
import { IExpressionWriter } from "@writers/statements/expressionWriter/types/IExpressionWriter";
import { IForWriter } from "../types/IForWriter";

function createForWriter(
  writeContent: (
    content: Array<IContents>,
    callback: (request: IRequest) => void
  ) => string
): IForWriter {
  const assignmentWriter: IAssignmentWriter = createAssignmentWriter();
  const expressionWriter: IExpressionWriter = createExpressionWriter();

  const forWriter: IForWriter = {
    write(json: IFor) {
      const assigment = assignmentWriter.write(json.assignment);
      const expression = expressionWriter.write(json.expression);
      let text = `for(uint ${assigment};${json.condition};${expression})`;
      text += "{\n";
      text += writeContent(json.content, (request: IRequest) => {
        text += "";
      });
      text += "}\n";

      return text;
    },
  };

  return forWriter;
}

export default createForWriter;

import { ICreateForDTO } from "../types/ICreateForDTO";
import { IFor } from "../types/IFor";

function createForModel({
  assignment,
  condition,
  expression,
}: ICreateForDTO): IFor {
  const _for: IFor = {
    statement: "for",
    assignment,
    condition,
    expression,
    content: [],
  };

  return _for;
}

export default createForModel;

import { ICreateIf } from "../types/ICreateIf";
import { IIf } from "../types/IIf";
import { IIfModel } from "../types/IIfModel";

class IfModel implements IIfModel {
  execute({ condition = "", onElse = false }: ICreateIf): IIf {
    const _if: IIf = {
      statement: "if",
      else: onElse || false,
      condition: condition || "",
      content: [],
    };

    return _if;
  }
}

export default IfModel;

import { ICreateIfDTO } from "../types/ICreateIfDTO";
import { IIf } from "../types/IIf";
import { IIfModel } from "../types/IIfModel";

class IfModel implements IIfModel {
  execute({ condition = "", onElse = false }: ICreateIfDTO): IIf {
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

import { ICreateWhileDTO } from "../types/ICreateWhileDTO";
import { IWhile } from "../types/IWhile";
import { IWhileModel } from "../types/IWhileModel";

class WhileModel implements IWhileModel {
  execute({ condition }: ICreateWhileDTO): IWhile {
    const _while: IWhile = {
      statement: "while",
      condition,
      content: [],
    };
    return _while;
  }
}

export default WhileModel;

import { ICreateWhileModel } from "../types/ICreateWhileModel";
import { IWhile } from "../types/IWhile";
import { IWhileModel } from "../types/IWhileModel";

class WhileModel implements IWhileModel {
  execute({ condition }: ICreateWhileModel): IWhile {
    const _while: IWhile = {
      statement: "while",
      condition,
      content: [],
    };
    return _while;
  }
}

export default WhileModel;

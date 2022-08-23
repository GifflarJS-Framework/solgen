import { ICreateDoWhileDTO } from "../types/ICreateDoWhileDTO";
import { IDoWhile } from "../types/IDoWhile";
import { IDoWhileModel } from "../types/IDoWhileModel";

class DoWhileModel implements IDoWhileModel {
  execute({ condition }: ICreateDoWhileDTO): IDoWhile {
    const _while: IDoWhile = {
      statement: "do_while",
      condition,
      content: [],
    };
    return _while;
  }
}

export default DoWhileModel;

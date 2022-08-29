import { ICreateReturnDTO } from "../types/ICreateReturnDTO";
import { IReturn } from "../types/IReturn";
import { IReturnModel } from "../types/IReturnModel";

class ReturnModel implements IReturnModel {
  execute({ expressions }: ICreateReturnDTO): IReturn {
    const _return: IReturn = {
      statement: "return",
      expressions,
    };

    return _return;
  }
}

export default ReturnModel;

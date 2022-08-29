import { ICreateUsingDTO } from "../types/ICreateUsingDTO";
import { IUsing } from "../types/IUsing";
import { IUsingModel } from "../types/IUsingModel";

class UsingModel implements IUsingModel {
  execute({ identifier, type }: ICreateUsingDTO): IUsing {
    const using: IUsing = {
      identifier,
      type,
    };

    return using;
  }
}

export default UsingModel;

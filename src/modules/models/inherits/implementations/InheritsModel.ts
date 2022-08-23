import { ICreateInheritsDTO } from "../types/ICreateInheritsDTO";
import { IInherits } from "../types/IInherits";
import { IInheritsModel } from "../types/IInheritsModel";

class InheritsModel implements IInheritsModel {
  execute({ identifier, args }: ICreateInheritsDTO): IInherits {
    const inherits: IInherits = {
      identifier,
      args,
    };

    return inherits;
  }
}

export default InheritsModel;

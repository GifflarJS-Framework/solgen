import { IAssert } from "../types/IAssert";
import { IAssertModel } from "../types/IAssertModel";
import { ICreateAssertDTO } from "../types/ICreateAssertDTO";

class AssertModel implements IAssertModel {
  execute({ condition }: ICreateAssertDTO): IAssert {
    const assert: IAssert = {
      statement: "assert",
      condition,
    };

    return assert;
  }
}

export default AssertModel;

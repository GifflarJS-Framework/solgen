import { INewContract } from "@models/newcontract/types/INewContract";
import createNewContractWriter from "../implementations/default";

describe("New Contract Writer", () => {
  it("Writing New Contract", () => {
    const newContractWriter = createNewContractWriter();
    const newContract: INewContract = {
      statement: "newcontract",
      args: ["owner"],
      contractName: "MyContract",
    };

    const expected = "new MyContract(owner)";
    const result = newContractWriter.write(newContract);

    expect(result).toMatch(expected);
  });
});

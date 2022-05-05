import { INewContract } from "@models/newcontract/types/INewContract";
import { container } from "tsyringe";
import { INewContractWriter } from "../types/INewContractWriter";

describe("New Contract Writer", () => {
  it("Writing New Contract", () => {
    const newContractWriter: INewContractWriter =
      container.resolve("NewContractWriter");

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

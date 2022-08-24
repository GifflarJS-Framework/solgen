import { container } from "tsyringe";
import { IImportModel } from "../types/IImportModel";

describe("ImportModel", () => {
  const importModel = container.resolve<IImportModel>("ImportModel");

  it("Creating Import", () => {
    const _import = importModel.execute({ identifierPath: "./MyContract" });
    const expected = {
      identifierPath: "./MyContract",
    };
    expect(JSON.stringify(_import)).toEqual(JSON.stringify(expected));
  });

  it("Creating Import with alias", () => {
    const _import = importModel.execute({
      identifierPath: "./MyContract",
      alias: "MyContractAlias",
    });
    const expected = {
      identifierPath: "./MyContract",
      alias: "MyContractAlias",
    };
    expect(JSON.stringify(_import)).toEqual(JSON.stringify(expected));
  });
});

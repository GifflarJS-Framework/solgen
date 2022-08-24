import { IImportModel } from "@models/import/types/IImportModel";
import { container } from "tsyringe";
import { IImportWriter } from "../types/IImportWriter";

describe("ImportWriter", () => {
  const importModel = container.resolve<IImportModel>("ImportModel");
  const importWriter = container.resolve<IImportWriter>("ImportWriter");

  it("Writing Import", () => {
    const _import = importModel.execute({ identifierPath: "./MyContract" });
    const result = importWriter.write([_import]);
    const expected = `import "./MyContract";\n\n`;
    expect(result).toEqual(expected);
  });

  it("Writing Import with alias", () => {
    const _import = importModel.execute({
      identifierPath: "./MyContract",
      alias: "MyContractAlias",
    });
    const result = importWriter.write([_import]);
    const expected = `import "./MyContract" as MyContractAlias;\n\n`;
    expect(result).toEqual(expected);
  });

  it("Writing many Imports", () => {
    const _import = importModel.execute({
      identifierPath: "./MyContract",
      alias: "MyContractAlias",
    });
    const _import2 = importModel.execute({
      identifierPath: "./MyLibrary",
    });
    const result = importWriter.write([_import, _import2]);
    const expected = `import "./MyContract" as MyContractAlias;\nimport "./MyLibrary";\n\n`;
    expect(result).toEqual(expected);
  });
});

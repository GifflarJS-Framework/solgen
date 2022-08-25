import { container } from "tsyringe";
import { IEnumModel } from "../types/IEnumModel";

describe("EnumModel", () => {
  const enumModel = container.resolve<IEnumModel>("EnumModel");

  it("Creating Enum Model", () => {
    const _enum = enumModel.execute({
      identifier: "FreshJuiceSize",
      identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
    });
    const expected = {
      statement: "enum",
      identifier: "FreshJuiceSize",
      identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
    };

    expect(JSON.stringify(_enum)).toEqual(JSON.stringify(expected));
  });
});

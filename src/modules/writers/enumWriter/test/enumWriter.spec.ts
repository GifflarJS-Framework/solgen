import { IEnumModel } from "@models/enum/types/IEnumModel";
import { container } from "tsyringe";
import { IEnumWriter } from "../types/IEnumWriter";

describe("EnumWriter", () => {
  const enumModel = container.resolve<IEnumModel>("EnumModel");
  const enumWriter = container.resolve<IEnumWriter>("EnumWriter");

  it("Writing", () => {
    const _enum = enumModel.execute({
      identifier: "FreshJuiceSize",
      identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
    });
    const result = enumWriter.write([_enum]);
    const expected = `enum FreshJuiceSize{SMALL, MEDIUM, LARGE}\n`;
    expect(result).toEqual(expected);
  });

  it("Writing many", () => {
    const _enum = enumModel.execute({
      identifier: "FreshJuiceSize",
      identifiersOptions: ["SMALL", "MEDIUM", "LARGE"],
    });
    const _enum2 = enumModel.execute({
      identifier: "Status",
      identifiersOptions: ["Pending", "Accepted", "Canceled", "Rejected"],
    });
    const _enum3 = enumModel.execute({
      identifier: "Button",
      identifiersOptions: ["ON", "OFF"],
    });
    const result = enumWriter.write([_enum, _enum2, _enum3]);
    const expected = `enum FreshJuiceSize{SMALL, MEDIUM, LARGE}\nenum Status{Pending, Accepted, Canceled, Rejected}\nenum Button{ON, OFF}\n`;
    expect(result).toEqual(expected);
  });
});

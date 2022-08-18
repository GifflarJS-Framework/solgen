import { ITypeModel } from "@models/type/types/ITypeModel";
import { container } from "tsyringe";
import { ITypeWriter } from "../types/ITypeWriter";

describe("Type Writer", () => {
  const typeModel = container.resolve<ITypeModel>("TypeModel");
  const typeWriter = container.resolve<ITypeWriter>("TypeWriter");

  it("Writing", () => {
    const type = typeModel.execute({ identifier: "my_uint", type: "uint" });
    const result = typeWriter.write([type]);
    const expected = `type my_uint is uint;\n`;
    expect(result).toEqual(expected);
  });

  it("Writing many types", () => {
    const type = typeModel.execute({ identifier: "my_uint", type: "uint" });
    const type2 = typeModel.execute({
      identifier: "my_string",
      type: "string",
    });
    const type3 = typeModel.execute({
      identifier: "my_address",
      type: "address",
    });
    const result = typeWriter.write([type, type2, type3]);
    const expected = `type my_uint is uint;\ntype my_string is string;\ntype my_address is address;\n`;
    expect(result).toEqual(expected);
  });
});

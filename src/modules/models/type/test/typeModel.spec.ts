import { container } from "tsyringe";
import { ITypeModel } from "../types/ITypeModel";

describe("Type Model", () => {
  const typeModel = container.resolve<ITypeModel>("TypeModel");

  it("Creating Type", () => {
    const type = typeModel.execute({ identifier: "my_uint", type: "uint" });

    const expected = {
      statement: "type",
      identifier: "my_uint",
      type: "uint",
    };

    expect(JSON.stringify(type)).toEqual(JSON.stringify(expected));
  });
});

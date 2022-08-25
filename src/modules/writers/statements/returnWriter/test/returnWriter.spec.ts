import { IReturnModel } from "@models/statements/return/types/IReturnModel";
import { container } from "tsyringe";
import { IReturnWriter } from "../types/IReturnWriter";

describe("ReturnWriter", () => {
  const returnModel = container.resolve<IReturnModel>("ReturnModel");
  const returnWriter = container.resolve<IReturnWriter>("ReturnWriter");

  it("Writing", () => {
    const _return = returnModel.execute({
      expressions: ["myVariable", "myVariable2"],
    });
    const result = returnWriter.write(_return);
    const expected = `return (myVariable, myVariable2)`;
    expect(result).toEqual(expected);
  });
});

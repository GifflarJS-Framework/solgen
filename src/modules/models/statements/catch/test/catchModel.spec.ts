import { container } from "tsyringe";
import { ICatchModel } from "../types/ICatchModel";

describe("CatchModel", () => {
  const catchModel = container.resolve<ICatchModel>("CatchModel");

  it("Creating Catch Model", () => {
    const _catch = catchModel.execute({
      identifier: "Error",
      parameters: [{ type: "bytes", name: "err" }],
    });

    const expected = {
      statement: "catch",
      identifier: "Error",
      parameters: [{ type: "bytes", name: "err" }],
      content: [],
    };

    expect(JSON.stringify(_catch)).toEqual(JSON.stringify(expected));
  });

  it("Creating Catch Model without identifier", () => {
    const _catch = catchModel.execute({
      parameters: [{ type: "bytes", name: "err" }],
    });

    const expected = {
      statement: "catch",
      parameters: [{ type: "bytes", name: "err" }],
      content: [],
    };

    expect(JSON.stringify(_catch)).toEqual(JSON.stringify(expected));
  });
});

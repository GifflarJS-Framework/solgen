import { ICatchModel } from "@models/statements/catch/types/ICatchModel";
import { container } from "tsyringe";
import { ICatchWriter } from "../types/ICatchWriter";

describe("CatchWriter", () => {
  const catchModel = container.resolve<ICatchModel>("CatchModel");
  const catchWriter = container.resolve<ICatchWriter>("CatchWriter");

  it("Writing Catch", () => {
    const _catch = catchModel.execute({
      identifier: "Error",
      parameters: [{ type: "bytes", name: "err" }],
    });

    const result = catchWriter.write(_catch);
    const expected = `catch Error(bytes memory err){\n}`;

    expect(result).toEqual(expected);
  });

  it("Writing Catch without identifier", () => {
    const _catch = catchModel.execute({
      parameters: [{ type: "bytes", name: "err" }],
    });

    const result = catchWriter.write(_catch);
    const expected = `catch (bytes memory err){\n}`;

    expect(result).toEqual(expected);
  });
});

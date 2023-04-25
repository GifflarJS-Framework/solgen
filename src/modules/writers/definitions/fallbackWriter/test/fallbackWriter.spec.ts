import { IFallbackModel } from "@models/definitions/fallback/types/IFallbackModel";
import { container } from "tsyringe";
import { IFallbackWriter } from "../types/IFallbackWriter";

describe("FallbackWriter", () => {
  const fallbackModel = container.resolve<IFallbackModel>("FallbackModel");
  const fallbackWriter = container.resolve<IFallbackWriter>("FallbackWriter");

  it("Writing fallback", () => {
    const fallback = fallbackModel.execute({
      stateVars: [],
      modifiers: [{ name: "onlyOwner", args: ["msg.sender"] }],
    });
    fallback.setEventCall("MyEvent", ["msg.sender"]);

    const result = fallbackWriter.write(fallback);

    const expected = `fallback() external onlyOwner(msg.sender){\nemit MyEvent(msg.sender);\n}\n\n`;

    expect(result).toEqual(expected);
  });

  it("Writing fallback", () => {
    const fallback = fallbackModel.execute({ stateVars: [], isPayable: true });
    fallback.setModifier("onlyOwner", ["msg.sender"]);
    fallback.setEventCall("MyEvent", ["msg.sender", "msg.value"]);

    const result = fallbackWriter.write(fallback);

    const expected = `fallback() external payable onlyOwner(msg.sender){\nemit MyEvent(msg.sender, msg.value);\n}\n\n`;

    expect(result).toEqual(expected);
  });
});

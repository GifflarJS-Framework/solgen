import { container } from "tsyringe";
import { IFallbackModel } from "../types/IFallbackModel";

describe("FallbackModel", () => {
  const fallbackModel = container.resolve<IFallbackModel>("FallbackModel");

  it("Creating Fallback", () => {
    const fallback = fallbackModel.execute({ stateVars: [] });
    fallback.setEventCall("MyEvent", ["msg.sender"]);

    const expected = {
      isPayable: false,
      content: [
        {
          statement: "event_call",
          name: "MyEvent",
          variables: ["msg.sender"],
        },
      ],
    };

    expect(JSON.stringify(fallback)).toEqual(JSON.stringify(expected));
  });

  it("Creating Fallback payable", () => {
    const fallback = fallbackModel.execute({ stateVars: [], isPayable: true });
    fallback.setEventCall("MyEvent", ["msg.sender", "msg.value"]);

    const expected = {
      isPayable: true,
      content: [
        {
          statement: "event_call",
          name: "MyEvent",
          variables: ["msg.sender", "msg.value"],
        },
      ],
    };

    expect(JSON.stringify(fallback)).toEqual(JSON.stringify(expected));
  });
});

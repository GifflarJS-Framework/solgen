import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IRequest } from "@models/request/types/IRequest";
import createEventCallWriter from "../implementations/default";

describe("Event Call Writer", () => {
  it("Writing Event Call", () => {
    const eventCallWriter = createEventCallWriter();
    const eventCall: IEventCall = {
      statement: "event_call",
      inputs: [{ type: "uint", name: "age" }],
      name: "eventName",
    };

    const expected = "eventName(age);";
    const expectedEvents: Array<IEventCall> = [eventCall];
    const result = eventCallWriter.write(eventCall, (request: IRequest) => {
      expect(request).toHaveProperty("functions", []);
      expect(request).toHaveProperty("events", expectedEvents);
      expect(request).toHaveProperty("text_returns", "");
    });

    expect(result).toMatch(expected);
  });
});

import { IEventCall } from "@models/statements/eventCall/types/IEventCall";
import { container } from "tsyringe";
import { IEventCallWriter } from "../types/IEventCallWriter";

describe("Event Call Writer", () => {
  it("Writing Event Call", () => {
    const eventCallWriter: IEventCallWriter =
      container.resolve("EventCallWriter");
    const eventCall: IEventCall = {
      statement: "event_call",
      variables: ["age"],
      name: "eventName",
    };

    const expected = "eventName(age)";
    const result = eventCallWriter.write(eventCall);

    expect(result).toMatch(expected);
  });
});

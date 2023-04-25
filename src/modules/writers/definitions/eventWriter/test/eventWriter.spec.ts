import { IEvent } from "@models/definitions/event/types/IEvent";
import { container } from "tsyringe";
import { IEventWriter } from "../types/IEventWriter";

describe("Event Writer", () => {
  it("Writing Event", () => {
    const eventWriter: IEventWriter = container.resolve("EventWriter");
    const event: IEvent = {
      name: "myEvent",
      inputs: [
        {
          type: "string",
          name: "name",
        },
        {
          type: "string",
          name: "surname",
        },
      ],
    };

    const expected = "//EVENTS\nevent myEvent(string name, string surname);";
    const result = eventWriter.write([event]);

    expect(result).toMatch(expected);
  });
});

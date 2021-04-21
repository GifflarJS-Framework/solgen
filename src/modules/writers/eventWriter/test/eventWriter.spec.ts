import { IEvent } from "@models/eventCall/types/IEvent";
import createEventWriter from "../";

describe("Event Writer", () => {
  it("Writing Event", () => {
    const eventWriter = createEventWriter();
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

    const expected =
      "//EVENTS\nevent myEvent(string memory name, string memory surname);";
    const result = eventWriter.write([event]);

    expect(result).toMatch(expected);
  });
});

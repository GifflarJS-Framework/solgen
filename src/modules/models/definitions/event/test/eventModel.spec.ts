import { container } from "tsyringe";
import IEventModel from "../types/IEventModel";

describe("EventModel", () => {
  const eventModel = container.resolve<IEventModel>("EventModel");

  it("Creating event model", () => {
    const event = eventModel.execute({
      name: "MyEvent",
      inputs: [{ type: "address", name: "from" }],
    });

    const expected = {
      name: "MyEvent",
      inputs: [{ type: "address", name: "from" }],
    };

    expect(JSON.stringify(event)).toEqual(JSON.stringify(expected));
  });
});

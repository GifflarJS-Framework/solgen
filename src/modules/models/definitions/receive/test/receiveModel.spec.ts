import { container } from "tsyringe";
import { IReceiveModel } from "../types/IReceiveModel";

describe("ReceiveModel", () => {
  const receiveModel = container.resolve<IReceiveModel>("ReceiveModel");

  it("Creating Receive", () => {
    const receive = receiveModel.execute({ stateVars: [] });
    receive.setEventCall("MyEvent", ["msg.sender", "msg.value"]);

    const expected = {
      content: [
        {
          statement: "event_call",
          name: "MyEvent",
          variables: ["msg.sender", "msg.value"],
        },
      ],
    };

    expect(JSON.stringify(receive)).toEqual(JSON.stringify(expected));
  });
});

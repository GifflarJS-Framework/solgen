import { IReceiveModel } from "@models/receive/types/IReceiveModel";
import { container } from "tsyringe";
import { IReceiveWriter } from "../types/IReceiveWriter";

describe("ReceiveWriter", () => {
  const receiveModel = container.resolve<IReceiveModel>("ReceiveModel");
  const receiveWriter = container.resolve<IReceiveWriter>("ReceiveWriter");

  it("Writing Receive Function", () => {
    const receive = receiveModel.execute({ stateVars: [] });
    receive.setEventCall("MyEvent", ["msg.sender", "msg.value"]);

    const result = receiveWriter.write(receive);

    const expected = `receive() external payable{\nemit MyEvent(msg.sender, msg.value);\n}\n\n`;

    expect(result).toEqual(expected);
  });
});

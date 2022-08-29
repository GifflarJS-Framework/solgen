"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ReceiveWriter", function () {
    var receiveModel = tsyringe_1.container.resolve("ReceiveModel");
    var receiveWriter = tsyringe_1.container.resolve("ReceiveWriter");
    it("Writing Receive Function", function () {
        var receive = receiveModel.execute({ stateVars: [] });
        receive.setEventCall("MyEvent", ["msg.sender", "msg.value"]);
        var result = receiveWriter.write(receive);
        var expected = "receive() external payable{\nemit MyEvent(msg.sender, msg.value);\n}\n\n";
        expect(result).toEqual(expected);
    });
});

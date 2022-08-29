"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("ReceiveModel", function () {
    var receiveModel = tsyringe_1.container.resolve("ReceiveModel");
    it("Creating Receive", function () {
        var receive = receiveModel.execute({ stateVars: [] });
        receive.setEventCall("MyEvent", ["msg.sender", "msg.value"]);
        var expected = {
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

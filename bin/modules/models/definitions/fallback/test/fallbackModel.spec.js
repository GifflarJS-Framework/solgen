"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("FallbackModel", function () {
    var fallbackModel = tsyringe_1.container.resolve("FallbackModel");
    it("Creating Fallback", function () {
        var fallback = fallbackModel.execute({ stateVars: [] });
        fallback.setEventCall("MyEvent", ["msg.sender"]);
        var expected = {
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
    it("Creating Fallback payable", function () {
        var fallback = fallbackModel.execute({ stateVars: [], isPayable: true });
        fallback.setEventCall("MyEvent", ["msg.sender", "msg.value"]);
        var expected = {
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

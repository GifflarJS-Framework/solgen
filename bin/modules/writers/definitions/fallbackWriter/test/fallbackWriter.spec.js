"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("FallbackWriter", function () {
    var fallbackModel = tsyringe_1.container.resolve("FallbackModel");
    var fallbackWriter = tsyringe_1.container.resolve("FallbackWriter");
    it("Writing fallback", function () {
        var fallback = fallbackModel.execute({ stateVars: [] });
        fallback.setEventCall("MyEvent", ["msg.sender"]);
        var result = fallbackWriter.write(fallback);
        var expected = "fallback() external{\nemit MyEvent(msg.sender);\n}\n\n";
        expect(result).toEqual(expected);
    });
    it("Writing fallback", function () {
        var fallback = fallbackModel.execute({ stateVars: [], isPayable: true });
        fallback.setEventCall("MyEvent", ["msg.sender", "msg.value"]);
        var result = fallbackWriter.write(fallback);
        var expected = "fallback() external payable{\nemit MyEvent(msg.sender, msg.value);\n}\n\n";
        expect(result).toEqual(expected);
    });
});

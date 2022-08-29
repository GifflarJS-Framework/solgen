"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Event Call Writer", function () {
    it("Writing Event Call", function () {
        var eventCallWriter = tsyringe_1.container.resolve("EventCallWriter");
        var eventCall = {
            statement: "event_call",
            variables: ["age"],
            name: "eventName",
        };
        var expected = "eventName(age)";
        var result = eventCallWriter.write(eventCall);
        expect(result).toMatch(expected);
    });
});

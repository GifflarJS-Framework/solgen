"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Event Writer", function () {
    it("Writing Event", function () {
        var eventWriter = tsyringe_1.container.resolve("EventWriter");
        var event = {
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
        var expected = "//EVENTS\nevent myEvent(string memory name, string memory surname);";
        var result = eventWriter.write([event]);
        expect(result).toMatch(expected);
    });
});

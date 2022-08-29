"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("EventModel", function () {
    var eventModel = tsyringe_1.container.resolve("EventModel");
    it("Creating event model", function () {
        var event = eventModel.execute({
            name: "MyEvent",
            inputs: [{ type: "address", name: "from" }],
        });
        var expected = {
            name: "MyEvent",
            inputs: [{ type: "address", name: "from" }],
        };
        expect(JSON.stringify(event)).toEqual(JSON.stringify(expected));
    });
});

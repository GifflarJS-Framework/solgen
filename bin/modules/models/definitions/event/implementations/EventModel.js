"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventModel = /** @class */ (function () {
    function EventModel() {
    }
    EventModel.prototype.execute = function (_a) {
        var name = _a.name, inputs = _a.inputs;
        var event = {
            name: name,
            inputs: inputs,
        };
        return event;
    };
    return EventModel;
}());
exports.default = EventModel;

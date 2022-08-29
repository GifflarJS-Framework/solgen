"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventCallModel = /** @class */ (function () {
    function EventCallModel() {
    }
    EventCallModel.prototype.execute = function (_a) {
        var name = _a.name, _b = _a.variables, variables = _b === void 0 ? [] : _b;
        var event = {
            statement: "event_call",
            name: name,
            variables: variables,
        };
        return event;
    };
    return EventCallModel;
}());
exports.default = EventCallModel;

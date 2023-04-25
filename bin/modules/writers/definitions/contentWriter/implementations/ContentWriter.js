"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var ContentWriter = /** @class */ (function () {
    function ContentWriter(assertWriter, assignmentWriter, ifWriter, forWriter, eventCallWriter, variableWriter, methodCallWriter, requireWriter, revertWriter, breakWriter, whileWriter, doWhileWriter, returnWriter, tryWriter, catchWriter, continueWriter, expressionWriter, newContractWriter, customCodeWriter) {
        this.assertWriter = assertWriter;
        this.assignmentWriter = assignmentWriter;
        this.ifWriter = ifWriter;
        this.forWriter = forWriter;
        this.eventCallWriter = eventCallWriter;
        this.variableWriter = variableWriter;
        this.methodCallWriter = methodCallWriter;
        this.requireWriter = requireWriter;
        this.revertWriter = revertWriter;
        this.breakWriter = breakWriter;
        this.whileWriter = whileWriter;
        this.doWhileWriter = doWhileWriter;
        this.returnWriter = returnWriter;
        this.tryWriter = tryWriter;
        this.catchWriter = catchWriter;
        this.continueWriter = continueWriter;
        this.expressionWriter = expressionWriter;
        this.newContractWriter = newContractWriter;
        this.customCodeWriter = customCodeWriter;
        this.statements = {
            assert: this.assertWriter,
            assignment: this.assignmentWriter,
            if: this.ifWriter,
            for: this.forWriter,
            event_call: this.eventCallWriter,
            variable: this.variableWriter,
            method_call: this.methodCallWriter,
            require: this.requireWriter,
            revert: this.revertWriter,
            break: this.breakWriter,
            while: this.whileWriter,
            doWhile: this.doWhileWriter,
            return: this.returnWriter,
            try: this.tryWriter,
            catch: this.catchWriter,
            continue: this.continueWriter,
            expression: this.expressionWriter,
            newContract: this.newContractWriter,
            customCode: this.customCodeWriter,
        };
        // All statement control that doesn't need the ; in the end
        this.controls = ["if", "for", "while", "doWhile", "try", "catch", "customCode"];
        // Avoiding infinite dependency injection
        ifWriter._init(this);
        forWriter._init(this);
        whileWriter._init(this);
        doWhileWriter._init(this);
        tryWriter._init(this);
        catchWriter._init(this);
    }
    ContentWriter.prototype.write = function (content) {
        var _this = this;
        var text = "";
        // Defining the statement content
        content.map(function (item) {
            var handler = _this.statements[item.statement];
            if (handler) {
                var anyItem = item;
                text += handler.write(anyItem);
                if (!_this.controls.includes(item.statement)) {
                    text += ";\n";
                }
            }
            return text;
        });
        return text;
    };
    ContentWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("AssertWriter")),
        __param(1, (0, tsyringe_1.inject)("AssignmentWriter")),
        __param(2, (0, tsyringe_1.inject)("IfWriter")),
        __param(3, (0, tsyringe_1.inject)("ForWriter")),
        __param(4, (0, tsyringe_1.inject)("EventCallWriter")),
        __param(5, (0, tsyringe_1.inject)("VariableWriter")),
        __param(6, (0, tsyringe_1.inject)("MethodCallWriter")),
        __param(7, (0, tsyringe_1.inject)("RequireWriter")),
        __param(8, (0, tsyringe_1.inject)("RevertWriter")),
        __param(9, (0, tsyringe_1.inject)("BreakWriter")),
        __param(10, (0, tsyringe_1.inject)("WhileWriter")),
        __param(11, (0, tsyringe_1.inject)("DoWhileWriter")),
        __param(12, (0, tsyringe_1.inject)("ReturnWriter")),
        __param(13, (0, tsyringe_1.inject)("TryWriter")),
        __param(14, (0, tsyringe_1.inject)("CatchWriter")),
        __param(15, (0, tsyringe_1.inject)("ContinueWriter")),
        __param(16, (0, tsyringe_1.inject)("ExpressionWriter")),
        __param(17, (0, tsyringe_1.inject)("NewContractWriter")),
        __param(18, (0, tsyringe_1.inject)("CustomCodeWriter")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
    ], ContentWriter);
    return ContentWriter;
}());
exports.default = ContentWriter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Modifier Model", function () {
    var modifierModel = tsyringe_1.container.resolve("ModifierModel");
    it("Creating empty modifier", function () {
        // Creating modifier
        var myModifier = modifierModel.execute({
            title: "MyModifier",
            args: [],
        });
        // Expected object
        var expected = JSON.stringify({
            title: "MyModifier",
            args: [],
            isVirtual: false,
            isOverriding: false,
            content: [],
        });
        // Checking properties
        var result = myModifier.toString();
        expect(result).toEqual(expected);
    });
    it("Creating argumented modifier", function () {
        // Creating modifier
        var myModifier = modifierModel.execute({
            title: "MyModifier",
            args: [{ name: "price", type: "uint" }],
        });
        // Expected object
        var expected = JSON.stringify({
            title: "MyModifier",
            args: [{ name: "price", type: "uint" }],
            isVirtual: false,
            isOverriding: false,
            content: [],
        });
        // Checking properties
        var result = myModifier.toString();
        expect(result).toEqual(expected);
    });
    it("Creating contented modifier", function () {
        // Creating modifier
        var myModifier = modifierModel.execute({
            title: "MyModifier",
            args: [{ name: "price", type: "uint" }],
        });
        // Creating condition
        myModifier
            .beginIf("price > 10000")
            .setEventCall("PriceTooLow", ["price"])
            .endIf();
        // Expected object
        var expected = JSON.stringify({
            title: "MyModifier",
            args: [{ name: "price", type: "uint" }],
            isVirtual: false,
            isOverriding: false,
            content: [
                {
                    statement: "if",
                    else: false,
                    condition: "price > 10000",
                    content: [
                        {
                            statement: "event_call",
                            name: "PriceTooLow",
                            variables: ["price"],
                        },
                    ],
                },
            ],
        });
        // Checking properties
        var result = myModifier.toString();
        expect(result).toEqual(expected);
    });
});

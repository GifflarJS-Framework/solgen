"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Modifier Writer", function () {
    var modifierModel = tsyringe_1.container.resolve("ModifierModel");
    var modifierWriter = tsyringe_1.container.resolve("ModifierWriter");
    it("Writing contented modifier", function () {
        // Creating modifier
        var myModifier = modifierModel.execute({
            title: "MyModifier",
            args: [
                { name: "price", type: "uint" },
                { name: "arg2", type: "uint" },
            ],
        });
        // Creating condition
        myModifier
            .beginIf("price > 10000")
            .setEventCall("PriceTooLow", ["price"])
            .endIf();
        // Writing modifier
        var result = modifierWriter.write([myModifier]);
        //Expected text
        var expected = "modifier MyModifier(uint price, uint arg2){\n" +
            "if(price > 10000){\n" +
            "emit PriceTooLow(price);\n" +
            "}\n" +
            "_;\n" +
            "}\n\n";
        expect(expected).toEqual(result);
    });
    it("Writing virtual contented modifier", function () {
        // Creating modifier
        var myModifier = modifierModel.execute({
            title: "MyModifier",
            args: [
                { name: "price", type: "uint" },
                { name: "arg2", type: "uint" },
            ],
            isVirtual: true,
        });
        // Creating condition
        myModifier
            .beginIf("price > 10000")
            .setEventCall("PriceTooLow", ["price"])
            .endIf();
        // Writing modifier
        var result = modifierWriter.write([myModifier]);
        //Expected text
        var expected = "modifier MyModifier(uint price, uint arg2) virtual{\n" +
            "if(price > 10000){\n" +
            "emit PriceTooLow(price);\n" +
            "}\n" +
            "_;\n" +
            "}\n\n";
        expect(expected).toEqual(result);
    });
    it("Writing virtual overrided contented modifier", function () {
        // Creating modifier
        var myModifier = modifierModel.execute({
            title: "MyModifier",
            args: [
                { name: "price", type: "uint" },
                { name: "arg2", type: "uint" },
            ],
            isVirtual: true,
            isOverriding: true,
        });
        // Creating condition
        myModifier
            .beginIf("price > 10000")
            .setEventCall("PriceTooLow", ["price"])
            .endIf();
        // Writing modifier
        var result = modifierWriter.write([myModifier]);
        //Expected text
        var expected = "modifier MyModifier(uint price, uint arg2) virtual override{\n" +
            "if(price > 10000){\n" +
            "emit PriceTooLow(price);\n" +
            "}\n" +
            "_;\n" +
            "}\n\n";
        expect(expected).toEqual(result);
    });
});

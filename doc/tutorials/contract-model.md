# Usage

```js
const contractModel = createContractModel("MyContract");
const event = contractModel
  .createEvent("temperatureOverflow")
  .setInput("string", "_message");

contractModel.createVariable("string", "tmp", "public");

contractModel
  .createFunction("myFunction")
  .setInput("string", "_message")
  .setOutput("message")
  .setVariable("string", "tmp")
  .setCallEvent(event)
  .setAssignment("message", "_message")
  .beginIf("val == 1")
  .beginIf("val == 1")
  .setAssignment("message", "_message")
  .endIf()
  .endIf();
```

# Result

```js
{
      name: "MyContract",
      contract: {
        variables: [
          {
            type: "string",
            name: "tmp",
            scope: "public",
            value: "",
            setMethod: false,
          },
        ],
        functions: [
          {
            name: "myFunction",
            isConstructor: false,
            inputs: [{ name: "_message", type: "string" }],
            outputs: ["message"],
            content: [
              {
                statement: "variable",
                type: "string",
                name: "tmp",
                value: "",
              },
              {
                statement: "callevent",
                name: "temperatureOverflow",
                inputs: [{ name: "_message", type: "string" }],
              },
              {
                statement: "assignment",
                variable: "message",
                value: "_message",
              },
              {
                statement: "if",
                condition: "val == 1",
                content: [
                  {
                    statement: "if",
                    condition: "val == 1",
                    content: [
                      {
                        statement: "assignment",
                        variable: "message",
                        value: "_message",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
```

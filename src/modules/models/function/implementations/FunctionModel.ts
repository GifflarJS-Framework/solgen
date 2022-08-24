import { IContentModel } from "@models/content/types/IContentModel";
import helpers from "@utils/helpers";
import { ITypeName } from "modules/types/ITypeName";
import { inject, injectable } from "tsyringe";
import { ICreateFunctionDTO } from "../types/ICreateFunctionDTO";
import { IFunction } from "../types/IFunction";
import { IFunctionJson } from "../types/IFunctionJson";
import { IFunctionModel } from "../types/IFunctionModel";
import { IInput } from "../types/IInput";
import { IOutput } from "../types/IOutput";

@injectable()
class FunctionModel implements IFunctionModel {
  constructor(
    @inject("ContentModel")
    private contentModel: IContentModel
  ) {}

  execute({
    name,
    scope,
    isConstructor = false,
    stateMutability,
    inputs,
    outputs,
    stateVars = [],
  }: ICreateFunctionDTO): IFunction {
    const content_json = this.contentModel.execute({ stateVars });

    const myFunction: IFunction = {
      name,
      scope,
      isConstructor: isConstructor || false,
      stateMutability,
      inputs: inputs || [],
      outputs: outputs || [],
      modifiers: [],
      ...content_json,

      json(): IFunctionJson {
        const jsonfunction = JSON.stringify(this);
        return JSON.parse(jsonfunction);
      },

      toString(): string {
        return JSON.stringify(this);
      },

      setInput(type: ITypeName, variable: string): IFunction {
        // Creating input
        const newInput: IInput = {
          name: variable,
          type: helpers.writeTypeName(type),
        };
        this.inputs.push(newInput);

        return this;
      },

      setOutput(type: ITypeName, variable?: string): IFunction {
        // Creating output
        const newOutput: IOutput = {
          type: helpers.writeTypeName(type),
        };
        if (variable) newOutput.name = variable;
        this.outputs.push(newOutput);

        return this;
      },
    };

    return myFunction;
  }
}

export default FunctionModel;

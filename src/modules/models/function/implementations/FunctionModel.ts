import { IContentModel } from "@models/content/types/IContentModel";
import { inject, injectable } from "tsyringe";
import { ICreateFunctionDTO } from "../dtos/ICreateFunctionDTO";
import { IFunction } from "../types/IFunction";
import { IFunctionJson } from "../types/IFunctionJson";
import { IFunctionModel } from "../types/IFunctionModel";
import { IInput } from "../types/IInput";

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
    inputs,
    outputs,
    globalVars = [],
  }: ICreateFunctionDTO): IFunction {
    const content_json = this.contentModel.execute({ globalVars });

    const myFunction: IFunction = {
      name,
      scope,
      isConstructor: isConstructor || false,
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

      setInput(type: string, variable: string): IFunction {
        // Creating input
        const newInput: IInput = {
          name: variable,
          type,
        };
        this.inputs.push(newInput);

        return this;
      },

      setOutput(variable: string): IFunction {
        this.outputs.push(variable);
        return this;
      },
    };

    return myFunction;
  }
}

export default FunctionModel;

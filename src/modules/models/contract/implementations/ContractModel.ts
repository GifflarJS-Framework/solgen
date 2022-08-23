import { IFunction } from "@models/function/types/IFunction";
import { IInput } from "@models/function/types/IInput";
import { IContract } from "../types/IContract";
import { IContractJson } from "../types/IContractJson";
import { inject, injectable } from "tsyringe";
import { IFunctionModel } from "@models/function/types/IFunctionModel";
import { IContractItem } from "../types/IContractItem";
import { IContractModel } from "../types/IContractModel";
import { IContractBodyModel } from "@models/contractBody/types/IContractBodyModel";
import { IOutput } from "@models/function/types/IOutput";
import { IInheritsModel } from "@models/inherits/types/IInheritsModel";
import { IInherits } from "@models/inherits/types/IInherits";

@injectable()
class ContractModel implements IContractModel {
  constructor(
    @inject("FunctionModel")
    private functionModel: IFunctionModel,
    @inject("InheritsModel")
    private inheritsModel: IInheritsModel,
    @inject("ContractBodyModel")
    private contractBodyModel: IContractBodyModel
  ) {}

  execute(contractName: string): IContract {
    // Body of the contract
    const contractBody = this.contractBodyModel.execute();

    const contract: IContractItem = {
      name: contractName,
      inherits: [],
      ...contractBody.body,
    };

    const toJson = (): IContractJson => {
      const json = JSON.stringify({ contract });
      return JSON.parse(json);
    };

    const setInheritance = (
      identifier: string,
      args?: Array<string>
    ): IInherits => {
      const inherits = this.inheritsModel.execute({ identifier, args });
      contract.inherits.push(inherits);
      return inherits;
    };

    const createConstructor = (
      scope: string,
      inputs?: Array<IInput>,
      outputs?: Array<IOutput>
    ): IFunction => {
      const _function = this.functionModel.execute({
        name: "",
        scope,
        isConstructor: true,
        inputs,
        outputs,
        stateVars: contract.variables,
      });
      contract.functions.push(_function);

      return _function;
    };

    const _assignFunctions = (): IContract => {
      const _obj: IContract = {
        contract,
        code: "",
        json: {},
        instance: undefined,
        toJson,
        ...contractBody,
        createConstructor,
        setInheritance,
        toString: (): string => {
          return JSON.stringify({ contract: _obj.contract });
        },
      };

      return _obj;
    };

    const json: IContract = _assignFunctions();
    return json;
  }
}

export default ContractModel;

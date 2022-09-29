import { IFunction } from "@models/definitions/function/types/IFunction";
import { IContract } from "../types/IContract";
import { IContractJson } from "../types/IContractJson";
import { inject, injectable } from "tsyringe";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IContractItem } from "../types/IContractItem";
import { IContractModel } from "../types/IContractModel";
import { IContractBodyModel } from "@models/toplevels/contractBody/types/IContractBodyModel";
import { IInheritsModel } from "@models/toplevels/inherits/types/IInheritsModel";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IFallbackModel } from "@models/definitions/fallback/types/IFallbackModel";
import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IReceiveModel } from "@models/definitions/receive/types/IReceiveModel";
import { IReceive } from "@models/definitions/receive/types/IReceive";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import helpers from "@utils/helpers";
import { IModifierInvocation } from "@modules/models/definitions/function/types/IModifierInvocation";

@injectable()
class ContractModel implements IContractModel {
  constructor(
    @inject("FunctionModel")
    private functionModel: IFunctionModel,
    @inject("InheritsModel")
    private inheritsModel: IInheritsModel,
    @inject("ContractBodyModel")
    private contractBodyModel: IContractBodyModel,
    @inject("FallbackModel")
    private fallbackModel: IFallbackModel,
    @inject("ReceiveModel")
    private receiveModel: IReceiveModel
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
      if (!contract.inherits) contract.inherits = [];
      contract.inherits.push(inherits);
      return inherits;
    };

    const createFallback = (options: {
      isPayable?: boolean;
      modifiers?: IModifierInvocation[];
      overrides?: boolean;
      virtual?: boolean;
    }): IFallback => {
      const fallback = this.fallbackModel.execute({
        isPayable: options.isPayable,
        modifiers: options.modifiers,
        overrides: options.overrides,
        virtual: options.virtual,
        stateVars: contract.variables || [],
      });
      contract.fallback = fallback;
      return fallback;
    };

    const createReceive = (): IReceive => {
      const receive = this.receiveModel.execute({
        stateVars: contract.variables || [],
      });
      contract.receive = receive;
      return receive;
    };

    const createConstructor = (
      inputs: Array<ITypeNameInput> = []
    ): IFunction => {
      const _function = this.functionModel.execute({
        name: "",
        scope: "public",
        isConstructor: true,
        inputs: helpers.castITypeNameInputsToInputs(inputs),
        stateVars: contract.variables,
      });
      if (!contract.functions) contract.functions = [];
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
        createFallback,
        createReceive,
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

import { IContractBodyModel } from "@models/toplevels/contractBody/types/IContractBodyModel";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IInheritsModel } from "@models/toplevels/inherits/types/IInheritsModel";
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
import { inject, injectable } from "tsyringe";
import { IInterface } from "../types/IInterface";
import { IInterfaceItem } from "../types/IInterfaceItem";
import { IInterfaceJson } from "../types/IInterfaceJson";
import { IInterfaceModel } from "../types/IInterfaceModel";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import helpers from "@utils/helpers";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";

@injectable()
class InterfaceModel implements IInterfaceModel {
  constructor(
    @inject("ContractBodyModel")
    private contractBodyModel: IContractBodyModel,
    @inject("InheritsModel")
    private inheritsModel: IInheritsModel,
    @inject("FunctionModel")
    private functionModel: IFunctionModel
  ) {}

  execute(interfaceName: string): IInterface {
    // Body of the interface (almost same as contract)
    const contractBody = this.contractBodyModel.execute();

    // Removing some unused statements in interfaces
    const { variables, mappings, usings, ...interfaceBody } = contractBody.body;

    // Creating interface model
    const _interface: IInterfaceItem = {
      name: interfaceName,
      inherits: [],
      ...interfaceBody,
    };

    const setInheritance = (
      identifier: string,
      args?: Array<string>
    ): IInherits => {
      const inherits = this.inheritsModel.execute({ identifier, args });
      if (!_interface.inherits) _interface.inherits = [];
      _interface.inherits.push(inherits);
      return inherits;
    };

    const createFunction = (
      name: string,
      scope = "external",
      inputs: Array<ITypeNameInput> = [],
      outputs: Array<ITypeNameOutput> = [],
      stateMutability?: IFunctionStateMutabilityType
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope,
        inputs: helpers.castITypeNameInputsToInputs(inputs),
        outputs: helpers.castITypeNameOutputsToOutputs(outputs),
        isConstructor: false,
        stateMutability,
      });
      if (!_interface.functions) _interface.functions = [];
      _interface.functions.push(_function);

      return _function;
    };

    const toJson = (): IInterfaceJson => {
      const json = JSON.stringify({ interface: _interface });
      return JSON.parse(json);
    };

    const _assignFunctions = (): IInterface => {
      const _obj: IInterface = {
        interface: _interface,
        code: "",
        json: {},
        setInheritance,
        createEvent: contractBody.createEvent,
        createFunction,
        createEnum: contractBody.createEnum,
        createModifier: contractBody.createModifier,
        createStruct: contractBody.createStruct,
        toJson,
        toString: (): string => {
          return JSON.stringify({ interface: _obj.interface });
        },
      };

      return _obj;
    };

    const json: IInterface = _assignFunctions();
    return json;
  }
}

export default InterfaceModel;

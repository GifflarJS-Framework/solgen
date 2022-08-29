import { IContractBodyModel } from "@models/toplevels/contractBody/types/IContractBodyModel";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IInput } from "@models/definitions/function/types/IInput";
import { IOutput } from "@models/definitions/function/types/IOutput";
import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IInheritsModel } from "@models/toplevels/inherits/types/IInheritsModel";
import { IFunctionStateMutabilityType } from "modules/types/IFunctionStateMutabilityType";
import { inject, injectable } from "tsyringe";
import { IInterface } from "../types/IInterface";
import { IInterfaceItem } from "../types/IInterfaceItem";
import { IInterfaceJson } from "../types/IInterfaceJson";
import { IInterfaceModel } from "../types/IInterfaceModel";

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
      inputs: Array<IInput>,
      outputs: Array<IOutput>,
      stateMutability?: IFunctionStateMutabilityType
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope: "external",
        inputs,
        outputs,
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

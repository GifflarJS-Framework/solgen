import { ICustomError } from "@models/definitions/customError/types/ICustomError";
import { ICustomErrorModel } from "@models/definitions/customError/types/ICustomErrorModel";
import { IEnum } from "@models/definitions/enum/types/IEnum";
import { IEnumModel } from "@models/definitions/enum/types/IEnumModel";
import { IEvent } from "@models/definitions/event/types/IEvent";
import IEventModel from "@models/definitions/event/types/IEventModel";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IInput } from "@models/definitions/function/types/IInput";
import { IOutput } from "@models/definitions/function/types/IOutput";
import { IModifier } from "@models/definitions/modifier/types/IModifier";
import { IModifierModel } from "@models/definitions/modifier/types/IModifierModel";
import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { IStateMappingModel } from "@models/definitions/stateMapping/types/IStateMappingModel";
import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IStateVariableModel } from "@models/definitions/stateVariable/types/IStateVariableModel";
import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IStructModel } from "@models/definitions/struct/types/IStructModel";
import { IUsing } from "@models/definitions/using/types/IUsing";
import { IUsingModel } from "@models/definitions/using/types/IUsingModel";
import { ICreateMappingDTO } from "@models/statements/mapping/types/ICreateMappingDTO";
import { ICreateVariableDTO } from "@models/statements/variable/types/ICreateVariableDTO";
import helpers from "@utils/helpers";
import { IFunctionStateMutabilityType } from "modules/types/IFunctionStateMutabilityType";
import { IMappingKeyType } from "modules/types/IMappingKeyType";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { ITypeName } from "modules/types/ITypeName";
import { IVisibility } from "modules/types/IVisibility";
import { inject, injectable } from "tsyringe";
import { IContractBody } from "../types/IContractBody";
import { IContractBodyItem } from "../types/IContractBodyItem";
import { IContractBodyModel } from "../types/IContractBodyModel";

@injectable()
class ContractBodyModel implements IContractBodyModel {
  constructor(
    @inject("StateVariableModel")
    private stateVariableModel: IStateVariableModel,
    @inject("FunctionModel")
    private functionModel: IFunctionModel,
    @inject("EventModel")
    private eventModel: IEventModel,
    @inject("UsingModel")
    private usingModel: IUsingModel,
    @inject("ModifierModel")
    private modifierModel: IModifierModel,
    @inject("CustomErrorModel")
    private customErrorModel: ICustomErrorModel,
    @inject("StateMappingModel")
    private stateMappingModel: IStateMappingModel,
    @inject("EnumModel")
    private enumModel: IEnumModel,
    @inject("StructModel")
    private structModel: IStructModel
  ) {}

  execute(): IContractBody {
    const body: IContractBodyItem = {
      usings: [],
      structs: [],
      variables: [],
      mappings: [],
      events: [],
      modifiers: [],
      customErrors: [],
      functions: [],
    };

    const createUsing = (identifier: string, type: ITypeName): IUsing => {
      const using = this.usingModel.execute({
        identifier,
        type: helpers.writeTypeName(type),
      });
      if (!body.usings) body.usings = [];
      body.usings.push(using);
      return using;
    };

    const createEvent = (name: string, inputs: Array<IInput>): IEvent => {
      const event = this.eventModel.execute({ name, inputs });
      if (!body.events) body.events = [];
      body.events.push(event);
      return event;
    };

    const createStruct = (
      identifier: string,
      variables: Array<ICreateVariableDTO>,
      mappings: Array<ICreateMappingDTO>
    ): IStruct => {
      const struct = this.structModel.execute({
        identifier,
        variables,
        mappings,
      });
      if (!body.structs) body.structs = [];
      body.structs.push(struct);
      return struct;
    };

    const createEnum = (
      identifier: string,
      identifiersOptions: string[]
    ): IEnum => {
      const _enum = this.enumModel.execute({ identifier, identifiersOptions });
      if (!body.enums) body.enums = [];
      body.enums.push(_enum);
      return _enum;
    };

    const createMapping = (
      type: IMappingKeyType,
      typeName: IMappingTypeName,
      name: string,
      scope?: IVisibility
    ): IStateMapping => {
      const mapping = this.stateMappingModel.execute({
        type,
        typeName,
        name,
        scope,
      });
      if (!body.mappings) body.mappings = [];
      body.mappings.push(mapping);
      return mapping;
    };

    const createCustomError = (
      name: string,
      args: Array<IInput>
    ): ICustomError => {
      const customError = this.customErrorModel.execute({ name, args });
      if (!body.customErrors) body.customErrors = [];
      body.customErrors.push(customError);
      return customError;
    };

    const createModifier = (
      title: string,
      args: Array<IInput>,
      options: { isOverriding?: boolean; isVirtual?: boolean }
    ): IModifier => {
      const modifier = this.modifierModel.execute({
        title,
        args,
        isOverriding: options.isOverriding,
        isVirtual: options.isVirtual,
        stateVars: body.variables,
      });
      if (!body.modifiers) body.modifiers = [];
      body.modifiers.push(modifier);
      return modifier;
    };

    const createVariable = (
      type: ITypeName,
      name: string,
      scope: IVisibility,
      value?: string
    ): IStateVariable => {
      const variable = this.stateVariableModel.execute({
        type: helpers.writeTypeName(type),
        name,
        scope,
        value,
      });
      if (!body.variables) body.variables = [];
      body.variables.push(variable);
      return variable;
    };

    const createFunction = (
      name: string,
      scope: string,
      inputs: Array<IInput>,
      outputs: Array<IOutput>,
      stateMutability?: IFunctionStateMutabilityType
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope,
        inputs,
        outputs,
        isConstructor: false,
        stateVars: body.variables,
        stateMutability,
      });
      if (!body.functions) body.functions = [];
      body.functions.push(_function);

      return _function;
    };

    const _assignFunctions = (): IContractBody => {
      const _obj: IContractBody = {
        body,
        createUsing,
        createEvent,
        createVariable,
        createFunction,
        createModifier,
        createCustomError,
        createMapping,
        createEnum,
        createStruct,
      };

      return _obj;
    };

    const json: IContractBody = _assignFunctions();
    return json;
  }
}

export default ContractBodyModel;

import { IEnum } from "@models/definitions/enum/types/IEnum";
import { IEnumModel } from "@models/definitions/enum/types/IEnumModel";
import { IEvent } from "@models/definitions/event/types/IEvent";
import IEventModel from "@models/definitions/event/types/IEventModel";
import { IFunction } from "@models/definitions/function/types/IFunction";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
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
import { IFunctionStateMutabilityType } from "@modules/types/IFunctionStateMutabilityType";
import { IMappingKeyType } from "@modules/types/IMappingKeyType";
import { IMappingTypeName } from "@modules/types/IMappingTypeName";
import { ITypeName } from "@modules/types/ITypeName";
import { IVisibility } from "@modules/types/IVisibility";
import { inject, injectable } from "tsyringe";
import { IContractBody } from "../types/IContractBody";
import { IContractBodyItem } from "../types/IContractBodyItem";
import { IContractBodyModel } from "../types/IContractBodyModel";
import { ITypeNameInput } from "@modules/types/ITypeNameInput";
import { ITypeNameOutput } from "@modules/types/ITypeNameOutput";
import { IExpressionValue } from "@modules/models/statements/expression/types/IExpressionValue";
import { IVariableStateMutabilityType } from "@modules/types/IVariableStateMutabilityType";
import { IModifierInvocation } from "@modules/models/definitions/function/types/IModifierInvocation";
import { ICustomCodeModel } from "@modules/models/custom/customCode/types/ICustomCodeModel";
import { ICustomCode } from "@modules/models/custom/customCode/types/ICustomCode";

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
    @inject("StateMappingModel")
    private stateMappingModel: IStateMappingModel,
    @inject("EnumModel")
    private enumModel: IEnumModel,
    @inject("StructModel")
    private structModel: IStructModel,
    @inject("CustomCodeModel")
    private customCodeModel: ICustomCodeModel
  ) {}

  execute(): IContractBody {
    const body: IContractBodyItem = {
      usings: [],
      structs: [],
      variables: [],
      mappings: [],
      events: [],
      modifiers: [],
      functions: [],
    };

    const createCustomCode = (code: string): ICustomCode => {
      const customCode = this.customCodeModel.execute({
        code,
      });
      if (!body.usings) body.usings = [];
      if (!body.customCodes) body.customCodes = [];
      body.customCodes.push(customCode);
      return customCode;
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

    const createEvent = (
      name: string,
      inputs: Array<ITypeNameInput> = []
    ): IEvent => {
      const event = this.eventModel.execute({
        name,
        inputs: helpers.castITypeNameInputsToInputs(inputs),
      });
      if (!body.events) body.events = [];
      body.events.push(event);
      return event;
    };

    const createStruct = (
      identifier: string,
      variables?: Array<ICreateVariableDTO>,
      mappings?: Array<ICreateMappingDTO>
    ): IStruct => {
      const struct = this.structModel.execute({
        identifier,
        variables: variables || [],
        mappings: mappings || [],
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

    /**
     * *Custom errors are only available starting from v0.8.4 solidity version
     */
    // const createCustomError = (
    //   name: string,
    //   args: Array<ITypeNameInput>
    // ): ICustomError => {
    //   const customError = this.customErrorModel.execute({
    //     name,
    //     args: helpers.castITypeNameInputsToInputs(args),
    //   });
    //   if (!body.customErrors) body.customErrors = [];
    //   body.customErrors.push(customError);
    //   return customError;
    // };

    const createModifier = (
      title: string,
      args: Array<ITypeNameInput>,
      options?: { isOverriding?: boolean; isVirtual?: boolean }
    ): IModifier => {
      const modifier = this.modifierModel.execute({
        title,
        args: helpers.castITypeNameInputsToInputs(args),
        isOverriding: options?.isOverriding,
        isVirtual: options?.isVirtual,
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
      options?: {
        expressionValue?: IExpressionValue;
        stateMutability?: IVariableStateMutabilityType;
      }
    ): IStateVariable => {
      const variable = this.stateVariableModel.execute({
        type: helpers.writeTypeName(type),
        name,
        scope,
        stateMutability: options?.stateMutability,
        expressionValue: options?.expressionValue,
      });
      if (!body.variables) body.variables = [];
      body.variables.push(variable);
      return variable;
    };

    const createFunction = (
      name: string,
      scope: IVisibility,
      inputs: Array<ITypeNameInput> = [],
      outputs: Array<ITypeNameOutput> = [],
      options?: {
        stateMutability?: IFunctionStateMutabilityType;
        modifiers?: IModifierInvocation[];
        overrides?: boolean;
        virtual?: boolean;
      }
    ): IFunction => {
      const _function = this.functionModel.execute({
        name,
        scope,
        inputs: helpers.castITypeNameInputsToInputs(inputs),
        outputs: helpers.castITypeNameOutputsToOutputs(outputs),
        isConstructor: false,
        stateVars: body.variables,
        stateMutability: options?.stateMutability,
        modifiers: options?.modifiers,
        overrides: options?.overrides,
        virtual: options?.virtual,
      });
      if (!body.functions) body.functions = [];
      body.functions.push(_function);

      return _function;
    };

    const _assignFunctions = (): IContractBody => {
      const _obj: IContractBody = {
        body,
        createCustomCode,
        createUsing,
        createEvent,
        createVariable,
        createFunction,
        createModifier,
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

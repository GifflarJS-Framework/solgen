import { IContractBodyModel } from "../../contractBody/types/IContractBodyModel";
import { IFunctionModel } from "../../../definitions/function/types/IFunctionModel";
import { IInheritsModel } from "../../inherits/types/IInheritsModel";
import { IInterface } from "../types/IInterface";
import { IInterfaceModel } from "../types/IInterfaceModel";
declare class InterfaceModel implements IInterfaceModel {
    private contractBodyModel;
    private inheritsModel;
    private functionModel;
    constructor(contractBodyModel: IContractBodyModel, inheritsModel: IInheritsModel, functionModel: IFunctionModel);
    execute(interfaceName: string): IInterface;
}
export default InterfaceModel;

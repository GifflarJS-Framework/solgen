import { INewContract } from "../../../models/newcontract/types/INewContract";
import { IVariable } from "../../../models/variable/types/IVariable";
import { INewContractWriter } from "../../statements/newContractWriter/types/INewContractWriter";
import { IVariableStatements } from "../types/IVariableStatements";
import { IVariableWriter } from "../types/IVariableWriter";
declare class VariableWriter implements IVariableWriter {
    private newContractWriter;
    constructor(newContractWriter: INewContractWriter);
    statements: IVariableStatements;
    _handleValue(value: string | INewContract): string;
    write(variable: IVariable): string;
}
export default VariableWriter;

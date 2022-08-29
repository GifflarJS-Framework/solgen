import { INewContract } from "../../../../models/statements/newcontract/types/INewContract";
import { ILocalVariable } from "../../../../models/statements/variable/types/ILocalVariable";
import { INewContractWriter } from "../../newContractWriter/types/INewContractWriter";
import { IVariableStatements } from "../types/IVariableStatements";
import { IVariableWriter } from "../types/IVariableWriter";
declare class VariableWriter implements IVariableWriter {
    private newContractWriter;
    constructor(newContractWriter: INewContractWriter);
    statements: IVariableStatements;
    _handleValue(value: string | INewContract): string;
    write(variable: ILocalVariable): string;
}
export default VariableWriter;

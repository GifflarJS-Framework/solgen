import { IExpression } from "../../../../models/statements/expression/types/IExpression";
import { INewContractModel } from "../../../../models/statements/newcontract/types/INewContractModel";
import { INewContractWriter } from "../../newContractWriter/types/INewContractWriter";
import { IExpressionWriter } from "../types/IExpressionWriter";
declare class ExpressionWriter implements IExpressionWriter {
    private newContractModel;
    private newContractWriter;
    constructor(newContractModel: INewContractModel, newContractWriter: INewContractWriter);
    write(expression: IExpression): string;
}
export default ExpressionWriter;

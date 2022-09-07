import { IStateVariable } from "../../../../models/definitions/stateVariable/types/IStateVariable";
import { IExpressionModel } from "../../../../models/statements/expression/types/IExpressionModel";
import { IExpressionWriter } from "../../../statements/expressionWriter/types/IExpressionWriter";
import { IStateVariableWriter } from "../types/IStateVariableWriter";
declare class StateVariableWriter implements IStateVariableWriter {
    private expressionWriter;
    private expressionModel;
    constructor(expressionWriter: IExpressionWriter, expressionModel: IExpressionModel);
    write(variables: Array<IStateVariable>): string;
}
export default StateVariableWriter;

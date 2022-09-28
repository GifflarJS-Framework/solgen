import { IContents } from "../../../../models/definitions/content/types/IContents";
import { IAssignmentWriter } from "../../../statements/assignmentWriter/types/IAssignmentWriter";
import { IBreakWriter } from "../../../statements/breakWriter/types/IBreakWriter";
import { IDoWhileWriter } from "../../../statements/doWhileWriter/types/IDoWhileWriter";
import { IEventCallWriter } from "../../../statements/eventCallWriter/types/IEventCallWriter";
import { IForWriter } from "../../../statements/forWriter/types/IForWriter";
import { IIfWriter } from "../../../statements/ifWriter/types/IIfWriter";
import { IMethodCallWriter } from "../../../statements/methodCallWriter/types/IMethodCallWriter";
import { IRequireWriter } from "../../../statements/requireWriter/types/IRequireWriter";
import { IRevertWriter } from "../../../statements/revertWriter/types/IRevertWriter";
import { IWhileWriter } from "../../../statements/whileWriter/types/IWhileWriter";
import { IVariableWriter } from "../../../statements/variableWriter/types/IVariableWriter";
import { IContentWriter } from "../types/IContentWriter";
import { IReturnWriter } from "../../../statements/returnWriter/types/IReturnWriter";
import { IAssert } from "../../../../models/statements/assert/types/IAssert";
import { ITryWriter } from "../../../statements/tryWriter/types/ITryWriter";
import { ICatchWriter } from "../../../statements/catchWriter/types/ICatchWriter";
import { IContinueWriter } from "../../../statements/continueWriter/types/IContinueWriter";
import { IExpressionWriter } from "../../../statements/expressionWriter/types/IExpressionWriter";
import { INewContractWriter } from "../../../statements/newContractWriter/types/INewContractWriter";
declare class ContentWriter implements IContentWriter {
    private assertWriter;
    private assignmentWriter;
    private ifWriter;
    private forWriter;
    private eventCallWriter;
    private variableWriter;
    private methodCallWriter;
    private requireWriter;
    private revertWriter;
    private breakWriter;
    private whileWriter;
    private doWhileWriter;
    private returnWriter;
    private tryWriter;
    private catchWriter;
    private continueWriter;
    private expressionWriter;
    private newContractWriter;
    constructor(assertWriter: IAssert, assignmentWriter: IAssignmentWriter, ifWriter: IIfWriter, forWriter: IForWriter, eventCallWriter: IEventCallWriter, variableWriter: IVariableWriter, methodCallWriter: IMethodCallWriter, requireWriter: IRequireWriter, revertWriter: IRevertWriter, breakWriter: IBreakWriter, whileWriter: IWhileWriter, doWhileWriter: IDoWhileWriter, returnWriter: IReturnWriter, tryWriter: ITryWriter, catchWriter: ICatchWriter, continueWriter: IContinueWriter, expressionWriter: IExpressionWriter, newContractWriter: INewContractWriter);
    statements: {
        assert: IAssert;
        assignment: IAssignmentWriter;
        if: IIfWriter;
        for: IForWriter;
        event_call: IEventCallWriter;
        variable: IVariableWriter;
        method_call: IMethodCallWriter;
        require: IRequireWriter;
        revert: IRevertWriter;
        break: IBreakWriter;
        while: IWhileWriter;
        doWhile: IDoWhileWriter;
        return: IReturnWriter;
        try: ITryWriter;
        catch: ICatchWriter;
        continue: IContinueWriter;
        expression: IExpressionWriter;
        newContract: INewContractWriter;
    };
    controls: string[];
    write(content: Array<IContents>): string;
}
export default ContentWriter;

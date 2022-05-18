import { IContents } from "../../../models/content/types/IContents";
import { IEventWriter } from "../../eventWriter/types/IEventWriter";
import { IAssignmentWriter } from "../../statements/assignmentWriter/types/IAssignmentWriter";
import { IEventCallWriter } from "../../statements/eventCallWriter/types/IEventCallWriter";
import { IForWriter } from "../../statements/forWriter/types/IForWriter";
import { IIfWriter } from "../../statements/ifWriter/types/IIfWriter";
import { IMethodCallWriter } from "../../statements/methodCallWriter/types/IMethodCallWriter";
import { IVariableWriter } from "../../variableWriter/types/IVariableWriter";
import { IContentWriter } from "../types/IContentWriter";
declare class ContentWriter implements IContentWriter {
    private assignmentWriter;
    private ifWriter;
    private forWriter;
    private eventCallWriter;
    private eventWriter;
    private variableWriter;
    private methodCallWriter;
    constructor(assignmentWriter: IAssignmentWriter, ifWriter: IIfWriter, forWriter: IForWriter, eventCallWriter: IEventCallWriter, eventWriter: IEventWriter, variableWriter: IVariableWriter, methodCallWriter: IMethodCallWriter);
    statements: {
        assignment: IAssignmentWriter;
        if: IIfWriter;
        for: IForWriter;
        event: IEventWriter;
        event_call: IEventCallWriter;
        variable: IVariableWriter;
        method_call: IMethodCallWriter;
    };
    controls: string[];
    write(content: Array<IContents>): string;
}
export default ContentWriter;

import { IAssignment } from "../../../statements/assignment/types/IAssignment";
import { IEventCall } from "../../../statements/eventCall/types/IEventCall";
import { IIf } from "../../../statements/if/types/IIf";
import { IMethodCall } from "../../../statements/methodcall/types/IMethodCall";
import { ILocalVariable } from "../../../statements/variable/types/ILocalVariable";
export declare type IContents = IAssignment | IEventCall | IIf | ILocalVariable | IMethodCall;

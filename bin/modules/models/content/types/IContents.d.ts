import { IAssignment } from "../../assignment/types/IAssignment";
import { IEventCall } from "../../eventCall/types/IEventCall";
import { IIf } from "../../if/types/IIf";
import { IMethodCall } from "../../methodcall/types/IMethodCall";
import { ILocalVariable } from "../../variable/types/ILocalVariable";
export declare type IContents = IAssignment | IEventCall | IIf | ILocalVariable | IMethodCall;

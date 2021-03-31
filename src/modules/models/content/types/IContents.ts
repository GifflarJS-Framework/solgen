import { IAssignment } from "@models/assignment/types/IAssignment";
import { IEventCall } from "@models/eventCall/types/IEventCall";
import { IIf } from "@models/if/types/IIf";
import { IMethodCall } from "@models/methodcall/types/IMethodCall";
import { ILocalVariable } from "@models/variable/types/ILocalVariable";

export type IContents =
  | IAssignment
  | IEventCall
  | IIf
  | ILocalVariable
  | IMethodCall;

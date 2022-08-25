import { IAssignment } from "@models/statements/assignment/types/IAssignment";
import { IEventCall } from "@models/statements/eventCall/types/IEventCall";
import { IIf } from "@models/statements/if/types/IIf";
import { IMethodCall } from "@models/statements/methodcall/types/IMethodCall";
import { ILocalVariable } from "@models/statements/variable/types/ILocalVariable";

export type IContents =
  | IAssignment
  | IEventCall
  | IIf
  | ILocalVariable
  | IMethodCall;

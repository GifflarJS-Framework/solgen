import { IStackItem } from "@models/definitions/content/types/IStackItem";
import { ILocalVariable } from "@models/statements/variable/types/ILocalVariable";

export interface IFor extends IStackItem {
  statement: "for";
  variable?: ILocalVariable;
  condition?: string;
  expression?: string;
}

import { IContent } from "@models/content/types/IContent";

export interface IIf {
  statement: string;
  else: boolean;
  condition: string;
  content: Array<IContent>;
}

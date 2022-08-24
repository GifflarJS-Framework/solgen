import { IUsing } from "@models/using/types/IUsing";

export interface IUsingWriter {
  write(usings: Array<IUsing>): string;
}

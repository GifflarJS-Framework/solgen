import { IInput } from "@models/function/types/IInput";

export interface ICreateCatchDTO {
  identifier: string;
  parameters: Array<IInput>;
}

import { IInput } from "@modules/types/IInput";

export interface ICreateCatchDTO {
  identifier?: string;
  parameters: Array<IInput>;
}

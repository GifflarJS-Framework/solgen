import { IInput } from "@modules/types/IInput";

export interface ICreateCustomErrorDTO {
  name: string;
  args?: Array<IInput>;
}

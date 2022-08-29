import { IInput } from "@models/definitions/function/types/IInput";

export interface ICreateCustomErrorDTO {
  name: string;
  args?: Array<IInput>;
}

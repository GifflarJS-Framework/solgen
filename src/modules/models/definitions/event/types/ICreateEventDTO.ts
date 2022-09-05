import { IInput } from "@modules/types/IInput";

export interface ICreateEventDTO {
  name: string;
  inputs: Array<IInput>;
}

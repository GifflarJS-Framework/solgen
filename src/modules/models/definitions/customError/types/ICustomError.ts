import { IInput } from "@models/definitions/function/types/IInput";

export interface ICustomError {
  statement: "custom_error";
  name: string;
  args: Array<IInput>;
}

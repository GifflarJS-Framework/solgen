import { ICreateCustomErrorDTO } from "./ICreateCustomError";
import { ICustomError } from "./ICustomError";

export interface ICustomErrorModel {
  execute({ name, args }: ICreateCustomErrorDTO): ICustomError;
}

import { INewContract } from "@models/statements/newcontract/types/INewContract";
import { IContent } from "./IContent";
import { ICreateContentDTO } from "./ICreateContentDTO";

export interface IContentModel {
  execute({ stateVars }: ICreateContentDTO): IContent;
}

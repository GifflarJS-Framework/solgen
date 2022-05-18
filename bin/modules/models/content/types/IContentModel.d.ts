import { IContent } from "./IContent";
import { ICreateContentDTO } from "./ICreateContentDTO";
export interface IContentModel {
    execute({ globalVars }: ICreateContentDTO): IContent;
}

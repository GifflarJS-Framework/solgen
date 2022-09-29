import { IContent } from "../../content/types/IContent";
import { IReceiveJson } from "./IReceiveJson";
export interface IReceive extends IReceiveJson, IContent {
    setModifier(name: string, args?: string[]): IReceive;
}

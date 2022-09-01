import { IContent } from "../../content/types/IContent";
import { IInput } from "../../function/types/IInput";
export interface IModifier extends IContent {
    title: string;
    args: Array<IInput>;
    isVirtual: boolean;
    isOverriding: boolean;
    toString(): string;
}

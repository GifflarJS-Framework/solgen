import { IModifierInvocation } from "../../function/types/IModifierInvocation";
export interface IReceiveJson {
    modifiers?: Array<IModifierInvocation>;
    overrides?: boolean;
    virtual?: boolean;
}

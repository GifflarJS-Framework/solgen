import { IModifierInvocation } from "../../function/types/IModifierInvocation";
export interface IFallbackJson {
    isPayable: boolean;
    modifiers?: Array<IModifierInvocation>;
    overrides?: boolean;
    virtual?: boolean;
}

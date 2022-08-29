import { IInherits } from "../../inherits/types/IInherits";
import { IContractBodyItem } from "../../contractBody/types/IContractBodyItem";
import { IFallback } from "../../../definitions/fallback/types/IFallback";
import { IReceive } from "../../../definitions/receive/types/IReceive";
export interface IContractItem extends IContractBodyItem {
    name: string;
    inherits?: Array<IInherits>;
    fallback?: IFallback;
    receive?: IReceive;
}

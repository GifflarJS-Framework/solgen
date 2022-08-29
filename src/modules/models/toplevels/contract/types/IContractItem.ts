import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IContractBodyItem } from "@models/toplevels/contractBody/types/IContractBodyItem";
import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IReceive } from "@models/definitions/receive/types/IReceive";

export interface IContractItem extends IContractBodyItem {
  name: string;
  inherits?: Array<IInherits>;
  fallback?: IFallback;
  receive?: IReceive;
}

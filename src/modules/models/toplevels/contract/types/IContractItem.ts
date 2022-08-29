import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IContractBodyItem } from "@models/toplevels/contractBody/types/IContractBodyItem";
import { IFallback } from "@models/definitions/fallback/types/IFallback";

export interface IContractItem extends IContractBodyItem {
  name: string;
  inherits?: Array<IInherits>;
  fallback?: IFallback;
}

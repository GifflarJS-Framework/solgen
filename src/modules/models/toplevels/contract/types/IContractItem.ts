import { IInherits } from "@models/toplevels/inherits/types/IInherits";
import { IContractBodyItem } from "@models/toplevels/contractBody/types/IContractBodyItem";

export interface IContractItem extends IContractBodyItem {
  name: string;
  inherits: Array<IInherits>;
}

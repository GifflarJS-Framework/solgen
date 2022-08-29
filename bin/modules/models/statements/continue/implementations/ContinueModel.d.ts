import { IContinue } from "../types/IContinue";
import { IContinueModel } from "../types/IContinueModel";
declare class ContinueModel implements IContinueModel {
    execute(): IContinue;
}
export default ContinueModel;

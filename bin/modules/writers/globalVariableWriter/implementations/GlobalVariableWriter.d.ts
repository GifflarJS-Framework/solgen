import { IGlobalVariable } from "../../../models/globalVariable/types/IGlobalVariable";
import { IGlobalVariableWriter } from "../types/IGlobalVariableWriter";
declare class GlobalVariableWriter implements IGlobalVariableWriter {
    write(variables: IGlobalVariable | Array<IGlobalVariable>): string;
}
export default GlobalVariableWriter;

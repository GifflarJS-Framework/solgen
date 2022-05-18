import { IGlobalVariable } from "../../../models/globalVariable/types/IGlobalVariable";
import { IRequest } from "../../../models/request/types/IRequest";
export interface IGlobalVariableWriter {
    write(variables: IGlobalVariable | Array<IGlobalVariable>, callback: (request: IRequest) => void): string;
}

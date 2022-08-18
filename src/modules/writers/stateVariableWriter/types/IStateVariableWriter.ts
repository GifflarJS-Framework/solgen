import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IRequest } from "@models/request/types/IRequest";

export interface IStateVariableWriter {
  write(
    variables: IStateVariable | Array<IStateVariable>,
    callback: (request: IRequest) => void
  ): string;
}

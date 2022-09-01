import { IStruct } from "../../../../models/definitions/struct/types/IStruct";
export interface IStructWriter {
    write(struct: IStruct): string;
}

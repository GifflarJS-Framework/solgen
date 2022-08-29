import { IUsing } from "../../../../models/definitions/using/types/IUsing";
export interface IUsingWriter {
    write(usings: Array<IUsing>): string;
}

import { IContents } from "../../../../models/definitions/content/types/IContents";
export interface IContentWriter {
    write(content: Array<IContents>): string;
}

import { INewContract } from "../../../../models/statements/newcontract/types/INewContract";
import { INewContractWriter } from "../types/INewContractWriter";
declare class NewContractWriter implements INewContractWriter {
    write(json: INewContract): string;
}
export default NewContractWriter;

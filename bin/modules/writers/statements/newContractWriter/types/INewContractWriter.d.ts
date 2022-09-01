import { INewContract } from "../../../../models/statements/newcontract/types/INewContract";
export interface INewContractWriter {
    write(json: INewContract): string;
}

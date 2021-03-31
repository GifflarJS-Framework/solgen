import { INewContract } from "@models/newcontract/types/INewContract";

export interface INewContractWriter {
  write(json: INewContract): string;
}

import { IGifflarContract } from "./IGifflarContract";
export interface IGifflarContractModel {
    execute(contractName: string): IGifflarContract;
}

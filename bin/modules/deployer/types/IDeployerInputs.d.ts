import { AbiItem } from "web3-utils";
export interface IDeployerInputs {
    abi: AbiItem;
    bytecode: string;
    args: any[];
    from?: string;
    gas?: number;
    gasPrice?: string;
    nonce?: number;
}

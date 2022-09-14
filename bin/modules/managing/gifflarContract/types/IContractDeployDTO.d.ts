export interface IContractDeployDTO {
    args: any[];
    from?: string;
    gas?: number;
    gasPrice?: string;
    nonce?: number;
    accountPrivateKey?: string;
}

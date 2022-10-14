import { INetworkConfig } from "../../../deployer/types/INetworkConfig";
import { IWeb3 } from "../../../deployer/types/IWeb3";
import { IContract } from "../../../models/toplevels/contract/types/IContract";
import { IContractJson } from "../../../models/toplevels/contract/types/IContractJson";
import { IImport } from "../../../models/toplevels/import/types/IImport";
import Web3 from "web3";
import { Account } from "web3-core";
import { Contract } from "web3-eth-contract";
import { IContractDeployDTO } from "./IContractDeployDTO";
export interface IGifflarContract extends IContract {
    /**
     * Redefines the Gifflar Contract name.
     * @param newName The Gifflar contract name
     * @example
     * gContract.setName("MyContract");
     */
    setName(newName: string): void;
    /**
     * Returns the Gifflar Contract name.
     * @example
     * const name = gContract.getName();
     */
    getName(): string;
    /**
     * Sets a new import for the contract.
     * @param identifierPath The path for the file to be imported.
     * @param alias An optional alias for the file imported.
     * @example
     * gContract.setImport("../../MyContractToImport", "ImportedContract");
     */
    setImport(identifierPath: string, alias?: string): IImport;
    /**
     * Writes the code of this contract or a list of contracts.
     * @param contracts List of Gifflar Contracts
     * @example
     * const code = gContract.write()
     *
     * //Or, if you want to write many contracts at once
     *
     * const code = gContract.write([gContract, otherContract])
     */
    write(contracts?: Array<IContractJson>): string;
    /**
     * Compiles the Gifflar Contract code.
     * @param callback To get any errors if any.
     * @returns The compiled json generated.
     * @example
     * gContract.compile((errors) => {
     *   if (errors) errors.map((e) => console.log(e));
     * });
     */
    compile(callback?: (errors: any[]) => void): any;
    /**
     * Deploys the Gifflar contract to blockchain network.
     * @param inputs The arguments for deployment
     * @param options Opitional options to change function behaviour.
     * @example
     * await gContract.deploy(
     *  {
     *    args: [], // Arguments for contract constructor
     *    from: "0x123...", // Account that will execute the deploy, if not set before (optional)
     *    gas: 3000000, // Gas willing to spend (optional)
     *    gasPrice: "10000000000", // Gas price (optional)
     *    nonce: 1, // Nonce of the transaction (optional)
     *    accountPrivateKey: "0x321...", // Account private key, if not set before (optional)
     *  },
     *  {
     *    force: true // To force deployment even if the contract was already deployed. (optional)
     *  }
     *);
     */
    deploy(inputs: IContractDeployDTO, options?: {
        force?: boolean;
    }): Promise<Contract>;
    /**
     * Verifies if the Gifflar contract was written, if yes, returns the code, or else 'undefined'.
     * @returns The code or undefined
     */
    written(): string | undefined;
    /**
     * Verifies if the Gifflar contract was compiled, if yes, returns the compiled JSON, or else 'undefined'.
     * @returns The compiled JSON or undefined
     */
    compiled(): any | undefined;
    /**
     * Sets the default web3 object used inside Gifflar Contract.
     * @param web3 The web3 object already configured.
     */
    setWeb3(web3: IWeb3): void;
    /**
     * Gets the web3 object used by Gifflar Contract. If any web3 was configured, returns 'undefined'.
     * @returns Web3 object or 'undefined'
     */
    getWeb3(): Web3 | null | undefined;
    /**
     * Configures the default network config of Gifflar Contract for deployment.
     * @param networkConfig The network configuration.
     * @example
     * gContract.setDeployConfig({
     *  key: "local_network", // Key just for identification
     *  networkId: 0, // The unique id of the network
     *  gas: 3000000, // The GAS willing to sepend
     *  gasPrice: "10000000000", //GAS price
     *  nodeLink: "http://localhost:8545", // The link of blockchain node
     * });
     */
    setDeployConfig(networkConfig: INetworkConfig): Web3 | undefined;
    /**
     * Adds a default transaction signer for next deployments with this Gifflar Contract.
     * @param accountPrivateKey The account's private key.
     */
    addSigner(accountPrivateKey: string): Account;
    /**
     * Verifies if the Gifflar contract was deployed, if yes, returns the contract instance on blockchain, or else 'undefined'.
     * @returns The contract instance or undefined
     */
    deployed(): Contract | undefined;
}

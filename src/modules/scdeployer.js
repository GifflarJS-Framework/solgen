module.exports = {
  /**
   * Deploys a smart contract
   * @param {JSON} abi
   * @param {string} bytecode
   * @param {Array} args
   * @param {string} from
   */
  deploy: async (abi, bytecode, args, from) => {
    try {
      // Create a new contract and define ABI access
      this.controller_contract = await new this.web3.eth.Contract(abi)
        // Deploy configuration
        .deploy({
          data: bytecode,
          arguments: args
        })
        .send({
          gas: GAS,
          from: from
        });

      return this.controller_contract;
    } catch (e) {
      console.log(e);
      return {};
    }
  },

  deploySensor: async (owner, from) => {
    // Create a new contract and define ABI access
    const transaction = await this.controller_contract.methods
      .createContract(owner)
      // Deploy configuration
      .send({
        gas: GAS,
        from: from
      });

    return transaction;
  },

  /**
   * Gets a contract instance by the blockchain address and ABI
   * @param {string} contract_address
   * @param {json stringifyed} abi
   */
  retrieveContract: async (contract_address, abi) => {
    try {
      this.controller_contract = await new this.web3.eth.Contract(
        abi,
        contract_address
      );

      return this.controller_contract;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
};

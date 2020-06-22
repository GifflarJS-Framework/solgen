function createDeployer(web3) {
  if (!web3) {
    return {};
  }

  /**
   * Deploys a smart contract
   * @param {JSON} abi
   * @param {string} bytecode
   * @param {Array} args
   * @param {string} from
   */
  async function deploy(abi, bytecode, args, from, gas) {
    try {
      // Create a new contract and define ABI access
      const contract = await new web3.eth.Contract(abi)
        // Deploy configuration
        .deploy({
          data: bytecode,
          arguments: args,
        })
        .send({
          gas: gas,
          from: from,
        });

      return contract;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  async function deploySensor(owner, from) {
    // Create a new contract and define ABI access
    const transaction = await controller_contract.methods
      .createContract(owner)
      // Deploy configuration
      .send({
        gas: GAS,
        from: from,
      });

    return transaction;
  }

  /**
   * Gets a contract instance by the blockchain address and ABI
   * @param {string} contract_address
   * @param {Object} abi
   */
  async function retrieveContract(contract_address, abi) {
    try {
      const contract = await new web3.eth.Contract(abi, contract_address);

      return contract;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  return { deploy };
}

module.exports = createDeployer;

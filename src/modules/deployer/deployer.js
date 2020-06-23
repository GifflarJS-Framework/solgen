function createDeployer(web3 = null) {
  let _web3 = web3;

  function setWeb3(web3) {
    _web3 = web3;
    return _web3;
  }

  function getWeb3() {
    return _web3;
  }

  /**
   * Deploys a smart contract
   * @param {JSON} inputs
   * @property {JSON} abi
   * @property {string} bytecode
   * @property {Array} args
   * @property {string} from
   */
  async function deploy(inputs) {
    if (!_web3) {
      return {};
    }
    try {
      const { abi, bytecode, args, from, gas } = inputs;
      // Create a new contract and define ABI access
      const contract = await new _web3.eth.Contract(abi)
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

  /**
   * Gets a contract instance by the blockchain address and ABI
   * @param {string} address
   * @param {Object} abi
   */
  async function retrieve(abi, address) {
    if (!_web3) {
      return {};
    }
    try {
      const contract = await new _web3.eth.Contract(abi, address);
      return contract;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  return { deploy, retrieve, setWeb3, getWeb3 };
}

module.exports = createDeployer;

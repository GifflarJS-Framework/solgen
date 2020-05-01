module.exports = () => {
  return {
    /**
     * Returns from blockchain all the sensor contracts deployed by a certain controller contract
     *
     * @return {Array} The list of sensor contracts addresses deployed by the controller contract
     * @example The return value should be like this:
     * ["0xcf5049426BFcB329375946aF99D3d18E32812211", "0xcf5049426BFcB329375946aF99D3d18E32812211"] or
     * [] if there isn't none sensor contracts deployed
     */
    listContracts: async () => {
      const contracts = await this.controller_contract.methods
        .listContracts()
        .call();

      return contracts;
    },

    /**
     * Returns from blockchain the last sensor contract that the controller contract has deployed
     *
     * @return {string} The sensor contract address
     * @example The returned value example is:
     * "0xcf5049426BFcB329375946aF99D3d18E32812211" - The sensor contract blockchain address or
     * "" - If there is no last contract
     */
    getLastContract: async () => {
      try {
        const address = await this.controller_contract.methods
          .getLastContract()
          .call({ gas: GAS });

        return address;
      } catch (e) {
        console.log(e);
        return "";
      }
    }
  };
};

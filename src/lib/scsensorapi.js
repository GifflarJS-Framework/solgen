module.exports = () => {
  return {
    setGreatnesses: async (values, from) => {
      let ok = false;
      await values.forEach(async (value, i) => {
        try {
          ok = true;
          await this.controller_contract.methods
            .setValue(value.measure, i + 1)
            .send({
              from: from,
              gas: GAS
            });
        } catch (e) {
          console.log(e);
        }
      });
      return ok;
    },

    getGreatnesses: async () => {
      let measures = [];
      try {
        measures = await this.controller_contract.methods.getValues().call();
      } catch (e) {
        console.log(e.message);
      }
      return measures;
    }
  };
};

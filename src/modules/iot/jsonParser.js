const createContractManager = require("../manager/contractManager");
const helpers = require("../../utils/helpers");

/**
 * @description Esta factory irá criar um objeto iotJsonParser. O objeto é responsável
 * por saber transformar um Json específico de sensores iot no Json que o framework
 * entende. Ao executar a função "parse", o iotJsonParser retorna um ContractManager
 * já configurado com todos os Jsons de contratos criados.
 */
function createIoTJsonParser() {
  // Creating the ContractManager
  const manager = createContractManager();
  const definitions = [];
  const sensorValues = [];

  function _setupVariables(contract, variables) {
    // Setting default variables
    contract.createVariable("address", "manager", "public", true);

    // Setting json variables
    variables.map((v) => {
      contract.createVariable(v.type, v.idv, "public", true);

      v.default
        ? definitions.push({ variable: v.idv, value: v.default })
        : null;

      //Setting max and min variables
      if (v.max) {
        const maxname = "max" + helpers.capitalize(v.idv);
        contract.createVariable(v.type, maxname, "public", true);
        definitions.push({ variable: maxname, value: v.max });
      }
      if (v.min) {
        const minname = "min" + helpers.capitalize(v.idv);
        contract.createVariable(v.type, minname, "public", true);
        definitions.push({ variable: minname, value: v.min });
      }
    });
  }

  function _setupConstructor(contract) {
    // Starting the constructor
    const constructor = contract
      .createConstructor("public")
      .setInput("address", "_owner")
      .setAssignment("manager", "_owner");

    // Setting up all definitions
    definitions.map((def) => {
      constructor.setAssignment(def.variable, def.value);
    });
  }

  function _setupGetValues(contract, variables) {
    const getValues = contract.createFunction("getValues", "public");

    variables.map((v) => {
      getValues.setOutput(v.idv);
    });
  }

  /**
   *
   * @description This method is responsible for parsing the Json, which contains
   * information about iot sensors, to the Json that the Gifflar framework
   * understand.
   * @param {Object[]} sensors - The list of sensores which contains all the sensors
   * individual Jsons.
   */
  function parse(sensors) {
    let gContract = null;

    sensors.map((sensor) => {
      gContract = manager.createContract(sensor.data.name);
      _setupVariables(gContract, sensor.data.values);
      _setupConstructor(gContract);
      _setupGetValues(gContract, sensor.data.values);
    });

    return manager;
  }

  return { parse };
}

module.exports = createIoTJsonParser;

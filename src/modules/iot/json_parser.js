/**
 * @description Esta factory irá criar um objeto iotJsonParser. O objeto é responsável
 * por saber transformar um Json específico de sensores iot no Json que o framework
 * entende. Ao executar a função "parse", o iotJsonParser retorna um ContractManager
 * já configurado com todos os Jsons de contratos criados.
 */
function createIoTJsonParser() {
  /**
   *
   * @description This method is responsible for parsing the Json, which contains
   * information about iot sensors, to the Json that the Gifflar framework
   * understand.
   * @param {Object[]} sensors - The list of sensores which contains all the sensors
   * individual Jsons.
   */
  function parse(sensors) {
    return {};
  }

  return { parse };
}

module.exports = createIoTJsonParser;

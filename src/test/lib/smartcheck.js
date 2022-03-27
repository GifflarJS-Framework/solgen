const { execSync } = require("child_process");
const helpers = require("@utils/helpers");

function createSmartCheck() {
  function parse(result) {
    // result =
    //   "test/functional/modules/management/contract.sol\njar:file:/home/levy/.nvm/versions/node/v10.15.3/lib/node_modules/@smartdec/smartcheck/jdeploy-bundle/smartcheck-2.0-jar-with-dependencies.jar!/solidity-rules.xmlruleId: SOLIDITY_UPGRADE_TO_050\npatternId: 441gim\nseverity: 1\nline: 22\ncolumn: 8\ncontent: stringa=_val\n\nruleId: SOLIDITY_VISIBILITY\npatternId: b51ce0\nseverity: 1\nline: 12\ncolumn: 45\ncontent: value1,\n\nruleId: SOLIDITY_VISIBILITY\npatternId: b51ce0\nseverity: 1\nline: 12\ncolumn: 53\ncontent: uint256max_value1);\n\nSOLIDITY_VISIBILITY :2\nSOLIDITY_UPGRADE_TO_050 :1\n";
    const vector = result.split("\n");
    vector[1] = vector[1].split(".xml")[1];

    const object = {
      resultString: result,
      source: vector.shift(),
      severities: [],
      result: [],
    };

    const keys = [
      "ruleId",
      "patternId",
      "severity",
      "line",
      "column",
      "content",
    ];

    let id = "result";
    let auxobject = {};
    let counter = 0;
    vector.map((item) => {
      const list = item.split(":");
      if (
        keys.filter((item) => {
          return item === list[0];
        })[0]
      ) {
        auxobject[list[0]] = list[1];
        id = "result";
      } else if (list[0].length) {
        const number = parseInt(list[1]);
        auxobject[list[0]] = number;
        id = "severities";
        counter += number;
      } else {
        if (!helpers.isObjEmpty(auxobject)) {
          object[id].push({ ...auxobject });
        }
        auxobject = {};
      }
    });
    object.amount = counter;

    return object;
  }

  function run(filepath) {
    const result = execSync("smartcheck -p " + filepath, { encoding: "utf-8" });

    return parse(result);
  }

  return { run, parse };
}

module.exports = createSmartCheck;

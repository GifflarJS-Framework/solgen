const helpers = use("App/lib/Helpers");
use("dotenv").config();

// Global Variables
let max_min = [];

// Private Functions

function prepareControllingFunctions(values) {
  let size = max_min.length + 1;
  let text = "";

  let i = 1;
  values.map(v => {
    if (!v.type.includes("uint")) {
      text +=
        "function setValue(" + v.type + " _val, uint _valueId) public {\n";
      text += "if(_valueId == " + i + "){\n";
      text += "value" + i + " = _val;\n";
      text += "}\n";
      text += "}\n\n";
    }
    i++;
  });

  if (max_min.length < 1) {
    return text;
  }

  i = 1;
  text += "function setValue(uint _val, uint _valueId) public {\n";
  let minOn;
  text += "if(_valueId == " + i + "){\n";
  max_min.map(obj => {
    minOn = false;
    //Doing the assignment
    text += "value" + i + " = _val;\n";

    if (Number.isInteger(obj.min)) {
      minOn = true;
    }

    // Constructing condition
    if (Number.isInteger(obj.max)) {
      text += "if(value" + i + " >= max_value" + i + "){\n";
      text +=
        "emit " + obj.idv + "Overflow(value" + i + ", max_value" + i + ");\n";
      // End of IF
      text += "}\n";

      if (minOn) {
        text += "else ";
      }
    }
    if (minOn) {
      text += "if(value" + i + " >= min_value" + i + "){\n";
      text +=
        "emit " + obj.idv + "Underflow(value" + i + ", min_value" + i + ");\n";
      // End of IF
      text += "}\n";
    }
    //End of IF
    text += "}\n";
    i++;
    if (i < size) {
      text += "else if(_valueId == " + i + "){\n";
    }
  });
  // End of set function
  text += "}\n\n";
  return text;
}

function prepareGetFunctions(data) {
  let text = "// GET FUNCTIONS\n";
  //Creating a get for all values
  text += "function getValues() public view returns(" + data.values[0].type;
  res_value = "value1";
  for (let i = 1; i < data.values.length; i++) {
    text += ", " + data.values[i].type;
    res_value += ", value" + (i + 1);
  }
  text += "){\n";
  text += "return (" + res_value + ");\n";

  // End of function
  text += "}\n\n";

  return text;
}

function prepareVariables(data) {
  let text = "";

  text += "string public name;\n";
  text += "string public latitude;\n";
  text += "string public longitude;\n";

  text += "\n\n";

  return text;
}

function prepareGreatnessVariables(data) {
  let text = "";

  let i = 1;
  let none;
  data.values.map(v => {
    none = true;
    max_min.push({});
    text += v.type + " public value" + i + ";\n";
    if (!isNaN(v.max)) {
      text += v.type + " public max_value" + i + ";\n";
      max_min[i - 1].max = parseInt(v.max);
      if (v.idv) {
        max_min[i - 1].idv = v.idv;
      }
      none = false;
    }
    if (!isNaN(v.min)) {
      text += v.type + " public min_value" + i + ";\n";
      max_min[i - 1].min = parseInt(v.min);
      if (v.idv) {
        max_min[i - 1].idv = v.idv;
      }
      none = false;
    }
    if (none) {
      max_min.pop();
    }
    i++;
  });

  text += "\n\n";

  return text;
}

function prepareEvents() {
  let text = "";
  let i = 1;
  if (max_min.length > 0) {
    text += "// EVENTS\n";
  }
  max_min.map(obj => {
    if (obj.idv) {
      obj.idv.toLowerCase();
      if (Number.isInteger(obj.max)) {
        text +=
          "event " +
          obj.idv +
          "Overflow(uint value" +
          i +
          ", uint max_value" +
          i +
          ");\n";
      }
      if (Number.isInteger(obj.min)) {
        text +=
          "event " +
          obj.idv +
          "Underflow(uint value" +
          i +
          ", uint min_value" +
          i +
          ");\n";
      }
      i++;
    }
  });

  if (text) {
    text += "\n\n";
  }

  return text;
}

function prepareDefinitions(data) {
  let text = "// CONSTRUCTOR\n";

  text += "constructor(address _owner) public {\n";
  text += "manager = _owner;\n";
  text += 'name = "' + data.name + '";\n';
  text += 'latitude = "' + data.latitude + '";\n';
  text += 'longitude = "' + data.longitude + '";\n';
  let i = 1,
    idx = 0,
    maxmin;
  data.values.map(v => {
    if (v.default) {
      if (isNaN(v.default) && v.type != "bool") {
        v.default = '"' + v.default + '"';
      }
      text += "value" + i + " = " + v.default + ";\n";
    }

    maxmin = max_min[idx++];
    if (maxmin) {
      if (Number.isInteger(maxmin.max)) {
        text += "max_value" + i + " = " + maxmin.max + ";\n";
      }
      if (Number.isInteger(maxmin.min)) {
        text += "min_value" + i + " = " + maxmin.min + ";\n";
      }
    }
    i++;
  });

  //End of constructor
  text += "}\n\n";

  return text;
}

function prepareSetFunctions() {
  // Comentário inicial
  let text = "// SET FUNCTIONS\n";

  variables = ["name", "latitude", "longitude"];

  let i = 0;
  variables.map(variable => {
    text +=
      "function set" +
      helpers.capitalize(variable) +
      "(string _" +
      variable +
      ") public{\n" +
      variable +
      " = _" +
      variable +
      ";\n}\n\n";
  });

  return text;
}

/**
 * Creates the contract controller
 * @private
 */
function _createContractController() {
  let text = "contract Controller{\n";
  text += "address[] public contracts;\n";
  text += "uint counter = 0;\n";
  // createContract Function
  text +=
    "function createContract(address _owner) public{\n" +
    "address newContract = new Sensor(_owner);\n" +
    "contracts.push(newContract);\n" +
    "counter++;\n" +
    "}\n\n";

  // listContracts Function
  text +=
    "function getLastContract() public view returns (address){\n" +
    "if(counter > 0){\n" +
    "return contracts[counter-1];\n" +
    "}else{\n" +
    "return contracts[0];\n" +
    "}\n" +
    "}\n\n";

  // listContracts Function
  text +=
    "function listContracts() public view returns (address[]){\n" +
    "return contracts;\n" +
    "}\n";
  text += "}";

  return text;
}

module.exports = {
  createContract: json => {
    max_min = [];

    // Defining contract beginning
    let text = "pragma solidity ^0.4.23;\n\n";
    text += "contract Sensor{\n";

    // Prearing sensor data
    text += "// SENSOR DATA\n";
    text += "address manager;\n";
    text += prepareVariables(json.data);

    // Preparing quantities
    text += "// QUANTITIES\n";
    text += prepareGreatnessVariables(json.data);

    // Preparing events
    text += prepareEvents();

    // Preparing definitions
    text += prepareDefinitions(json.data);

    text += "//SET SPECIAL CONDITIONAL FUNCTIONS\n";
    text += prepareControllingFunctions(json.data.values);

    // Preparing set functions
    text += prepareSetFunctions(json.data);

    // Preparing get functions
    text += prepareGetFunctions(json.data);

    // End of contract
    text += "}\n\n";

    text += _createContractController();

    return text;
  }
};

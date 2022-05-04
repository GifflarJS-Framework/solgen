import { IInput } from "@models/function/types/IInput";
import { IInputWriter } from "../types/IInputWriter";

class InputWriter implements IInputWriter {
  write(inputs: Array<IInput>, typeon = true) {
    let text = "";
    const _inputs = [...inputs];
    const memoryList = ["string"];

    // If there are no inputs
    if (!_inputs.length) {
      return text;
    }

    // Defining the first input
    const firstinput = _inputs[0];
    if (typeon) {
      text += `${firstinput.type} `;
      if (memoryList.includes(firstinput.type)) {
        text += "memory ";
      }
    }
    text += firstinput.name;

    // Removing the first element
    _inputs.shift();

    // Defining the other inputs
    _inputs.map((input) => {
      text += ", ";
      if (typeon) {
        text += `${input.type} `;
        if (memoryList.includes(input.type)) {
          text += "memory ";
        }
      }
      text += input.name;

      return text;
    });

    return text;
  }
}

export default InputWriter;

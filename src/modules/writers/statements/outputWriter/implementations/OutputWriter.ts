import { IOutput } from "@models/function/types/IOutput";
import { IOutputWriter } from "../types/IOutputWriter";

class OutputWriter implements IOutputWriter {
  write(outputs: Array<IOutput>): string {
    let text = "";
    const _outputs = [...outputs];
    const memoryList = ["string", "bytes"];

    // If there are no output
    if (!_outputs.length) {
      return text;
    }

    // Defining the first output
    const firstoutput = _outputs[0];
    text += `${firstoutput.type}`;
    if (memoryList.includes(firstoutput.type)) {
      text += " memory";
    }
    if (firstoutput.name) text += ` ${firstoutput.name}`;

    // Removing the first element
    _outputs.shift();

    // Defining the other outputs
    _outputs.map((output) => {
      text += ", ";

      text += `${output.type}`;
      if (memoryList.includes(output.type)) {
        text += " memory";
      }
      if (output.name) {
        text += ` ${output.name}`;
      }

      return text;
    });

    return `returns(${text})`;
  }
}

export default OutputWriter;

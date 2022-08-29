import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IMappingWriter } from "@writers/statements/mappingWriter/types/IMappingWriter";
import { IVariableWriter } from "@writers/statements/variableWriter/types/IVariableWriter";
import { inject, injectable } from "tsyringe";
import { IStructWriter } from "../types/IStructWriter";

@injectable()
class StructWriter implements IStructWriter {
  constructor(
    @inject("VariableWriter")
    private variableWriter: IVariableWriter,
    @inject("MappingWriter")
    private mappingWriter: IMappingWriter
  ) {}

  write(struct: IStruct): string {
    // Writing variables
    let variablesText = ``;
    struct.variables.map((variable) => {
      const variableText = this.variableWriter.write(variable);
      variablesText = variablesText.concat(`${variableText};\n`);
    });

    // Writing mappings
    let mappingsText = ``;
    struct.mappings.map((mapping) => {
      const mappingText = this.mappingWriter.write(mapping);
      mappingsText = mappingsText.concat(`${mappingText};\n`);
    });

    // Writing final text
    const text = `struct ${struct.identifier} {\n${variablesText}${mappingsText}}`;

    return text;
  }
}

export default StructWriter;

import { IStruct } from "@models/definitions/struct/types/IStruct";
import { IMappingModel } from "@models/statements/mapping/types/IMappingModel";
import { IVariableModel } from "@models/statements/variable/types/IVariableModel";
import { IMappingWriter } from "@writers/statements/mappingWriter/types/IMappingWriter";
import { IVariableWriter } from "@writers/statements/variableWriter/types/IVariableWriter";
import { inject, injectable } from "tsyringe";
import { IStructWriter } from "../types/IStructWriter";

@injectable()
class StructWriter implements IStructWriter {
  constructor(
    @inject("VariableModel")
    private variableModel: IVariableModel,
    @inject("MappingModel")
    private mappingModel: IMappingModel,
    @inject("VariableWriter")
    private variableWriter: IVariableWriter,
    @inject("MappingWriter")
    private mappingWriter: IMappingWriter
  ) {}

  write(struct: IStruct): string {
    // Writing variables
    let variablesText = ``;
    struct.variables.map((variable) => {
      const localVariable = this.variableModel.execute(variable);
      const variableText = this.variableWriter.write(localVariable);
      variablesText = variablesText.concat(`${variableText};\n`);
    });

    // Writing mappings
    let mappingsText = ``;
    struct.mappings.map((mapping) => {
      const localMapping = this.mappingModel.execute(mapping);
      const mappingText = this.mappingWriter.write(localMapping);
      mappingsText = mappingsText.concat(`${mappingText};\n`);
    });

    // Writing final text
    const text = `struct ${struct.identifier} {\n${variablesText}${mappingsText}}`;

    return text;
  }
}

export default StructWriter;

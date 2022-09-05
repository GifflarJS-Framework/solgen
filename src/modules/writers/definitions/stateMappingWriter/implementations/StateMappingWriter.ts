import { IStateMapping } from "@models/definitions/stateMapping/types/IStateMapping";
import { ICreateNestedMapping } from "@models/statements/mapping/types/ICreateNestedMapping";
import { IMappingTypeName } from "@modules/types/IMappingTypeName";
import helpers from "@utils/helpers";
import { IStateMappingWriter } from "../types/IStateMappingWriter";

class StateMappingWriter implements IStateMappingWriter {
  private _writeTypeName(typeName: IMappingTypeName): string | undefined {
    let mappingTypeName = typeName.regularType || typeName.customType;

    if (!mappingTypeName) {
      // If an array
      if (typeName.array) {
        mappingTypeName = `${helpers.writeTypeName(typeName.array.arrayType)}[${
          typeName.array.arraySize || ""
        }]`;
      }

      // If nested mapping
      if (typeName.nestedMapping) {
        mappingTypeName = this._writeNestedMapping(typeName.nestedMapping);
      }
    }

    return mappingTypeName;
  }

  private _writeNestedMapping(nestedMapping: ICreateNestedMapping): string {
    let text = `mapping(${
      nestedMapping.type.regularType || nestedMapping.type.customType
    } => `;
    const typeNameText = this._writeTypeName(nestedMapping.typeName);
    if (!typeNameText) throw Error("Nested mapping type name not defined");
    text = `${text.concat(typeNameText)})`;
    return text;
  }

  write(mappings: Array<IStateMapping>): string {
    let text = ``;

    mappings.map((mapping) => {
      let mappingText = `mapping(${
        mapping.type.regularType || mapping.type.customType
      } => `;
      const typeName: any = mapping.typeName;

      const typeNameText = this._writeTypeName(typeName);
      if (!typeNameText) throw Error("Nested mapping type name not defined");
      mappingText = mappingText.concat(typeNameText);

      mappingText = mappingText.concat(
        `) ${mapping.scope || ""} ${mapping.name};`
      );

      text = text.concat(`${mappingText}\n`);
    });

    if (mappings.length) {
      text = text.concat(`\n`);
    }

    return text;
  }
}

export default StateMappingWriter;

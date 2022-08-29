import { ICreateNestedMapping } from "@models/statements/mapping/types/ICreateNestedMapping";
import { IMapping } from "@models/statements/mapping/types/IMapping";
import { IMappingTypeName } from "modules/types/IMappingTypeName";
import { IMappingWriter } from "../types/IMappingWriter";

class MappingWriter implements IMappingWriter {
  private _writeTypeName(typeName: IMappingTypeName): string | undefined {
    let mappingTypeName = typeName.regularType || typeName.customType;

    if (!mappingTypeName) {
      // If an array
      if (typeName.array) {
        mappingTypeName = `${typeName.array.arrayType}[${
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

  write(mapping: IMapping): string {
    const mappingKeyTypeText =
      mapping.type.regularType || mapping.type.customType;
    const mappingTypeNameText = this._writeTypeName(mapping.typeName);
    if (!mappingTypeNameText) throw Error("Mapping type name not defined");

    let text = `mapping(${mappingKeyTypeText} => ${mappingTypeNameText}) ${mapping.name}`;

    return text;
  }
}

export default MappingWriter;

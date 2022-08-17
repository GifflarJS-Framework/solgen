import { IMapping } from "@models/mapping/types/IMapping";
import { INestedMapping } from "@models/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IMappingWriter } from "../types/IMappingWriter";

class MappingWriter implements IMappingWriter {
  private _writeTypeName(typeName: any): string {
    let text = ``;
    if (typeof typeName === "string") {
      // TypeName is String
      text = text.concat(`${typeName}`);
    } else if (
      typeof typeName === "object" &&
      Object.keys(typeName).includes("statement")
    ) {
      // TypeName is Mapping
      const _typeName: INestedMapping = typeName;
      text = text.concat(`${this._writeNestedMapping(_typeName)}`);
    } else {
      // TypeName is arrayType
      const _typeName: IArrayType = typeName;
      text = text.concat(
        `${_typeName.arrayType}[${_typeName.arraySize || ""}]`
      );
    }

    return text;
  }

  private _writeNestedMapping(nestedMapping: INestedMapping): string {
    let text = `mapping(${nestedMapping.type} => `;
    const typeName: any = nestedMapping.typeName;
    const typeNameText = this._writeTypeName(typeName);
    text = `${text.concat(typeNameText)})`;
    return text;
  }

  write(mapping: IMapping): string {
    let text = `mapping(${mapping.type} => `;

    const typeName: any = mapping.typeName;
    const typeNameText = this._writeTypeName(typeName);
    text = text.concat(typeNameText);
    text = text.concat(`) ${mapping.name}`);

    return text;
  }
}

export default MappingWriter;

import { IStateMapping } from "@models/stateMapping/types/IStateMapping";
import { INestedMapping } from "@models/mapping/types/INestedMapping";
import { IArrayType } from "modules/types/IArrayType";
import { IStateMappingWriter } from "../types/IStateMappingWriter";

class StateMappingWriter implements IStateMappingWriter {
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

  write(mappings: Array<IStateMapping>): string {
    let text = ``;

    mappings.map((mapping) => {
      let mappingText = `mapping(${mapping.type} => `;
      const typeName: any = mapping.typeName;

      const typeNameText = this._writeTypeName(typeName);
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

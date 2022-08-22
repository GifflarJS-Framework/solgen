import { ILibrary } from "@models/library/types/ILibrary";
import { IContractBodyWriter } from "@writers/contractBodyWriter/types/IContractBodyWriter";
import { inject, injectable } from "tsyringe";
import { ILibraryWriter } from "../types/ILibraryWriter";

@injectable()
class LibraryWriter implements ILibraryWriter {
  constructor(
    @inject("ContractBodyWriter")
    private contractBodyWriter: IContractBodyWriter
  ) {}

  write(
    libraries: Array<ILibrary>,
    /** To get every library text individually. */
    callback?: (individualLibraryText: string, index: number) => void
  ): string {
    if (!libraries) {
      return "";
    }

    let text = "";

    libraries.map((json, index) => {
      // Writing the compiler version
      const txt_version = "pragma solidity 0.6.0;\n\n";

      // Begining of contract
      const txt_start = `library ${json.library.name}{\n`;

      // Writing contract body
      const txt_body = this.contractBodyWriter.write(json.library);

      // End of contract
      const txt_close = "}\n\n";

      // Joining all texts
      const libraryText = txt_version + txt_start + txt_body + txt_close;

      // Sending the contract code to callback
      if (callback && typeof callback === "function") {
        callback(libraryText, index);
      }

      // Updating final text
      text += libraryText;

      return text;
    });

    return text;
  }
}

export default LibraryWriter;

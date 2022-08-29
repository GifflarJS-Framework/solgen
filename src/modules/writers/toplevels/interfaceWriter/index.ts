import { container } from "tsyringe";
import InterfaceWriter from "./implementations/InterfaceWriter";
import { IInterfaceWriter } from "./types/IInterfaceWriter";

const implementations = {
  default: InterfaceWriter,
};

container.registerSingleton<IInterfaceWriter>(
  "InterfaceWriter",
  implementations.default
);

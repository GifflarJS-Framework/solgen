import { container } from "tsyringe";
import CustomCodeWriter from "./implementations/CustomCodeWriter";
import { ICustomCodeWriter } from "./types/ICustomCodeWriter";

const implementations = {
  default: CustomCodeWriter,
};

container.registerSingleton<ICustomCodeWriter>(
  "CustomCodeWriter",
  implementations.default
);

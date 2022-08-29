import { container } from "tsyringe";
import EnumWriter from "./implementations/EnumWriter";
import { IEnumWriter } from "./types/IEnumWriter";

const implementations = {
  default: EnumWriter,
};

container.registerSingleton<IEnumWriter>("EnumWriter", implementations.default);

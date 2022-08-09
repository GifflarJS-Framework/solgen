import { container } from "tsyringe";
import CustomErrorWriter from "./implementations/CustomErrorWriter";
import { ICustomErrorWriter } from "./types/ICustomErrorWriter";

const implementations = {
  default: CustomErrorWriter,
};

container.registerSingleton<ICustomErrorWriter>(
  "CustomErrorWriter",
  implementations.default
);

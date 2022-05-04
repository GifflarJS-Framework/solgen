import { container } from "tsyringe";
import InputWriter from "./implementations/InputWriter";
import { IInputWriter } from "./types/IInputWriter";

const implementations = {
  default: InputWriter,
};

container.registerSingleton<IInputWriter>(
  "InputWriter",
  implementations.default
);

import { container } from "tsyringe";
import AssertWriter from "./implementations/AssertWriter";
import { IAssertWriter } from "./types/IAssertWriter";

const implementations = {
  default: AssertWriter,
};

container.registerSingleton<IAssertWriter>(
  "AssertWriter",
  implementations.default
);

import { container } from "tsyringe";
import AssertModel from "./implementations/AssertModel";
import { IAssertModel } from "./types/IAssertModel";

const implementations = {
  default: AssertModel,
};

container.registerSingleton<IAssertModel>(
  "AssertModel",
  implementations.default
);

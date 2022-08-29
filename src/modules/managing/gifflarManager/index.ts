import { container } from "tsyringe";
import GifflarManager from "./implementations/GifflarManager";
import { IGifflarManager } from "./types/IGifflarManager";

const implementations = {
  default: GifflarManager,
};

container.registerSingleton<IGifflarManager>(
  "GifflarManager",
  implementations.default
);

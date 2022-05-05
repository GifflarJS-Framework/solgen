import { container } from "tsyringe";
import GifflarContract from "./implementations/GifflarContract";
import { IGifflarContract } from "./types/IGifflarContract";

const implementations = {
  default: GifflarContract,
};

container.registerSingleton<IGifflarContract>(
  "GifflarContract",
  implementations.default
);

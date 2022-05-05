import { container } from "tsyringe";
import Deployer from "./implementations/Deployer";
import { IDeployer } from "./types/IDeployer";

const implementations = {
  default: Deployer,
};

container.registerSingleton<IDeployer>("Deployer", implementations.default);

import { container } from "tsyringe";
import IfModel from "../if/implementations/IfModel";
import { IIfModel } from "./types/IIfModel";

const implementations = {
  default: IfModel,
};

container.registerSingleton<IIfModel>("IfModel", implementations.default);

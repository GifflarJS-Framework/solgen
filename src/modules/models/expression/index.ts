import { container } from "tsyringe";
import ExpressionModel from "../expression/implementations/ExpressionModel";
import { IExpressionModel } from "./types/IExpressionModel";

const implementations = {
  default: ExpressionModel,
};

container.registerSingleton<IExpressionModel>(
  "ExpressionModel",
  implementations.default
);

import { container } from "tsyringe";
import ExpressionWriter from "./implementations/ExpressionWriter";
import { IExpressionWriter } from "./types/IExpressionWriter";

const implementations = {
  default: ExpressionWriter,
};

container.registerSingleton<IExpressionWriter>(
  "ExpressionWriter",
  implementations.default
);

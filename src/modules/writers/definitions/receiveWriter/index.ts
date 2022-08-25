import { container } from "tsyringe";
import ReceiveWriter from "./implementations/ReceiveWriter";
import { IReceiveWriter } from "./types/IReceiveWriter";

const implementations = {
  default: ReceiveWriter,
};

container.registerSingleton<IReceiveWriter>(
  "ReceiveWriter",
  implementations.default
);

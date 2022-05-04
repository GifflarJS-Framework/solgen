import { container } from "tsyringe";
import ContentWriter from "./implementations/ContentWriter";
import { IContentWriter } from "./types/IContentWriter";

const implementations = {
  default: ContentWriter,
};

container.registerSingleton<IContentWriter>(
  "ContentWrite",
  implementations.default
);

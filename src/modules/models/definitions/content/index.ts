import { container } from "tsyringe";
import ContentModel from "./implementations/ContentModel";
import { IContentModel } from "./types/IContentModel";

const implementations = {
  default: ContentModel,
};

container.registerSingleton<IContentModel>(
  "ContentModel",
  implementations.default
);

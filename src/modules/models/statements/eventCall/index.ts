import { container } from "tsyringe";
import EventCallModel from "./implementations/EventCallModel";
import { IEventCallModel } from "./types/IEventCallModel";

const implementations = {
  default: EventCallModel,
};

container.registerSingleton<IEventCallModel>(
  "EventCallModel",
  implementations.default
);

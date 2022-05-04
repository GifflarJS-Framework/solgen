import { container } from "tsyringe";
import EventCallWriter from "./implementations/EventCallWriter";
import { IEventCallWriter } from "./types/IEventCallWriter";

const implementations = {
  default: EventCallWriter,
};

container.registerSingleton<IEventCallWriter>(
  "EventCallWriter",
  implementations.default
);

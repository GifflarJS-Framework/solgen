import { container } from "tsyringe";
import EventWriter from "./implementations/EventWriter";
import { IEventWriter } from "./types/IEventWriter";

const implementations = {
  default: EventWriter,
};

container.registerSingleton<IEventWriter>(
  "EventWriter",
  implementations.default
);

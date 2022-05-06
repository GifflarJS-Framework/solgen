import { container } from "tsyringe";
import EventModel from "./implementations/EventModel";
import IEventModel from "./types/IEventModel";

const implementations = {
  default: EventModel,
};

container.registerSingleton<IEventModel>("EventModel", implementations.default);

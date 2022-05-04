import { container } from "tsyringe";
import AssignmentWriter from "./implementations/AssignmentWriter";
import { IAssignmentWriter } from "./types/IAssignmentWriter";

const implementations = {
  default: AssignmentWriter,
};

container.registerSingleton<IAssignmentWriter>(
  "AssignmentWriter",
  implementations.default
);

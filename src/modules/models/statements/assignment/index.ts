import { container } from "tsyringe";
import AssignmentModel from "./implementations/AssignmentModel";
import { IAssignmentModel } from "./types/IAssignmentModel";

const implementations = {
  default: AssignmentModel,
};

container.registerSingleton<IAssignmentModel>(
  "AssignmentModel",
  implementations.default
);

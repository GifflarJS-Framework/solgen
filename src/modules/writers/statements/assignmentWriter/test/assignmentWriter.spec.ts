import { IAssignment } from "@models/assignment/types/IAssignment";
import createAssignmentWriter from "../implementations/default";

describe("Assignment Writer", () => {
  it("Writing Assignment", () => {
    const assignmentWriter = createAssignmentWriter();
    const assignment: IAssignment = {
      statement: "assignment",
      variable: "age",
      value: {
        statement: "expression",
        value: "20",
      },
    };

    const expected = "age = 20";
    const result = assignmentWriter.write(assignment);

    expect(result).toMatch(expected);
  });
});

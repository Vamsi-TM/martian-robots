import { Mars } from "../src/martianRobots";

describe("Martian Robots - Acceptance", () => {
  it("matches the sample input/output", () => {
    const mars = new Mars(5, 3);

    expect(mars.runRobot({ x: 1, y: 1, dir: "E" }, "RFRFRFRF")).toBe("1 1 E");
    expect(mars.runRobot({ x: 3, y: 2, dir: "N" }, "FRRFLLFFRRFLL")).toBe(
      "3 3 N LOST"
    );
    expect(mars.runRobot({ x: 0, y: 3, dir: "W" }, "LLFFFLFLFL")).toBe("2 3 S");
  });

  it("leaves a scent and prevents a second loss", () => {
    const mars = new Mars(2, 2);
    expect(mars.runRobot({ x: 0, y: 2, dir: "N" }, "F")).toBe("0 2 N LOST");
    expect(mars.runRobot({ x: 0, y: 2, dir: "N" }, "F")).toBe("0 2 N");
  });

  it("detects loss at east edge", () => {
    const mars = new Mars(2, 2);
    expect(mars.runRobot({ x: 2, y: 0, dir: "E" }, "F")).toBe("2 0 E LOST");
  });

  it("handles a square path (return to start, same orientation)", () => {
    const mars = new Mars(5, 5);
    expect(mars.runRobot({ x: 2, y: 2, dir: "N" }, "RFRFRFRF")).toBe("2 2 N");
  });
});

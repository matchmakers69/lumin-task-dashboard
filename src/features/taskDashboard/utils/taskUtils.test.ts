import { describe, it, expect } from "vitest";
import { areDependenciesCompleted, getButtonStatusText, getReadyToStartTasks } from "../utils/taskUtils";
import type { Task } from "../types/task";

const mockTasks: Task[] = [
	{ name: "Fetch Data", status: "COMPLETED", dependencies: [] },
	{ name: "Validate Data", status: "PENDING", dependencies: ["Fetch Data"] },
	{ name: "Generate Report", status: "PENDING", dependencies: ["Validate Data"] },
	{ name: "Deploy Application", status: "IN_PROGRESS", dependencies: ["Generate Report"] },
	{ name: "Setup Database", status: "PENDING", dependencies: [] },
	{ name: "Configure Authentication", status: "COMPLETED", dependencies: ["Setup Database"] },
	{ name: "Run Tests", status: "PENDING", dependencies: ["Deploy Application", "Configure Authentication"] },
	{ name: "Orphaned Task", status: "PENDING", dependencies: ["Non-existent Task"] },
];

describe("areDependenciesCompleted", () => {
	it("should return true for task with no dependencies", () => {
		const result = areDependenciesCompleted(mockTasks, "Setup Database");
		expect(result).toBe(true);
	});

	it("should return true for non-existent task", () => {
		const result = areDependenciesCompleted(mockTasks, "Non-existent Task");
		expect(result).toBe(true);
	});

	it("should return true when all dependencies are completed", () => {
		const result = areDependenciesCompleted(mockTasks, "Validate Data");
		expect(result).toBe(true);
	});

	it("should return false when at least one dependency is not completed", () => {
		const result = areDependenciesCompleted(mockTasks, "Generate Report");
		expect(result).toBe(false);
	});

	it("should return false when dependency task does not exist", () => {
		const result = areDependenciesCompleted(mockTasks, "Orphaned Task");
		expect(result).toBe(false);
	});

	it("should return false for task with multiple dependencies where some are not completed", () => {
		const result = areDependenciesCompleted(mockTasks, "Run Tests");
		expect(result).toBe(false);
	});

	it("should handle empty task array", () => {
		const result = areDependenciesCompleted([], "Any Task");
		expect(result).toBe(true);
	});

	it("should handle task with empty dependencies array", () => {
		const tasksWithEmptyDeps: Task[] = [{ name: "Task A", status: "PENDING", dependencies: [] }];
		const result = areDependenciesCompleted(tasksWithEmptyDeps, "Task A");
		expect(result).toBe(true);
	});
});

describe("getButtonStatusText", () => {
	it("should return correct text for PENDING status", () => {
		const result = getButtonStatusText("PENDING");
		expect(result).toBe("Start task");
	});

	it("should return correct text for IN_PROGRESS status", () => {
		const result = getButtonStatusText("IN_PROGRESS");
		expect(result).toBe("Complete task");
	});

	it("should return correct text for COMPLETED status", () => {
		const result = getButtonStatusText("COMPLETED");
		expect(result).toBe("Task completed");
	});

	it("should return empty string for invalid status", () => {
		// @ts-expect-error - Testing invalid input
		const result = getButtonStatusText("INVALID_STATUS");
		expect(result).toBe("");
	});
});

describe("getReadyToStartTasks", () => {
	it("should return tasks with PENDING status and completed dependencies", () => {
		const result = getReadyToStartTasks(mockTasks);

		expect(result).toHaveLength(2);
		expect(result.map((task) => task.name)).toContain("Validate Data");
		expect(result.map((task) => task.name)).toContain("Setup Database");
	});

	it("should return empty array when no tasks are ready", () => {
		const tasksNotReady: Task[] = [
			{ name: "Task A", status: "COMPLETED", dependencies: [] },
			{ name: "Task B", status: "IN_PROGRESS", dependencies: ["Task A"] },
			{ name: "Task C", status: "PENDING", dependencies: ["Task B"] },
		];

		const result = getReadyToStartTasks(tasksNotReady);
		expect(result).toHaveLength(0);
	});

	it("should return all PENDING tasks with no dependencies", () => {
		const independentTasks: Task[] = [
			{ name: "Task A", status: "PENDING", dependencies: [] },
			{ name: "Task B", status: "PENDING", dependencies: [] },
			{ name: "Task C", status: "COMPLETED", dependencies: [] },
		];

		const result = getReadyToStartTasks(independentTasks);
		expect(result).toHaveLength(2);
		expect(result.map((task) => task.name)).toEqual(["Task A", "Task B"]);
	});

	it("should handle empty task array", () => {
		const result = getReadyToStartTasks([]);
		expect(result).toHaveLength(0);
		expect(result).toEqual([]);
	});

	it("should not include IN_PROGRESS or COMPLETED tasks", () => {
		const mixedTasks: Task[] = [
			{ name: "Task A", status: "PENDING", dependencies: [] },
			{ name: "Task B", status: "IN_PROGRESS", dependencies: [] },
			{ name: "Task C", status: "COMPLETED", dependencies: [] },
		];

		const result = getReadyToStartTasks(mixedTasks);
		expect(result).toHaveLength(1);
		expect(result[0].name).toBe("Task A");
	});

	it("should not include PENDING tasks with incomplete dependencies", () => {
		const tasksWithIncompleteDeps: Task[] = [
			{ name: "Task A", status: "PENDING", dependencies: [] },
			{ name: "Task B", status: "PENDING", dependencies: ["Task A"] },
			{ name: "Task C", status: "PENDING", dependencies: ["Task B"] },
		];

		const result = getReadyToStartTasks(tasksWithIncompleteDeps);
		expect(result).toHaveLength(1);
		expect(result[0].name).toBe("Task A");
	});
});

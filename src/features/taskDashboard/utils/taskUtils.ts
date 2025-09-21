import type { Task } from "../types/task";

const areDependenciesCompleted = (tasks: Task[], taskName: string): boolean => {
	const task = tasks.find((t) => t.name === taskName);
	if (!task || task.dependencies.length === 0) return true;

	return task.dependencies.every((dependency) => {
		const dependencyTask = tasks.find((t) => t.name === dependency);
		if (!dependencyTask) return false;
		return dependencyTask.status === "COMPLETED";
	});
};

const getButtonStatusText = (currentStatus: Task["status"]): string => {
	switch (currentStatus) {
		case "PENDING":
			return "Start task";
		case "IN_PROGRESS":
			return "Complete task";
		case "COMPLETED":
			return "Task completed";
		default:
			return "";
	}
};

const getReadyToStartTasks = (tasks: Task[]): Task[] => {
	return tasks.filter((task) => task.status === "PENDING" && areDependenciesCompleted(tasks, task.name));
};

export { areDependenciesCompleted, getButtonStatusText, getReadyToStartTasks };

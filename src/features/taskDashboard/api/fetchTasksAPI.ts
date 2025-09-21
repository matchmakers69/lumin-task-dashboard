import tasksData from "@/mocks/mockData/tasks.json";
import type { Task } from "../types/task";

export const fetchTasksAPI = () => {
	return new Promise<{ tasks: Task[] }>((resolve) => {
		setTimeout(() => {
			resolve({ tasks: tasksData as Task[] });
		}, 2000);
	});
};

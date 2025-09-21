export type Status = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export interface Task {
	name: string;
	status: Status;
	dependencies: string[];
}

export type TasksResult =
	| { is: "idle" }
	| { is: "busy" }
	| { is: "ok"; tasks: Task[] }
	| { is: "fail"; error: string };

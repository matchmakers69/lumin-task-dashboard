import { useState, type ChangeEvent } from "react";
import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import type { Task } from "../types/task";

type AddTaskFormProps = {
	tasks: Task[];
	onAdd: (name: string, deps: string[]) => void;
};

const AddTaskForm = ({ tasks, onAdd }: AddTaskFormProps) => {
	const [formValues, setFormValues] = useState<{
		taskName: string;
		dependencies: string[];
	}>({
		taskName: "",
		dependencies: [],
	});

	const handleFormValuesChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: name === "dependencies" ? value.split(",") : value,
		});
	};

	const handleAddTaskSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAdd(formValues.taskName, formValues.dependencies);
		setFormValues({ taskName: "", dependencies: [] });
	};
	return (
		<Box component="form" onSubmit={handleAddTaskSubmit}>
			<Stack spacing={4}>
				<Stack spacing={3}>
					<TextField
						label="Enter your task name"
						placeholder="Task name"
						variant="outlined"
						size="small"
						name="taskName"
						value={formValues.taskName}
						onChange={handleFormValuesChange}
					/>
					<Autocomplete
						multiple
						options={(tasks ?? []).map((t) => t.name)}
						value={formValues.dependencies}
						onChange={(_, value) => setFormValues({ ...formValues, dependencies: value })}
						renderInput={(params) => <TextField {...params} label="Dependencies (optional)" size="small" />}
					/>
				</Stack>

				<Button size="medium" type="submit" variant="contained" color="primary">
					Create task
				</Button>
			</Stack>
		</Box>
	);
};

export default AddTaskForm;

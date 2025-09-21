import { AppProvider } from "@/components/providers";
import { TaskDashboard } from "@/features/taskDashboard/components";

function App() {
	return (
		<AppProvider>
			<TaskDashboard />
		</AppProvider>
	);
}

export default App;

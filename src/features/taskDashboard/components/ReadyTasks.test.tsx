import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { LuminTheme } from "@/theme";
import ReadyTasks from "../components/ReadyTasks";
import type { Task } from "../types/task";

const mockReadyTasks: Task[] = [
	{ name: "Setup Database", status: "PENDING", dependencies: [] },
	{ name: "Fetch User Data", status: "PENDING", dependencies: [] },
	{ name: "Initialize Cache", status: "PENDING", dependencies: [] },
];

const singleReadyTask: Task[] = [{ name: "Deploy Application", status: "PENDING", dependencies: [] }];

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <ThemeProvider theme={LuminTheme}>{children}</ThemeProvider>;
};

describe("ReadyTasks", () => {
	it("should render the ReadyTasks component", () => {
		const mockOnAdvance = vi.fn();

		render(<ReadyTasks readyToStart={mockReadyTasks} onAdvance={mockOnAdvance} />, {
			wrapper: Wrapper,
		});

		expect(screen.getByText("You have 3 tasks ready to start")).toBeInTheDocument();
	});

	it("should render with singular count when only one task is ready", () => {
		const mockOnAdvance = vi.fn();

		render(<ReadyTasks readyToStart={singleReadyTask} onAdvance={mockOnAdvance} />, {
			wrapper: Wrapper,
		});

		expect(screen.getByText("You have 1 tasks ready to start")).toBeInTheDocument();
	});

	it("should show empty state message when no tasks are ready", () => {
		const mockOnAdvance = vi.fn();

		render(<ReadyTasks readyToStart={[]} onAdvance={mockOnAdvance} />, {
			wrapper: Wrapper,
		});

		expect(screen.getByText("No tasks are ready to start.")).toBeInTheDocument();
	});

	it("should not render any buttons when no tasks are ready", () => {
		const mockOnAdvance = vi.fn();
		render(<ReadyTasks readyToStart={[]} onAdvance={mockOnAdvance} />, {
			wrapper: Wrapper,
		});
		const buttons = screen.queryAllByRole("button");
		expect(buttons).toHaveLength(0);
	});

	it("should render buttons for all ready tasks", () => {
		const mockOnAdvance = vi.fn();

		render(<ReadyTasks readyToStart={mockReadyTasks} onAdvance={mockOnAdvance} />, {
			wrapper: Wrapper,
		});

		const buttons = screen.getAllByRole("button");
		expect(buttons).toHaveLength(3);
		expect(screen.getByRole("button", { name: "Setup Database" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Fetch User Data" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Initialize Cache" })).toBeInTheDocument();
	});

	it("should call onAdvance with correct task name when button is clicked", () => {
		const mockOnAdvance = vi.fn();

		render(<ReadyTasks readyToStart={mockReadyTasks} onAdvance={mockOnAdvance} />, {
			wrapper: Wrapper,
		});

		const setupDatabaseButton = screen.getByRole("button", { name: "Setup Database" });
		fireEvent.click(setupDatabaseButton);

		expect(mockOnAdvance).toHaveBeenCalledWith("Setup Database");
		expect(mockOnAdvance).toHaveBeenCalledTimes(1);
	});
});

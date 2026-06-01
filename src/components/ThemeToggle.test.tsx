import { render, screen, fireEvent } from "@testing-library/react";

import ThemeToggle from "./ThemeToggle";

const mockSetTheme = jest.fn();
let mockTheme = "light";

jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
  }),
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    mockTheme = "light";
    mockSetTheme.mockClear();
  });

  it("should render a button after mounting", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call setTheme('dark') when clicked in light mode", () => {
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("should call setTheme('light') when clicked in dark mode", () => {
    mockTheme = "dark";
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("should show label text when showLabel is true", () => {
    render(<ThemeToggle showLabel />);

    expect(screen.getByText("Mode sombre")).toBeInTheDocument();
  });

  it("should show 'Mode clair' label in dark mode", () => {
    mockTheme = "dark";
    render(<ThemeToggle showLabel />);

    expect(screen.getByText("Mode clair")).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    render(<ThemeToggle className="mt-2 px-3" />);

    expect(screen.getByRole("button")).toHaveClass("mt-2", "px-3");
  });

  it("should have cursor-pointer class", () => {
    render(<ThemeToggle />);

    expect(screen.getByRole("button")).toHaveClass("cursor-pointer");
  });
});

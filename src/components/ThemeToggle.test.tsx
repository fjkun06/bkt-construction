import React from "react";
import { render, fireEvent, act } from "@testing-library/react";

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
    const { container } = render(<ThemeToggle />);

    act(() => {});

    const button = container.querySelector("button");
    expect(button).not.toBeNull();
  });

  it("should call setTheme('dark') when clicked in light mode", () => {
    mockTheme = "light";
    const { container } = render(<ThemeToggle />);

    act(() => {});

    const button = container.querySelector("button");
    fireEvent.click(button!);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("should call setTheme('light') when clicked in dark mode", () => {
    mockTheme = "dark";
    const { container } = render(<ThemeToggle />);

    act(() => {});

    const button = container.querySelector("button");
    fireEvent.click(button!);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("should show label text when showLabel is true", () => {
    mockTheme = "light";
    const { getByText } = render(<ThemeToggle showLabel />);

    act(() => {});

    expect(getByText("Mode sombre")).toBeDefined();
  });

  it("should show 'Mode clair' label in dark mode", () => {
    mockTheme = "dark";
    const { getByText } = render(<ThemeToggle showLabel />);

    act(() => {});

    expect(getByText("Mode clair")).toBeDefined();
  });

  it("should apply custom className", () => {
    const { container } = render(<ThemeToggle className="mt-2 px-3" />);

    act(() => {});

    const button = container.querySelector("button");
    expect(button?.className).toContain("mt-2");
    expect(button?.className).toContain("px-3");
  });

  it("should have cursor-pointer class", () => {
    const { container } = render(<ThemeToggle />);

    act(() => {});

    const button = container.querySelector("button");
    expect(button?.className).toContain("cursor-pointer");
  });
});

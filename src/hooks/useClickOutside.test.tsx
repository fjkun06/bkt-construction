import { render, screen, fireEvent } from "@testing-library/react";
import { useRef } from "react";

import useClickOutside from "./useClickOutside";

function TestComponent({
  callback,
  active = true,
}: {
  callback: () => void;
  active?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, callback, active);

  return (
    <div ref={ref} data-testid="inside">
      <button data-testid="inside-child">Inside child</button>
    </div>
  );
}

function renderTestComponent(
  callback: () => void = jest.fn(),
  active = true,
) {
  return render(
    <>
      <TestComponent callback={callback} active={active} />
      <button data-testid="outside">Outside</button>
    </>,
  );
}

describe("useClickOutside", () => {
  it("calls callback when clicking outside the element", () => {
    const callback = jest.fn();
    renderTestComponent(callback);

    fireEvent.mouseDown(screen.getByTestId("outside"));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("calls callback on touchstart outside the element", () => {
    const callback = jest.fn();
    renderTestComponent(callback);

    fireEvent.touchStart(screen.getByTestId("outside"));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not call callback when clicking inside the element", () => {
    const callback = jest.fn();
    renderTestComponent(callback);

    fireEvent.mouseDown(screen.getByTestId("inside-child"));

    expect(callback).not.toHaveBeenCalled();
  });

  it("does not call callback when clicking the element itself", () => {
    const callback = jest.fn();
    renderTestComponent(callback);

    fireEvent.mouseDown(screen.getByTestId("inside"));

    expect(callback).not.toHaveBeenCalled();
  });

  it("does not attach listeners when active is false", () => {
    const callback = jest.fn();
    renderTestComponent(callback, false);

    fireEvent.mouseDown(screen.getByTestId("outside"));

    expect(callback).not.toHaveBeenCalled();
  });
});

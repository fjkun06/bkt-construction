import { renderHook, act } from "@testing-library/react";

import { useImageCarousel } from "./useImageCarousel";

describe("useImageCarousel", () => {
  let result: { current: ReturnType<typeof useImageCarousel> };

  beforeEach(() => {
    ({ result } = renderHook(() => useImageCarousel()));
  });

  it("returns COLUMNS layout config", () => {
    expect(result.current.COLUMNS).toHaveLength(3);
    expect(result.current.COLUMNS.map((c) => c.span)).toEqual([
      "lg:col-span-5",
      "lg:col-span-4",
      "lg:col-span-3",
    ]);
  });

  it.each([
    [0, false],
    [5, false],
  ])("hasFailed(%i) returns %s before any errors", (index, expected) => {
    expect(result.current.hasFailed(index)).toBe(expected);
  });

  it("marks an index as failed after handleError", () => {
    act(() => result.current.handleError(2));
    expect(result.current.hasFailed(2)).toBe(true);
    expect(result.current.hasFailed(0)).toBe(false);
  });

  it("tracks multiple failed indices independently", () => {
    act(() => {
      result.current.handleError(1);
      result.current.handleError(4);
    });
    expect(result.current.hasFailed(1)).toBe(true);
    expect(result.current.hasFailed(4)).toBe(true);
    expect(result.current.hasFailed(0)).toBe(false);
    expect(result.current.hasFailed(2)).toBe(false);
  });

  it("ignores duplicate handleError calls", () => {
    act(() => {
      result.current.handleError(3);
      result.current.handleError(3);
    });
    expect(result.current.hasFailed(3)).toBe(true);
  });
});

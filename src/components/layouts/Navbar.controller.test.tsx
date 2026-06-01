import { renderHook, act } from "@testing-library/react";

import useNavbarController from "./Navbar.controller";

describe("useNavbarController", () => {
  it("should initialize with isMobileOpen as false", () => {
    const { result } = renderHook(() => useNavbarController());

    expect(result.current.isMobileOpen).toBe(false);
  });

  it("should toggle isMobileOpen when toggleMobileOpen is called", () => {
    const { result } = renderHook(() => useNavbarController());

    act(() => {
      result.current.toggleMobileOpen();
    });

    expect(result.current.isMobileOpen).toBe(true);

    act(() => {
      result.current.toggleMobileOpen();
    });

    expect(result.current.isMobileOpen).toBe(false);
  });

  it("should close mobile menu when closeMobileMenu is called", () => {
    const { result } = renderHook(() => useNavbarController());

    act(() => {
      result.current.toggleMobileOpen();
    });

    expect(result.current.isMobileOpen).toBe(true);

    act(() => {
      result.current.closeMobileMenu();
    });

    expect(result.current.isMobileOpen).toBe(false);
  });

  it("should provide a navRef", () => {
    const { result } = renderHook(() => useNavbarController());

    expect(result.current.navRef).toBeDefined();
    expect(result.current.navRef.current).toBeNull();
  });
});

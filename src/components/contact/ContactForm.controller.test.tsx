import { renderHook, act } from "@testing-library/react";

import useContactFormController from "./ContactForm.controller";

describe("useContactFormController", () => {
  it("should initialize with no errors and not submitting", () => {
    const { result } = renderHook(() => useContactFormController());

    expect(result.current.errors).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.isSubmitSuccessful).toBe(false);
  });

  it("should provide register function", () => {
    const { result } = renderHook(() => useContactFormController());

    expect(typeof result.current.register).toBe("function");
  });

  it("should provide handleSubmit function", () => {
    const { result } = renderHook(() => useContactFormController());

    expect(typeof result.current.handleSubmit).toBe("function");
  });

  it("should provide onSubmit function", () => {
    const { result } = renderHook(() => useContactFormController());

    expect(typeof result.current.onSubmit).toBe("function");
  });
});

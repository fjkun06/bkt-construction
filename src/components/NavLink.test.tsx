import React from "react";
import { render } from "@testing-library/react";

import NavLink from "./NavLink";

jest.mock("next/link", () => {
  return ({ children, href, className, onClick }: any) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
});

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from "next/navigation";

const mockUsePathname = usePathname as jest.Mock;

describe("NavLink", () => {
  it("should render children text", () => {
    mockUsePathname.mockReturnValue("/");

    const { getByText } = render(<NavLink href="/services">Nos Services</NavLink>);

    expect(getByText("Nos Services")).toBeDefined();
  });

  it("should apply active classes when pathname matches href", () => {
    mockUsePathname.mockReturnValue("/services");

    const { container } = render(<NavLink href="/services">Nos Services</NavLink>);

    const link = container.querySelector("a");
    expect(link?.className).toContain("bg-primary-50");
  });

  it("should apply inactive classes when pathname does not match", () => {
    mockUsePathname.mockReturnValue("/contact");

    const { container } = render(<NavLink href="/services">Nos Services</NavLink>);

    const link = container.querySelector("a");
    expect(link?.className).toContain("text-slate-700");
  });

  it("should mark home link active only for exact match", () => {
    mockUsePathname.mockReturnValue("/services");

    const { container } = render(<NavLink href="/">Accueil</NavLink>);

    const link = container.querySelector("a");
    expect(link?.className).toContain("text-slate-700");
  });

  it("should mark home link active on root path", () => {
    mockUsePathname.mockReturnValue("/");

    const { container } = render(<NavLink href="/">Accueil</NavLink>);

    const link = container.querySelector("a");
    expect(link?.className).toContain("bg-primary-50");
  });
});

import { render, screen } from "@testing-library/react";
import { LawbridgePage } from "../LawbridgePage";

describe("LawbridgePage", () => {
  it("renders without crashing", () => {
    render(<LawbridgePage />);
  });

  it("displays the logo", () => {
    render(<LawbridgePage />);
    const logo = screen.getByAltText("Lawbridge Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<LawbridgePage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders login button", () => {
    render(<LawbridgePage />);
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { HomeButton } from "./HomeButton";
import React from "react";

const useMockLocation = () => {
  return {
    pathname: "/asdasdasd",
  };
};

const mockLinkLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: () => mockLinkLocation,
  useLocation: useMockLocation,
}));

describe("HomeButton", () => {
  it("should render correctly", async () => {
    render(<HomeButton data-testid="homeButton" />);
    expect(await screen.findByTestId("homeButton"));
  });
});

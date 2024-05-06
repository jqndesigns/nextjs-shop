import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";

const searchFn = jest.fn();
const user = userEvent.setup();
const renderComponent = () =>
  render(<SearchBar onSearch={searchFn}></SearchBar>);

describe("Search Bar", () => {
  it("renders correctly", () => {
    renderComponent();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("calls search function", async () => {
    renderComponent();

    expect(searchFn).toHaveBeenCalledTimes(0);

    const input = screen.getByRole("textbox");
    await user.type(input, "test");

    expect(input).toHaveValue("test");
    expect(searchFn).toHaveBeenCalledTimes(4);
  });
});

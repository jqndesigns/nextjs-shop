import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchOrder from "../SearchOrder";
import { Order } from '../SearchOrder';

const orderFn = jest.fn();
const user = userEvent.setup();

const renderComponent = () =>
  render(<SearchOrder onChangeOrder={orderFn}></SearchOrder>);

describe("Search Order", () => {
  it("renders correctly", () => {
    renderComponent();

    expect(screen.getAllByRole("img").length).toBe(2);
  });

  it("calls the order fn for each one", async () => {
    renderComponent();

    expect(orderFn).toHaveBeenCalledTimes(0);

    await user.click(screen.getAllByRole("img")[0]);

    expect(orderFn).toHaveBeenCalledTimes(1);
    expect(orderFn).toHaveBeenLastCalledWith(Order.DESC);

    await user.click(screen.getAllByRole("img")[1]);

    expect(orderFn).toHaveBeenCalledTimes(2);
    expect(orderFn).toHaveBeenLastCalledWith(Order.ASC);
  });
});

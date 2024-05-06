import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "../ShopItem";

const addFn = jest.fn();
const user = userEvent.setup();

const defaultItem = {
  id: "3ikmnr",
  name: "ProductName",
  colours: 1,
  price: { basePrice: 10, discount: 20, currency: "€" },
  image: "image",
};

const defaultProps = {
  item: { ...defaultItem },
  onAdd: addFn,
};

const renderWithProps = (props: any = {}) => {
  render(<ShopItem {...defaultProps} {...props}></ShopItem>);
};

describe("Shop Item", () => {
  it("renders correctly with discount", () => {
    renderWithProps();

    expect(screen.getByText(/productname/i)).toBeInTheDocument();
    expect(screen.getByText(/10.00 €/i)).toBeInTheDocument();
    expect(screen.getByText(/8.00 €/i)).toBeInTheDocument();
    expect(screen.getByTestId("colour-info")).toHaveClass("invisible");
    expect(screen.getByAltText(/productname/i)).toBeInTheDocument();
  });

  it("renders correctly with more colours", () => {
    renderWithProps({ item: { ...defaultItem, colours: 2 } });

    expect(screen.getByTestId("colour-info")).not.toHaveClass("invisible");
  });

  it("calls the add event", async () => {
    renderWithProps();

    expect(addFn).toHaveBeenCalledTimes(0);

    await user.click(screen.getByRole("button"));

    expect(addFn).toHaveBeenCalledTimes(1);
    expect(addFn).toHaveBeenCalledWith(defaultItem.id);
  });
});

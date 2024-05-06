import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopDashboard from "../ShopDashboard";

const user = userEvent.setup();
const renderComponent = () => render(<ShopDashboard></ShopDashboard>);

describe("Shop Dashboard", () => {
  it("renders correctly with default order", () => {
    renderComponent();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByAltText("Orden descendiente")).toBeInTheDocument();
    expect(screen.getByAltText("Orden ascendiente")).toBeInTheDocument();
    expect(screen.getByTestId("shop-grid")).toBeInTheDocument();
    expect(screen.getByTestId("shop-grid").children[0]).toHaveTextContent(
      "Polo manga larga estampada única"
    );
  });

  it("filters items correctly", async () => {
    renderComponent();

    expect(screen.getByTestId("shop-grid").children.length).toBe(8);

    await user.type(screen.getByRole("textbox"), "tricolor");

    expect(screen.getByTestId("shop-grid").children.length).toBe(2);
    expect(screen.getByTestId("shop-grid").children[0]).toHaveTextContent(
      "tricolor"
    );
    expect(screen.getByTestId("shop-grid").children[1]).toHaveTextContent(
      "tricolor"
    );
  });

  it("orders items ascending and descending", async () => {
    renderComponent();

    expect(screen.getByTestId("shop-grid").children[0]).toHaveTextContent(
      "18.99 €"
    );

    await user.click(screen.getByAltText("Orden ascendiente"));

    expect(screen.getByTestId("shop-grid").children[0]).toHaveTextContent(
      "20.99 €"
    );

    await user.click(screen.getByAltText("Orden descendiente"));

    expect(screen.getByTestId("shop-grid").children[0]).toHaveTextContent(
      "15.19 €(-20%)"
    );
  });
});

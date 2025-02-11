import ItemCost from "../components/costs/ItemCost";
import { render } from "@testing-library/react";
describe("ItemCost component", () => {
  test("ItemCost should be rendered", () => {
    render(<ItemCost />);
  });
});

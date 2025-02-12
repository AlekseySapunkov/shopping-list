import ItemCost from "../components/costs/ItemCost";
import { render } from "@testing-library/react";
describe("ItemCost component", () => {
  test("ItemCost should be rendered", () => {
    const props = {
      id: 10,
      date: new Date("2022-05-25 9:00"),
      description: "бла бла",
      price: 35,
    };
    const { container } = render(<ItemCost key={10} {...props} />);
    expect(
      container.getElementsByClassName("cost-date__day")[0].textContent
    ).toBe("25");
  });
});

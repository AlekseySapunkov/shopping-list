import ItemCost from "../components/costs/ItemCost";
import { render } from "@testing-library/react";
describe("ItemCost component", () => {
  test("ItemCost should be rendered", () => {
    const props={
      key: 10,
      id: 10,
      date: new Date('2022-05-25 9:00'),
      description: 'бла бла',
      price: 35,
    }

    render(<ItemCost {...props}/>);
  });
});

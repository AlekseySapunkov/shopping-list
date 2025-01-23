import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("it updates the input value", () => {
    render(<App />);
    const input = screen.getByLabelText("Выбор По Году");
    fireEvent.change(input, { target: { value: '2023' } });
    expect(input.value).toBe('2023');
  });
});

import deleteApiById from "../services/DeleteApi";
import jest from "jest";
import axios from "axios";
jest.mock("axios");

describe("удаление элемента из базы данных", () => {
  test("test delete api", async () => {
    // Mock the axios delete response
    axios.delete.mockResolvedValue({ data: { id: 3 } });

    const response = await deleteApiById(3);
    expect(response.data.id).toBe(3);
  });
});

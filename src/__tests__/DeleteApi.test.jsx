import deleteApiById from "../services/DeleteApi";
import mockAxios from "jest-mock-axios";

describe("deleteApiById", () => {
  afterEach(() => {
    mockAxios.reset(); // Сброс мока после каждого теста
  });

  it("should delete an item and return its id", async () => {
    const idToDelete = 6;
    const mockResponse = { data: { id: idToDelete } };
    mockAxios.delete.mockResolvedValue(mockResponse);

    const result = await deleteApiById(idToDelete);

    expect(Number(result)).toBe(idToDelete);

  });

  it("should handle errors", async () => {
    const idToDelete = "three";
    mockAxios.delete.mockRejectedValue(new Error("Network Error"));

    const result = await deleteApiById(idToDelete);

    expect(result).toBeUndefined();
    expect(mockAxios.delete).toHaveBeenCalledWith(`http://localhost:5100/items/${idToDelete}`);
  });
});


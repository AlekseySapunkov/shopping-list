// deleteApi.test.js
import deleteApiById from "../services/DeleteApi";
import axios from "axios";
jest.mock("axios");

describe("deleteApiById", () => {
  it("should delete an item and return its id", async () => {
    const idToDelete = 3;
    const mockResponse = { data: { id: idToDelete } };
    
    // Настройка мока для axios.delete
    axios.delete.mockResolvedValue(mockResponse);
    
    // Вызов функции
    const result = await deleteApiById(idToDelete);
    
    // Проверка результата
    expect(result).toBe(idToDelete);
    expect(axios.delete).toHaveBeenCalledWith(`http://localhost:5100/items/${idToDelete}`);
  });

  it("should handle errors", async () => {
    const idToDelete = 3;
    
    // Настройка мока для axios.delete, чтобы он вызывал ошибку
    axios.delete.mockRejectedValue(new Error("Network Error"));
    
    // Вызов функции и проверка, что она не выбрасывает ошибку
    const result = await deleteApiById(idToDelete);
    
    // Проверка, что результат равен undefined, так как ошибка была обработана
    expect(result).toBeUndefined();
    expect(axios.delete).toHaveBeenCalledWith(`http://localhost:5100/items/${idToDelete}`);
  });
});
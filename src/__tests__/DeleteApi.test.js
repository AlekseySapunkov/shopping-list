import deleteApiById from "../services/DeleteApi";
import jest from "jest"
jest.mock("axios")
describe('удаление элемента из базы данных',()=>{
    test("test delete api", async ()=>{
       const response = await deleteApiById(3)
       expect(response.data.id).toBe(3);
    })
})
import deleteApiById from "../services/DeleteApi";
import axios from "axios";
jest.mock("axios")
describe('удаление элемента из базы данных',()=>{
    test("test delete api", async ()=>{
       const response = await axios.delete.mockResolvedValue({})
    })
})
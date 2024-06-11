import axios from "axios";
import { UserData } from "../BLL/type";

async function getAllUsers() {
    const response = await axios.get(`http://localhost:8080/api/users`);
    return response.data;
}

async function addUser(newUser: UserData) {
    const response = await axios.post('http://localhost:8080/api/users', newUser);
    return response.data;
}

async function deleteUser(id:number) {
    axios.delete('http://localhost:8080/api/users/'+id);
    return true;
}
export {getAllUsers, addUser, deleteUser};
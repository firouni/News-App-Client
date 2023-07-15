import axios from "axios";

export const postAuthRegister = async (values) => {
    const addUser = await axios.post('http://localhost:5002/api/users/register',{...values})
}

export const fetchAccount = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(
        'http://localhost:5002/api/users/',
        { headers: { Authorization: token } }
    );
    return data;
}
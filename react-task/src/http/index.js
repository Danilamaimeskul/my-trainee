import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const fetchProjects = async () => {
    const {data} = await $host.get('api')
    // console.log(data);
    return data;
}



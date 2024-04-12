import axios from "./Axios";

async function get<T>(url: string): Promise<T> {
    return await axios.get(url)
}


export default { get } 
import axios from "axios";

const getRealTimeValues = (url: string) => {
    const result = axios(url)
    return result;
}

export { getRealTimeValues }
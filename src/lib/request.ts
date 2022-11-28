import axios from "axios";

export const requestDataWrap = (data: any) => {
    return { data: JSON.stringify(data) };
};
export const request = async (api, data, method = "post") => {
    console.log(api);
    
    return (await axios[method](api, requestDataWrap(data), { headers: { 'Content-Type': 'multipart/form-data' } })).data
}
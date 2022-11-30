import { request } from "../request"

export const getArticlesList = async (option:any) =>{
    return request("/api/articles/list",option)
}
export const getArticleDetails = async (option:any) =>{
    return request("/api/articles/fetching",option)
}

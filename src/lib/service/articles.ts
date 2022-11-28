import axios from "axios" 
import { request, requestDataWrap } from "../request"

export const getArticlesList = async (option) =>{
    return request("/api/articles/list",option)
}
export const getArticleDetails = async (option) =>{
    return request("/api/articles/fetching",option)
}

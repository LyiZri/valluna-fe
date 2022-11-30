import { request, requestDataWrap } from "../request"

export const getGameDetails = async (option:any) =>{
    return request("/api/gamelistings/list",option)
}
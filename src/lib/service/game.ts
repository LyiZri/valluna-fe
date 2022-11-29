import { request, requestDataWrap } from "../request"

export const getGameDetails = async (option) =>{
    return request("/api/gamelistings/list",option)
}
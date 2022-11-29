import {request} from '../request'

export const getHomeBannerList = async (option) =>{
    return request("/api/homepage/bannerlist",option)
}
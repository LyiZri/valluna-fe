import {request} from '../request'

export const getHomeBannerList = async (option:any) =>{
    return request("/api/homepage/bannerlist",option)
}
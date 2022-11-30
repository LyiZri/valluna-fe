import { IArticles } from '@/lib/type/articles'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
/**
 * 参考文档 https://docs.alchemy.com/reference/getnfts
 * @param req
 * @param res
 * @returns
 */
export default async function alchemy_transmit(req: NextApiRequest, res: NextApiResponse) {
    const {api,options} = req.body
    const {data} = await axios.post("http://18.138.236.244:8000"+api,options)
    console.log(data);
    
    try {
        res.status(200).json({
            ok: true,
            code: 1,
            data: data.data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'request status error:' + error,
        })
    }
}

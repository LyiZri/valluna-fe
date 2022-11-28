import axios from "axios"

/**
 * https://github.com/axios/axios
 * 基于axios二次封装的request库，支持客户端和服务端
 */

export const getShimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#e5e7eb" offset="20%" />
        <stop stop-color="#d1d5db" offset="50%" />
        <stop stop-color="#e5e7eb" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#d1d5db" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

export const getBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export const getBlurDataURL = (w, h) =>
    `data:image/svg+xml;base64,${getBase64(getShimmer(w || window?.screen?.width, h || window?.screen?.height))}`

/**
 * @desc 将长字符串转为短字符串，超出部分显示为...
 * @param {*} str 待处理字符串
 * @param length 需保留的长度 默认为10
 * @return 返回处理后的字符串
 * @author cas@nextme.one
 */
export const getShortenStr = (str: string, length = 10): string => {
    if (typeof str !== 'string') return str
    if (str.length < length) return str
    return str.slice(0, length) + '...'
}


export function timestampToTime(data: string | number) {
    if (!data) return;
    let num = data.toString().length == 10 ? Number(data) * 1000 : data;
    let date = new Date(num);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D;
}
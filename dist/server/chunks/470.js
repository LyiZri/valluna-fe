"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 8301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ KlCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function KlCard(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
        ...props,
        className: `rounded-xl p-4 bg-cardbg hover:bg-cardbg-hover text-white hover:shadow-inner  hover:text-yellow-6 overflow-hidden ${props.className}`,
        children: props === null || props === void 0 ? void 0 : props.children
    });
}


/***/ }),

/***/ 9899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ request)
/* harmony export */ });
/* unused harmony export requestDataWrap */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const requestDataWrap = (data)=>{
    return {
        data: JSON.stringify(data)
    };
};
const request = async (api, data, method = "post")=>{
    console.log(api);
    return (await axios__WEBPACK_IMPORTED_MODULE_0__["default"][method](api, requestDataWrap(data), {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })).data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getArticleDetails),
/* harmony export */   "r": () => (/* binding */ getArticlesList)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getArticlesList = async (option)=>{
    return (0,_request__WEBPACK_IMPORTED_MODULE_0__/* .request */ .W)("/api/articles/list", option);
};
const getArticleDetails = async (option)=>{
    return (0,_request__WEBPACK_IMPORTED_MODULE_0__/* .request */ .W)("/api/articles/fetching", option);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZM": () => (/* binding */ timestampToTime),
/* harmony export */   "kh": () => (/* binding */ HTMLDecode),
/* harmony export */   "rX": () => (/* binding */ getBlurDataURL),
/* harmony export */   "z7": () => (/* binding */ getShortenStr)
/* harmony export */ });
/* unused harmony exports getShimmer, getBase64 */
/**
 * https://github.com/axios/axios
 * 基于axios二次封装的request库，支持客户端和服务端
 */ const getShimmer = (w, h)=>`
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
  </svg>`;
const getBase64 = (str)=> true ? Buffer.from(str).toString("base64") : 0;
const getBlurDataURL = (w, h)=>{
    var ref, ref1;
    return `data:image/svg+xml;base64,${getBase64(getShimmer(w || (window === null || window === void 0 ? void 0 : (ref = window.screen) === null || ref === void 0 ? void 0 : ref.width), h || (window === null || window === void 0 ? void 0 : (ref1 = window.screen) === null || ref1 === void 0 ? void 0 : ref1.height)))}`;
};
/**
 * @desc 将长字符串转为短字符串，超出部分显示为...
 * @param {*} str 待处理字符串
 * @param length 需保留的长度 默认为10
 * @return 返回处理后的字符串
 * @author cas@nextme.one
 */ const getShortenStr = (str, length = 10)=>{
    if (typeof str !== "string") return str;
    if (str.length < length) return str;
    return str.slice(0, length) + "...";
};
function timestampToTime(data) {
    if (!data) return;
    let num = data.toString().length == 10 ? Number(data) * 1000 : data;
    let date = new Date(num);
    let Y = date.getFullYear() + "-";
    let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    let D = date.getDate() + " ";
    let h = date.getHours() + ":";
    let m = date.getMinutes() + ":";
    let s = date.getSeconds();
    return Y + M + D;
}
const HTMLDecode = (text)=>{
    if (!text) {
        return "";
    }
    if (typeof text !== "string") {
        return String(text);
    }
    let temp = document.createElement("div");
    temp.innerHTML = text;
    const output = temp.textContent || temp.innerText;
    temp = null;
    return output;
};


/***/ })

};
;
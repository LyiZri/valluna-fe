"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/articles/list";
exports.ids = ["pages/api/articles/list"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/articles/list.ts":
/*!****************************************!*\
  !*** ./src/pages/api/articles/list.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ alchemy_transmit)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/**\n * 参考文档 https://docs.alchemy.com/reference/getnfts\n * @param req\n * @param res\n * @returns\n */ async function alchemy_transmit(req, res) {\n    const { api , options  } = req.body;\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://18.138.236.244:8000\" + api, options);\n    console.log(data);\n    try {\n        res.status(200).json({\n            ok: true,\n            code: 1,\n            data: data.data\n        });\n    } catch (error) {\n        res.status(500).json({\n            message: \"request status error:\" + error\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FydGljbGVzL2xpc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFeUI7QUFDekI7Ozs7O0NBS0MsR0FDYyxlQUFlQyxpQkFBaUJDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDdEYsTUFBTSxFQUFDQyxJQUFHLEVBQUNDLFFBQU8sRUFBQyxHQUFHSCxJQUFJSSxJQUFJO0lBQzlCLE1BQU0sRUFBQ0MsS0FBSSxFQUFDLEdBQUcsTUFBTVAsa0RBQVUsQ0FBQywrQkFBNkJJLEtBQUlDO0lBQ2pFSSxRQUFRQyxHQUFHLENBQUNIO0lBRVosSUFBSTtRQUNBSixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ2pCQyxJQUFJLElBQUk7WUFDUkMsTUFBTTtZQUNOUCxNQUFNQSxLQUFLQSxJQUFJO1FBQ25CO0lBQ0osRUFBRSxPQUFPUSxPQUFPO1FBQ1paLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDakJJLFNBQVMsMEJBQTBCRDtRQUN2QztJQUNKO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGx1bmEtZmUvLi9zcmMvcGFnZXMvYXBpL2FydGljbGVzL2xpc3QudHM/ZDI1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXJ0aWNsZXMgfSBmcm9tICdAL2xpYi90eXBlL2FydGljbGVzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8qKlxuICog5Y+C6ICD5paH5qGjIGh0dHBzOi8vZG9jcy5hbGNoZW15LmNvbS9yZWZlcmVuY2UvZ2V0bmZ0c1xuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWxjaGVteV90cmFuc21pdChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAgIGNvbnN0IHthcGksb3B0aW9uc30gPSByZXEuYm9keVxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vMTguMTM4LjIzNi4yNDQ6ODAwMFwiK2FwaSxvcHRpb25zKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIG9rOiB0cnVlLFxuICAgICAgICAgICAgY29kZTogMSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAncmVxdWVzdCBzdGF0dXMgZXJyb3I6JyArIGVycm9yLFxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImFsY2hlbXlfdHJhbnNtaXQiLCJyZXEiLCJyZXMiLCJhcGkiLCJvcHRpb25zIiwiYm9keSIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJvayIsImNvZGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/articles/list.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/articles/list.ts"));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 2713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.38f01520.svg","height":40,"width":140});
// EXTERNAL MODULE: ./tailwind.config.js
var tailwind_config = __webpack_require__(8010);
var tailwind_config_default = /*#__PURE__*/__webpack_require__.n(tailwind_config);
;// CONCATENATED MODULE: ./src/config/index.tsx


const config = {
    logo: logo,
    title: "Klick",
    name: "klick",
    theme: (tailwind_config_default()).theme
};
const colors = config.theme.extend.colors;

// EXTERNAL MODULE: ./src/components/kl-icons/jndex.tsx
var jndex = __webpack_require__(1007);
;// CONCATENATED MODULE: ./src/components/Layout/footer.tsx






function Footer() {
    const iconArr = [
        {
            type: "icon-a-facebook1",
            url: ""
        },
        {
            type: "icon-a-twitter2",
            url: ""
        },
        {
            type: "icon-discord",
            url: ""
        }
    ];
    const IconBox = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            className: "flex justify-end",
            children: iconArr.map((item, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    className: "ml-8 w-7 h-7 text-white text-center rounded-full bg-tagbg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(jndex/* default */.Z, {
                        className: "text-sm -mt-0.5 leading-7 block",
                        type: item.type
                    }, index)
                }, index);
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        className: "bg-cardbg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                className: "px-content py-16 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 104,
                                height: 30,
                                alt: "",
                                src: config.logo
                            }),
                            IconBox()
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pt-4",
                        children: "A one stop destination for web3 gaming."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "pb-8 border-t border-black text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-weight-line text-xs pt-4",
                    children: " Copyright \xa9 2022 Klick. Co., Ltd. All Rights Reserved."
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/kl-tabs/index.tsx



const KlTabs = (0,material_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Tabs, {
        ...props,
        TabIndicatorProps: {
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "MuiTabs-indicatorSpan hover:text-white"
            })
        }
    }))(({ theme  })=>({
        color: colors["sec-stress"],
        width: "100%",
        padding: "0px 50px 0px 50px",
        "& .MuiTabs-indicator": {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent"
        },
        "& .MuiTabs-indicatorSpan": {
            maxWidth: 60,
            width: "100%",
            backgroundColor: colors["yellow-6"]
        },
        "& .Mui-selected": {
            lineHeight: "32px",
            color: colors["yellow-6"] + " !important"
        }
    }));
const KlTab = (0,material_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Tab, {
        disableRipple: true,
        ...props
    }))(({ theme  })=>({
        textTransform: "none",
        width: "33%",
        color: "rgba(255, 255, 255, 0.7)",
        "&.Mui-selected": {
            color: "#fff"
        },
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)"
        },
        ":hover": {
            color: "#fff"
        }
    }));


;// CONCATENATED MODULE: ./src/components/kl-search-input/index.tsx


const KlInput = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: "text",
        ...props,
        className: `bg-transparent font-mulish focus-visible:ring-0 focus-visible:outline-none text-white ${props.className}`
    });
};
/* harmony default export */ const kl_search_input = (KlInput);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Layout/header.tsx









var ERoute;
(function(ERoute) {
    ERoute["HOME"] = "/home";
    ERoute["ALL_GAMES"] = "/all-games";
    ERoute["ARTICLES"] = "/articles";
})(ERoute || (ERoute = {}));
function Header() {
    const [tabNum, setTabNum] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        console.log(router);
        if ((router === null || router === void 0 ? void 0 : router.route) == ERoute.HOME) {
            setTabNum(0);
        } else if ((router === null || router === void 0 ? void 0 : router.route) == ERoute.ALL_GAMES) {
            setTabNum(1);
        } else if ((router === null || router === void 0 ? void 0 : router.route) == ERoute.ARTICLES) {
            setTabNum(2);
        }
    }, [
        router === null || router === void 0 ? void 0 : router.route
    ]);
    const onTabChange = (event, _tabNum)=>{
        if (_tabNum == 0) {
            router.push(ERoute.HOME);
        } else if (_tabNum == 1) {
            router.push(ERoute.ALL_GAMES);
        } else if (_tabNum == 2) {
            router.push(ERoute.ARTICLES);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        className: "bg-cardbg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            className: "mx-auto w-content flex justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    className: "mt-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        width: 139,
                        height: 40,
                        alt: "",
                        src: config.logo
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(KlTabs, {
                    value: tabNum,
                    onChange: onTabChange,
                    "aria-label": "basic tabs example",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(KlTab, {
                            label: "Home",
                            value: 0
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(KlTab, {
                            label: "All games",
                            value: 1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(KlTab, {
                            label: "Articles",
                            value: 2
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    className: "my-2",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        className: "bg-cardbg-hover rounded-3xl px-4 flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(kl_search_input, {
                                placeholder: "Search...",
                                className: "h-8"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(jndex/* default */.Z, {
                                className: "cursor-pointer block leading-8",
                                type: "icon-Navicon_search"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Layout/index.tsx





function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        className: "min-h-screen flex flex-col justify-between bg-pagebg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: " w-8/12 mx-auto",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 1007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright (c) 2022 Next Labs. All rights reseved.
 * @fileoverview | 自定义图标库，来自iconfont应用 https://ant.design/components/icon-cn
 * @version 0.1 | 2022-07-19 // Initial version.
 * @Date: 2022-07-19 10:00:03
 * @Last Modified by: 0x3Anthony
 * @Last Modified time: 2022-11-17 23:23:46
 */ 
const KlIcon = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.createFromIconfontCN)({
    scriptUrl: "//at.alicdn.com/t/c/font_3777499_fcgn5rii5k4.js"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KlIcon);


/***/ }),

/***/ 8010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const plugin = __webpack_require__(6735);
module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: false,
    theme: {
        extend: {
            padding: {
                "content": "260px"
            },
            colors: {
                "pagebg": "#13141B",
                "cardbg": "#23232F",
                "cardbg-hover": "#393944",
                "tagbg": "#616169",
                "disable": "#424349",
                "weight-line": "rgba(255,255,255,.6)",
                "hover-line": "rgba(255,255,255,.4)",
                "simple-line": "rgba(255,255,255,.2)",
                "light-line": "rgba(255,255,255,.08)",
                "stress": "#fff",
                "sec-stress": "rgba(255,255,255,.6)",
                "second": "rgba(255,255,255,.4)",
                "placeholder": "rgba(255,255,255,.2)",
                "yellow-6": "#F1DC4A",
                "yellow-5": "#EED106",
                "yellow-4": "#9B8213",
                "yellow-3": "rgba(145,130,19,.5)",
                "yellow-2": "rgba(145,130,19,.15)",
                "yellow-hover": "rgba(240,208,64,.05)",
                "pink-6": "#FC476D",
                "pink-5": "#FF557E",
                "pink-4": "#AB1A3D",
                "green-6": "#62CDC9",
                "green-5": "#A7EFEC",
                "green-4": "#A7EFEC",
                "green-3": "#1B9691",
                "green-2": "rgba(98, 205, 201, 0.05)"
            },
            width: {
                "content": "66.6%"
            },
            fontFamily: {
                mulish: "Mulish"
            }
        }
    },
    plugins: [
        __webpack_require__(5718),
        plugin(function({ addUtilities  }) {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                },
                ".rotate-y-360": {
                    transform: "rotateY(360deg)"
                }
            });
        })
    ],
    variants: {
        extend: {}
    }
};


/***/ })

};
;
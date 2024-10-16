"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action.json
const call_to_action_namespaceObject = JSON.parse('{"TN":"Send Us Your <br/><strong>Bright Ideas</strong>","Oc":"Get in Touch","fL":"<a href=\\"mailto:infoname@domain.com\\" target=\\"_blank\\">infoname@domain.com</a><p>36 East 8th Street, New York, <br />NY 10003, United States.</p>","Md":"/images/cta-bg-1.jpg","_l":"/images/cta-circle2.png","xs":[{"link":"https://facebook.com/","icon":"fab fa-facebook-f","title":"Facebook"},{"link":"https://instagram.com/","icon":"fab fa-instagram","title":"Instagram"},{"link":"https://twitter.com/","icon":"fab fa-twitter","title":"Twitter"},{"link":"https://linkedin.com/","icon":"fab fa-linkedin-in","title":"LinkedIn"}]}');
;// CONCATENATED MODULE: ./src/components/sections/CallToAction.jsx


const CallToActionSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            style: {
                "backgroundImage": "url(" + call_to_action_namespaceObject.Md + ")",
                "backgroundPosition": "center center",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xs-12 col-sm-12 col-md-12 col-lg-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-heading gap-bottom-40 onovo-text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "onovo-subtitle-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: call_to_action_namespaceObject.Oc
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "onovo-title-2",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: call_to_action_namespaceObject.TN
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "onovo-cta-text",
                                    dangerouslySetInnerHTML: {
                                        __html: call_to_action_namespaceObject.fL
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-12 col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "onovo-cta-social",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "image",
                                        style: {
                                            "backgroundImage": "url(" + call_to_action_namespaceObject._l + ")"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "cta-img-circle img-circle--1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "cta-img-circle img-circle--2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "cta-img-circle img-circle--3"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "desc",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            children: call_to_action_namespaceObject.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        className: "onovo-btn btn--white btn--large btn--icon onovo-hover-btn",
                                                        href: item.link,
                                                        target: "_blank",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                "aria-hidden": "true",
                                                                className: item.icon
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: item.title
                                                            })
                                                        ]
                                                    })
                                                }, `cta-social-item-${key}`))
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CallToAction = (CallToActionSection);


/***/ })

};
;
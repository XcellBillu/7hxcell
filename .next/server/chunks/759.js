"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Partners)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/partners.json
const partners_namespaceObject = JSON.parse('{"Oc":"Fantastic and Premium Clients","TN":"We Have Had the Pleasure of <br/>Working with Some Clients","ev":[{"link":"https://google.com","label":"Visit Website","image":"/images/brand1.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand2.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand3.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand4.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand5.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand6.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand7.png"},{"link":"https://google.com","label":"Visit Website","image":"/images/brand2.png"}]}');
;// CONCATENATED MODULE: ./src/components/sections/Partners.jsx


const PartnersSection = ({ paddingTop  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: paddingTop ? "onovo-section gap-top-140" : "onovo-section",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-heading gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: partners_namespaceObject.Oc
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "onovo-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: partners_namespaceObject.TN
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: partners_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "onovo-brands onovo-hover-3 onovo-hover-label",
                                    "data-onovo-overlay": true,
                                    "data-onovo-scroll": true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        target: "_blank",
                                        href: item.link,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "image",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    decoding: "async",
                                                    src: item.image,
                                                    width: "285",
                                                    height: "200",
                                                    alt: item.alt
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "label onovo-white-black",
                                                children: "Visit Website"
                                            })
                                        ]
                                    })
                                })
                            }, `partners-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Partners = (PartnersSection);


/***/ })

};
;
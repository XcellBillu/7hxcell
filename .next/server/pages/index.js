"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"TN":"A Design Agency <br/>Delivering Success by <br/>Winning Hearts","Oc":"Welcome to Onovo","Rx":{"S":"14","P":"Years of Digital Solutions Experience"},"ev":[{"title":"Our Mission","text":"From the moment our company was founded we have helped our clients find <strong>exceptional solutions for their businesses</strong> memorable brands and digital products. Our expertise grows with each year, and our accumulated experience."},{"title":"Our Goal","text":"Our goal is to deliver amazing experiences that make people talk, and build strategic value for brands, tech, entertainment.","button":{"label":"More About Us","link":"/about"}}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/About.jsx



const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xs-12 col-sm-12 col-md-8 col-lg-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "onovo-heading gap-bottom-40",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "onovo-subtitle-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: about_namespaceObject.Oc
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        className: "onovo-title-2",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: about_namespaceObject.TN
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "onovo-number onovo-circle-text mrg-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "num onovo-text-white",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: about_namespaceObject.Rx.S
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "label onovo-text-black onovo-circle-text-label",
                                                        children: about_namespaceObject.Rx.P
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row",
                                    children: about_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "text-uppercase",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: item.text
                                                    }
                                                }),
                                                item.button != undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    className: "onovo-btn onovo-hover-btn",
                                                    href: item.button.link,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "arrow",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.button.label
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, `about-item-${key}`))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "onovo-number onovo-circle-text mrg-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num onovo-text-white",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: about_namespaceObject.Rx.S
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "label onovo-text-black onovo-circle-text-label",
                                        children: about_namespaceObject.Rx.P
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
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LatestPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts.json
const latest_posts_namespaceObject = JSON.parse('{"Oc":"News &amp; Blog","TN":"Insights, Thoughts, Industry <br>Trends, Marketing Tips","LI":{"P":"View All Posts","p":"/blog"},"jX":3}');
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/LatestPosts.jsx




const LatestPostsSection = ({ posts  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-heading align-center gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: latest_posts_namespaceObject.Oc
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "onovo-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: latest_posts_namespaceObject.TN
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: posts.slice(0, latest_posts_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-blog-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "image",
                                            "data-onovo-overlay": true,
                                            "data-onovo-scroll": true,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: `/blog/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    decoding: "async",
                                                    src: item.image,
                                                    width: "400",
                                                    height: "240",
                                                    alt: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "desc",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "date",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(date/* default */.Z, {
                                                                dateString: item.date
                                                            })
                                                        }),
                                                        item.category
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: `/blog/${item.id}`,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "onovo-text",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            children: [
                                                                item.short,
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: `/blog/${item.id}`,
                                                                    className: "onovo-btn onovo-hover-btn",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Read more"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `latest-post-item-${key}`))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "align-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            className: "onovo-btn onovo-hover-btn",
                            href: latest_posts_namespaceObject.LI.p,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "arrow",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: latest_posts_namespaceObject.LI.P
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const LatestPosts = (LatestPostsSection);


/***/ }),

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"e":[{"image":"/images/serv-icon1.png","title":"Creation","text":"Developing websites is about so much more than marketing. It’s also about aesthetics.","link":"/services/service-1"},{"image":"/images/serv-icon2.png","title":"Websites","text":"Developing websites is about so much more than marketing. It’s also about aesthetics.","link":"/services/service-2"},{"image":"/images/serv-icon3.png","title":"Studio","text":"Developing websites is about so much more than marketing. It’s also about aesthetics.","link":"/services/service-3"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx





const ServicesSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* servicesHover */.jx)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container-xl",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row onovo-services-grid-fw",
                    children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: key == 1 ? "onovo-service-grid-item onovo-hover-1 active active--default" : "onovo-service-grid-item onovo-hover-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.link,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                decoding: "async",
                                                src: item.image,
                                                alt: item.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "onovo-title-3",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: item.link,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "onovo-text",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: item.text
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "onovo-bubble",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bubble-1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bubble-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bubble-3"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `services-item-${key}`))
                })
            })
        })
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 2453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Showcase)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/showcase.json
const showcase_namespaceObject = JSON.parse('{"Oc":"Featured Projects","TN":"Studio Showcase","LI":{"P":"All Projects","p":"/projects"},"jX":5}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Showcase.jsx





const ShowcaseSection = ({ projects  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* showcaseHover */.dO)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-bottom-140",
            style: {
                "borderBottom": "1px solid #555"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-heading gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: showcase_namespaceObject.Oc
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "onovo-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: showcase_namespaceObject.TN
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-showcase gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "img-circle onovo-circle-move"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-showcase-items",
                                children: projects.slice(0, showcase_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "onovo-showcase-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "category",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: `/projects/${item.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        "data-splitting": true,
                                                        "data-onovo-scroll": true,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.category
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "title",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: `/projects/${item.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "onovo-lnk",
                                                        "data-splitting": true,
                                                        "data-onovo-scroll": true,
                                                        children: item.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "image",
                                                "data-onovo-overlay": true,
                                                "data-onovo-scroll": true,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "img",
                                                    style: {
                                                        "backgroundImage": "url(" + item.image + ")"
                                                    }
                                                })
                                            })
                                        ]
                                    }, `showcase-item-${key}`))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        className: "onovo-btn onovo-hover-btn",
                        href: showcase_namespaceObject.LI.p,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "arrow",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: showcase_namespaceObject.LI.P
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Showcase = (ShowcaseSection);


/***/ }),

/***/ 9060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Team)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"Oc":"Experts Team Members","TN":"We do awesome Services <br>for our clients.","jX":4}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Team.jsx



const TeamSection = ({ team  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-heading align-center gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-subtitle-1",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: team_namespaceObject.Oc
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "onovo-title-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: team_namespaceObject.TN
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: team.slice(0, team_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "onovo-team",
                                    "data-onovo-overlay": true,
                                    "data-onovo-scroll": true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "onovo-team-item onovo-hover-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "desc",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: `/team/${item.id}`,
                                                            className: "onovo-lnk",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                "data-splitting": true,
                                                                "data-onovo-scroll": true,
                                                                children: item.name
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "onovo-subtitle-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            "data-splitting": true,
                                                            "data-onovo-scroll": true,
                                                            children: item.role
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "onovo-social-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                            children: item.social.map((link, link_key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        className: "onovo-social-link onovo-hover-2",
                                                                        href: link.link,
                                                                        title: link.title,
                                                                        target: "_blank",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            "aria-hidden": "true",
                                                                            className: link.icon
                                                                        })
                                                                    })
                                                                }, `team-item-${key}-social-link-${link_key}`))
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "image",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: `/team/${item.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        decoding: "async",
                                                        src: item.image,
                                                        width: "350",
                                                        height: "530",
                                                        alt: item.name
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "num onovo-text-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: item.first_letter
                                                })
                                            })
                                        ]
                                    })
                                })
                            }, `team-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Team = (TeamSection);


/***/ }),

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString  }) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "LLLL d, yyyy")
    });
}


/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3513);
/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6641);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5081);
/* harmony import */ var _components_sections_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4424);
/* harmony import */ var _components_sections_Showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2453);
/* harmony import */ var _components_sections_Team__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9060);
/* harmony import */ var _components_sections_Video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9729);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2287);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7741);
/* harmony import */ var _components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6258);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _library_team__WEBPACK_IMPORTED_MODULE_6__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _library_team__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









//import HeroSection from "@components/sections/Hero";









const HeroSection = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sections/Hero"
        ]
    },
    ssr: false
});
const TickerSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Ticker"
        ]
    },
    ssr: false
});
const TestimonialSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Testimonial"
        ]
    },
    ssr: false
});
const Home1 = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_16__/* .circleText */ .V0)();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroSection, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TickerSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Showcase__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    projects: props.projects
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Team__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    team: props.team
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Video__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    posts: props.posts
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_6__/* .getSortedTeamData */ .n8)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects,
            team: allTeam
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,142,806,47,374,759,745,513,741,811], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();
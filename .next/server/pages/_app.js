"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-icons/cg"
const cg_namespaceObject = require("react-icons/cg");
;// CONCATENATED MODULE: ./components/hooks/useScrollPosition.tsx

const useIsomorphicLayoutEffect =  false ? 0 : external_react_.useEffect;
const isBrowser = "undefined" !== `undefined`;
const zeroPosition = {
    x: 0,
    y: 0
};
const getClientRect = (element)=>element?.getBoundingClientRect();
const getScrollPosition = ({ element , useWindow , boundingElement  })=>{
    if (!isBrowser) {
        return zeroPosition;
    }
    if (useWindow) {
        return {
            x: window.scrollX,
            y: window.scrollY
        };
    }
    const targetPosition = getClientRect(element?.current || document.body);
    const containerPosition = getClientRect(boundingElement?.current);
    if (!targetPosition) {
        return zeroPosition;
    }
    return containerPosition ? {
        x: (containerPosition.x || 0) - (targetPosition.x || 0),
        y: (containerPosition.y || 0) - (targetPosition.y || 0)
    } : {
        x: targetPosition.left,
        y: targetPosition.top
    };
};
const useScrollPosition = (effect, deps, element, useWindow, wait, boundingElement)=>{
    const position = (0,external_react_.useRef)(getScrollPosition({
        useWindow,
        boundingElement
    }));
    let throttleTimeout = null;
    const callBack = ()=>{
        const currPos = getScrollPosition({
            element,
            useWindow,
            boundingElement
        });
        effect({
            prevPos: position.current,
            currPos
        });
        position.current = currPos;
        throttleTimeout = null;
    };
    useIsomorphicLayoutEffect(()=>{
        if (!isBrowser) {
            return undefined;
        }
        const handleScroll = ()=>{
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = window.setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };
        if (boundingElement) {
            boundingElement.current?.addEventListener("scroll", handleScroll, {
                passive: true
            });
        } else {
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
        }
        return ()=>{
            if (boundingElement) {
                boundingElement.current?.removeEventListener("scroll", handleScroll);
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, deps);
};
useScrollPosition.defaultProps = {
    deps: [],
    element: false,
    useWindow: false,
    wait: null,
    boundingElement: false
};

;// CONCATENATED MODULE: ./components/widgets/scrollToTop.tsx




const ScrollToTop = ()=>{
    const { 0: showOnScroll , 1: setShowOnScroll  } = (0,external_react_.useState)(false);
    const handleScrollToTop = ()=>window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    useScrollPosition(({ currPos  })=>{
        const isShow = currPos.y < -300.00; //prevPos.y
        if (isShow !== showOnScroll) setShowOnScroll(isShow);
    }, [
        showOnScroll
    ]);
    return showOnScroll && /*#__PURE__*/ jsx_runtime_.jsx("div", {
        title: "scroll to top",
        onClick: handleScrollToTop,
        className: "fixed ease-in-out cursor-pointer bottom-10 grid place-items-center rounded-br-lg rounded-tl-lg rounded-bl-xl rounded-tr-xl right-5 h-[30px] w-[30px] bg-white hover:animate-bounce hover:bg-blue-600 text-blue-600 hover:text-white shadow-xl hover:shadow-blue-800 duration-150 group",
        children: /*#__PURE__*/ jsx_runtime_.jsx(cg_namespaceObject.CgArrowUp, {
            className: "text-2xl "
        })
    });
};
/* harmony default export */ const scrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./pages/_app.tsx




const MyApp = ({ Component , pageProps  })=>{
    (0,external_react_.useEffect)(()=>{
        // 👇️ scroll to top on page load
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(scrollToTop, {})
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(255));
module.exports = __webpack_exports__;

})();
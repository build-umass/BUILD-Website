module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/apply/ApplicationCard.jsx":
/*!**************************************************!*\
  !*** ./src/components/apply/ApplicationCard.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplicationCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/components/apply/ApplicationCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ApplicationCard({
  title,
  description,
  applicationLink,
  applicationOpen
}) {
  const apply = applicationLink => {
    window.open(applicationLink, "_blank");
  };
  return __jsx("div", {
    className: "p-4",
    style: {
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, description)), applicationOpen && __jsx("div", {
    className: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("div", {
    onClick: () => apply(applicationLink),
    className: "apply-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Apply"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Apply")))));
}

/***/ }),

/***/ "./src/components/apply/LookForCard.jsx":
/*!**********************************************!*\
  !*** ./src/components/apply/LookForCard.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LookForCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/components/apply/LookForCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function LookForCard({
  title,
  description,
  imgSrc
}) {
  return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "center-horizontal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: imgSrc,
    alt: title,
    className: "thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, title), __jsx("p", {
    className: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, description)));
}

/***/ }),

/***/ "./src/content/apply.js":
/*!******************************!*\
  !*** ./src/content/apply.js ***!
  \******************************/
/*! exports provided: content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
const content = {
  roles: [{
    title: 'Software Developer',
    description: 'Work alongside other developers in a team to design, implement, and review code for a product. Ensure smooth feature integration and deliver exceptional solutions.',
    applicationLink: 'https://forms.gle/TVg2a4Bj9GrW2vRs9'
  }, {
    title: 'Product Manager',
    description: 'Collaborate closely with clients to optimize their utilization of BUILD\'s services. Effectively convey client requirements to a team of developers.',
    applicationLink: 'https://forms.gle/7vqive7mPPwaLLnX7'
  }],
  lookingFor: [{
    title: 'Teamwork',
    description: 'Are you a team player? Do you work well with others and value a collaborative environment?',
    img: '/img/illustrations/teamwork.svg'
  }, {
    title: 'Passion',
    description: 'Are you passionate about technology and its potential to make a positive impact?',
    img: '/img/illustrations/passion.svg'
  }, {
    title: 'Growth',
    description: 'Do you challenge yourself and actively explore opportunities for improvement?',
    img: '/img/illustrations/growth.svg'
  }, {
    title: 'Culture',
    description: 'Do you value empowering non-profits to achieve their missions through tech?',
    img: '/img/illustrations/culture.svg'
  }],
  faqs: [{
    question: 'How much of a time commitment is BUILD?',
    answer: 'We expect members to contribute a minimum of 2 hours per week. We take it easy during exam weeks.'
  }, {
    question: 'Do we get paid?',
    answer: 'BUILD provides students with an opportunity to volunteer their time and skills to make a difference by help non-profits in the community.'
  }, {
    question: 'How much experience do I need to join?',
    answer: 'BUILD is open to all years and majors. We do expect software developers to be familiar with basic data structures and programming methodologies.'
  }, {
    question: 'What is the application process like?',
    answer: 'After filling out our application form, if selected for an interview, we\'ll reach out to schedule a single 40 minute virtual interview which will consist of a behavioral and technical portion.'
  }]
};

/***/ }),

/***/ "./src/hooks/useBreakpoint.js":
/*!************************************!*\
  !*** ./src/hooks/useBreakpoint.js ***!
  \************************************/
/*! exports provided: BreakpointSize, Breakpoint, breakpointHelpers, useBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointSize", function() { return BreakpointSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointHelpers", function() { return breakpointHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBreakpoint", function() { return useBreakpoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @usage
 * import { useBreakpoint } from '@hooks/useBreakpoint';
 * const { xs, sm, md, lg, xl, xxl, smAndUp, lgAndDown } = useBreakpoint();
 * style={{ width: xs ? '100%' : '50%' }}
 * xs is a reactively changing boolean that evaluates to true if the current breakpoint is xs
*/

/**
 * @typedef {"smAndDown" | "smAndUp" | "mdAndDown" | "mdAndUp" | "lgAndDown" | "lgAndUp"} BreakpointHelper
*/

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl" | BreakpointHelper} Breakpoint
*/

/**
 * @type {Record<Breakpoint, number>}
 * @description enum for the different breakpoint sizes
 * @example BreakpointSize.xs === 576
 */
const BreakpointSize = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 9999
};

/**
 * @type {Record<Breakpoint, string>}
 * @description enum for the different breakpoints
 * @example Breakpoint.xs === 'xs'
 */
const Breakpoint = {
  // base props
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  // helper props
  smAndDown: 'smAndDown',
  smAndUp: 'smAndUp',
  mdAndDown: 'mdAndDown',
  mdAndUp: 'mdAndUp',
  lgAndDown: 'lgAndDown',
  lgAndUp: 'lgAndUp'
};

/**
 * @type {Record<BreakpointHelper, Breakpoint => boolean>}
 * @description maps helper props to their respective predicates
 */
const breakpointHelpers = {
  smAndDown: size => size === Breakpoint.xs || size === Breakpoint.sm,
  smAndUp: size => size !== Breakpoint.xs,
  mdAndDown: size => size === Breakpoint.xs || size === Breakpoint.sm || size === Breakpoint.md,
  mdAndUp: size => size !== Breakpoint.xs && size !== Breakpoint.sm,
  lgAndDown: size => size === Breakpoint.xl || size === Breakpoint.xxl,
  lgAndUp: size => size !== Breakpoint.xl && size !== Breakpoint.xxl
};

/**
 * @param {number} width
 * @returns {Breakpoint}
 */
const resolveBreakpoint = width => {
  const breakpoints = Object.entries(BreakpointSize);
  const [breakpoint] = breakpoints.find(([_, value]) => width < value);
  return breakpoint;
};

/**
 * @returns {Breakpoint}
 */
const useBreakpoint = () => {
  // for ssr
  if (true) {
    return Breakpoint.xxl;
  }
  const {
    0: size,
    1: setSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => resolveBreakpoint(window.innerWidth));
  const setBreakpoint = () => setSize(resolveBreakpoint(window.innerWidth));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const calcInnerWidth = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(setBreakpoint, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);
  return new Proxy(Breakpoint, {
    get(target, prop) {
      if (!(prop in target)) throw new Error(`Invalid breakpoint: ${prop}`);
      return prop in breakpointHelpers ? breakpointHelpers[prop](size) : size === prop;
    }
  });
};

/***/ }),

/***/ "./src/pages/apply.js":
/*!****************************!*\
  !*** ./src/pages/apply.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apply; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_apply_ApplicationCard_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/apply/ApplicationCard.jsx */ "./src/components/apply/ApplicationCard.jsx");
/* harmony import */ var _components_apply_LookForCard_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/apply/LookForCard.jsx */ "./src/components/apply/LookForCard.jsx");
/* harmony import */ var _content_apply__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/apply */ "./src/content/apply.js");
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useBreakpoint */ "./src/hooks/useBreakpoint.js");
/* harmony import */ var _styles_particlejs_config_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/particlejs_config.json */ "./src/styles/particlejs_config.json");
var _styles_particlejs_config_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../styles/particlejs_config.json */ "./src/styles/particlejs_config.json", 1);
var _jsxFileName = "/Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/pages/apply.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function apply() {
  const APPLICATIONS_OPEN = false;
  const {
    roles,
    lookingFor,
    faqs
  } = _content_apply__WEBPACK_IMPORTED_MODULE_7__["content"];
  const {
    xs
  } = Object(_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_8__["useBreakpoint"])();
  const jumbotronHeightPx = 500;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    params: _styles_particlejs_config_json__WEBPACK_IMPORTED_MODULE_9__,
    style: {
      position: 'absolute',
      maxHeight: `${jumbotronHeightPx}px`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "bg-gradient",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "center",
    style: {
      height: `${jumbotronHeightPx}px`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "center p-4",
    style: {
      flexDirection: 'column',
      maxWidth: '800px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "pg-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Join Our Amazing Team!"), __jsx("p", {
    className: "pg-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "BUILD is on the lookout for passionate and talented individuals who are eager to make a difference in our community. Are you interested in putting what you have been learning in class to use in real-world projects? If so, consider applying!")))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "Roles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, !APPLICATIONS_OPEN && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Application Openings"))), __jsx("div", {
    style: {
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      paddingTop: '2rem',
      paddingRight: '2rem',
      paddingLeft: '2rem',
      marginBottom: '2rem',
      marginTop: '1rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, " The latest application period has closed, but make sure to check back early next semester for the next application opportunity!"), __jsx("div", {
    className: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    onClick: () => window.open('http://eepurl.com/i_fS4k', '_blank'),
    className: "apply-btn",
    style: {
      marginBottom: "1.5rem",
      marginTop: "0rem",
      width: "50%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Notify me"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Notify me")))))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Roles at BUILD"))), __jsx("div", {
    className: "my-3",
    style: {
      display: 'flex',
      flexDirection: xs ? 'column' : 'row',
      gap: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, roles.map((role, index) => __jsx("div", {
    style: {
      minHeight: '170px',
      width: xs ? '100%' : '50%'
    },
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx(_components_apply_ApplicationCard_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: role.title,
    description: role.description,
    applicationLink: role.applicationLink,
    applicationOpen: APPLICATIONS_OPEN,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, "What We Look For"))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "center mt-5",
    style: {
      gap: '40px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, lookingFor.map((weLookFor, index) => __jsx(_components_apply_LookForCard_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: weLookFor.title,
    description: weLookFor.description,
    imgSrc: weLookFor.img,
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "my-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "Frequently Asked Questions"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, faqs.map(({
    question,
    answer
  }) => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: question,
    className: "my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, question)), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: {
      maxWidth: '900px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, answer))))))));
}

/***/ }),

/***/ "./src/styles/particlejs_config.json":
/*!*******************************************!*\
  !*** ./src/styles/particlejs_config.json ***!
  \*******************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"particles\":{\"number\":{\"value\":60,\"density\":{\"enable\":true,\"value_area\":800}},\"color\":{\"value\":\"#ffffff\"},\"shape\":{\"type\":\"circle\",\"stroke\":{\"width\":0,\"color\":\"#000000\"},\"polygon\":{\"nb_sides\":5}},\"opacity\":{\"value\":0.7,\"random\":true,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.3,\"sync\":false}},\"size\":{\"value\":3,\"random\":true,\"anim\":{\"enable\":false,\"speed\":40,\"size_min\":0.1,\"sync\":false}},\"line_linked\":{\"enable\":true,\"distance\":150,\"color\":\"#ffffff\",\"opacity\":0.6,\"width\":1},\"move\":{\"enable\":true,\"speed\":3,\"direction\":\"none\",\"random\":false,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onclick\":{\"enable\":true,\"mode\":\"push\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":400,\"size\":40,\"duration\":2,\"opacity\":8,\"speed\":3},\"repulse\":{\"distance\":100,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}");

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./src/pages/apply.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/pages/apply.js */"./src/pages/apply.js");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ })

/******/ });
//# sourceMappingURL=apply.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ProjectCard.js":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectModal */ "./src/components/ProjectModal.js");
var _jsxFileName = "/Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/components/ProjectCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProjectCard({
  projectData
}) {
  const textRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: readMore,
    1: setReadMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  // Counting the member
  const projectLeadCount = projectData.project_lead.length !== 0 ? 1 : 0;
  const sdesCount = projectData.sdes.length;
  const productManagersCount = projectData.product_managers.length;
  const membersCount = projectLeadCount + sdesCount + productManagersCount;
  return __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "project-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
    variant: "top",
    src: projectData.image_url.length !== 0 ? projectData.image_url : "./img/square-pattern.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    className: "d-flex flex-column justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    as: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, projectData.title), membersCount !== 0 && __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Subtitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 34
    }
  }, membersCount, " members"), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
    ref: textRef,
    className: projectData.title.length > 14 ? "three-lines" : "four-lines",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, projectData.description))), __jsx("span", {
    className: "read-more",
    onClick: () => setReadMore(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Read More")), __jsx(_ProjectModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: readMore,
    onHide: () => setReadMore(false),
    projectData: projectData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/ProjectModal.js":
/*!****************************************!*\
  !*** ./src/components/ProjectModal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/components/ProjectModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectModal({
  show,
  onHide,
  projectData
}) {
  return __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    show: show,
    onHide: onHide,
    centered: true,
    className: "project-modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    as: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, projectData.title)), __jsx("div", {
    className: "project-modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: projectData.image_url.length !== 0 ? projectData.image_url : "./img/square-pattern.svg",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, projectData.project_lead.length !== 0 && __jsx("section", {
    className: "project-members",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, projectData.project_lead !== "" && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "project-members-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }
  }, "Project Lead: "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, projectData.project_lead)), projectData.sdes.length !== 0 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "project-members-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, "Software Developer", projectData.sdes.length > 1 && 's', ": "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }, projectData.sdes.join(', '))), projectData.product_managers.length !== 0 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "project-members-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }, "Product Manager", projectData.product_managers.length > 1 && 's', ": "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, projectData.product_managers.join(', '))), projectData.project_url !== "" && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "project-members-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  }, "Project Link: "), __jsx("a", {
    href: projectData.project_url,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, projectData.project_url))), __jsx("section", {
    className: "project-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, projectData.description.split('. ').map((sentences, index, array) => __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, sentences, index !== array.length - 1 && '.'))))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "color",
    onClick: onHide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Close")));
}

/***/ }),

/***/ "./src/data/projects.json":
/*!********************************!*\
  !*** ./src/data/projects.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"year\":2024,\"projects\":[{\"title\":\"EliteCode\",\"project_lead\":\"Aryan Nair\",\"sdes\":[\"Dorian B. Goldfajn\",\"Tung Le\",\"Shri Radhakrishnan\",\"Sean O'Dea\",\"Ayomide Olubanwo\"],\"product_managers\":[\"Tom Solus\",\"Rishik Javawamy\"],\"description\":\"EliteCode is a mobile app created to gamify technical interview preparation and polish programming principles.\",\"image_url\":\"/img/projects/elitecode.png\",\"project_url\":\"https://elitecode.ai/\"},{\"title\":\"Small Acts for Sustainability\",\"project_lead\":\"Abby Tran\",\"sdes\":[\"Siddhartha Jaiswal\",\"Vi Doan\",\"Hayun Jung\",\"Ruchi Gupta\",\"Shreya Anand\"],\"product_managers\":[\"Anna Le\",\"Suhani Hingar\"],\"description\":\"Small Acts for Sustainability (SAS) is an Amherst-based nonprofit that does work in rural India to support women's health. SAS approached us to create a period-tracking app that supports the tracking and logging of menstrual cycle symptoms over time. The app is translated into English, Kannada and Hindi and is currently in a closed testing period as of our last handoff to SAS with the ultimate goal of publishing it on the Google Play and Apple storefronts. In 2024, SAS improved its design by creating images according to the client's specifications, and the project was officially handed off to the client.\",\"image_url\":\"/img/projects/SAS_S23.png\",\"project_url\":\"\"},{\"title\":\"Pre-Law Club\",\"project_lead\":\"Saif Masoud\",\"sdes\":[\"Jason Simmonds\",\"Nathan Chen\",\"Vinayak Rao\",\"Ryan\",\"Sagi\"],\"product_managers\":[\"Kien Le\",\"Gurleen Kaur\",\"Phoebe Lo\"],\"description\":\"Renovated the website for the UMass Amherst Pre-Law Club.\",\"image_url\":\"/img/projects/PreLawClubPhoto.png\",\"project_url\":\"\"},{\"title\":\"Amherst Ballet\",\"project_lead\":\"Bao Dang\",\"sdes\":[\"Samuel Sanchez\",\"Wole Fabikun\",\"Rishabh Devani\",\"Mehek Shah\"],\"product_managers\":[\"Tanishka Indorekar\",\"Farhana Rahman\",\"Ishita Kakkar\"],\"description\":\"Renovated the website for Amherst Ballet, a ballet studio located in Amherst, Massachusetts (As the name suggests).\",\"image_url\":\"/img/projects/AmherstBalletPhoto.png\",\"project_url\":\"https://amherstballet.org\"},{\"title\":\"Isenberg Undergraduate Consulting Group\",\"project_lead\":\"Bennett Gillig\",\"sdes\":[\"Maxwell Tang\",\"Brian Liu\",\"Devina Gera\",\"Karthik Singireddy\",\"Shoubhit Ravi\"],\"product_managers\":[\"Kurstin Burnham\",\"Tiffany Nguyen\"],\"description\":\"Developed a blog application for the Isenberg Undergraduate Consulting Group at UMass Amherst to post their business updates and insights on. It was developed using the MERN stack, and Figma for UI design.\",\"image_url\":\"/img/projects/IUCGPhoto.png\",\"project_url\":\"\"},{\"title\":\"Campus Connect\",\"project_lead\":\"Sai Sompally\",\"sdes\":[\"James Pineiro\",\"Nipun Kisari\",\"Michael Sun\",\"Aaditya Saini\",\"Sumrudhi Jadhav\"],\"product_managers\":[\"Vishakha Singh\",\"Parth Bhangla\"],\"description\":\"Developed a mobile application in React Native for college-aged entrepreneurs to market their skill set amongst others in the area. \",\"image_url\":\"/img/projects/CampusConnectPhoto.png\",\"project_url\":\"\"},{\"title\":\"kapok\",\"project_lead\":\"Eric Wu\",\"sdes\":[\"Emmet Hamell\",\"Kevin Li\",\"Shobhit Mehrotra\",\"Suryam Gupta\",\"Bhargavi Patil\",\"Adhiraj Chadha\",\"Yona Voss-Andreae\"],\"product_managers\":[\"Khushi Rajoria\",\"Shreyansh Misra\"],\"description\":\"Disaster response coordination app for medical responders.\",\"image_url\":\"/img/projects/kapok_S24.png\",\"project_url\":\"\"}]},{\"year\":\"2023\",\"projects\":[{\"title\":\"MassPirg\",\"project_lead\":\"Thinh Nguyen\",\"sdes\":[\"Aryan Nair\",\"Simran Lekhwani\",\"Rohan Raghuram\",\"Shoubhit Ravi\"],\"product_managers\":[\"Khanh Ngoc Nam Hyunh\",\"Sabrina Liu\"],\"description\":\"Students have the power to shape the future we will inherit. We work with professional staff at colleges and universities to make sure our peers have the skills, opportunities and training they need to create a better, more sustainable future for all of us. Our chapters provide the training, professional support and resources students need to tackle climate change, protect public health, revitalize our democracy, feed the hungry and more. Students have been at the forefront of social change throughout history, from civil rights, to voting rights to protecting the environment. For nearly 50 years we've helped students to get organized, mobilized and energized so they can continue to be on the cutting edge of positive change.\",\"image_url\":\"/img/projects/MassPirg_S23.png\",\"project_url\":\"\"},{\"title\":\"AiS\",\"project_lead\":\"Ananya Shekhawat\",\"sdes\":[\"Eric Fournier\",\"Yongye Tan\",\"Adam Smith\",\"Shoubhit Ravi\"],\"product_managers\":[\"Hallie Liu\",\"Vishwesh Palani\"],\"description\":\"AIS has a dashboard for video surveillance footage, with the frontend built in Vue, and the backend built in Nest.js. AIS wishes to convert the existing frontend only to React, and also have that React version converted to a mobile app using existing conversion tools. PWA recommends using Material UI on React, written as a Progressive Web App (PWA).\",\"image_url\":\"/img/projects/AIS_S23.png\",\"project_url\":\"\"},{\"title\":\"UMass Fitness and Nutrition\",\"project_lead\":\"Jiaqi (Jay) Ye\",\"sdes\":[\"Nicole Kaldus\",\"Khushi Rajoria\",\"Uma Purani\",\"Aditi Bansal\",\"Eric Wu\"],\"product_managers\":[\"Christopher Setiawan\"],\"description\":\"UMass Fitness and Nutrition is a newly founded club at UMass focused around eating healthy and exercising regularly. The club's goal is to promote healthy lifestyles that can be achieved even as a full time college student.\",\"image_url\":\"/img/projects/UMassFitness_S23.png\",\"project_url\":\"\"},{\"title\":\"Upward Bound\",\"project_lead\":\"Justin Baltazar\",\"sdes\":[\"Quang Dang\",\"Vani Gupta\",\"Maggie Li\",\"Matt O'Neill\",\"Ishaan Shetty\",\"Limbani George Chaponda\"],\"product_managers\":[\"Taru Meshram\",\"Erica Phan\"],\"description\":\"Upward Bound program is a year-round, federally sponsored, educational program serving high school students from Springfield's High School of Commerce. Students are eligible to participate if they are from families in which neither parent has a bachelor's degree, and/or if they qualify as low-income. Upward Bound's goal  is to increase the rate at which participants successfully complete high school, and enroll in and graduate from college. Upward Bound stresses the development of academic skills and motivation for students who might not traditionally be considered college-bound. During the academic year, participants are provided a variety of services ranging from individual tutoring, career advising, SAT and MCAS prep, to college-positive workshops, cultural enrichment and much more. In addition, the program addresses other issues critical to success in high school and college such as time management, self-discipline, responsibility, self-esteem, multicultural knowledge, social justice and respect.\",\"image_url\":\"/img/projects/UpwardBound_S23.png\",\"project_url\":\"\"}]},{\"year\":\"2022\",\"projects\":[{\"title\":\"Phenom\",\"project_lead\":\"\",\"sdes\":[],\"product_managers\":[],\"description\":\"The Public Higher Education Network of Massachusetts (PHENOM) unites students, families, alumni, professors, staff, and community members from our state universities, community colleges and the UMass system to advocate for high-quality, debt-free public college.\",\"image_url\":\"/img/projects/Phenom_S22.png\",\"project_url\":\"\"},{\"title\":\"Student Bridges\",\"project_lead\":\"\",\"sdes\":[],\"product_managers\":[],\"description\":\"Student Bridges is a non-profit, student run agency that works to improve access and success for underrepresented students.\",\"image_url\":\"/img/projects/StudentBridges_S22.png\",\"project_url\":\"\"},{\"title\":\"Lobstermen\",\"project_lead\":\"\",\"sdes\":[],\"product_managers\":[],\"description\":\"The Massachusetts Lobstermen's Association was established in 1963 by the fishermen, for the fishermen, and is presently one of the leading commercial fishing industry associations in New England. On behalf of the 1,800 members, the MLA works to maintain both the industry and the resource. The MLA strives to be proactive on issues affecting the lobster industry and is active in the management process at both the state and federal levels. The MLA communicates with its members through a monthly newspaper, weekly email, Facebook, and attendance at industry meetings. For the past 60 years, the MLA has become a trustworthy voice for the industry on important issues, and is looked to by both the fishing industry and the management community.\",\"image_url\":\"/img/projects/Lobstermen_S22.png\",\"project_url\":\"\"}]}]");

/***/ }),

/***/ "./src/pages/projects.js":
/*!*******************************!*\
  !*** ./src/pages/projects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectCard */ "./src/components/ProjectCard.js");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/projects.json */ "./src/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ "./src/data/projects.json", 1);
var _jsxFileName = "/Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/pages/projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function projects() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bg-gradient",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "pg-jumbotron center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "padding1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  }, __jsx("h1", {
    className: "pg-heading center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Take a look at our works!"))), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "pg-heading center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Explore the innovative projects our student teams have completed in the past three years with BUILD. From cutting-edge software development to web design, we have partnered with nonprofits, startups, and local businesses to make a positive impact on our society. Please enjoy your time here!")))))))), __jsx("div", {
    className: "scroll-btns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, _data_projects_json__WEBPACK_IMPORTED_MODULE_6__.map(projectList => __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "light",
    className: "year-btn",
    size: "lg",
    href: `#${projectList.year}`,
    key: `projectyearbutton-${projectList.year}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, projectList.year))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    fluid: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, _data_projects_json__WEBPACK_IMPORTED_MODULE_6__.map(projectList => __jsx("div", {
    id: `${projectList.year}`,
    className: "margin3 center-column",
    key: `projectyear-${projectList.year}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "year-title margin-bottom3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, projectList.year), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, projectList.projects.map(project => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
    key: `project-${project.title}`,
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    projectData: project,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }))))))));
}

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./src/pages/projects.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/BraedenTurner/UMass/BUILD_UMass/BUILD-Website/src/pages/projects.js */"./src/pages/projects.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

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

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map
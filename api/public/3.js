(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/containers/TheContent.js":
/*!***********************************************!*\
  !*** ./resources/js/containers/TheContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");


 // routes config


var loading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "pt-3 text-center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "sk-spinner sk-spinner-pulse"
}));

var TheContent = function TheContent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "c-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CContainer"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (route, idx) {
    return route.component && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: idx,
      path: route.path,
      exact: route.exact,
      name: route.name,
      render: function render(props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CFade"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(route.component, props));
      }
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    from: "/",
    to: "/dashboard"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TheContent));

/***/ }),

/***/ "./resources/js/containers/TheFooter.js":
/*!**********************************************!*\
  !*** ./resources/js/containers/TheFooter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");



var TheFooter = function TheFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CFooter"], {
    fixed: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://coreui.io",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "CoreUI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-1"
  }, "\xA9 2020 creativeLabs.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mfs-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr-1"
  }, "Powered by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://coreui.io/react",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "CoreUI for React")));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TheFooter));

/***/ }),

/***/ "./resources/js/containers/TheHeader.js":
/*!**********************************************!*\
  !*** ./resources/js/containers/TheHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./resources/js/routes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./resources/js/containers/index.js");



 // routes config




var TheHeader = function TheHeader() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var sidebarShow = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.sidebarShow;
  });

  var toggleSidebar = function toggleSidebar() {
    var val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
    dispatch({
      type: 'set',
      sidebarShow: val
    });
  };

  var toggleSidebarMobile = function toggleSidebarMobile() {
    var val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
    dispatch({
      type: 'set',
      sidebarShow: val
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeader"], {
    withSubheader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CToggler"], {
    inHeader: true,
    className: "ml-md-3 d-lg-none",
    onClick: toggleSidebarMobile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CToggler"], {
    inHeader: true,
    className: "ml-3 d-md-down-none",
    onClick: toggleSidebar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderBrand"], {
    className: "mx-auto d-lg-none",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "logo",
    height: "48",
    alt: "Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNav"], {
    className: "d-md-down-none mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavItem"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavLink"], {
    to: "/dashboard"
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavItem"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavLink"], {
    to: "/users"
  }, "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavItem"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNavLink"], null, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CHeaderNav"], {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["TheHeaderDropdownNotif"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["TheHeaderDropdownTasks"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["TheHeaderDropdownMssg"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_5__["TheHeaderDropdown"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSubheader"], {
    className: "px-3 justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CBreadcrumbRouter"], {
    className: "border-0 c-subheader-nav m-0 px-0 px-md-3",
    routes: _routes__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-md-down-none mfe-2 c-subheader-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
    className: "c-subheader-nav-link",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-speech",
    alt: "Settings"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
    className: "c-subheader-nav-link",
    "aria-current": "page",
    to: "/dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-graph",
    alt: "Dashboard"
  }), "\xA0Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CLink"], {
    className: "c-subheader-nav-link",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "cil-settings",
    alt: "Settings"
  }), "\xA0Settings"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeader);

/***/ }),

/***/ "./resources/js/containers/TheHeaderDropdown.js":
/*!******************************************************!*\
  !*** ./resources/js/containers/TheHeaderDropdown.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdown = function TheHeaderDropdown() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-items mx-2",
    direction: "down"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/6.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    className: "pt-0",
    placement: "bottom-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-bell",
    className: "mfe-2"
  }), "Updates", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "info",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-envelope-open",
    className: "mfe-2"
  }), "Messages", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "success",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-task",
    className: "mfe-2"
  }), "Tasks", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "danger",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-comment-square",
    className: "mfe-2"
  }), "Comments", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "warning",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user",
    className: "mfe-2"
  }), "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-settings",
    className: "mfe-2"
  }), "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-credit-card",
    className: "mfe-2"
  }), "Payments", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "secondary",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-file",
    className: "mfe-2"
  }), "Projects", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    color: "primary",
    className: "mfs-auto"
  }, "42")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    divider: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-lock-locked",
    className: "mfe-2"
  }), "Lock Account")));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdown);

/***/ }),

/***/ "./resources/js/containers/TheHeaderDropdownMssg.js":
/*!**********************************************************!*\
  !*** ./resources/js/containers/TheHeaderDropdownMssg.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdownMssg = function TheHeaderDropdownMssg() {
  var itemsCount = 4;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-item mx-2",
    direction: "down"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-envelope-open"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    shape: "pill",
    color: "info"
  }, itemsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    className: "pt-0",
    placement: "bottom-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You have ", itemsCount, " messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/7.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-success"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "John Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "Just now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fa fa-exclamation text-danger"
  }), " Important message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/6.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-warning"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "Jane Dovve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "5 minutes ago")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/5.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-danger"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "Janet Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "1:52 PM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3 mr-3 float-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CImg"], {
    src: 'avatars/4.jpg',
    className: "c-avatar-img",
    alt: "admin@bootstrapmaster.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-avatar-status bg-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "Joe Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted float-right mt-1"
  }, "4:03 AM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-truncate font-weight-bold"
  }, "Lorem ipsum dolor sit amet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small text-muted text-truncate"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    href: "#",
    className: "text-center border-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "View all messages"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdownMssg);

/***/ }),

/***/ "./resources/js/containers/TheHeaderDropdownNotif.js":
/*!***********************************************************!*\
  !*** ./resources/js/containers/TheHeaderDropdownNotif.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdownNotif = function TheHeaderDropdownNotif() {
  var itemsCount = 5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-item mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-bell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    shape: "pill",
    color: "danger"
  }, itemsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    placement: "bottom-end",
    className: "pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    className: "text-center",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You have ", itemsCount, " notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user-follow",
    className: "mr-2 text-success"
  }), " New user registered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-user-unfollow",
    className: "mr-2 text-danger"
  }), " User deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-chart-pie",
    className: "mr-2 text-info"
  }), " Sales report is ready"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-basket",
    className: "mr-2 text-primary"
  }), " New client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-speedometer",
    className: "mr-2 text-warning"
  }), " Server overloaded"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-uppercase mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "CPU Usage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "info",
    value: 25
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "348 Processes. 1/4 Cores.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-uppercase mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Memory Usage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "warning",
    value: 70
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "11444GB/16384MB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-uppercase mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "SSD 1 Usage"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "danger",
    value: 90
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted"
  }, "243GB/256GB"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdownNotif);

/***/ }),

/***/ "./resources/js/containers/TheHeaderDropdownTasks.js":
/*!***********************************************************!*\
  !*** ./resources/js/containers/TheHeaderDropdownTasks.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");




var TheHeaderDropdownTasks = function TheHeaderDropdownTasks() {
  var itemsCount = 5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdown"], {
    inNav: true,
    className: "c-header-nav-item mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownToggle"], {
    className: "c-header-nav-link",
    caret: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "cil-list"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CBadge"], {
    shape: "pill",
    color: "warning"
  }, itemsCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownMenu"], {
    placement: "bottom-end",
    className: "pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    header: true,
    tag: "div",
    className: "text-center",
    color: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You have ", itemsCount, " pending tasks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "Upgrade NPM & Bower ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "info",
    value: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "ReactJS Version ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "25%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "danger",
    value: 25
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "VueJS Version ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "50%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "warning",
    value: 50
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "Add new layouts ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "75%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "info",
    value: 75
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small mb-1"
  }, "Angular 2 Cli Version ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "100%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CProgress"], {
    size: "xs",
    color: "success",
    value: 100
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_1__["CDropdownItem"], {
    className: "text-center border-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "View all tasks"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TheHeaderDropdownTasks);

/***/ }),

/***/ "./resources/js/containers/TheLayout.js":
/*!**********************************************!*\
  !*** ./resources/js/containers/TheLayout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./resources/js/containers/index.js");



var TheLayout = function TheLayout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-app c-default-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["TheSidebar"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["TheHeader"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["TheContent"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["TheFooter"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (TheLayout);

/***/ }),

/***/ "./resources/js/containers/TheSidebar.js":
/*!***********************************************!*\
  !*** ./resources/js/containers/TheSidebar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_nav */ "./resources/js/containers/_nav.js");



 // sidebar nav config



var TheSidebar = function TheSidebar() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var show = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.sidebarShow;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebar"], {
    show: show,
    onShowChange: function onShowChange(val) {
      return dispatch({
        type: 'set',
        sidebarShow: val
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarBrand"], {
    className: "d-md-down-none",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "c-sidebar-brand-full",
    name: "logo-negative",
    height: 35
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "c-sidebar-brand-minimized",
    name: "sygnet",
    height: 35
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNav"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CCreateElement"], {
    items: _nav__WEBPACK_IMPORTED_MODULE_4__["default"],
    components: {
      CSidebarNavDivider: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavDivider"],
      CSidebarNavDropdown: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavDropdown"],
      CSidebarNavItem: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavItem"],
      CSidebarNavTitle: _coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarNavTitle"]
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["CSidebarMinimizer"], {
    className: "c-d-md-down-none"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TheSidebar));

/***/ }),

/***/ "./resources/js/containers/_nav.js":
/*!*****************************************!*\
  !*** ./resources/js/containers/_nav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  _tag: 'CSidebarNavItem',
  name: 'Dashboard',
  to: '/dashboard',
  icon: 'cil-speedometer',
  badge: {
    color: 'info',
    text: 'NEW'
  }
}, {
  _tag: 'CSidebarNavTitle',
  className: 'under-line',
  _children: ['']
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Base',
  route: '/base',
  icon: 'cil-puzzle',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Breadcrumb',
    to: '/base/breadcrumbs'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Cards',
    to: '/base/cards'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Carousel',
    to: '/base/carousels'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Collapse',
    to: '/base/collapses'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Forms',
    to: '/base/forms'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Jumbotron',
    to: '/base/jumbotrons'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'List group',
    to: '/base/list-groups'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Navs',
    to: '/base/navs'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Navbars',
    to: '/base/navbars'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Pagination',
    to: '/base/paginations'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Popovers',
    to: '/base/popovers'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Progress',
    to: '/base/progress-bar'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Switches',
    to: '/base/switches'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Tables',
    to: '/base/tables'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Tabs',
    to: '/base/tabs'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Tooltips',
    to: '/base/tooltips'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Buttons',
  route: '/buttons',
  icon: 'cil-cursor',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Buttons',
    to: '/buttons/buttons'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Brand buttons',
    to: '/buttons/brand-buttons'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Buttons groups',
    to: '/buttons/button-groups'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Dropdowns',
    to: '/buttons/button-dropdowns'
  }]
}, {
  _tag: 'CSidebarNavItem',
  name: 'Charts',
  to: '/charts',
  icon: 'cil-chart-pie'
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Icons',
  route: '/icons',
  icon: 'cil-star',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'CoreUI Free',
    to: '/icons/coreui-icons',
    badge: {
      color: 'success',
      text: 'NEW'
    }
  }, {
    _tag: 'CSidebarNavItem',
    name: 'CoreUI Flags',
    to: '/icons/flags'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'CoreUI Brands',
    to: '/icons/brands'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Notifications',
  route: '/notifications',
  icon: 'cil-bell',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Alerts',
    to: '/notifications/alerts'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Badges',
    to: '/notifications/badges'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Modal',
    to: '/notifications/modals'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Toaster',
    to: '/notifications/toaster'
  }]
}, {
  _tag: 'CSidebarNavItem',
  name: 'Widgets',
  to: '/widgets',
  icon: 'cil-calculator',
  badge: {
    color: 'info',
    text: 'NEW'
  }
}, {
  _tag: 'CSidebarNavDivider'
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['Extras']
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Pages',
  route: '/pages',
  icon: 'cil-star',
  _children: [{
    _tag: 'CSidebarNavItem',
    name: 'Login',
    to: '/login'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Register',
    to: '/register'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Error 404',
    to: '/404'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Error 500',
    to: '/500'
  }]
}, {
  _tag: 'CSidebarNavItem',
  name: 'Disabled',
  icon: 'cil-ban',
  badge: {
    color: 'secondary',
    text: 'NEW'
  },
  addLinkClass: 'c-disabled',
  'disabled': true
}, {
  _tag: 'CSidebarNavDivider',
  className: 'm-2'
}, {
  _tag: 'CSidebarNavTitle',
  _children: ['Labels']
}, {
  _tag: 'CSidebarNavItem',
  name: 'Label danger',
  to: '',
  icon: {
    name: 'cil-star',
    className: 'text-danger'
  },
  label: true
}, {
  _tag: 'CSidebarNavItem',
  name: 'Label info',
  to: '',
  icon: {
    name: 'cil-star',
    className: 'text-info'
  },
  label: true
}, {
  _tag: 'CSidebarNavItem',
  name: 'Label warning',
  to: '',
  icon: {
    name: 'cil-star',
    className: 'text-warning'
  },
  label: true
}, {
  _tag: 'CSidebarNavDivider',
  className: 'm-2'
}]);

/***/ }),

/***/ "./resources/js/containers/index.js":
/*!******************************************!*\
  !*** ./resources/js/containers/index.js ***!
  \******************************************/
/*! exports provided: TheContent, TheFooter, TheHeader, TheHeaderDropdown, TheHeaderDropdownMssg, TheHeaderDropdownNotif, TheHeaderDropdownTasks, TheLayout, TheSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheContent */ "./resources/js/containers/TheContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheContent", function() { return _TheContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TheFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter */ "./resources/js/containers/TheFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheFooter", function() { return _TheFooter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TheHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheHeader */ "./resources/js/containers/TheHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheHeader", function() { return _TheHeader__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TheHeaderDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TheHeaderDropdown */ "./resources/js/containers/TheHeaderDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheHeaderDropdown", function() { return _TheHeaderDropdown__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TheHeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TheHeaderDropdownMssg */ "./resources/js/containers/TheHeaderDropdownMssg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheHeaderDropdownMssg", function() { return _TheHeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _TheHeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TheHeaderDropdownNotif */ "./resources/js/containers/TheHeaderDropdownNotif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheHeaderDropdownNotif", function() { return _TheHeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _TheHeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TheHeaderDropdownTasks */ "./resources/js/containers/TheHeaderDropdownTasks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheHeaderDropdownTasks", function() { return _TheHeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TheLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TheLayout */ "./resources/js/containers/TheLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheLayout", function() { return _TheLayout__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _TheSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TheSidebar */ "./resources/js/containers/TheSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheSidebar", function() { return _TheSidebar__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Toaster = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./components/Admin/notifications/toaster/Toaster */ "./resources/js/components/Admin/notifications/toaster/Toaster.js"));
});
var Tables = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./components/Admin/base/tables/Tables */ "./resources/js/components/Admin/base/tables/Tables.js"));
});
var Breadcrumbs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./components/Admin/base/breadcrumbs/Breadcrumbs */ "./resources/js/components/Admin/base/breadcrumbs/Breadcrumbs.js"));
});
var Cards = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./components/Admin/base/cards/Cards */ "./resources/js/components/Admin/base/cards/Cards.js"));
});
var Carousels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./components/Admin/base/carousels/Carousels */ "./resources/js/components/Admin/base/carousels/Carousels.js"));
});
var Collapses = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./components/Admin/base/collapses/Collapses */ "./resources/js/components/Admin/base/collapses/Collapses.js"));
});
var BasicForms = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./components/Admin/base/forms/BasicForms */ "./resources/js/components/Admin/base/forms/BasicForms.js"));
});
var Jumbotrons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./components/Admin/base/jumbotrons/Jumbotrons */ "./resources/js/components/Admin/base/jumbotrons/Jumbotrons.js"));
});
var ListGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./components/Admin/base/list-groups/ListGroups */ "./resources/js/components/Admin/base/list-groups/ListGroups.js"));
});
var Navbars = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./components/Admin/base/navbars/Navbars */ "./resources/js/components/Admin/base/navbars/Navbars.js"));
});
var Navs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./components/Admin/base/navs/Navs */ "./resources/js/components/Admin/base/navs/Navs.js"));
});
var Paginations = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./components/Admin/base/paginations/Pagnations */ "./resources/js/components/Admin/base/paginations/Pagnations.js"));
});
var Popovers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./components/Admin/base/popovers/Popovers */ "./resources/js/components/Admin/base/popovers/Popovers.js"));
});
var ProgressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./components/Admin/base/progress-bar/ProgressBar */ "./resources/js/components/Admin/base/progress-bar/ProgressBar.js"));
});
var Switches = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./components/Admin/base/switches/Switches */ "./resources/js/components/Admin/base/switches/Switches.js"));
});
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./components/Admin/base/tabs/Tabs */ "./resources/js/components/Admin/base/tabs/Tabs.js"));
});
var Tooltips = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./components/Admin/base/tooltips/Tooltips */ "./resources/js/components/Admin/base/tooltips/Tooltips.js"));
});
var BrandButtons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./components/Admin/buttons/brand-buttons/BrandButtons */ "./resources/js/components/Admin/buttons/brand-buttons/BrandButtons.js"));
});
var ButtonDropdowns = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./components/Admin/buttons/button-dropdowns/ButtonDropdowns */ "./resources/js/components/Admin/buttons/button-dropdowns/ButtonDropdowns.js"));
});
var ButtonGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./components/Admin/buttons/button-groups/ButtonGroups */ "./resources/js/components/Admin/buttons/button-groups/ButtonGroups.js"));
});
var Buttons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./components/Admin/buttons/buttons/Buttons */ "./resources/js/components/Admin/buttons/buttons/Buttons.js"));
});
var Charts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./components/Admin/charts/Charts */ "./resources/js/components/Admin/charts/Charts.js"));
});
var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./components/Admin/dashboard/Dashboard */ "./resources/js/components/Admin/dashboard/Dashboard.js"));
});
var CoreUIIcons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./components/Admin/icons/coreui-icons/CoreUIIcons */ "./resources/js/components/Admin/icons/coreui-icons/CoreUIIcons.js"));
});
var Flags = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./components/Admin/icons/flags/Flags */ "./resources/js/components/Admin/icons/flags/Flags.js"));
});
var Brands = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./components/Admin/icons/brands/Brands */ "./resources/js/components/Admin/icons/brands/Brands.js"));
});
var Alerts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./components/Admin/notifications/alerts/Alerts */ "./resources/js/components/Admin/notifications/alerts/Alerts.js"));
});
var Badges = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./components/Admin/notifications/badges/Badges */ "./resources/js/components/Admin/notifications/badges/Badges.js"));
});
var Modals = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./components/Admin/notifications/modals/Modals */ "./resources/js/components/Admin/notifications/modals/Modals.js"));
});
var Colors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./components/Admin/theme/colors/Colors */ "./resources/js/components/Admin/theme/colors/Colors.js"));
});
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./components/Admin/theme/typography/Typography */ "./resources/js/components/Admin/theme/typography/Typography.js"));
});
var Widgets = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./components/Admin/widgets/Widgets */ "./resources/js/components/Admin/widgets/Widgets.js"));
});
var Users = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./components/Admin/users/Users */ "./resources/js/components/Admin/users/Users.js"));
});
var User = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./components/Admin/users/User */ "./resources/js/components/Admin/users/User.js"));
});
var admin = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/Admin/admin */ "./resources/js/components/Admin/admin.js"));
});
var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/admin',
  name: 'admin',
  component: admin
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/theme',
  name: 'Theme',
  component: Colors,
  exact: true
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  name: 'Base',
  component: Cards,
  exact: true
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/forms',
  name: 'Forms',
  component: BasicForms
}, {
  path: '/base/jumbotrons',
  name: 'Jumbotrons',
  component: Jumbotrons
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navbars',
  name: 'Navbars',
  component: Navbars
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress-bar',
  name: 'Progress Bar',
  component: ProgressBar
}, {
  path: '/base/switches',
  name: 'Switches',
  component: Switches
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tabs',
  name: 'Tabs',
  component: Tabs
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  name: 'Buttons',
  component: Buttons,
  exact: true
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/brands',
  name: 'Brands',
  component: Brands
}, {
  path: '/notifications',
  name: 'Notifications',
  component: Alerts,
  exact: true
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/notifications/toaster',
  name: 'Toaster',
  component: Toaster
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);
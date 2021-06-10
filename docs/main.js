(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+LOj":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
        this.now = new Date();
        this.date = '';
        setInterval(() => {
            this.now = new Date();
        }, 1000);
    }
    ngOnInit() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.date = `${days[this.now.getDay()]} ${monthNames[this.now.getMonth()]} ${this.now.getDate()} ${this.now.getHours() < 10 ? '0' : ''}${this.now.getHours()}:${this.now.getMinutes() < 10 ? '0' : ''}${this.now.getMinutes()}`;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 1, consts: [[1, "header-cont", "d-flx", "j-cont-space-bet", "a-items-c"], [1, "activites-cont", "d-flx", "a-items-c"], [1, "clock-cont", "d-flx", "a-items-c"], [1, "actionbar-cont", "d-flx", "a-items-c"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.date, " ");
    } }, styles: [".header-cont[_ngcontent-%COMP%] {\n  background: #111111;\n  color: #fff;\n}\n.header-cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 30px;\n  box-sizing: border-box;\n  padding: 8px 12px;\n  font-size: 14px;\n}\n.header-cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #e95420;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9wYXJ0aWFscy9fbGF5b3V0LnNjc3MiLCIuLi8uLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvcGFydGlhbHMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUFBO0FBQ0Esc0VBQUE7QUNFQTtFQUNFLG1CQ3NCSztFRHJCTCxXQ0hNO0FER1I7QUFDRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDRSxnQ0FBQTtBQUVOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvciBncmlkIGxheW91dCB3ZSBoYXZlIHRvIHVzZSBnZW5lcmljIHNpemUgZm9yIG1hcmdpbiBhbmQgcGFkZGluZyAqL1xuLyogVGhlc2UgbGVuZ3RocyBhcmUgbXVsdGlwbGUgb2YgOCB3aGVyZSA0cHggYW5kIDEycHggYXJlIGV4Y2VwdGlvbnMgKi9cbiR4eHhTbWFsbDogMXB4O1xuJHh4U21hbGw6IDJweDtcbiR4U21hbGw6IDRweDtcbiRzbWFsbDogOHB4O1xuJG1lZGl1bTogMTJweDtcbiRsYXJnZTogMTZweDtcbiR4TGFyZ2U6IDI0cHg7XG4keHhMYXJnZTogMzJweDtcbiR4eHhMYXJnZTogNDBweDtcbiR4eHh4TGFyZ2U6IDQ4cHg7XG4keHh4eHhMYXJnZTogOTZweDtcbiR4eHh4eHhMYXJnZTogMTIwcHg7XG4keHh4eHh4eExhcmdlOiAxNTJweDtcbiR4eHh4eHh4eExhcmdlOiAxOTZweDtcblxuJGljb25IZWlnaHQ6IDgwcHg7XG4kaWNvbldpZHRoOiA5NnB4O1xuJGhlYWRlckhlaWdodDogMzBweDtcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9wYXJ0aWFscy9jb2xvcnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3BhcnRpYWxzL2xheW91dCc7XG5cbi5oZWFkZXItY29udCB7XG4gIGJhY2tncm91bmQ6ICRkYXJrO1xuICBjb2xvcjogJHdoaXRlO1xuICBkaXYge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6ICRzbWFsbCAkbWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeUNvbG9yO1xuICAgIH1cblxuICB9XG59XG4iLCIvLyBzcGFjZSBiZXR3ZWVuIHZhcmlhYmxlIGNhdGVnb3JpemUgdGhlbVxuLy8gVE9ETzogcmVtb3ZlIGdyZXkgc2hhZGVzIGluIGZ1dHVyZVxuJHdoaXRlOiAjZmZmO1xuJGxpZ2h0V2hpdGU6ICNmYWZhZmE7XG4kYmFja2dyb3VuZENlbGxvOiAjMjM1MDY5O1xuJGJhY2tncm91bmRCbHVlOiAjZDlmNGZkO1xuJGxpZ2h0Qmx1ZTogI2Y1ZmNmZTtcbiRiYWNrZ3JvdW5kQmx1ZUxpZ2h0OiAjZWJmOWZkO1xuJHhsQmx1ZTogI2U1ZjRmNjtcbiR4bGlnaHRlcmdyZXk6ICM5ZTllOWU7XG4kbGlnaHQ6ICNmNWY1ZjU7XG5cbiR4eHh4eExpZ2h0R3JleTogI2YyZjJmMjtcbiR4eHh4TGlnaHRHcmV5OiAjZWNlZmYxO1xuJHh4eExpZ2h0R3JleTogI2Q1ZGRlMDtcbiR4eExpZ2h0R3JleTogI2U3ZWJlZDtcbiR4TGlnaHRHcmV5OiAjY2ZkOGRjO1xuJGxpZ2h0R3JleTogIzkwYTRhZTtcbiRsYWJlbEdyZXk6ICM5ZTllOWU7XG4kZGFya0dyZXk6ICM0MjQyNDI7XG4kbWVkaXVtR3JleTogIzc1NzU3NTtcbiRsaWdodGVyR3JleTogIzYxNjE2MTtcbiR0ZXJ0aWFyeUdyZXk6ICM0NTVhNjQ7XG4kc2VwcmF0b3JHcmV5OiAjZTBlMGUwO1xuJGJyaWdodEdyYXk6ICNlNGU4ZWI7XG5cbiRkYXJrOiAjMTExMTExO1xuJGRhcmtTZWNvbmRhcnk6ICMwOTMyNDM7XG4kdHJhbnNwYXJlbnREYXJrOiAjMjEyMTIxYTY7XG4keHRyYW5zcGFyZW50RGFyazogIzIxMjEyMTczO1xuJGRhbmdlclRyYW5zOiAjZTAyMDIwMWE7XG4kbGlnaHRUcmFuczogI2ZmZmZmZjAwO1xuJGJsYWNrOiAjMDAwO1xuJGRhcmtQcmltYXJ5OiAjMDI5OGFlO1xuJGRhcmtQcmltYXJ5VHJhbnM6ICMwMjk4YWUxYTtcbiRwcmltYXJ5Q29sb3I6ICNlOTU0MjA7XG4kcHJpbWFyeUNvbG9yTGlnaHQ6ICNmZmY1ZWE7XG4kcHJpbWFyeUNvbG9yVHJhbnM6ICMxZjExMDE7XG5cbiRzdWNjZXNzOiAjNGNhZjUwO1xuJGRhbmdlcjogI2UwMjAyMDtcbiRwaW5rOiAjZmJlOGU4O1xuJGRhcmtSZWQ6ICNkMDAyMWI7XG4kb3JhbmdlOiAjZmI4YzAwO1xuJHllbGxvdzogI2Y3YjUwMDtcbiRsaWdodE9yYW5nZTogI2ZlZjdlNTtcblxuJHdhLWJyYW5kaW5nOiAjMjNkMzY2O1xuXG4kd2F0ZXI6ICNkOWY0ZmQ7XG4kYmVpZ2U6ICNmN2YxZGY7XG4kYXp1cmVpc2g6ICNlMGVmZjE7XG4kcGxhdGludW06ICNlMWU1ZTc7XG5cbiRnb29nbGU6ICM0Mjg1ZjQ7XG4kdHJhbnNwYXJlbnQ6IHRyYW5zcGFyZW50O1xuXG5cbiR3aW5kb3dIZWFkZXI6ICMyMDFGMUY7XG4kd2luZG93Qmc6ICMzMzMzMzM7XG4kd2luZG93Q29udGVudDogIzIyMjtcbiR3aW5kb3dIaWdobGlnaHQ6IHJnYmEoI0FFQTc5RiwgMC4yKTtcbiR3aW5kb3dEaXNhYmxlZDogIzlDQTNBRjtcblxuJHRlcm1pbmFsR3JlZW46ICM0RTlBMDY7XG4kdGVybWluYWxCZzogIzJDMDAxRTtcbiR0ZXJtaW5hbEJsdWU6ICMzNDY1QTQ7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aman/ubuntu-portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "9jzM":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "+LOj");




class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header/header.component */ "+LOj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'ubuntu-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_modules_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header/header.module */ "9jzM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _modules_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _modules_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _modules_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-ubuntu-ubuntu-module */ "modules-ubuntu-ubuntu-module").then(__webpack_require__.bind(null, /*! ./modules/ubuntu/ubuntu.module */ "dG3o")).then(m => m.UbuntuModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
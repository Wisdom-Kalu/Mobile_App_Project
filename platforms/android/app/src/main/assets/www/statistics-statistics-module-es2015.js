(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\n\t\t<ion-buttons slot=\"start\">\n        <ion-back-button color=\"light\" defaultHref=\"/home-page\" icon=\"chevron-back\"></ion-back-button>\n\t\t</ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button class=\"bordered\" fill=\"clear\">\n\t\t\t\t<ion-icon name=\"notifications\" color=\"light\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\n\t<ion-item lines=\"none\">\n\t\t\t<ion-label color=\"light\">\n\t\t\t\t<h3>COVID-19 Statistics in Nigeria in Real Time</h3>\n\t\t\t</ion-label>\n\t</ion-item>\n\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-slide>\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"align-items-center\">\n            <ion-col size=\"6\">\n              <ion-button color=\"light\" shape=\"round\" routerLink=\"/#\" class=\"ion-text-capitalize\">\n                Nigeria\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button shape=\"round\" color=\"light\" fill=\"clear\" routerLink=\"/states\" class=\"ion-text-capitalize\">\n                States\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </div>\n\n  <!--FIRST ROW-->\n  <div>\n    <ion-slide>\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"align-items-center\">\n            <ion-col size=\"6\">\n              <div class=\"stats\">\n                <p>Confirmed</p>\n                <h3>{{help}}</h3>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"stats2\">\n                <p>Deaths</p>\n                <h3>{{onwu}}</h3>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </div>\n  \n  <!--FIRST ROW-->\n  <div class=\"ion-margin-bottom\">\n    <ion-slide>\n      <ion-card>\n        <ion-grid class=\"ion-margin-bottom\">\n          <ion-row class=\"align-items-center\">\n            <ion-col size=\"4\">\n              <div class=\"stats3\">\n                <p>Recovery</p>\n                <h3>{{freed}}</h3>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"stats4\">\n                <p>Active</p>\n                <h3>{{active}}</h3>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"stats5\">\n                <p>Tests</p>\n                <h3>{{samples}}</h3>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </div>\n  \n\n  <div class=\"container\" id=\"map\" height=\"inherit\">\n      <div class=\"form ion-text-center\">\n        <ion-item lines=\"none\">\n        \n          <!--\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"3\">\n                <ion-icon name=\"person-outline\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label>\n                  <h4>Mr Paul</h4>\n                  <h6>080334789</h6>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-button color=\"light\" fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        -->\n\n        </ion-item>\n      </div> \n    </div>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/statistics/statistics-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/statistics/statistics-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageRoutingModule", function() { return StatisticsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics.page */ "./src/app/statistics/statistics.page.ts");




const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_3__["StatisticsPage"]
    }
];
let StatisticsPageRoutingModule = class StatisticsPageRoutingModule {
};
StatisticsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatisticsPageRoutingModule);



/***/ }),

/***/ "./src/app/statistics/statistics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/*! exports provided: StatisticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/statistics/statistics-routing.module.ts");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics.page */ "./src/app/statistics/statistics.page.ts");







let StatisticsPageModule = class StatisticsPageModule {
};
StatisticsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsPageRoutingModule"]
        ],
        declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]]
    })
], StatisticsPageModule);



/***/ }),

/***/ "./src/app/statistics/statistics.page.scss":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar, ion-header ion-item {\n  background: #362170;\n  --background: #362170;\n  padding: 0 10px;\n}\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-content {\n  background: #362170;\n  --background: #362170;\n}\nion-content .slides {\n  background: #362170;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  background: #362170;\n}\nion-content ion-card .stats {\n  background: #d4a03e;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats2 {\n  background: #c92c2c;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats3 {\n  background: #29c23e;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats4 {\n  background: #458fcc;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats5 {\n  background: rgba(143, 106, 63, 0.993);\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\nion-content .container {\n  -webkit-animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 220px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\nion-content .form {\n  padding: 10px;\n}\nion-content .form ion-item {\n  margin-top: 20px;\n  border-bottom: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9DOlxceGFtcHBcXGh0ZG9jc1xcSW9uaWNfUHJvamVjdFxcZmluYWxfVUkvc3JjXFxhcHBcXHN0YXRpc3RpY3NcXHN0YXRpc3RpY3MucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0aXN0aWNzL3N0YXRpc3RpY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNETjtBREtNO0VBQ0UscUJBQUE7RUFFQSwyR0FBQTtBQ0pSO0FEVU07RUFDRSxvQkFBQTtBQ1JSO0FEY0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDWEo7QURhSTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7QUNYUjtBRGNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEY1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNaWjtBRGVRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDYlo7QURnQlE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNkWjtBRGlCUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2ZaO0FEa0JRO0VBQ0kscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDaEJaO0FEc0JNO0VBQW1DO0lBQXdDLDZCQUFBO0lBQTZCLFVBQUE7RUNoQjVHO0VEZ0JzSDtJQUFxQyx3QkFBQTtJQUF3QixVQUFBO0VDWG5MO0FBQ0Y7QURVZ007RUFBMkI7SUFBd0MsNkJBQUE7SUFBNkIsVUFBQTtFQ0o5UjtFREl3UztJQUFxQyx3QkFBQTtJQUF3QixVQUFBO0VDQ3JXO0FBQ0Y7QURETTtFQUNFLGlGQUFBO0VBQXlFLHlFQUFBO0VBQ3pFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0lSO0FEQ007RUFDRSxhQUFBO0FDQ1I7QURBUTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUNFViIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHJcbiAgICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLmJvcmRlcmVkIHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLy8tLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgXHJcbiAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG5cclxuICAgIC5zbGlkZXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNjIxNzA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG5cclxuICAgICAgICAuc3RhdHMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAxNjAsIDYyKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMSUgMTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogIzM2MjE3MDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXRzMiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMDEsIDQ0LCA0NCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElIDEwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMzNjIxNzA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0czMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDEsIDE5NCwgNjIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxJSAxMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAjMzYyMTcwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHM0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDY5LCAxNDMsIDIwNCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElIDEwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMzNjIxNzA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0czUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgMTA2LCA2MywgMC45OTMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxJSAxMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAjMzYyMTcwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX19XHJcbiAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tYm90dG9tIC45cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO2FuaW1hdGlvbjpzbGlkZS1pbi1ib3R0b20gLjlzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgLmZvcm17XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4gIH1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciwgaW9uLWhlYWRlciBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAuYm9yZGVyZWQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm94LXNoYWRvdzogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xufVxuaW9uLWhlYWRlciBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzM2MjE3MDtcbiAgLS1iYWNrZ3JvdW5kOiAjMzYyMTcwO1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlcyB7XG4gIGJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLnN0YXRzIHtcbiAgYmFja2dyb3VuZDogI2Q0YTAzZTtcbiAgcGFkZGluZzogMSUgMTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogIzM2MjE3MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLnN0YXRzMiB7XG4gIGJhY2tncm91bmQ6ICNjOTJjMmM7XG4gIHBhZGRpbmc6IDElIDEwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6ICMzNjIxNzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5zdGF0czMge1xuICBiYWNrZ3JvdW5kOiAjMjljMjNlO1xuICBwYWRkaW5nOiAxJSAxMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAjMzYyMTcwO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuc3RhdHM0IHtcbiAgYmFja2dyb3VuZDogIzQ1OGZjYztcbiAgcGFkZGluZzogMSUgMTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogIzM2MjE3MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLnN0YXRzNSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTQzLCAxMDYsIDYzLCAwLjk5Myk7XG4gIHBhZGRpbmc6IDElIDEwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6ICMzNjIxNzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDAuOXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDAuOXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cbmlvbi1jb250ZW50IC5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5mb3JtIGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/statistics/statistics.page.ts":
/*!***********************************************!*\
  !*** ./src/app/statistics/statistics.page.ts ***!
  \***********************************************/
/*! exports provided: StatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPage", function() { return StatisticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");





let StatisticsPage = class StatisticsPage {
    constructor(geolocation, platform, http) {
        this.geolocation = geolocation;
        this.platform = platform;
        this.http = http;
        this.latitude = "";
        this.longitude = "";
        this.timestamp = "";
    }
    /* getLocation() {
       this.geolocation.getCurrentPosition({
         enableHighAccuracy: true
       }).then((res) => {
         this.latitude = res.coords.latitude.toString();
         this.longitude = res.coords.longitude.toString();
   
         var gps = new google.maps.LatLng(res.coords.latitude, res.coords.longitude);
         if(this.marker == null) {
   
           this.marker = new google.maps.Marker({
           position: gps,
           map:this.map,
           title: 'my position'
         })
   
       } else {
         this.marker.setPosition(gps);
       }
       }).catch((error) => {
         console.log(error);
       })
     }
   */
    getLocation() {
        var ref = this;
        let watch = this.geolocation.getCurrentPosition();
        watch.then((position) => {
            var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            if (ref.marker == null) {
                ref.marker = new google.maps.Marker({
                    position: gps,
                    map: ref.map,
                    title: 'my position'
                });
            }
            else {
                ref.marker.setPosition(gps);
            }
            ref.map.panTo(gps);
            ref.latitude = position.coords.latitude.toString();
            ref.longitude = position.coords.longitude.toString();
        });
    }
    getCovidData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const url = 'https://covidnigeria.herokuapp.com/api';
                const params = {};
                const headers = {};
                const response = yield this.http.get(url, params, headers);
                console.log(response.status);
                console.log(JSON.parse(response.data)); // JSON data returned by server
                this.items = JSON.parse(response.data);
                this.help = this.items['data'].totalConfirmedCases;
                this.onwu = this.items['data'].death;
                this.freed = this.items['data'].discharged;
                this.active = this.items['data'].totalActiveCases;
                this.samples = this.items['data'].totalSamplesTested;
                console.log(response.headers);
            }
            catch (error) {
                console.error(error.status);
                console.error(error.error); // Error message as string
                console.error(error.headers);
            }
        });
    }
    ngOnInit() {
        this.getCovidData();
        this.platform.ready().then(() => {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        });
        this.getLocation();
    }
};
StatisticsPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
StatisticsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./statistics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./statistics.page.scss */ "./src/app/statistics/statistics.page.scss")).default]
    })
], StatisticsPage);



/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module-es2015.js.map
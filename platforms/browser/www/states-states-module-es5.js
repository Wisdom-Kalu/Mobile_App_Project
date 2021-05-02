function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["states-states-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/states/states.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/states/states.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStatesStatesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\n\t\t<ion-buttons slot=\"start\">\n        <ion-back-button color=\"light\" defaultHref=\"/home-page\" icon=\"chevron-back\"></ion-back-button>\n\t\t</ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button class=\"bordered\" fill=\"clear\">\n\t\t\t\t<ion-icon name=\"notifications\" color=\"light\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\n\t<ion-item lines=\"none\">\n\t\t\t<ion-label color=\"light\">\n        <h3>Check out the spread of the COVID-19 virus wherever you <br> live in Nigeria. \n          Click the button below and select your <br> state from the dropdown to see the current spread of <br> the virus in real time</h3>\n\t\t\t</ion-label>\n\t</ion-item>\n\n</ion-header>\n\n<ion-content>\n  \n  <div>\n    <ion-slide>\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"align-items-center\">\n            <ion-col size=\"6\">\n              <ion-button color=\"light\" fill=\"clear\" shape=\"round\" routerLink=\"/statistics\" class=\"ion-text-capitalize\">\n                Nigeria\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button shape=\"round\" color=\"light\" fill=\"solid\" class=\"ion-text-capitalize\">\n                <form class=\"form-group\">\n                  <div>\n                    <ion-select name=\"ourstate\" id=\"ourstate\" (ionChange)=\"getStatesData()\">\n                      <ion-select-option *ngFor=\"let results of result\" value=\"{{results}}\">{{results}}</ion-select-option>\n                    </ion-select>\n                  </div>\n                </form>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </div>\n\n  <!--FIRST ROW-->\n  <div>\n    <ion-slide>\n      <ion-card>\n        <ion-grid>\n          <ion-row class=\"align-items-center\">\n            <ion-col size=\"6\">\n              <div class=\"stats\">\n                <p>State</p>\n                <h3>{{staty}}</h3>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"stats2\">\n                <p>Deaths</p>\n                <h3>{{onwu}}</h3>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </div>\n  \n  <!--FIRST ROW-->\n  <div class=\"ion-margin-bottom\">\n    <ion-slide>\n      <ion-card>\n        <ion-grid class=\"ion-margin-bottom\">\n          <ion-row class=\"align-items-center\">\n            <ion-col size=\"4\">\n              <div class=\"stats3\">\n                <p>Recovery</p>\n                <h3>{{freed}}</h3>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"stats4\">\n                <p>Active</p>\n                <h3>{{total}}</h3>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"stats5\">\n                <p>Confirmed</p>\n                <h3>{{active}}</h3>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-slide>\n  </div>\n  \n\n  <div class=\"container\" height=\"inherit\">\n      <div class=\"form ion-text-center\" style=\"font-size: small;\">\n        <ion-item>\n          \n        </ion-item>\n      </div> \n    </div>\n  \n</ion-content>\n\n\n\n\n<!--\n<ion-app>\n\n<ion-header>\n  <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n        <ion-back-button color=\"light\" defaultHref=\"/home-page\" icon=\"chevron-back\"></ion-back-button>\n\t\t</ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button class=\"bordered\" fill=\"clear\">\n\t\t\t\t<ion-icon name=\"notifications\" color=\"light\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\n\t<ion-item lines=\"none\">\n\t\t\t<ion-label color=\"light\">\n\t\t\t\t<h2>Check out the spread of the COVID-19 virus <br> wherever you live in Nigeria in real time below</h2>\n\t\t\t</ion-label>\n\t</ion-item>\n\n</ion-header>\n\n\n\n  <ion-content fullscreen>\n\n    <div>\n      <ion-slide>\n        <ion-card>\n          <ion-grid>\n            <ion-row class=\"align-items-center\">\n              <ion-col size=\"6\">\n                <ion-button color=\"light\" shape=\"round\" routerLink=\"/statistics\" class=\"ion-text-capitalize\">\n                  Nigeria\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button shape=\"round\" color=\"light\" fill=\"solid\" class=\"ion-text-capitalize\">\n                  <form>\n                    <div class=\"form-group\">\n                      <ion-select>\n                        <ion-select-option *ngFor=\"let results of result\" value=\"{{results}}\">{{results}}</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </form>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-slide>\n    </div>\n\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <div>Abia State</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div style=\"background: rgb(212, 160, 62); color: white; font-weight: 400px;\">\n               Confirmed\n              <p>12000</p>\n            </div>\n            \n          </ion-col>\n          <ion-col>\n            <div style=\"background: rgb(69, 143, 204); color: white; font-weight: 400px;\">\n              Active\n              <p>12000</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div style=\"background: rgb(168, 129, 56); color: white; font-weight: 400px;\">\n              Tests\n              <p>12000</p>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div style=\"background: rgb(201, 44, 44); color: white; font-weight: 400px;\">\n              Deaths\n              <p>12000</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <div style=\" background: rgb(41, 194, 62); color: white; font-weight: 400px;\">\n              Recoveries: 1200\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n  \n  </ion-content>\n</ion-app>\n\n-->\n";
    /***/
  },

  /***/
  "./src/app/states/states-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/states/states-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: StatesPageRoutingModule */

  /***/
  function srcAppStatesStatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatesPageRoutingModule", function () {
      return StatesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _states_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./states.page */
    "./src/app/states/states.page.ts");

    var routes = [{
      path: '',
      component: _states_page__WEBPACK_IMPORTED_MODULE_3__["StatesPage"]
    }];

    var StatesPageRoutingModule = function StatesPageRoutingModule() {
      _classCallCheck(this, StatesPageRoutingModule);
    };

    StatesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StatesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/states/states.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/states/states.module.ts ***!
    \*****************************************/

  /*! exports provided: StatesPageModule */

  /***/
  function srcAppStatesStatesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatesPageModule", function () {
      return StatesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _states_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./states-routing.module */
    "./src/app/states/states-routing.module.ts");
    /* harmony import */


    var _states_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./states.page */
    "./src/app/states/states.page.ts");

    var StatesPageModule = function StatesPageModule() {
      _classCallCheck(this, StatesPageModule);
    };

    StatesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _states_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatesPageRoutingModule"]],
      declarations: [_states_page__WEBPACK_IMPORTED_MODULE_6__["StatesPage"]]
    })], StatesPageModule);
    /***/
  },

  /***/
  "./src/app/states/states.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/states/states.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppStatesStatesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar, ion-header ion-item {\n  background: #362170;\n  --background: #362170;\n  padding: 0 10px;\n}\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-content {\n  background: #362170;\n  --background: #362170;\n}\nion-content .slides {\n  background: #362170;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  background: #362170;\n}\nion-content ion-card .stats {\n  background: #d4a03e;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats2 {\n  background: #c92c2c;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats3 {\n  background: #29c23e;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats4 {\n  background: #458fcc;\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\nion-content ion-card .stats5 {\n  background: rgba(143, 106, 63, 0.993);\n  padding: 1% 10%;\n  text-align: left;\n  margin: 0px;\n  box-shadow: #362170;\n  color: white;\n}\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\nion-content .container {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  min-height: 120px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\nion-content .form {\n  padding: 10px;\n}\nion-content .form ion-item {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGVzL0M6XFx4YW1wcFxcaHRkb2NzXFxJb25pY19Qcm9qZWN0XFxmaW5hbF9VSS9zcmNcXGFwcFxcc3RhdGVzXFxzdGF0ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0ZXMvc3RhdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDREo7QURLSTtFQUNFLHFCQUFBO0VBRUEsMkdBQUE7QUNKTjtBRFVJO0VBQ0Usb0JBQUE7QUNSTjtBRGNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ1hGO0FEYUU7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FDWE47QURjSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNaTjtBRGNNO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDWlY7QURlTTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2JWO0FEZ0JNO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDZFY7QURpQk07RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNmVjtBRGtCTTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2hCVjtBRHNCRztFQUFtQztJQUF3Qyw2QkFBQTtJQUE2QixVQUFBO0VDaEJ6RztFRGdCbUg7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQ1hoTDtBQUNGO0FEVTZMO0VBQTJCO0lBQXdDLDZCQUFBO0lBQTZCLFVBQUE7RUNKM1I7RURJcVM7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQ0NsVztBQUNGO0FEREk7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0VOO0FER0k7RUFDRSxhQUFBO0FDRE47QURFTTtFQUNFLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zdGF0ZXMvc3RhdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cclxuICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLy8tLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMzNjIxNzA7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG5cclxuICAuc2xpZGVzIHtcclxuICAgICAgYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG5cclxuICAgICAgLnN0YXRzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTIsIDE2MCwgNjIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMSUgMTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM2MjE3MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXRzMiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAxLCA0NCwgNDQpO1xyXG4gICAgICAgICAgcGFkZGluZzogMSUgMTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM2MjE3MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXRzMyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDEsIDE5NCwgNjIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMSUgMTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogIzM2MjE3MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXRzNCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNjksIDE0MywgMjA0KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDElIDEwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICMzNjIxNzA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0czUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIHJnYmEoMTQzLCAxMDYsIDYzLCAwLjk5Myk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxJSAxMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAjMzYyMTcwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b217MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9fVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1pbi1ib3R0b20gLjlzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7YW5pbWF0aW9uOnNsaWRlLWluLWJvdHRvbSAuOXMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIC5mb3Jte1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcblxyXG59XHJcbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xuICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLmJvcmRlcmVkIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogNDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcbn1cbmlvbi1jb250ZW50IC5zbGlkZXMge1xuICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjhweCAyOHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogIzM2MjE3MDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5zdGF0cyB7XG4gIGJhY2tncm91bmQ6ICNkNGEwM2U7XG4gIHBhZGRpbmc6IDElIDEwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6ICMzNjIxNzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5zdGF0czIge1xuICBiYWNrZ3JvdW5kOiAjYzkyYzJjO1xuICBwYWRkaW5nOiAxJSAxMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAjMzYyMTcwO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuc3RhdHMzIHtcbiAgYmFja2dyb3VuZDogIzI5YzIzZTtcbiAgcGFkZGluZzogMSUgMTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogIzM2MjE3MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLnN0YXRzNCB7XG4gIGJhY2tncm91bmQ6ICM0NThmY2M7XG4gIHBhZGRpbmc6IDElIDEwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6ICMzNjIxNzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5zdGF0czUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgMTA2LCA2MywgMC45OTMpO1xuICBwYWRkaW5nOiAxJSAxMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAjMzYyMTcwO1xuICBjb2xvcjogd2hpdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5pb24tY29udGVudCAuZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCAuZm9ybSBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/states/states.page.ts":
  /*!***************************************!*\
    !*** ./src/app/states/states.page.ts ***!
    \***************************************/

  /*! exports provided: StatesPage */

  /***/
  function srcAppStatesStatesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatesPage", function () {
      return StatesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");

    var StatesPage = /*#__PURE__*/function () {
      function StatesPage(platform, http) {
        _classCallCheck(this, StatesPage);

        this.platform = platform;
        this.http = http;
        this.latitude = "";
        this.longitude = "";
        this.timestamp = "";
        this.result = [];
      }

      _createClass(StatesPage, [{
        key: "getCovidData",
        value: function getCovidData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var url, params, headers, response, j;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    url = 'https://covidnigeria.herokuapp.com/api';
                    params = {};
                    headers = {};
                    _context.next = 6;
                    return this.http.get(url, params, headers);

                  case 6:
                    response = _context.sent;
                    console.log(response.status);
                    console.log(JSON.parse(response.data)); // JSON data returned by server

                    this.items = JSON.parse(response.data);
                    this.help = this.items["data"]["states"];

                    for (j = 0; j < this.help.length; j++) {
                      this.result.push(this.help[j].state);
                    } //console.log(this.result);


                    console.log(response.headers);
                    _context.next = 20;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0.status);
                    console.error(_context.t0.error); // Error message as string

                    console.error(_context.t0.headers);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 15]]);
          }));
        }
      }, {
        key: "getStatesData",
        value: function getStatesData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var e, url, params, headers, response, j;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    e = document.getElementById('ourstate').value; //gets the value of the select field 
                    //console.log('the value of the form is ' + $event.target.value);
                    //var e = 'Lagos';

                    _context2.prev = 1;
                    url = 'https://covidnigeria.herokuapp.com/api';
                    params = {};
                    headers = {};
                    _context2.next = 7;
                    return this.http.get(url, params, headers);

                  case 7:
                    response = _context2.sent;
                    // http GET API request
                    console.log(response.status);
                    console.log(JSON.parse(response.data)); // JSON data returned by server

                    this.items = JSON.parse(response.data);
                    this.help = this.items["data"]["states"]; // etract only data for the 36 Nigerian states
                    // loops through the array of states and pull out the individual COVID-19 cases of all states

                    for (j = 0; j < this.help.length; j++) {
                      if (e == this.help[j].state) {
                        // if it finds the state that the user selected in the dropdown...
                        this.total = this.help[j].casesOnAdmission;
                        this.active = this.help[j].confirmedCases;
                        this.onwu = this.help[j].death;
                        this.freed = this.help[j].discharged;
                        this.staty = this.help[j].state;
                        console.log('the cases on admission is ' + this.total);
                        console.log('the confirmed cases is ' + this.active);
                        console.log('the death is ' + this.onwu);
                        console.log('the freed is ' + this.freed);
                        console.log('the state is ' + this.help);
                      } else {
                        console.log('invalid input');
                      }
                    } //console.log(this.result);


                    console.log(response.headers);
                    _context2.next = 21;
                    break;

                  case 16:
                    _context2.prev = 16;
                    _context2.t0 = _context2["catch"](1);
                    console.error(_context2.t0.status);
                    console.error(_context2.t0.error); // Error message as string

                    console.error(_context2.t0.headers);

                  case 21:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 16]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCovidData();
          this.getStatesData();
        }
      }]);

      return StatesPage;
    }();

    StatesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"]
      }];
    };

    StatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-states',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./states.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/states/states.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./states.page.scss */
      "./src/app/states/states.page.scss"))["default"]]
    })], StatesPage);
    /***/
  }
}]);
//# sourceMappingURL=states-states-module-es5.js.map
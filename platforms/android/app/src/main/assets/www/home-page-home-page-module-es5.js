function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\n\t\t<ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\">\n        <ion-icon name=\"apps\" color=\"light\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button class=\"bordered\" fill=\"clear\" (click)=\"notifyContacts()\">\n\t\t\t\t<ion-icon name=\"notifications\" color=\"light\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\n\t<ion-item lines=\"none\">\n\n\t\t<ion-avatar slot=\"start\">\n\t\t\t<img src=\"https://www.freevector.com/uploads/vector/preview/30888/small_1x_END_THE_PANDEMIC.jpg\">\n    </ion-avatar>\n\t\t\t<ion-label color=\"light\">\n\t\t\t\t<p>Welcome to the</p>\n\t\t\t\t<h3>COVID-19 Tracking App For Nigeria</h3>\n\t\t\t</ion-label>\n\t</ion-item>\n\n</ion-header>\n\n<ion-content>\n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/add-contact\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"slides ion-margin-bottom\">\n      <ion-slide>\n        <ion-card>\n          <ion-card-header>\n            <div class=\"ion-text-left\">\n              <h6 style=\"color: rgba(255, 255, 255, 0.795)\">Are you feeling sick?</h6>\n            </div>\n            <div class=\"ion-margin-top ion-text-left\">\n              <p style=\" color: rgba(255, 255, 255, 0.74)\">\n                If you have any of the COVID-19 symptoms, kindly call or text the NCDC immediately below:\n              </p>\n            </div>\n          </ion-card-header>\n          <ion-grid class=\"ion-margin-bottom\">\n            <ion-row class=\"align-items-center\">\n              <ion-col size=\"6\">\n                <ion-button color=\"danger\" shape=\"round\" class=\"ion-text-capitalize\" (click)=\"callNCDC()\">\n                  <ion-icon name=\"call\" color=\"light\"> </ion-icon>Call\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button color=\"primary\" shape=\"round\" routerLink=\"/home-page\" class=\"ion-text-capitalize\" (click)=\"sendSMS()\">\n                  <ion-icon name=\"chatbubbles\" color=\"light\"></ion-icon> SMS\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n         <!-- <ion-card-content class=\"ion-text-left\">\n             <ion-card-subtitle class=\"ion-text-right\">10/50GB</ion-card-subtitle>\n          </ion-card-content>\n          -->\n        </ion-card>\n      </ion-slide>\n  </div>\n\n  <div class=\"container\">\n    <h4>Symptoms</h4>\n      <ion-item lines=\"none\">\n      <ion-grid>\n\n        <!--First row-->\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://static.vecteezy.com/system/resources/thumbnails/001/432/050/small_2x/woman-sick-with-fever-using-thermometer-fill-style-free-vector.jpg\">\n            </ion-item>\n          <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Fever</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://static.vecteezy.com/system/resources/thumbnails/001/815/663/small_2x/boy-head-with-dry-cough-design-free-vector.jpg\">\n            </ion-item>\n           <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Cough</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://static.vecteezy.com/system/resources/thumbnails/001/815/847/small_2x/boy-head-with-sore-throat-design-free-vector.jpg\">\n            </ion-item>\n           <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Sore Throat</p>\n          </ion-col>\n        </ion-row>\n\n        <!--Second Row-->\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://th.bing.com/th/id/OIP.YdCgE_J_sMKEY01-eOmvkwHaF0?w=220&h=180&c=7&o=5&dpr=1.25&pid=1.7\">\n            </ion-item>\n          <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Shortness of Breathe</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://th.bing.com/th/id/OIP.KZ-nTnZBgz1V-uL1RViSmgHaEK?w=322&h=181&c=7&o=5&dpr=1.25&pid=1.7\">\n            </ion-item>\n          <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Fatigue</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://th.bing.com/th/id/OIP.vo6KrhpAN9sr8UGfltwc8wHaFL?w=237&h=180&c=7&o=5&dpr=1.25&pid=1.7\" width=\"100%\">\n            </ion-item>\n          <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Vomitting</p>\n          </ion-col>\n        </ion-row>\n\n        <!--Third Row-->\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://www.freevector.com/uploads/vector/preview/30841/small_1x_COUGH_INTO_ELBOW.jpg\">\n            </ion-item>\n          <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Runny nose</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://th.bing.com/th/id/OIP.Jnjzsnhv1AJjS0EZt0nGngHaHa?w=167&h=180&c=7&o=5&dpr=1.25&pid=1.7\">\n            </ion-item>\n          <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Body/Muscle aches</p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-item fill=\"clear\">\n              <img src=\"https://static.vecteezy.com/system/resources/thumbnails/001/520/246/small_2x/cartoon-character-with-diarrhea-symptoms-free-vector.jpg\">\n            </ion-item>\n           <p style=\"font-size: 10px; text-align: center; font-weight: 0px\">Diarrhea</p>\n          </ion-col>\n        </ion-row>\n        <!--\n        <div class=\"container fluid\">\n\n          <ion-item lines=\"none\">\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"3\">\n                  <ion-button fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"film\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label>\n                    <h4>Project.MP4</h4>\n                    <h6>Dropbox/Videos</p>\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <ion-button color=\"primary\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        \n        </div> \n        -->\n      </ion-grid>\n    </ion-item>\n  </div>\n\n  <div class=\"mydiv\">\n    <ion-row>\n      <ion-col size=\"4\">\n          <img src=\"assets/check.svg\" width=\"100%\" height=\"100%\">\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"ion-margin-top ion-text-left\">\n          <p style=\"color:  rgba(255, 255, 255, 0.74); font-size: 10px\">\n            Did you test positive for COVID-19?\n          </p>\n          <ion-button color=\"danger\" class=\"ion-text-capitalize\" expand=\"block\" (click)=\"notifyContacts()\">\n           Notify Contacts\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n<div class=\"mydiv\">\n  <ion-row>\n    <ion-col size=\"4\">\n        <img src=\"assets/check.svg\" width=\"100%\" height=\"100%\">\n    </ion-col>\n    <ion-col size=\"8\">\n      <h6 style=\"color: rgba(255, 255, 255, 0.795);\">Prevention</h6>\n      <div class=\"ion-margin-top ion-text-left\">\n        <p style=\"color:  rgba(255, 255, 255, 0.74); font-size: 10px\">\n          Learn how to stay safe below:\n        </p>\n        <ion-button color=\"#362170\" routerLink=\"/welcome\" class=\"ion-text-capitalize\" expand=\"block\">\n          Learn More\n        </ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"mydiv\">\n  <ion-row>\n    <ion-col size=\"12\">\n        <ion-button routerLink=\"/statistics\" class=\"ion-text-capitalize\" expand=\"block\">\n          View COVID Statistics\n        </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home-page/home-page-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home-page/home-page-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: HomePagePageRoutingModule */

  /***/
  function srcAppHomePageHomePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePagePageRoutingModule", function () {
      return HomePagePageRoutingModule;
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


    var _home_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page.page */
    "./src/app/home-page/home-page.page.ts");

    var routes = [{
      path: '',
      component: _home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"]
    }];

    var HomePagePageRoutingModule = function HomePagePageRoutingModule() {
      _classCallCheck(this, HomePagePageRoutingModule);
    };

    HomePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/home-page/home-page.module.ts ***!
    \***********************************************/

  /*! exports provided: HomePagePageModule */

  /***/
  function srcAppHomePageHomePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePagePageModule", function () {
      return HomePagePageModule;
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


    var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-page-routing.module */
    "./src/app/home-page/home-page-routing.module.ts");
    /* harmony import */


    var _home_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-page.page */
    "./src/app/home-page/home-page.page.ts");

    var HomePagePageModule = function HomePagePageModule() {
      _classCallCheck(this, HomePagePageModule);
    };

    HomePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePagePageRoutingModule"]],
      declarations: [_home_page_page__WEBPACK_IMPORTED_MODULE_6__["HomePagePage"]]
    })], HomePagePageModule);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/home-page/home-page.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar, ion-header ion-item {\n  background: #362170;\n  --background: #362170;\n  padding: 0 10px;\n}\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\nion-header ion-item {\n  /* p {\n     font-weight: 500;\n     font-size: 14px;\n   }\n   */\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-content {\n  background: #f1f5f8;\n}\nion-content .slides {\n  background: #362170;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  background: #362170;\n  /*.main {\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    background: #FFFFFF;\n    box-shadow:  7px 7px 20px #dbdfe2, \n           -7px -7px 20px #ffffff;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      width: 30px;\n    }\n\n\n\n  }  */\n}\nion-content ion-card .files {\n  padding-top: 14px;\n}\nion-content .container {\n  color: black;\n}\nion-content .container h4 {\n  padding: 6px 20px;\n}\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 20%;\n  color: black;\n  font-weight: 600;\n}\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n}\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 16px;\n}\nion-content .container ion-item ion-label h6 {\n  color: black;\n}\nion-content .container h2 {\n  padding-bottom: 8px;\n}\nion-content .mydiv {\n  background: #362170;\n  --background: #362170;\n  margin: 20px;\n  border-radius: 10px;\n}\n/*\n  <edit-config file=\"app/src/main/AndroidManifest.xml\" mode=\"merge\" target=\"/manifest/application\" xmlns:android=\"http://schemas.android.com/apk/res/android\">\n  <application android:networkSecurityConfig=\"@xml/network_security_config\" />\n</edit-config>\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFx4YW1wcFxcaHRkb2NzXFxJb25pY19Qcm9qZWN0XFxmaW5hbF9VSS9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFNQSxlQUFBO0FDTk47QURVTTtFQUNFLHFCQUFBO0VBRUEsMkdBQUE7QUNUUjtBRGFJO0VBTUM7Ozs7SUFBQTtBQ1pMO0FET007RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNMUjtBRGNNO0VBQ0Usb0JBQUE7QUNaUjtBRGtCRTtFQUVFLG1CQUFBO0FDaEJKO0FEbUJJO0VBQ0UsbUJBQUE7RUFLQSw0QkFBQTtBQ3JCTjtBRHdCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBR0EsbUJBQUE7RUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7QUNOTjtBRDBCTTtFQUNJLGlCQUFBO0FDeEJWO0FENkJJO0VBSUUsWUFBQTtBQzlCTjtBRDRCTTtFQUFJLGlCQUFBO0FDekJWO0FENkJNO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7QUM1QlI7QUQ4QlE7RUFDRSxjQUFBO0FDNUJWO0FEOEJVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDNUJaO0FEK0JVO0VBRUUsWUFBQTtBQzlCWjtBRG9DTTtFQUNFLG1CQUFBO0FDbENSO0FEdUNJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUdBLFlBQUE7RUFDQSxtQkFBQTtBQ3ZDTjtBRDhDQTs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHJcbiAgICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XHJcbiAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG5cclxuICAgICAgLy8tLWJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbiAgICAgIC8vYmFja2dyb3VuZDogI2YxZjVmODtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAuYm9yZGVyZWQge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvLy0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgLyogcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgKi9cclxuICBcclxuICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICBcclxuICAgIC5zbGlkZXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG4gICAgICAvL2JhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbiAgICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICAgICAvL3BhZGRpbmc6IDRweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgLy8gcGFkZGluZzogMTRweDtcclxuICAgICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgICAgYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgICAgLyoubWFpbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiAgN3B4IDdweCAyMHB4ICNkYmRmZTIsIFxyXG4gICAgICAgICAgICAgICAtN3B4IC03cHggMjBweCAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICBcclxuICBcclxuICAgICAgfSAgKi9cclxuICBcclxuICAgICAgLmZpbGVzIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29udGFpbmVyIHtcclxuXHJcbiAgICAgIGg0IHtwYWRkaW5nOiA2cHggMjBweDt9XHJcbiAgICAgIC8vY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgICAgICAvL2NvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICBcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgLy9jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjYpO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubXlkaXZ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzNjIxNzA7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDQ1LCAxMTIsIDIyOSwgMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYigzMiwgMjUsIDEwMikgMTAwJSk7XHJcbiAgICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNDUsIDExMiwgMjI5LCAxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiKDMyLCAyNSwgMTAyKSAxMDAlKTtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4vKlxyXG4gIDxlZGl0LWNvbmZpZyBmaWxlPVwiYXBwL3NyYy9tYWluL0FuZHJvaWRNYW5pZmVzdC54bWxcIiBtb2RlPVwibWVyZ2VcIiB0YXJnZXQ9XCIvbWFuaWZlc3QvYXBwbGljYXRpb25cIiB4bWxuczphbmRyb2lkPVwiaHR0cDovL3NjaGVtYXMuYW5kcm9pZC5jb20vYXBrL3Jlcy9hbmRyb2lkXCI+XHJcbiAgPGFwcGxpY2F0aW9uIGFuZHJvaWQ6bmV0d29ya1NlY3VyaXR5Q29uZmlnPVwiQHhtbC9uZXR3b3JrX3NlY3VyaXR5X2NvbmZpZ1wiIC8+XHJcbjwvZWRpdC1jb25maWc+XHJcbiovIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciwgaW9uLWhlYWRlciBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAuYm9yZGVyZWQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm94LXNoYWRvdzogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xufVxuaW9uLWhlYWRlciBpb24taXRlbSB7XG4gIC8qIHAge1xuICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICB9XG4gICAqL1xufVxuaW9uLWhlYWRlciBpb24taXRlbSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogNDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjg7XG59XG5pb24tY29udGVudCAuc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogIzM2MjE3MDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIC8qLm1haW4ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogIDdweCA3cHggMjBweCAjZGJkZmUyLCBcbiAgICAgICAgICAgLTdweCAtN3B4IDIwcHggI2ZmZmZmZjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cblxuXG4gIH0gICovXG59XG5pb24tY29udGVudCBpb24tY2FyZCAuZmlsZXMge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIGg0IHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDE0cHggMDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZzogNnB4IDA7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyIGlvbi1pdGVtIGlvbi1sYWJlbCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIGg2IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lciBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5pb24tY29udGVudCAubXlkaXYge1xuICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xuICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLypcbiAgPGVkaXQtY29uZmlnIGZpbGU9XCJhcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbFwiIG1vZGU9XCJtZXJnZVwiIHRhcmdldD1cIi9tYW5pZmVzdC9hcHBsaWNhdGlvblwiIHhtbG5zOmFuZHJvaWQ9XCJodHRwOi8vc2NoZW1hcy5hbmRyb2lkLmNvbS9hcGsvcmVzL2FuZHJvaWRcIj5cbiAgPGFwcGxpY2F0aW9uIGFuZHJvaWQ6bmV0d29ya1NlY3VyaXR5Q29uZmlnPVwiQHhtbC9uZXR3b3JrX3NlY3VyaXR5X2NvbmZpZ1wiIC8+XG48L2VkaXQtY29uZmlnPlxuKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/home-page/home-page.page.ts ***!
    \*********************************************/

  /*! exports provided: HomePagePage */

  /***/
  function srcAppHomePageHomePagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePagePage", function () {
      return HomePagePage;
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


    var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/sms/ngx */
    "./node_modules/@ionic-native/sms/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js"); //import { DatabaseService, Contact } from '../services/database.service';


    var HomePagePage = /*#__PURE__*/function () {
      function HomePagePage(sms, callNumber, contacts, toastcontroller, http, device) {
        _classCallCheck(this, HomePagePage);

        this.sms = sms;
        this.callNumber = callNumber;
        this.contacts = contacts;
        this.toastcontroller = toastcontroller;
        this.http = http;
        this.device = device;
        this.arr = []; // Array to store extracted phone numbers from the API calls

        this.myContacts = []; // Array of contacts. Was not used though

        this.uuid = this.device.uuid;
        console.log(this.uuid);
      }
      /*An asynchronous function to get contacts */


      _createClass(HomePagePage, [{
        key: "getData",
        value: function getData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var url, params, headers, response, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    url = 'http://thecode4allinitiative.org/finalExam/getAllPersons.php?uuid=' + this.uuid;
                    params = {};
                    headers = {};
                    _context.next = 6;
                    return this.http.get(url, params, headers);

                  case 6:
                    response = _context.sent;
                    console.log(response.status);
                    console.log(JSON.parse(response.data)); // JSON data returned by server

                    this.items = JSON.parse(response.data);
                    console.log("Data pulled out successfully"); // console.log('heyya. could this be it? ' + this.items[0].phoneNumber)
                    // loop through the JSON arra

                    for (i = 0; i < this.items.length; i++) {
                      this.arr.push(this.items[i].phoneNumber); // extract the phone numbers from the JSON array and copy them into the new array
                    }

                    console.log('here is the array ' + this.arr);
                    /* join all the phone numbers in the array to become one string seperated by a comma, which can be easily read by the
                    messaging app so that the message can be sent to all the contact phonenumbers at once */

                    this.smsNo = this.arr.join(',');
                    console.log('the sms numbers are ' + this.smsNo);
                    return _context.abrupt("return", this.smsNo);

                  case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0.status);
                    console.error(_context.t0.error); // Error message as string

                    console.error(_context.t0.headers);

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 18]]);
          }));
        }
        /*Load contacts from the phones phonebook. Was not quite used*/

      }, {
        key: "loadContacts",
        value: function loadContacts() {
          var _this = this;

          var options = {
            filter: '',
            multiple: true,
            hasPhoneNumber: true
          };
          this.contacts.find(['*'], options).then(function (contacts) {
            _this.myContacts = contacts;
            console.log('Contacts: ', contacts);
          });
        }
        /* the send sms function */

      }, {
        key: "sendSMS",
        value: function sendSMS(contact) {
          if (confirm("You are about to send an sms to NCDC telling them you've caught COVID-19. Proceed?")) {
            //this.sms.send(contact.phoneNumbers[0].value, 'Hello');
            var options = {
              replaceLineBreaks: false,
              android: {
                intent: 'INTENT'
              }
            };
            this.sms.send('+2348099936312', 'Help! I think I\'ve got COVID-19!', options).then(function (data) {
              alert(JSON.stringify(data));
            }, function (err) {
              alert(JSON.stringify(err));
            });
          }
        }
        /* the send sms function */

      }, {
        key: "notifyContacts",
        value: function notifyContacts(contact) {
          //this.sms.send(contact.phoneNumbers[0].value, 'Hello');
          if (confirm("You are about to send an sms to everyone on your contact tracing list telling them you've caught COVID-19. Proceed?")) {
            var options = {
              replaceLineBreaks: false,
              android: {
                intent: 'INTENT'
              }
            };
            this.sms.send(this.smsNo, 'Hello everyone. Please if you are receiving this message it means you\'re on my contact tracing list and I just want you to know that I unfortunately have gotten the COVID-19 virus. Kindly visit any testing centre to know your status since you\ve been in contact with me', options).then(function (data) {
              alert(JSON.stringify(data));
            }, function (err) {
              alert(JSON.stringify(err));
            });
          }
        }
        /* Call NCDC function */

      }, {
        key: "callNCDC",
        value: function callNCDC(contact) {
          if (confirm("You are about to call NCDC for help since you've caught the virus. Proceed?")) {
            this.callNumber.callNumber('+2347080631500', true);
          }
        }
        /* this is for creating a new contact in the phones phonebook. Was not used though */

      }, {
        key: "createContact",
        value: function createContact() {
          var _this2 = this;

          var contact = this.contacts.create();
          contact.name = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["ContactName"](null, 'Afsanat', 'Ineza');
          contact.phoneNumbers = [new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["ContactField"]('mobile', '+2348104976312')];
          contact.save().then(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastcontroller.create({
                        message: 'contacted added successfully'
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (error) {
            return console.error('error saving contact.', error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData(); //load the data once the app loads
        }
      }]);

      return HomePagePage;
    }();

    HomePagePage.ctorParameters = function () {
      return [{
        type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__["SMS"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contact"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
      }];
    };

    HomePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-page.page.scss */
      "./src/app/home-page/home-page.page.scss"))["default"]]
    })], HomePagePage);
    /***/
  }
}]);
//# sourceMappingURL=home-page-home-page-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-contact-view-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-contact/view-contact.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-contact/view-contact.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewContactViewContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\">\n        <ion-icon name=\"apps\" color=\"light\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n\n\t\t<ion-buttons slot=\"end\" class=\"ion-margin-bottom\">\n\t\t\t<ion-button fill=\"clear\" (click)=\"notifyContacts()\">\n        <ion-icon name=\"notifications\" color=\"light\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"ion-text-center ion-margin-top ion-padding\">\n    <p style=\"font-size: small; color: whitesmoke\">If you have added contacts to your contact tracing list, they will appear below. You can also clear them if you've recovered</p>\n  </div>\n    <div class=\"container\">\n      <div class=\"form ion-text-center\">\n        <ion-list *ngFor=\"let item of items\">\n        <ion-item lines=\"none\">\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"3\">\n                  <ion-icon name=\"person-outline\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label>\n                    <h4>{{item['fullName']}}</h4>\n                    <h6>{{item['phoneNumber']}}</h6>\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"2\">\n                  <ion-button color=\"light\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-item>\n      </ion-list>\n         \n      \n      <ion-button expand='block' (click) = \"deleteData()\">Clear Contact</ion-button>\n      \n      </div>\n\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/view-contact/view-contact-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/view-contact/view-contact-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ViewContactPageRoutingModule */

  /***/
  function srcAppViewContactViewContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContactPageRoutingModule", function () {
      return ViewContactPageRoutingModule;
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


    var _view_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-contact.page */
    "./src/app/view-contact/view-contact.page.ts");

    var routes = [{
      path: '',
      component: _view_contact_page__WEBPACK_IMPORTED_MODULE_3__["ViewContactPage"]
    }];

    var ViewContactPageRoutingModule = function ViewContactPageRoutingModule() {
      _classCallCheck(this, ViewContactPageRoutingModule);
    };

    ViewContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-contact/view-contact.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/view-contact/view-contact.module.ts ***!
    \*****************************************************/

  /*! exports provided: ViewContactPageModule */

  /***/
  function srcAppViewContactViewContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContactPageModule", function () {
      return ViewContactPageModule;
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


    var _view_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-contact-routing.module */
    "./src/app/view-contact/view-contact-routing.module.ts");
    /* harmony import */


    var _view_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-contact.page */
    "./src/app/view-contact/view-contact.page.ts");

    var ViewContactPageModule = function ViewContactPageModule() {
      _classCallCheck(this, ViewContactPageModule);
    };

    ViewContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewContactPageRoutingModule"]],
      declarations: [_view_contact_page__WEBPACK_IMPORTED_MODULE_6__["ViewContactPage"]]
    })], ViewContactPageModule);
    /***/
  },

  /***/
  "./src/app/view-contact/view-contact.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/view-contact/view-contact.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewContactViewContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar, ion-header ion-item {\n  background: #362170;\n  --background: #362170;\n  padding: 0 10px;\n}\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-content {\n  --background: #362170;\n}\nion-content h4 {\n  font-weight: bold;\n}\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.container {\n  -webkit-animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 300px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\nion-button {\n  --background: linear-gradient(90deg, rgba(54,33,112,1) 0%, rgba(55,32,116,1) 0%, rgba(57,31,126,1) 100%, rgba(63,26,162,1) 100%);\n  margin-top: 20px;\n}\n.form {\n  padding: 10px;\n}\n.form ion-item {\n  margin-top: 20px;\n  border-bottom: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jb250YWN0L0M6XFx4YW1wcFxcaHRkb2NzXFxJb25pY19Qcm9qZWN0XFxmaW5hbF9VSS9zcmNcXGFwcFxcdmlldy1jb250YWN0XFx2aWV3LWNvbnRhY3QucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWNvbnRhY3Qvdmlldy1jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFNQSxlQUFBO0FDTko7QURVSTtFQUNFLHFCQUFBO0VBRUEsMkdBQUE7QUNUTjtBRGNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDWk47QURlSTtFQUNFLG9CQUFBO0FDYk47QURtQkE7RUFFSSxxQkFBQTtBQ2pCSjtBRGtCSTtFQUNFLGlCQUFBO0FDaEJOO0FEbUJFO0VBQW1DO0lBQXdDLDZCQUFBO0lBQTZCLFVBQUE7RUNaeEc7RURZa0g7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQ1AvSztBQUNGO0FETTRMO0VBQTJCO0lBQXdDLDZCQUFBO0lBQTZCLFVBQUE7RUNBMVI7RURBb1M7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQ0tqVztBQUNGO0FETEU7RUFDRSxpRkFBQTtFQUF5RSx5RUFBQTtFQUN6RSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNRSjtBREhFO0VBRUUsZ0lBQUE7RUFDQSxnQkFBQTtBQ0tKO0FERkU7RUFDRSxhQUFBO0FDS0o7QURKSTtFQUtFLGdCQUFBO0VBQ0EsNkJBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY29udGFjdC92aWV3LWNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblxyXG4gIGlvbi10b29sYmFyLCBpb24taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzYyMTcwO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG5cclxuICAgIC8vLS1iYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLmJvcmRlcmVkIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAvLy0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLDkwLDE0OCwxKSAwJSwgcmdiYSg0NSwxMTIsMjI5LDEpIDM1JSwgcmdiYSg0NSwxMTIsMjI5LDEpIDEwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWF2YXRhciB7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgIGg0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b217MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfX1cclxuICAuY29udGFpbmVye1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tYm90dG9tIC45cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO2FuaW1hdGlvbjpzbGlkZS1pbi1ib3R0b20gLjlzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgIzUyRTVFNyAxMCUsICMxMzBDQjcgMTAwJSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg1NCwzMywxMTIsMSkgMCUsIHJnYmEoNTUsMzIsMTE2LDEpIDAlLCByZ2JhKDU3LDMxLDEyNiwxKSAxMDAlLCByZ2JhKDYzLDI2LDE2MiwxKSAxMDAlKTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3Jte1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLy9ib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAvLyBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjMzYyMTcwO1xuICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgLmJvcmRlcmVkIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0gaDMge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XG59XG5pb24tY29udGVudCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjlzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjlzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg1NCwzMywxMTIsMSkgMCUsIHJnYmEoNTUsMzIsMTE2LDEpIDAlLCByZ2JhKDU3LDMxLDEyNiwxKSAxMDAlLCByZ2JhKDYzLDI2LDE2MiwxKSAxMDAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/view-contact/view-contact.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/view-contact/view-contact.page.ts ***!
    \***************************************************/

  /*! exports provided: ViewContactPage */

  /***/
  function srcAppViewContactViewContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewContactPage", function () {
      return ViewContactPage;
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


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/sms/ngx */
    "./node_modules/@ionic-native/sms/__ivy_ngcc__/ngx/index.js");

    var ViewContactPage = /*#__PURE__*/function () {
      function ViewContactPage(http, uniqueDeviceID, device, sms) {
        _classCallCheck(this, ViewContactPage);

        this.http = http;
        this.uniqueDeviceID = uniqueDeviceID;
        this.device = device;
        this.sms = sms;
        this.arr = [];
        this.uuid = this.device.uuid;
        console.log(this.uuid);
      }

      _createClass(ViewContactPage, [{
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this = this;

          console.log('Begin async operation');
          setTimeout(function () {
            _this.getData();

            console.log('Async operation has ended');
            event.target.complete();
          }, 2000);
        }
        /* A fuction to get data using the Nigerian NCDC COVID-19 API*/

      }, {
        key: "getData",
        value: function getData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var url, params, headers, response, i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    url = 'http://thecode4allinitiative.org/finalExam/getAllPersons.php?uuid=' + this.uuid; //API call

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

                    /*This function loops through the returned JSON data and extracts all the phone numbers, then push them into an array*/

                    for (i = 0; i < this.items.length; i++) {
                      this.arr.push(this.items[i].phoneNumber);
                    }

                    console.log('here is the array ' + this.arr); // printing out to console

                    return _context.abrupt("return", this.arr);

                  case 16:
                    _context.prev = 16;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0.status);
                    console.error(_context.t0.error); // Error message as string

                    console.error(_context.t0.headers);

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 16]]);
          }));
        }
        /*Clear contact tracing list*/

      }, {
        key: "deleteData",
        value: function deleteData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!confirm('Are you sure you want to delete everyone from your contact tracing list? This action cannot be reversed')) {
                      _context2.next = 18;
                      break;
                    }

                    _context2.prev = 1;
                    url = 'https://thecode4allinitiative.org/finalExam/deleteContact.php?uuid=' + this.uuid; //API call

                    params = {};
                    headers = {};
                    _context2.next = 7;
                    return this.http.get(url, params, headers);

                  case 7:
                    response = _context2.sent;
                    console.log(response.status);
                    console.log("Delete successful");
                    alert("Record deleted Successfully. Please refresh or leave the page"); //console.log(JSON.parse(response.data)); // JSON data returned by server
                    //console.log(response.headers);

                    _context2.next = 18;
                    break;

                  case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](1);
                    console.error(_context2.t0.status);
                    console.error(_context2.t0.error); // Error message as string

                    console.error(_context2.t0.headers);

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 13]]);
          }));
        }
        /* the send sms function */

      }, {
        key: "notifyContacts",
        value: function notifyContacts() {
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
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }]);

      return ViewContactPage;
    }();

    ViewContactPage.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_2__["UniqueDeviceID"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }, {
        type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"]
      }];
    };

    ViewContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-contact',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view-contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-contact/view-contact.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view-contact.page.scss */
      "./src/app/view-contact/view-contact.page.scss"))["default"]]
    })], ViewContactPage);
    /***/
  }
}]);
//# sourceMappingURL=view-contact-view-contact-module-es5.js.map
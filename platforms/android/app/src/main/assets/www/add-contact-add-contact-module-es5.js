function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-contact-add-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact/add-contact.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact/add-contact.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddContactAddContactPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\">\n        <ion-icon name=\"apps\" color=\"light\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n\n\t\t<ion-buttons slot=\"end\" class=\"ion-margin-bottom\">\n\t\t\t<ion-button fill=\"clear\" (click)=\"notifyContacts()\">\n        <ion-icon name=\"notifications\" color=\"light\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <img src=\"assets/doctor.svg\" class=\"img1\">\n  </div>\n  <div class=\"container\">\n    <div class=\"form ion-text-center\">\n      <h2> Add Contact Tracing List </h2>\n      <form id=\"add-contact-form\" name=\"add-contact-form\" #addData=\"ngForm\" (ngSubmit)=\"checkInput(addData.value);\">\n          <ion-item lines='none'>\n            <ion-input type=\"text\" name=\"fullName\" placeholder='Name' ngModel clearInput required></ion-input>\n          </ion-item>\n      \n          <ion-item lines='none'>\n            <ion-input type=\"text\" name=\"phoneNumber\" placeholder='Phone Number' ngModel clearInput required></ion-input>\n          </ion-item>\n          <ion-button expand='block' type=\"submit\" name=\"submit\">Add</ion-button>\n      </form>\n    </div>\n  </div>\n\n  </ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/add-contact/add-contact-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddContactPageRoutingModule */

  /***/
  function srcAppAddContactAddContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactPageRoutingModule", function () {
      return AddContactPageRoutingModule;
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


    var _add_contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-contact.page */
    "./src/app/add-contact/add-contact.page.ts");

    var routes = [{
      path: '',
      component: _add_contact_page__WEBPACK_IMPORTED_MODULE_3__["AddContactPage"]
    }];

    var AddContactPageRoutingModule = function AddContactPageRoutingModule() {
      _classCallCheck(this, AddContactPageRoutingModule);
    };

    AddContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-contact/add-contact.module.ts ***!
    \***************************************************/

  /*! exports provided: AddContactPageModule */

  /***/
  function srcAppAddContactAddContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactPageModule", function () {
      return AddContactPageModule;
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


    var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-contact-routing.module */
    "./src/app/add-contact/add-contact-routing.module.ts");
    /* harmony import */


    var _add_contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-contact.page */
    "./src/app/add-contact/add-contact.page.ts");

    var AddContactPageModule = function AddContactPageModule() {
      _classCallCheck(this, AddContactPageModule);
    };

    AddContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddContactPageRoutingModule"]],
      declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_6__["AddContactPage"]]
    })], AddContactPageModule);
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/add-contact/add-contact.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddContactAddContactPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar, ion-header ion-item {\n  background: #362170;\n  --background: #362170;\n  padding: 0 10px;\n}\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-content {\n  --background: #362170;\n}\n@-webkit-keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.container {\n  -webkit-animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 300px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.img1 {\n  margin-top: 100px;\n  height: 180px;\n}\nion-button {\n  --background: linear-gradient(90deg, rgba(54,33,112,1) 0%, rgba(55,32,116,1) 0%, rgba(57,31,126,1) 100%, rgba(63,26,162,1) 100%);\n  margin-top: 20px;\n}\n.form {\n  padding: 10px;\n}\n.form ion-item {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 2px;\n  border-color: grey;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3QvQzpcXHhhbXBwXFxodGRvY3NcXElvbmljX1Byb2plY3RcXGZpbmFsX1VJL3NyY1xcYXBwXFxhZGQtY29udGFjdFxcYWRkLWNvbnRhY3QucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtY29udGFjdC9hZGQtY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBTUEsZUFBQTtBQ05KO0FEVUk7RUFDRSxxQkFBQTtFQUVBLDJHQUFBO0FDVE47QURjSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1pOO0FEZUk7RUFDRSxvQkFBQTtBQ2JOO0FEb0JBO0VBRUcscUJBQUE7QUNsQkg7QURvQkU7RUFBbUM7SUFBd0MsNkJBQUE7SUFBNkIsVUFBQTtFQ2J4RztFRGFrSDtJQUFxQyx3QkFBQTtJQUF3QixVQUFBO0VDUi9LO0FBQ0Y7QURPNEw7RUFBMkI7SUFBd0MsNkJBQUE7SUFBNkIsVUFBQTtFQ0QxUjtFRENvUztJQUFxQyx3QkFBQTtJQUF3QixVQUFBO0VDSWpXO0FBQ0Y7QURKRTtFQUNFLGlGQUFBO0VBQXlFLHlFQUFBO0VBQ3pFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ09KO0FESkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNPSjtBRExFO0VBQ0UsZ0lBQUE7RUFDQSxnQkFBQTtBQ1FKO0FETEU7RUFDRSxhQUFBO0FDUUo7QURQSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNTTiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jb250YWN0L2FkZC1jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cclxuICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MjE3MDtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuXHJcbiAgICAvLy0tYmFja2dyb3VuZDogI2YxZjVmODtcclxuICAgIC8vYmFja2dyb3VuZDogI2YxZjVmODtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLy8tLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Myw5MCwxNDgsMSkgMCUsIHJnYmEoNDUsMTEyLDIyOSwxKSAzNSUsIHJnYmEoNDUsMTEyLDIyOSwxKSAxMDAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM1MkU1RTcgMTAlLCAjMTMwQ0I3IDEwMCUpO1xyXG4gICAtLWJhY2tncm91bmQ6ICMzNjIxNzA7XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b217MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfX1cclxuICAuY29udGFpbmVye1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tYm90dG9tIC45cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO2FuaW1hdGlvbjpzbGlkZS1pbi1ib3R0b20gLjlzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5pbWcxe1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNTQsMzMsMTEyLDEpIDAlLCByZ2JhKDU1LDMyLDExNiwxKSAwJSwgcmdiYSg1NywzMSwxMjYsMSkgMTAwJSwgcmdiYSg2MywyNiwxNjIsMSkgMTAwJSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gIH0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyLCBpb24taGVhZGVyIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzM2MjE3MDtcbiAgLS1iYWNrZ3JvdW5kOiAjMzYyMTcwO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5ib3JkZXJlZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3gtc2hhZG93OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNDMsOTAsMTQ4LDEpIDAlLCByZ2JhKDQ1LDExMiwyMjksMSkgMzUlLCByZ2JhKDQ1LDExMiwyMjksMSkgMTAwJSk7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWhlYWRlciBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzYyMTcwO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b20ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjlzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjlzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5pbWcxIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg1NCwzMywxMTIsMSkgMCUsIHJnYmEoNTUsMzIsMTE2LDEpIDAlLCByZ2JhKDU3LDMxLDEyNiwxKSAxMDAlLCByZ2JhKDYzLDI2LDE2MiwxKSAxMDAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/add-contact/add-contact.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/add-contact/add-contact.page.ts ***!
    \*************************************************/

  /*! exports provided: AddContactPage */

  /***/
  function srcAppAddContactAddContactPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactPage", function () {
      return AddContactPage;
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

    var AddContactPage = /*#__PURE__*/function () {
      function AddContactPage(http, uniqueDeviceID, device, sms) {
        _classCallCheck(this, AddContactPage);

        this.http = http;
        this.uniqueDeviceID = uniqueDeviceID;
        this.device = device;
        this.sms = sms;
        this.uuid = this.device.uuid;
        console.log(this.uuid);
        /*this.uniqueDeviceID.get()
        .then((uuid: any) => console.log(uuid))
        .catch((error: any) => console.log(error));
        */
      }

      _createClass(AddContactPage, [{
        key: "checkInput",
        value: function checkInput(person) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (person.fullName == null || person.fullName == "") {
                      alert("please name is required");
                    } else if (person.phoneNumber == null || person.phoneNumber == "") {
                      alert("please phone number is required");
                    } else {
                      this.sendData(person);
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sendData",
        value: function sendData(person) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var fullName, phoneNumber, url, params, headers, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //this.uuid = this.device.uuid;
                    fullName = person.fullName;
                    phoneNumber = person.phoneNumber; //http://thecode4allinitiative.org/finalExam/addPerson.php?uuid=1234&fullName=person.fullName&20mpama&phoneNumber=+2345896321456

                    _context2.prev = 2;
                    url = "http://thecode4allinitiative.org/finalExam/addPerson.php";
                    params = {
                      uuid: this.uuid,
                      fullName: fullName,
                      phoneNumber: phoneNumber
                    };
                    headers = {};
                    console.log("checking the url " + url);
                    _context2.next = 9;
                    return this.http.post(url, params, headers);

                  case 9:
                    response = _context2.sent;
                    console.log(response.status);
                    console.log("success. UUID is " + this.device.model);
                    alert("Your Contact Tracing Record Has Been Added Successfully!"); //console.log(JSON.parse(response.data)); // JSON data returned by server
                    //console.log(response.headers);

                    _context2.next = 19;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](2);
                    console.error(_context2.t0.status);
                    console.error(_context2.t0.error); // Error message as string
                    //console.error(error.headers);

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[2, 15]]);
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
        /*
          contactData = {};
          contacts: Contact[] = [];
        
          addContactDetails() {
            this.db.addContactData(this.contactData['fullName'], this.contactData['phoneNumber']).then(_ => {
              this.contactData = {};
              console.log('success');
            });
          }
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sendData(this.person);
        }
      }]);

      return AddContactPage;
    }();

    AddContactPage.ctorParameters = function () {
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

    AddContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-contact',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-contact.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-contact/add-contact.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-contact.page.scss */
      "./src/app/add-contact/add-contact.page.scss"))["default"]]
    })], AddContactPage);
    /***/
  }
}]);
//# sourceMappingURL=add-contact-add-contact-module-es5.js.map
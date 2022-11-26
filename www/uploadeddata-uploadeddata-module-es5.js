function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploadeddata-uploadeddata-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/uploadeddata/uploadeddata.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scan/uploadeddata/uploadeddata.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScanUploadeddataUploadeddataPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>uploadeddata</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content > \n  <ion-list >\n    <ion-item *ngFor=\"let i of users\">\n    <ion-avatar slot=\"start\" style=\"width: 20%;\">\n      \n      <p>{{ i.receipt }}<p>\n    </ion-avatar>\n    <ion-label style=\"font-size: medium;\">\n      \n        <ion-row >\n          <p>name : {{i.name}} </p>\n        </ion-row>\n        <ion-row >\n          <p>college : {{i.college}}</p>\n        </ion-row>\n        <ion-row>\n          <p>contact :  {{i.phone}} </p> \n        </ion-row>\n        <ion-row>\n          <p> score: {{ i.r1marks}}</p>\n        \n      </ion-row>\n      \n    </ion-label>\n  </ion-item>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/scan/uploadeddata/uploadeddata-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/scan/uploadeddata/uploadeddata-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: UploadeddataPageRoutingModule */

  /***/
  function srcAppScanUploadeddataUploadeddataRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadeddataPageRoutingModule", function () {
      return UploadeddataPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _uploadeddata_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./uploadeddata.page */
    "./src/app/scan/uploadeddata/uploadeddata.page.ts");

    var routes = [{
      path: '',
      component: _uploadeddata_page__WEBPACK_IMPORTED_MODULE_3__["UploadeddataPage"]
    }];

    var UploadeddataPageRoutingModule = function UploadeddataPageRoutingModule() {
      _classCallCheck(this, UploadeddataPageRoutingModule);
    };

    UploadeddataPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UploadeddataPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/scan/uploadeddata/uploadeddata.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/scan/uploadeddata/uploadeddata.module.ts ***!
    \**********************************************************/

  /*! exports provided: UploadeddataPageModule */

  /***/
  function srcAppScanUploadeddataUploadeddataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadeddataPageModule", function () {
      return UploadeddataPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _uploadeddata_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./uploadeddata-routing.module */
    "./src/app/scan/uploadeddata/uploadeddata-routing.module.ts");
    /* harmony import */


    var _uploadeddata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./uploadeddata.page */
    "./src/app/scan/uploadeddata/uploadeddata.page.ts");

    var UploadeddataPageModule = function UploadeddataPageModule() {
      _classCallCheck(this, UploadeddataPageModule);
    };

    UploadeddataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _uploadeddata_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadeddataPageRoutingModule"]],
      declarations: [_uploadeddata_page__WEBPACK_IMPORTED_MODULE_6__["UploadeddataPage"]]
    })], UploadeddataPageModule);
    /***/
  },

  /***/
  "./src/app/scan/uploadeddata/uploadeddata.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/scan/uploadeddata/uploadeddata.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScanUploadeddataUploadeddataPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW4vdXBsb2FkZWRkYXRhL3VwbG9hZGVkZGF0YS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/scan/uploadeddata/uploadeddata.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/scan/uploadeddata/uploadeddata.page.ts ***!
    \********************************************************/

  /*! exports provided: UploadeddataPage */

  /***/
  function srcAppScanUploadeddataUploadeddataPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadeddataPage", function () {
      return UploadeddataPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var UploadeddataPage =
    /*#__PURE__*/
    function () {
      function UploadeddataPage(fs, route) {
        _classCallCheck(this, UploadeddataPage);

        this.fs = fs;
        this.route = route;
        this.users = [];
      }

      _createClass(UploadeddataPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.selectedevent = this.route.snapshot.paramMap.get('db');
          console.log("From NgOnInit " + this.selectedevent);
          this.fs.getUsers(this.selectedevent).valueChanges().subscribe(function (da) {
            _this.users = da;

            _this.users.sort(function (a, b) {
              return a.r1marks < b.r1marks ? 1 : -1;
            });
          });
        }
      }]);

      return UploadeddataPage;
    }();

    UploadeddataPage.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    UploadeddataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-uploadeddata',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./uploadeddata.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/uploadeddata/uploadeddata.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./uploadeddata.page.scss */
      "./src/app/scan/uploadeddata/uploadeddata.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], UploadeddataPage);
    /***/
  }
}]);
//# sourceMappingURL=uploadeddata-uploadeddata-module-es5.js.map
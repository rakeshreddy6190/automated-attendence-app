function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selected-event-selected-event-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/selected-event/selected-event.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selected-event/selected-event.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelectedEventSelectedEventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>selectedEvent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 align=center> {{ selectedEvent.eventname }}</h1>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4> Venue : </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <h4>Room no: {{selectedEvent.venue}} </h4>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4>Description : </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <p *ngFor=\"let f of selectedEvent.description\">{{f}} </p>\n       \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4>Contacts : </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <p *ngFor=\"let f of selectedEvent.contactDetails\">{{f}} </p>\n       \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4>Prize : </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <p *ngFor=\"let f of selectedEvent.prize; let i=index\"> {{i+1 }}st {{\" \"}}Prize: {{f}} {{\" /-\"}} </p>\n       \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\"><h4> status : </h4></ion-col>\n    <ion-col size=\"7\">\n       <h5 style=\"float:left\">{{ dbUsers.length }} </h5> <h5 style=\"float:right\">  {{ dbUsers1.length }}  </h5>\n             <ion-progress-bar [value]=\"dbUsers.length/dbUsers1.length\" type=\"determinate\" style=\"height:10px; border-radius:2rem;\"></ion-progress-bar>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n  </ion-row>\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/selected-event/selected-event-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/selected-event/selected-event-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SelectedEventPageRoutingModule */

  /***/
  function srcAppSelectedEventSelectedEventRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedEventPageRoutingModule", function () {
      return SelectedEventPageRoutingModule;
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


    var _selected_event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selected-event.page */
    "./src/app/selected-event/selected-event.page.ts");

    var routes = [{
      path: '',
      component: _selected_event_page__WEBPACK_IMPORTED_MODULE_3__["SelectedEventPage"]
    }];

    var SelectedEventPageRoutingModule = function SelectedEventPageRoutingModule() {
      _classCallCheck(this, SelectedEventPageRoutingModule);
    };

    SelectedEventPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectedEventPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/selected-event/selected-event.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/selected-event/selected-event.module.ts ***!
    \*********************************************************/

  /*! exports provided: SelectedEventPageModule */

  /***/
  function srcAppSelectedEventSelectedEventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedEventPageModule", function () {
      return SelectedEventPageModule;
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


    var _selected_event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./selected-event-routing.module */
    "./src/app/selected-event/selected-event-routing.module.ts");
    /* harmony import */


    var _selected_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./selected-event.page */
    "./src/app/selected-event/selected-event.page.ts");

    var SelectedEventPageModule = function SelectedEventPageModule() {
      _classCallCheck(this, SelectedEventPageModule);
    };

    SelectedEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selected_event_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectedEventPageRoutingModule"]],
      declarations: [_selected_event_page__WEBPACK_IMPORTED_MODULE_6__["SelectedEventPage"]]
    })], SelectedEventPageModule);
    /***/
  },

  /***/
  "./src/app/selected-event/selected-event.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/selected-event/selected-event.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelectedEventSelectedEventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGVkLWV2ZW50L3NlbGVjdGVkLWV2ZW50LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/selected-event/selected-event.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/selected-event/selected-event.page.ts ***!
    \*******************************************************/

  /*! exports provided: SelectedEventPage */

  /***/
  function srcAppSelectedEventSelectedEventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedEventPage", function () {
      return SelectedEventPage;
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


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var SelectedEventPage =
    /*#__PURE__*/
    function () {
      function SelectedEventPage(route, fs) {
        _classCallCheck(this, SelectedEventPage);

        this.route = route;
        this.fs = fs;
        this.selectedItem = {};
        this.dbUsers = [];
        this.index = [1, 2, 3];
        this.selectedEvent = {};
        this.dbUsers1 = [];
      }

      _createClass(SelectedEventPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.selectedItem = JSON.parse(this.route.snapshot.paramMap.get('id'));
          this.fs.getUser('events', this.selectedItem.eventname).valueChanges().subscribe(function (da) {
            _this.selectedEvent = da;
          });
          this.fs.getUsers(this.selectedItem.eventname).valueChanges().subscribe(function (da) {
            _this.dbUsers = da;
          });
          console.log(this.dbUsers);
          this.fs.getUsers('participants').valueChanges().subscribe(function (da) {
            _this.dbUsers1 = da;
          });
        }
      }]);

      return SelectedEventPage;
    }();

    SelectedEventPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }];
    };

    SelectedEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selected-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selected-event.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/selected-event/selected-event.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selected-event.page.scss */
      "./src/app/selected-event/selected-event.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])], SelectedEventPage);
    /***/
  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
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


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);

    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(db) {
        _classCallCheck(this, FirebaseService);

        this.db = db;
      }

      _createClass(FirebaseService, [{
        key: "getUsers",
        value: function getUsers(ittop) {
          return this.db.collection("".concat(ittop));
        }
      }, {
        key: "getUser",
        value: function getUser(ittop, id) {
          return this.db.doc("".concat(ittop, "/").concat(id));
        }
      }, {
        key: "updateUser",
        value: function updateUser(ittop, baka) {
          return this.db.doc("".concat(ittop, "/").concat(baka.receipt)).set(baka);
        }
      }, {
        key: "addUser",
        value: function addUser(ittop, baka) {
          var _this2 = this;

          this.getUser(ittop, baka.receipt).valueChanges().subscribe(function (da) {
            if (da) {} else {
              return _this2.db.doc("".concat(ittop, "/").concat(baka.receipt)).set(baka);
            }
          });
        }
      }, {
        key: "removeUser",
        value: function removeUser(ittop, id) {
          return this.db.doc("".concat(ittop, "/").concat(id)).delete();
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], FirebaseService);
    /***/
  }
}]);
//# sourceMappingURL=selected-event-selected-event-module-es5.js.map
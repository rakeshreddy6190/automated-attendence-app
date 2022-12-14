function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngIf=\"!bo\" onic cordo>\n    <ion-label position=\"floating\" >Security code</ion-label>\n    <ion-input type=\"password\" #pass></ion-input>\n    <ion-button (click)=\"authenticate(pass)\"> Authenticate </ion-button>\n    \n  </ion-item>\n  \n  \n  \n  \n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"createCode()\" *ngIf=\"bo\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\"> Receipt no.   </ion-label>\n        <ion-input formControlName=\"receipt\" inputmode=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"> Name   </ion-label>\n        <ion-input formControlName=\"name\" inputmode=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"> college   </ion-label>\n        <ion-input formControlName=\"college\" inputmode=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"> phone   </ion-label>\n        <ion-input formControlName=\"phone\" inputmode=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">  roll no   </ion-label>\n        <ion-input formControlName=\"rollno\" inputmode=\"text\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"> email   </ion-label>\n        <ion-input formControlName=\"email\" inputmode=\"text\" required></ion-input>\n      </ion-item>\n      <ion-button padding  expand=\"block\" type=submit size=\"small\">Generate code<ion-icon slot=\"end\" name=\"create\"></ion-icon></ion-button>\n      <ion-button padding  expand=\"block\" size=\"small\" (click)=\"unauth()\">logout</ion-button>\n    </ion-list>\n   \n  </form>\n\n  {{status}}\n\n\n  <ion-list inset=\"true\" *ngIf=\"bo\">\n    <ion-text> <h4> Registered Users : {{ dbUsers.length }} </h4> </ion-text>\n    <ion-item *ngFor=\"let i of dbUsers\" >\n    <ion-avatar slot=\"start\" style=\"width: 20%;\">\n      \n      <p>{{ i.receipt }}<p>\n    </ion-avatar>\n    <ion-label style=\"font-size: medium;\">\n      \n        <ion-row >\n          <p> name : {{i.name}}</p>\n        </ion-row>\n        <ion-row >\n          <p>college : {{i.college}} </p>\n       \n      </ion-row>\n       \n        <ion-row>\n          <p>rollno :  {{i.rollno}} </p> \n    </ion-row>\n    </ion-label>\n  </ion-item>\n  </ion-list>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var RegisterPage =
    /*#__PURE__*/
    function () {
      function RegisterPage(fb, router, ss, fs) {
        var _this = this;

        _classCallCheck(this, RegisterPage);

        this.fb = fb;
        this.router = router;
        this.ss = ss;
        this.fs = fs;
        this.dbUsers = [];
        this.user = [];
        this.status = "";
        this.data = {};
        this.usersList = [];
        this.bo1 = false;
        this.msg = "";
        setInterval(function (data) {
          _this.ss.getAuth().then(function (x) {
            _this.bo = x;
          }).catch(function (err) {
            return _this.bo = false;
          });
        }, 1000);
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.registrationForm = this.fb.group({
            eventname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            receipt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            college: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rollno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.ss.getAuth().then(function (x) {
            _this2.bo = x;
          }).catch(function (err) {
            return _this2.bo = false;
          });
          this.fs.getUsers('participants').valueChanges().subscribe(function (da) {
            _this2.dbUsers = da;
          });
          console.log(this.dbUsers);
        }
      }, {
        key: "createCode",
        value: function createCode() {
          var _this3 = this;

          var s1 = "";
          this.user.push(this.registrationForm.value);
          var temp = this.registrationForm.value;
          s1 = this.registrationForm.get('receipt').value.replace(/\s/g, "") + " " + this.registrationForm.get('name').value.replace(/\s/g, "") + " " + this.registrationForm.get('college').value.replace(/\s/g, "") + " " + this.registrationForm.get('phone').value.replace(/\s/g, "") + " " + this.registrationForm.get('rollno').value.replace(/\s/g, "") + " " + this.registrationForm.get('email').value.replace(/\s/g, "");
          this.registrationForm.reset();
          /* var a=this.afd.collection('users',ref=>ref.where('receipt','==',temp.receipt)).valueChanges().subscribe((da:User[])=>{
               if(da.length>=1){
                 this.status="Already registered"
               }
               else{
                 this.status="";
                 this.router.navigate(['tabs/register/',s1]);
                 a.unsubscribe();
               }
           })*/

          var a = this.fs.getUser('participants', temp.receipt).valueChanges().subscribe(function (da) {
            if (da) {
              _this3.status = "Already registered";
            } else {
              _this3.router.navigate(['tabs/register/', s1]);

              _this3.status = "";
              a.unsubscribe();
            }
          });
        }
      }, {
        key: "authenticate",
        value: function authenticate(a) {
          var _this4 = this;

          var ab = this.fs.getUser("logins", "authenticate").valueChanges().subscribe(function (baka) {
            if (a.value == baka.password) {
              _this4.ss.setAuth(true);

              ab.unsubscribe();
              _this4.msg = "";
            } else {
              _this4.msg = "login failed";
            }
          });
        }
      }, {
        key: "unauth",
        value: function unauth() {
          this.ss.setAuth(false);
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])], RegisterPage);
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
          var _this5 = this;

          this.getUser(ittop, baka.receipt).valueChanges().subscribe(function (da) {
            if (da) {} else {
              return _this5.db.doc("".concat(ittop, "/").concat(baka.receipt)).set(baka);
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
//# sourceMappingURL=register-register-module-es5.js.map
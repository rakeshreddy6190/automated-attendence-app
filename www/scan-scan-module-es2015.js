(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-scan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/scan.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scan/scan.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>{{event}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"!bo\">\n    <ion-item>\n      <ion-label position=\"floating\" size=small>EVENTS</ion-label>\n      <ion-select value=\"Event\" [(ngModel)]=\"event\" >\n        <ion-select-option [value]=\"e.eventname\" *ngFor=\"let e of events\">{{e.eventname}}</ion-select-option>\n        \n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" size=small>password</ion-label>\n      <ion-input type=\"password\" #password></ion-input>\n    </ion-item>\n    \n      <ion-button (click)=\"SelectedEvent(password.value,ref)\" expand=\"block\">login</ion-button>\n{{msg}}\n\n    \n  </ion-list>\n  <div *ngIf=\"bo\">\n  <ion-button expand=\"block\" type=\"submit\" (click)=\"Scancode()\">Scancode<ion-icon name=\"scan-outline\" slot=\"end\"></ion-icon></ion-button>\n  <ion-card *ngIf=\"!data.receipt==''\"> \n    <ion-card-content>\n        {{status+\" \"}}<br>\n        receipt : {{data.receipt}} <br>\n        name : {{data.name}}<br>\n        college : {{data.college}}  <br>       \n        contact : {{data.phone}} <br>\n        rollno : {{data.rollno}} <br>\n        email : {{data.email}} \n        \n        \n    </ion-card-content>\n  </ion-card>\n  <ion-button expand=\"block\"  (click)=\"UpdateMarks()\" > Update <ion-icon name=\"arrow-up-circle-outline\" slot=\"end\"></ion-icon></ion-button> \n\n  <ion-button expand=\"block\"  (click)=\"UploadedData()\" >UploadedData</ion-button> \n  \n  <ion-button expand=\"block\"  (click)=\"logout()\" >logout<ion-icon name=\"log-out-outline\" slot=\"end\"></ion-icon></ion-button> \n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/scan/scan-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/scan/scan-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ScanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageRoutingModule", function() { return ScanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan.page */ "./src/app/scan/scan.page.ts");




const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_3__["ScanPage"]
    },
    {
        path: 'uploadeddata/:db',
        loadChildren: () => __webpack_require__.e(/*! import() | uploadeddata-uploadeddata-module */ "uploadeddata-uploadeddata-module").then(__webpack_require__.bind(null, /*! ./uploadeddata/uploadeddata.module */ "./src/app/scan/uploadeddata/uploadeddata.module.ts")).then(m => m.UploadeddataPageModule)
    },
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ "./src/app/scan/scan.module.ts":
/*!*************************************!*\
  !*** ./src/app/scan/scan.module.ts ***!
  \*************************************/
/*! exports provided: ScanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan-routing.module */ "./src/app/scan/scan-routing.module.ts");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan.page */ "./src/app/scan/scan.page.ts");







let ScanPageModule = class ScanPageModule {
};
ScanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanPageRoutingModule"]
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })
], ScanPageModule);



/***/ }),

/***/ "./src/app/scan/scan.page.scss":
/*!*************************************!*\
  !*** ./src/app/scan/scan.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW4vc2Nhbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/scan/scan.page.ts":
/*!***********************************!*\
  !*** ./src/app/scan/scan.page.ts ***!
  \***********************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");







let ScanPage = class ScanPage {
    constructor(qr, ss, fs, route, router, storage) {
        this.qr = qr;
        this.ss = ss;
        this.fs = fs;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.event = "";
        this.msg = "";
        this.events = [];
        this.selectedEvent = null;
        this.data = {};
        this.dataArray = [];
        this.filtered = [];
        this.status = "";
        setInterval(data => {
            this.ss.getEvent().then(x => {
                this.bo = x;
            }).catch((err) => this.bo = false);
        }, 1000);
    }
    ngOnInit() {
        this.ss.getEvent().then(x => {
            this.bo = false;
            this.ss.setEvent(false);
        }).catch((err) => this.bo = true);
        this.fs.getUsers('events').valueChanges().subscribe((da) => {
            this.events = da;
        });
    }
    Scancode() {
        this.qr.scan().then((data) => {
            let s = data.text.split(" ");
            this.data.eventname = this.selectedEvent;
            this.data.r1marks = 0;
            /*  this.data.receipt="12";
                this.data.name="fasdsfd";
                 this.data.college="asfdsa";
                 this.data.phone="fasddsa";
                this.data.rollno="fsdadags";
               this.data.email="afsds";   */
            this.data.receipt = s[0];
            this.data.name = s[1];
            this.data.college = s[2];
            this.data.phone = s[3];
            this.data.rollno = s[4];
            this.data.email = s[5];
            var b = this.fs.getUser('participants', this.data.receipt).valueChanges().subscribe((da) => {
                if (da) {
                    var a = this.fs.getUser(this.data.eventname, this.data.receipt).valueChanges().subscribe((ittop) => {
                        if (ittop) {
                            this.status = "Participitant already participated in " + this.event;
                        }
                        else {
                            this.ss.addItem(da, this.data.eventname);
                            this.status = "Successfully registered for " + this.event;
                            a.unsubscribe();
                            b.unsubscribe();
                        }
                    });
                }
                else {
                    console.log("Not a participitant!!");
                }
            });
        });
    }
    UpdateMarks() {
        this.data = {};
        this.router.navigate(['tabs/organizer/studentlist/', this.event]);
    }
    UploadedData() {
        this.router.navigate(['tabs/organizer/uploadeddata/', this.event]);
    }
    logout() {
        this.ss.setEvent(false);
    }
    SelectedEvent(x, e) {
        var a = this.fs.getUser('logins', 'eventslogin').valueChanges().subscribe((da) => {
            if (x == da.password) {
                console.log(x);
                this.selectedEvent = this.event;
                this.ss.setEvent(true);
                a.unsubscribe();
            }
            else {
                this.msg = "invalid";
                a.unsubscribe();
            }
        });
    }
};
ScanPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
ScanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/scan.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scan.page.scss */ "./src/app/scan/scan.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], ScanPage);



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let FirebaseService = class FirebaseService {
    constructor(db) {
        this.db = db;
    }
    getUsers(ittop) {
        return this.db.collection(`${ittop}`);
    }
    getUser(ittop, id) {
        return this.db.doc(`${ittop}/${id}`);
    }
    updateUser(ittop, baka) {
        return this.db.doc(`${ittop}/${baka.receipt}`).set(baka);
    }
    addUser(ittop, baka) {
        this.getUser(ittop, baka.receipt).valueChanges().subscribe((da) => {
            if (da) {
            }
            else {
                return this.db.doc(`${ittop}/${baka.receipt}`).set(baka);
            }
        });
    }
    removeUser(ittop, id) {
        return this.db.doc(`${ittop}/${id}`).delete();
    }
};
FirebaseService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], FirebaseService);



/***/ })

}]);
//# sourceMappingURL=scan-scan-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ui-kits-ui-kits-module"],{

/***/ "./src/app/views/ui-kits/accordions/accordions.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1\"></i> UI Kits</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Accordion</li>\n    <span class=\"spacer\"></span>\n  </ol>\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n\n<ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"Simple\">\n    <ng-template ngbPanelContent>\n      <div [@animate]=\"{value:'*',params:{y:'20px',opacity:'0',delay:'0ms', duration: '400ms'}}\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n        officia\n        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor,\n        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n        helvetica,\n        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n        Leggings\n        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n        accusamus\n        labore sustainable VHS.\n      </div>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div [@animate]=\"{value:'*',params:{y:'20px',opacity:'0',delay:'0ms', duration: '400ms'}}\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n        officia\n        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor,\n        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n        helvetica,\n        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n        Leggings\n        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n        accusamus\n        labore sustainable VHS.\n      </div>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Simple\">\n    <ng-template ngbPanelContent>\n      <div [@animate]=\"{value:'*',params:{y:'20px',opacity:'0',delay:'0ms', duration: '400ms'}}\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n        officia\n        aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor,\n        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\n        helvetica,\n        craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n        Leggings\n        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n        accusamus\n        labore sustainable VHS.\n      </div>\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>"

/***/ }),

/***/ "./src/app/views/ui-kits/accordions/accordions.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/accordions/accordions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.ts ***!
  \******************************************************************/
/*! exports provided: AccordionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionsComponent", function() { return AccordionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionsComponent = /** @class */ (function () {
    function AccordionsComponent() {
    }
    AccordionsComponent.prototype.ngOnInit = function () {
    };
    AccordionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordions',
            template: __webpack_require__(/*! ./accordions.component.html */ "./src/app/views/ui-kits/accordions/accordions.component.html"),
            styles: [__webpack_require__(/*! ./accordions.component.scss */ "./src/app/views/ui-kits/accordions/accordions.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionsComponent);
    return AccordionsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/alerts/alerts.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> UI Kits</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Alerts</li>\n    <span class=\"spacer\"></span>\n  </ol>\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-12 mb-2\" *ngIf=\"mainAlert\">\n    <ngb-alert class=\"alert-card text-center\" (close)=\"mainAlert = false\">\n      <span class=\"font-weight-500\">Blumingo</span> makes developent life easier! <button class=\"btn btn-warning ml-3\">Buy\n        Now</button>\n    </ngb-alert>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body text-center\">\n        <div class=\"card-title\">Ngx Toastr</div>\n        <button class=\"btn btn-outline-success m-1\" (click)=\"success()\">Launch Success</button>\n        <button class=\"btn btn-outline-warning m-1\" (click)=\"warning()\">Launch Warning</button>\n        <button class=\"btn btn-outline-info m-1\" (click)=\"info()\">Launch Info</button>\n        <button class=\"btn btn-outline-danger m-1\" (click)=\"error()\">Launch Error</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body text-center\">\n        <div class=\"card-title\">Toastr with Progress Bar</div>\n        <button class=\"btn btn-outline-success m-1\" (click)=\"successBar()\">Launch Success</button>\n        <button class=\"btn btn-outline-warning m-1\" (click)=\"warningBar()\">Launch Warning</button>\n        <button class=\"btn btn-outline-info m-1\" (click)=\"infoBar()\">Launch Info</button>\n        <button class=\"btn btn-outline-danger m-1\" (click)=\"errorBar()\">Launch Error</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Default Bootstrap Alerts</div>\n\n        <ngb-alert [type]=\"alert.type\" *ngFor=\"let alert of alerts\" (close)=\"closeAlert(alert)\">\n          <strong class=\"text-capitalize\">{{alert.type}}!</strong> {{alert.message}}\n        </ngb-alert>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Bordered Bootstrap Alerts</div>\n\n        <ngb-alert class=\"alert-bg-white\" [type]=\"alert.type\" *ngFor=\"let alert of alerts\" (close)=\"closeAlert(alert)\">\n          <strong class=\"text-capitalize\">{{alert.type}}!</strong> {{alert.message}}\n        </ngb-alert>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Bootstrap Alerts Styled</div>\n\n        <ngb-alert class=\"alert-card mb-4\" [type]=\"alert.type\" *ngFor=\"let alert of alertCards\" (close)=\"closeAlertCard(alert)\">\n          <strong class=\"text-capitalize\">{{alert.type}}!</strong> {{alert.message}}\n        </ngb-alert>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Bootstrap Alerts Styled 2</div>\n\n        <ngb-alert class=\"alert-card alert-bg-white mb-4\" [type]=\"alert.type\" *ngFor=\"let alert of alertCards\" (close)=\"closeAlertCard(alert)\">\n          <strong class=\"text-capitalize\">{{alert.type}}!</strong> {{alert.message}}\n        </ngb-alert>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/alerts/alerts.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/alerts/alerts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(toastr) {
        this.toastr = toastr;
        this.mainAlert = true;
    }
    AlertsComponent.prototype.ngOnInit = function () {
        this.alerts = ALERTS.slice();
        this.alertCards = ALERTS.slice();
    };
    AlertsComponent.prototype.closeAlert = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertsComponent.prototype.closeAlertCard = function (alert) {
        this.alertCards.splice(this.alertCards.indexOf(alert), 1);
    };
    AlertsComponent.prototype.success = function () {
        console.log('Hello');
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.warning = function () {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.info = function () {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.error = function () {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.successBar = function () {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.warningBar = function () {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.infoBar = function () {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.errorBar = function () {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/views/ui-kits/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.scss */ "./src/app/views/ui-kits/alerts/alerts.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/badges/badges.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1\"></i> UI Kits</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Badges</li>\n    <span class=\"spacer\"></span>\n  </ol>\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default badge layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Basic badge layout options</p>\n\n<div class=\"row\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Badge outline</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-outline-primary p-2 m-1\">Primary</span>\n        <span class=\"badge badge-outline-secondary p-2 m-1\">Secondary</span>\n        <span class=\"badge badge-outline-success p-2 m-1\">Success</span>\n        <span class=\"badge badge-outline-danger p-2 m-1\">Danger</span>\n        <span class=\"badge badge-outline-warning p-2 m-1\">Warning</span>\n        <span class=\"badge badge-outline-info p-2 m-1\">Info</span>\n        <span class=\"badge badge-outline-dark p-2 m-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Badge outline rounded</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-round badge-outline-primary p-2 m-1\">Primary</span>\n        <span class=\"badge badge-round badge-outline-secondary p-2 m-1\">Secondary</span>\n        <span class=\"badge badge-round badge-outline-success p-2 m-1\">Success</span>\n        <span class=\"badge badge-round badge-outline-danger p-2 m-1\">Danger</span>\n        <span class=\"badge badge-round badge-outline-warning p-2 m-1\">Warning</span>\n        <span class=\"badge badge-round badge-outline-info p-2 m-1\">Info</span>\n        <span class=\"badge badge-round badge-outline-dark p-2 m-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Badge outline with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-outline-primary p-2 m-1\"><i class=\"icon-announcement mr-1\"></i>Primary</span>\n        <span class=\"badge badge-outline-secondary p-2 m-1\"><i class=\"icon-directions mr-1\"></i>Secondary</span>\n        <span class=\"badge badge-outline-success p-2 m-1\"><i class=\"icon-announcement mr-1\"></i>Success</span>\n        <span class=\"badge badge-outline-danger p-2 m-1\"><i class=\"icon-block mr-1\"></i>Danger</span>\n        <span class=\"badge badge-outline-warning p-2 m-1\"><i class=\"icon-exclamation-solid mr-1\"></i>Warning</span>\n        <span class=\"badge badge-outline-info p-2 m-1\"><i class=\"icon-announcement mr-1\"></i>Info</span>\n        <span class=\"badge badge-outline-dark p-2 m-1\"><i class=\"icon-explore mr-1\"></i>Dark</span>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Regular Filled badge layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Regular Filled badge layout options</p>\n\n<div class=\"row\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Regular Badges</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-primary m-1\">Primary</span>\n        <span class=\"badge badge-secondary m-1\">Secondary</span>\n        <span class=\"badge badge-success m-1\">Success</span>\n        <span class=\"badge badge-danger m-1\">Danger</span>\n        <span class=\"badge badge-warning m-1\">Warning</span>\n        <span class=\"badge badge-info m-1\">Info</span>\n        <span class=\"badge badge-light m-1\">Light</span>\n        <span class=\"badge badge-dark m-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n      <div class=\"card mb-4\">\n        <div class=\"card-body text-center\">\n          <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Regular Badges Round</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n          <span class=\"badge badge-round badge-primary m-1\">Primary</span>\n          <span class=\"badge badge-round badge-secondary m-1\">Secondary</span>\n          <span class=\"badge badge-round badge-success m-1\">Success</span>\n          <span class=\"badge badge-round badge-danger m-1\">Danger</span>\n          <span class=\"badge badge-round badge-warning m-1\">Warning</span>\n          <span class=\"badge badge-round badge-info m-1\">Info</span>\n          <span class=\"badge badge-round badge-light m-1\">Light</span>\n          <span class=\"badge badge-round badge-dark m-1\">Dark</span>\n        </div>\n      </div>\n    </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Regular Badges with Icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-primary m-1\"><i class=\"icon-announcement mr-1\"></i>Primary</span>\n        <span class=\"badge badge-secondary m-1\"><i class=\"icon-directions mr-1\"></i>Secondary</span>\n        <span class=\"badge badge-danger m-1\"><i class=\"icon-block mr-1\"></i>Danger</span>\n        <span class=\"badge badge-warning m-1\"><i class=\"icon-exclamation-solid mr-1\"></i>Warning</span>\n        <span class=\"badge badge-info m-1\"><i class=\"icon-announcement mr-1\"></i>Info</span>\n        <span class=\"badge badge-light m-1\"><i class=\"icon-announcement mr-1\"></i>Light</span>\n        <span class=\"badge badge-dark m-1\"><i class=\"icon-explore mr-1\"></i>Dark</span>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Other badge layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Other badge layout options</p>\n\n<div class=\"row\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Badge Pill</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-pill badge-primary m-1\">Primary</span>\n        <span class=\"badge badge-pill badge-secondary m-1\">Secondary</span>\n        <span class=\"badge badge-pill badge-success m-1\">Success</span>\n        <span class=\"badge badge-pill badge-danger m-1\">Danger</span>\n        <span class=\"badge badge-pill badge-warning m-1\">Warning</span>\n        <span class=\"badge badge-pill badge-info m-1\">Info</span>\n        <span class=\"badge badge-pill badge-light m-1\">Light</span>\n        <span class=\"badge badge-pill badge-dark m-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Badge Pill with Padding</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <span class=\"badge badge-padded-pill badge-primary p-2 m-1\">Primary</span>\n        <span class=\"badge badge-padded-pill badge-secondary p-2 m-1\">Secondary</span>\n        <span class=\"badge badge-padded-pill badge-success p-2 m-1\">Success</span>\n        <span class=\"badge badge-padded-pill badge-danger p-2 m-1\">Danger</span>\n        <span class=\"badge badge-padded-pill badge-warning p-2 m-1\">Warning</span>\n        <span class=\"badge badge-padded-pill badge-info p-2 m-1\">Info</span>\n        <span class=\"badge badge-padded-pill badge-light p-2 m-1\">Light</span>\n        <span class=\"badge badge-padded-pill badge-dark p-2 m-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Badge link</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default badge outline rounded</p>\n\n        <a href=\"\" class=\"badge badge-link badge-primary m-1\">Primary</a>\n        <a href=\"\" class=\"badge badge-link badge-secondary m-1\">Secondary</a>\n        <a href=\"\" class=\"badge badge-link badge-success m-1\">Success</a>\n        <a href=\"\" class=\"badge badge-link badge-danger m-1\">Danger</a>\n        <a href=\"\" class=\"badge badge-link badge-warning m-1\">Warning</a>\n        <a href=\"\" class=\"badge badge-link badge-info m-1\">Info</a>\n        <a href=\"\" class=\"badge badge-link badge-light m-1\">Light</a>\n        <a href=\"\" class=\"badge badge-link badge-dark m-1\">Dark</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/badges/badges.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/badges/badges.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.ts ***!
  \**********************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent.prototype.ngOnInit = function () {
    };
    BadgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badges',
            template: __webpack_require__(/*! ./badges.component.html */ "./src/app/views/ui-kits/badges/badges.component.html"),
            styles: [__webpack_require__(/*! ./badges.component.scss */ "./src/app/views/ui-kits/badges/badges.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/buttons/buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1\"></i> UI Kits</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Buttons</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Basic button layout options</p>\n\n<div class=\"row mb-4\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-default m-1\">Default</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-default m-1\"><i class=\"icon-cogs\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn btn-default dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Primary button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-primary m-1\">Primary</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Primary with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-primary m-1\"><i class=\"icon-home text-13 mr-2\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Primary with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn btn-primary dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-round btn-danger m-1\">Rounded</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-round btn-danger m-1\"><i class=\"icon-buoy text-13 mr-2\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn-round btn-danger dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Label button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-label-left btn-danger m-1\"><b><i class=\"icon-chrome1\"></i></b>Labeled</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-round btn-label-left btn-danger m-1\"><b><i class=\"icon-chrome1\"></i></b>With\n          icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn-label-left btn-danger dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <b><i class=\"icon-chrome1\"></i></b>Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Label button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-link m-1\">Linked button</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-link m-1\"><i class=\"icon-chat-bubble-dots\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Rounded with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn-link dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          <b><i class=\"icon-chrome1\"></i></b>Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-3\">Basic button layout options</p>\n\n<div class=\"row mb-4\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-outline-primary m-1\">Default</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-outline-primary m-1\"><i class=\"icon-cogs\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn btn-outline-primary dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<p class=\"text-13 font-family-1 font-weight-500 line-height-1 mb-2\">BORDER OPTIONS</p>\n\n<div class=\"row mb-4\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-outline-primary border-transparent m-1\">Default</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-outline-primary border-transparent m-1\"><i class=\"icon-cogs\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn btn-outline-primary border-transparent dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-outline-primary border-2 m-1\">Default</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-outline-primary border-2 m-1\"><i class=\"icon-cogs\"></i>With icon</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button class=\"btn btn btn-outline-primary border-2 dropdown-toggle mb-2\" type=\"button\" id=\"dropdownMenuButton\"\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </button>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-3\">Basic button layout options</p>\n\n<div class=\"row mb-4\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-icon bg-primary m-1\"><i class=\"icon-cogs\"></i></button>\n        <button type=\"button\" class=\"btn btn-icon bg-primary-alpha m-1\"><i class=\"icon-cogs\"></i></button>\n        <button type=\"button\" class=\"btn btn-icon btn-outline-primary border-transparent m-1\"><i class=\"icon-cogs\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with icon</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n        <button type=\"button\" class=\"btn btn-round btn-icon bg-primary m-1\"><i class=\"icon-cogs\"></i></button>\n        <button type=\"button\" class=\"btn btn-round btn-icon bg-primary-alpha m-1\"><i class=\"icon-cogs\"></i></button>\n        <button type=\"button\" class=\"btn btn-round btn-icon btn-outline-primary border-transparent m-1\"><i class=\"icon-cogs\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div class=\"btn-group\" role=\"group\">\n          <button class=\"btn btn-primary dropdown-toggle mb-2 mr-1\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"icon-cogs\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </div>\n\n        <div class=\"btn-group\" role=\"group\">\n          <button class=\"btn bg-primary-alpha dropdown-toggle mb-2 mr-1\" type=\"button\" id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"icon-cogs\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </div>\n\n        <div class=\"btn-group\" role=\"group\">\n          <button class=\"btn btn-outline-primary border-transparent dropdown-toggle mb-2 mr-1\" type=\"button\" id=\"dropdownMenuButton\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"icon-cogs\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n          <button type=\"button\" class=\"btn btn-primary active\">Left</button>\n          <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n          <button type=\"button\" class=\"btn btn-primary\">Right</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div class=\"btn-toolbar justify-content-center\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n          <div class=\"btn-group m-1\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn btn-primary\">1</button>\n            <button type=\"button\" class=\"btn btn-primary active\">2</button>\n            <button type=\"button\" class=\"btn btn-primary\">3</button>\n            <button type=\"button\" class=\"btn btn-primary\">4</button>\n          </div>\n          <div class=\"btn-group m-1\" role=\"group\" aria-label=\"Second group\">\n            <button type=\"button\" class=\"btn btn-primary\">5</button>\n            <button type=\"button\" class=\"btn btn-primary\">6</button>\n            <button type=\"button\" class=\"btn btn-primary\">7</button>\n          </div>\n          <div class=\"btn-group m-1\" role=\"group\" aria-label=\"Third group\">\n            <button type=\"button\" class=\"btn btn-primary\">8</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n          <button type=\"button\" class=\"btn btn-primary\">1</button>\n          <button type=\"button\" class=\"btn btn-primary\">2</button>\n\n          <div class=\"btn-group\" role=\"group\">\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Dropdown\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\n              <a class=\"dropdown-item\" href=\"#\">Dropdown link</a>\n              <a class=\"dropdown-item\" href=\"#\">Dropdown link</a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <button type=\"button\" class=\"btn btn-primary btn-block m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-success btn-block m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-warning btn-block m-1\">Primary</button>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <button type=\"button\" class=\"btn btn-round btn-primary btn-block m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-round btn-success btn-block m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-round btn-warning btn-block m-1\">Primary</button>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <button type=\"button\" class=\"btn btn-primary btn-block m-1\"><i class=\"icon-cogs\"></i>Primary</button>\n        <button type=\"button\" class=\"btn btn-success btn-block m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-warning btn-block m-1\">Primary</button>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default button layouts</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-3\">Basic button layout options</p>\n\n<div class=\"row mb-4\">\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div class=\"mb-2\">\n          <button type=\"button\" class=\"btn btn-float btn-primary m-1\"><i class=\"icon-chrome1\"></i></button>\n          <button type=\"button\" class=\"btn btn-float btn-danger m-1\"><i class=\"icon-chrome1 text-32\"></i></button>\n          <button type=\"button\" class=\"btn btn-float btn-success m-1\"><i class=\"icon-chrome1 btn-icon-spinner\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-3\">Default light button example</p>\n\n        <div>\n          <button type=\"button\" class=\"btn btn-float btn-primary m-1\"><i class=\"icon-chrome1 mb-1\"></i>Search</button>\n          <button type=\"button\" class=\"btn btn-float btn-danger m-1\"><i class=\"icon-chrome1 text-32\"></i><span class=\"ml-1 mr-1\">Search</span></button>\n          <button type=\"button\" class=\"btn btn-float btn-success m-1\"><i class=\"icon-chrome1 btn-icon-spinner mb-1\"></i>Search</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div class=\"mb-1\">\n          <button type=\"button\" class=\"btn btn-round btn-float btn-primary m-1\"><i class=\"icon-chrome1\"></i></button>\n          <button type=\"button\" class=\"btn btn-round btn-float btn-danger m-1\"><i class=\"icon-chrome1 text-32\"></i></button>\n          <button type=\"button\" class=\"btn btn-round btn-float btn-success m-1\"><i class=\"icon-chrome1 btn-icon-spinner\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Button with loading animation</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-3\">Basic button layout options</p>\n\n<div class=\"row mb-4\">\n\n  <div class=\"col-md-12\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <div>\n          <btn-loading *ngFor=\"let btn of loadingButtons\" btnClass=\"btn-{{btn.name}} m-1\" [loading]=\"btn.loading\"\n            loadingText=\"Loading...\" (click)=\"showLoading(btn)\">\n            Click me\n          </btn-loading>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Button with color variation</p>\n<p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-3\">Basic button layout options</p>\n\n<div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <button type=\"button\" class=\"btn btn-primary m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-secondary m-1\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-success m-1\">Success</button>\n        <button type=\"button\" class=\"btn btn-danger m-1\">Danger</button>\n        <button type=\"button\" class=\"btn btn-warning m-1\">Warning</button>\n        <button type=\"button\" class=\"btn btn-info m-1\">Info</button>\n        <button type=\"button\" class=\"btn btn-light m-1\">Light</button>\n        <button type=\"button\" class=\"btn btn-dark m-1\">Dark</button>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body text-center\">\n        <p class=\"text-15 font-family-1 font-weight-500 line-height-1 mb-1\">Default with dropdown</p>\n        <p class=\"text-13 text-gray font-family-1 font-weight-400 line-height-1_5 mb-4\">Default light button example</p>\n\n        <button type=\"button\" class=\"btn btn-outline-primary m-1\">Primary</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary m-1\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-outline-success m-1\">Success</button>\n        <button type=\"button\" class=\"btn btn-outline-danger m-1\">Danger</button>\n        <button type=\"button\" class=\"btn btn-outline-warning m-1\">Warning</button>\n        <button type=\"button\" class=\"btn btn-outline-info m-1\">Info</button>\n        <button type=\"button\" class=\"btn btn-outline-dark m-1\">Dark</button>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/buttons/buttons.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/buttons/buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(
    // private modalService: NgbModal
    ) {
        this.btnGroupModel = {
            left: true,
            middle: false,
            right: false
        };
        this.loadingButtons = [
            {
                name: 'primary',
                loading: false,
            },
            {
                name: 'secondary',
                loading: false,
            },
            {
                name: 'success',
                loading: false,
            },
            {
                name: 'warning',
                loading: false,
            },
            {
                name: 'info',
                loading: false,
            },
            {
                name: 'danger',
                loading: false,
            },
            {
                name: 'light',
                loading: false,
            },
            {
                name: 'dark',
                loading: false,
            }
        ];
    }
    ButtonsComponent.prototype.ngOnInit = function () { };
    ButtonsComponent.prototype.showLoading = function (btn) {
        btn.loading = true;
        setTimeout(function () {
            btn.loading = false;
        }, 3000);
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/views/ui-kits/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/views/ui-kits/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/card-metrics/card-metrics.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1 mr-1\"></i> UI Kits</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Card metrics</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">New Visitors</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">2349 avg</p>\n          <div class=\"card-icon \"><i class=\"icon-user-plus1 color-red text-25\"></i></div>\n\n          <div echarts [options]=\"chartLineOption1\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">New Sessions</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">08:20 avg</p>\n          <div class=\"card-icon color-blue\"><i class=\"icon-watch color-red text-25\"></i></div>\n\n          <div echarts [options]=\"chartLineOption2\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">Total Online</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">6,590 avg</p>\n          <div class=\"card-icon\"><i class=\"icon-user-check1 text-25 color-red\"></i></div>\n\n          <div echarts [options]=\"chartLineOption3\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">Bounce Rate</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">17.86%</p>\n          <div class=\"card-icon\"><i class=\"icon-user-x text-25 color-red\"></i></div>\n\n          <div echarts [options]=\"chartLineOption4\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">ORDERS</p>\n          <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">3,590</p>\n          <div class=\"trend d-inline-block line-height-1\">\n            <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-danger\"><i class=\"icon-trending-down mr-1\"></i>9%</p>\n            <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n          </div>\n\n          <div echarts [options]=\"chartOrders\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">TOTAL SALES</p>\n          <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">$13,590</p>\n          <div class=\"trend d-inline-block line-height-1\">\n            <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-success\"><i class=\"icon-trending-up mr-1\"></i>3%</p>\n            <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n          </div>\n\n          <div echarts [options]=\"chartSales\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">TOTAL COST</p>\n          <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">$10,456</p>\n          <div class=\"trend d-inline-block line-height-1\">\n            <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-success\"><i class=\"icon-trending-up mr-1\"></i>2%</p>\n            <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n          </div>\n\n          <div echarts [options]=\"chartCost\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">NET PROFIT</p>\n          <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">$3,450</p>\n          <div class=\"trend d-inline-block line-height-1\">\n            <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-success\"><i class=\"icon-trending-up mr-1\"></i>7%</p>\n            <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n          </div>\n\n          <div echarts [options]=\"chartProfit\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content\">\n\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">CONVERSION RATE</p>\n          <p class=\"subtitle text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">0.88%</p>\n\n          <div echarts [options]=\"chartLineOptionD1\" [autoResize]=\"true\" style=\"height: 30px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content\">\n\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">REVENUE</p>\n          <p class=\"subtitle text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$1,095,190</p>\n\n          <div echarts [options]=\"chartLineOptionD2\" [autoResize]=\"true\" style=\"height: 30px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content\">\n\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">AVG. ORDER VALUE</p>\n          <p class=\"subtitle text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$306.20</p>\n\n          <div echarts [options]=\"chartLineOptionD3\" [autoResize]=\"true\" style=\"height: 30px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content\">\n\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">AVG. ORDER VALUE</p>\n          <p class=\"subtitle text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$306.20</p>\n\n          <div echarts [options]=\"chartLineOptionD4\" [autoResize]=\"true\" style=\"height: 30px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">SERVER STATUS - <span class=\"text-primary\">Region 1</span></h6>\n        <p class=\"text-20 text-success line-height-1 mb-3\"><i class=\"icon-arrow-up-circle\"></i> Up</p>\n        <small class=\"text-muted\">Last down 4 days ago</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">SERVER STATUS - <span class=\"text-success\">Region 2</span></h6>\n        <p class=\"text-20 text-success line-height-1 mb-3\"><i class=\"icon-arrow-up-circle\"></i> Up</p>\n        <small class=\"text-muted\">Last down 8 days ago</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">SERVER STATUS - <span class=\"text-danger\">Region 3</span></h6>\n        <p class=\"text-20 text-danger line-height-1 mb-3\"><i class=\"icon-arrow-down-circle\"></i> Down</p>\n        <small class=\"text-muted\">Last down 22 days ago</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">SERVER STATUS - <span class=\"text-info\">Region 4</span></h6>\n        <p class=\"text-20 text-danger line-height-1 mb-3\"><i class=\"icon-arrow-down-circle\"></i> Down</p>\n        <small class=\"text-muted\">Last down 2 days ago</small>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-0\">Taffic in last 24h</h6>\n        <p class=\"text-22 text-success font-weight-light mb-1\">13000</p>\n        <div echarts [options]=\"chartLine1\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-0\">Taffic in last week</h6>\n        <p class=\"text-22 text-danger font-weight-light mb-1\">65058</p>\n        <div echarts [options]=\"chartLine2\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"m-0 text-muted\">Taffic in last month</h6>\n        <p class=\"text-22 font-weight-light mb-1\">165058</p>\n        <div echarts [options]=\"chartLine3\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"m-0 text-muted\">Taffic in last 3 months</h6>\n        <p class=\"text-22 font-weight-light mb-1\">1065058</p>\n        <div echarts [options]=\"chartLine4\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Storage Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">50%</p>\n        <p class=\"mb-1\">\n          <ngb-progressbar type=\"success\" [value]=\"50\" height=\"4px\"></ngb-progressbar>\n        </p>\n        <small class=\"text-muted\">Most data used in last 3 days</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Bandwith Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">90%</p>\n        <p class=\"mb-1\">\n          <ngb-progressbar type=\"danger\" [value]=\"90\" height=\"4px\"></ngb-progressbar>\n        </p>\n        <small class=\"text-muted\">Most data used in last 7 days</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Data Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">60%</p>\n        <p class=\"mb-1\">\n          <ngb-progressbar type=\"warning\" [value]=\"60\" height=\"4px\"></ngb-progressbar>\n        </p>\n        <small class=\"text-muted\">Most data used in last 5 days</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Data Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">60%</p>\n        <p class=\"mb-1\">\n          <ngb-progressbar type=\"info\" [value]=\"60\" height=\"4px\"></ngb-progressbar>\n        </p>\n        <small class=\"text-muted\">Most data used in last 4 days</small>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-0 text-muted\">Registration/Subscription</h6>\n        <p class=\"text-22 font-weight-light mb-1\">20/80</p>\n        <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-0 text-muted\">Project Running/Completed</h6>\n        <p class=\"text-22 font-weight-light mb-1\">40/60</p>\n        <div echarts [options]=\"chartPie2\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-0 text-muted\">Registration/Subscription</h6>\n        <p class=\"text-22 font-weight-light mb-1\">20/80</p>\n        <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-0 text-muted\">Project Running/Completed</h6>\n        <p class=\"text-22 font-weight-light mb-1\">40/60</p>\n        <div echarts [options]=\"chartPie2\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-14 bg-red o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between\">\n        <div class=\"info\">\n          <p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$212,088</p>\n          <p class=\"subtitle text-14 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL SALES</p>\n        </div>\n\n        <div class=\"action\">\n          <i class=\"icon-anchor text-30 text-white\"></i>\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"content mt-1\">\n\n          <div echarts [options]=\"chartLineOptionD5\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-14 bg-blue o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between\">\n        <div class=\"info\">\n          <p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$72,088</p>\n          <p class=\"subtitle text-14 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL COST</p>\n        </div>\n\n        <div class=\"action\">\n          <i class=\"icon-adjust text-30 text-white\"></i>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content mt-1\">\n\n\n\n          <div echarts [options]=\"chartLineOptionD6\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-14 bg-purple o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between\">\n        <div class=\"info\">\n          <p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$22,088</p>\n          <p class=\"subtitle text-16 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL TAX</p>\n        </div>\n\n        <div class=\"action\">\n          <i class=\"icon-chart-pie text-30 text-white\"></i>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content mt-1\">\n\n\n\n          <div echarts [options]=\"chartLineOptionD7\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-14 bg-green o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between\">\n        <div class=\"info\">\n          <p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$28,088</p>\n          <p class=\"subtitle text-16 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL EARNINGS</p>\n        </div>\n\n        <div class=\"action\">\n          <i class=\"icon-currency-dollar text-30 text-white\"></i>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content mt-1\">\n\n          <div echarts [options]=\"chartLineOptionD8\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-15 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-start\">\n\n        <div class=\"info-icon mr-1\">\n          <a href=\"\">\n            <img src=\"http://www.insightintodiversity.com/wp-content/uploads/2016/01/apple_topic.png?w=1400\" class=\"rounded-circle\"\n              width=\"32\" height=\"32\" alt=\"\">\n          </a>\n        </div>\n\n        <div class=\"info flex-fill\">\n\n          <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-2\">Apple Inc.</p>\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: AAPL</p>\n        </div>\n\n        <div class=\"action text-right\">\n          <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$148.26 <span class=\"text-15\"></span></p>\n          <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">4.27%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"content mt-1\">\n\n          <div echarts [options]=\"chartStockOption1\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-15 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-start\">\n\n        <div class=\"info-icon mr-1\">\n          <a href=\"\">\n            <img src=\"https://xebialabs.com/assets/files/logos/gtest%20logo.png\" class=\"rounded-circle\" width=\"32\"\n              height=\"32\" alt=\"\">\n          </a>\n        </div>\n\n        <div class=\"info flex-fill\">\n\n          <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-2\">Alphabet Inc.</p>\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: GOOGL</p>\n\n        </div>\n\n        <div class=\"action text-right\">\n          <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$1,078.07 <span class=\"text-15\"></span></p>\n          <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">5.13%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"content mt-1\">\n\n          <div echarts [options]=\"chartStockOption2\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-15 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-start\">\n\n        <div class=\"info-icon mr-1\">\n          <a href=\"\">\n            <img src=\"src/assets/images/brands/facebook.png\" class=\"rounded-circle\" width=\"32\" height=\"32\" alt=\"\">\n          </a>\n        </div>\n\n        <div class=\"info flex-fill\">\n\n          <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-2\">Facebook Inc.</p>\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: FB</p>\n\n        </div>\n\n        <div class=\"action text-right\">\n          <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$137.95 <span class=\"text-15\"></span></p>\n          <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">4.71%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"content mt-1\">\n\n          <div echarts [options]=\"chartStockOption3\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-15 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-start\">\n\n        <div class=\"info-icon mr-1\">\n          <a href=\"\">\n            <img src=\"https://merivisfoundation.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png\" class=\"rounded-circle\"\n              width=\"32\" height=\"32\" alt=\"\">\n          </a>\n        </div>\n\n        <div class=\"info flex-fill\">\n\n          <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-2\">Amazon Inc.</p>\n          <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: AMZN</p>\n\n        </div>\n\n        <div class=\"action text-right\">\n          <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$1,575.39 <span class=\"text-15\"></span></p>\n          <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">5.01%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"content mt-1\">\n\n          <div echarts [options]=\"chartStockOption4\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Project Completion Rate</h6>\n        <p class=\"text-22 font-weight-light mb-1\"><i class=\"i-Up text-success\"></i> 15%</p>\n        <div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Project Completion Rate</h6>\n        <p class=\"text-22 font-weight-light mb-1\"><i class=\"i-Down text-danger\"></i> 15%</p>\n        <div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/card-metrics/card-metrics.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/card-metrics/card-metrics.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardMetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMetricsComponent", function() { return CardMetricsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/charts/charts */ "./src/app/shared/charts/charts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardMetricsComponent = /** @class */ (function () {
    function CardMetricsComponent() {
        this.chartLine1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [30, 40, 20, 50, 40, 80, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.chartLine2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [6, 4, 7, 4, 6, 4, 1] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#df0029' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#df0029'
                    } })]
        });
        this.chartLine3 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [2, 2, 7, 4, 6, 4, 8] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.chartLine4 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [2, 2, 7, 4, 6, 4, 1] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#df0029' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#df0029'
                    } })]
        });
        this.chartPie1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [__assign({ name: 'Email Subscription', value: 80 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#4CAF50',
                            } }), __assign({ name: 'Registration', value: 20 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#df0029',
                            } })]
                }]
        });
        this.chartPie2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [__assign({ name: 'Running', value: 40 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#ff9800',
                            } }), __assign({ name: 'Completed', value: 60 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#4CAF50',
                            } })]
                }]
        });
        this.chartBar1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'bar',
                    barWidth: 6,
                    itemStyle: __assign({ color: '#ff9800' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow),
                    data: [{
                            name: 'Bar 1',
                            value: 40
                        }, {
                            name: 'Bar 2',
                            value: 60,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }, {
                            name: 'Bar 3',
                            value: 80,
                        }, {
                            name: 'Bar 4',
                            value: 70,
                        }, {
                            name: 'Bar 5',
                            value: 60,
                        }, {
                            name: 'Bar 6',
                            value: 70,
                        }, {
                            name: 'Bar 7',
                            value: 80,
                        }, {
                            name: 'Bar 8',
                            value: 40,
                        }, {
                            name: 'Bar 9',
                            value: 70,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }]
                }]
        });
    }
    CardMetricsComponent.prototype.ngOnInit = function () {
        this.chartLineOption1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOption1.color = ['#ff5721'];
        this.chartLineOption1.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption1.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption1.series[0].smooth = true;
        this.chartLineOption2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOption2.color = ['#5f6bc2'];
        this.chartLineOption2.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption2.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption2.series[0].smooth = true;
        this.chartLineOption3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOption3.color = ['#00cbcc'];
        this.chartLineOption3.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption3.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption3.series[0].smooth = true;
        this.chartLineOption4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOption4.color = ['#f10075'];
        this.chartLineOption4.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption4.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption4.series[0].smooth = true;
        this.chartOrders = __assign({}, _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["BarChart1"]);
        this.chartOrders.color = ['#5f6bc2'];
        this.chartOrders.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartOrders.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartSales = __assign({}, _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["BarChart1"]);
        this.chartSales.color = ['#ff5721'];
        this.chartSales.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartSales.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartCost = __assign({}, _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["BarChart1"]);
        this.chartCost.color = ['#4cae4f'];
        this.chartCost.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartCost.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartProfit = __assign({}, _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["BarChart1"]);
        this.chartProfit.color = ['#135bba'];
        this.chartProfit.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartProfit.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOptionD1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD1.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD1.series[0].lineStyle.color = ['#5f6ac2'];
        this.chartLineOptionD1.series[0].data = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.chartLineOptionD2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD2.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD2.series = _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"].series.slice();
        this.chartLineOptionD2.series[0].lineStyle.color = ['#ff5721'];
        this.chartLineOptionD2.series[0].data = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.chartLineOptionD3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD3.series[0].lineStyle.color = '#4cae4f';
        this.chartLineOptionD3.series[0].data = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.chartLineOptionD4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD4.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD4.series[0].lineStyle.color = '#04a9f4';
        this.chartLineOptionD4.series[0].data = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ];
        this.chartLineOptionD5 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart3"]);
        this.chartLineOptionD5.series[0].lineStyle.normal.color = ['#F44336'];
        this.chartLineOptionD6 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart3"]);
        this.chartLineOptionD6.series[0].lineStyle.normal.color = ['#0065c4'];
        this.chartLineOptionD7 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart3"]);
        this.chartLineOptionD7.series[0].lineStyle.normal.color = ['#673ab7'];
        this.chartLineOptionD8 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart3"]);
        this.chartLineOptionD8.series[0].lineStyle.normal.color = ['#538c28'];
        this.chartStockOption1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)',
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    animation: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)'
                    }
                }
            },
            grid: {
                show: false,
                top: 0,
                right: '-8%',
                left: '-8%',
                bottom: 0
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                    data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'rgba(97, 97, 97, 1)',
                            width: 1.5,
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1,
                            shadowBlur: 50,
                            shadowColor: 'rgba(97, 97, 97, 1)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(97, 97, 97, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(97, 97, 97, 0.0)'
                                }
                            ])
                        }
                    }
                }]
        });
        this.chartStockOption2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)',
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    animation: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)'
                    }
                }
            },
            grid: {
                show: false,
                top: 0,
                right: '-8%',
                left: '-8%',
                bottom: 0
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                    data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'rgba(52, 168, 83, 1)',
                            width: 1.5,
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1,
                            shadowBlur: 50,
                            shadowColor: 'rgba(52, 168, 83, 1)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(52, 168, 83, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(52, 168, 83, 0.0)'
                                }
                            ])
                        }
                    }
                }]
        });
        this.chartStockOption3 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)',
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    animation: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)'
                    }
                }
            },
            grid: {
                show: false,
                top: 0,
                right: '-8%',
                left: '-8%',
                bottom: 0
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                    data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'rgba(61, 89, 155, 1)',
                            width: 1.5,
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1,
                            shadowBlur: 50,
                            shadowColor: 'rgba(61, 89, 155, 1)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(61, 89, 155, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(61, 89, 155, 0.0)'
                                }
                            ])
                        }
                    }
                }]
        });
        this.chartStockOption4 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)',
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    animation: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)'
                    }
                }
            },
            grid: {
                show: false,
                top: 0,
                right: '-8%',
                left: '-8%',
                bottom: 0
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                    data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'rgba(243, 107, 18, 1)',
                            width: 1.5,
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1,
                            shadowBlur: 50,
                            shadowColor: 'rgba(243, 107, 18, 1)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(243, 107, 18, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(243, 107, 18, 0.0)'
                                }
                            ])
                        }
                    }
                }]
        });
    };
    CardMetricsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-metrics',
            template: __webpack_require__(/*! ./card-metrics.component.html */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.html"),
            styles: [__webpack_require__(/*! ./card-metrics.component.scss */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardMetricsComponent);
    return CardMetricsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/card-widgets/card-widgets.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1 mr-1\"></i> UI Kits</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Card Widgets</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"card mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">NETWORK STATS</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-0\">Lorem ipsum dolor sit amet\n            consectetur.</p>\n        </div>\n\n        <div class=\"action\">\n          <div class=\"dropdown\">\n            <a href=\"\" class=\"text-muted link-primary\" type=\"button\">\n              <i class=\"icon-reload align-middle mr-1\"></i>\n            </a>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-4\">\n            <div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n              <i class=\"icon-hard-drive text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1\">Backups</h4>\n                <span>Total: 32</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-4\">\n            <div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n              <i class=\"icon-database1 text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1\">Databases</h4>\n                <span>Total: 302</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-4\">\n            <div class=\"p-4 border border-light rounded d-flex align-items-center\">\n              <i class=\"icon-upload-cloud text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1\">Space used</h4>\n                <span>Total: 160GB</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"p-4 border border-light rounded d-flex align-items-center\">\n              <i class=\"icon-download1 text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1\">Downloaded</h4>\n                <span>Total: 30GB</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"card mb-4\">\n\n      <div class=\"card-header justify-content-between mb-1\">\n\n        <div class=\"info\">\n          <p class=\"title text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">TOP SALLING PRODUCTS</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-0\">Lorem ipsum dolor sit amet\n            consectetur.</p>\n        </div>\n\n        <div class=\"action\">\n          <div class=\"dropdown\">\n            <a href=\"\" class=\"text-muted link-primary\" type=\"button\">\n              <i class=\"icon-reload align-middle mr-1\"></i>\n            </a>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/headphone-2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">Wireless Headphone</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-primary text-16\">$450</span>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/headphone-3.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">Headphone Black</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-warning text-16\">$350</span>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/iphone-2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">iPhone 6</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-danger text-16\">$649</span>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/headphone-4.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">Headphone Red</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-secondary text-16\">$150</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card card-chart-bottom o-hidden mb-4\">\n      <div class=\"card-body\">\n        <p class=\"card-title text-18 font-family-1 font-weight-400 line-height-1 mt-0 mb-2\">Last Week Sales</p>\n        <p class=\"text-24 text-primary font-weight-500 line-height-1 mb-1\">$1250</p>\n      </div>\n      <div echarts [options]=\"chartOption1\" [autoResize]=\"true\" style=\"height: 260px;\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card card-chart-bottom o-hidden mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title text-18 font-family-1 font-weight-400 line-height-1 mt-0 mb-2\">Last Month Sales</div>\n        <p class=\"text-24 text-primary font-weight-500 line-height-1 mb-1\">$40250</p>\n      </div>\n      <div echarts [options]=\"chartOption2\" [autoResize]=\"true\" style=\"height: 260px;\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"card mb-4\">\n\n      <div class=\"card-header justify-content-between mb-1\">\n\n        <div class=\"info\">\n          <p class=\"title text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">TOP USERS</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-0\">Lorem ipsum dolor sit amet\n            consectetur.</p>\n        </div>\n\n        <div class=\"action\">\n          <div class=\"dropdown\">\n            <a href=\"\" class=\"text-muted link-primary\" type=\"button\">\n              <i class=\"icon-reload align-middle mr-1\"></i>\n            </a>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-2 mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">David Hopkins</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary\">Follow</button>\n          </div>\n        </div>\n\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-2 mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/3.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">James Mitchell</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary\">Follow</button>\n          </div>\n        </div>\n\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-2 mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/4.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">John Doe</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary\">Follow</button>\n          </div>\n        </div>\n\n        <div class=\"d-flex align-items-center mb-2\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/5.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h5 class=\"m-0 font-weight-500 text-muted\">Dan Hill</h5>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary\">Follow</button>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title text-18 font-family-1 font-weight-400 line-height-1 mt-0 mb-4\">Last Month Summary</div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Item</th>\n                  <th scope=\"col\">Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Portable Speaker</td>\n                  <td class=\"font-weight-bold text-success\">+ $1200</td>\n                </tr>\n                <tr>\n                  <td>Portable Headphone</td>\n                  <td class=\"font-weight-bold\">In Stock</td>\n                </tr>\n                <tr>\n                  <td>Speaker</td>\n                  <td class=\"text-danger font-weight-bold\">Out of stock</td>\n                </tr>\n                <tr>\n                  <td>Watch</td>\n                  <td class=\"text-warning font-weight-bold\">Low stock</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-md-6\">\n            <div echarts [options]=\"chartDelivery\" [autoResize]=\"true\" style=\"height: 250px;\"></div>\n\n            <div class=\"row mt-3\">\n              <div class=\"col-lg-6\">\n                <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                  Complete:\n                  <span class=\"text-success font-family-1 font-weight-600 ml-1\">$7,454</span></p>\n              </div>\n              <div class=\"col-lg-6\">\n                <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                  Pending:\n                  <span class=\"text-danger font-family-1 font-weight-600 ml-1\">$7,454</span></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-1\">\n\n        <div class=\"info\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">THIS YEAR'S TOTAL REVENUE</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Sales Performance for Online\n            and Offline Revenue</p>\n        </div>\n\n        <div class=\"action\">\n          <div class=\"dropdown\">\n            <a href=\"\" class=\"dropdown-toggle text-muted link-primary\" type=\"button\" id=\"dropdownMenuButton\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"icon-menu5 align-middle mr-1\"></i>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-reload align-middle mr-1\"></i> Reload Data</a>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-list1 align-middle mr-1\"></i> Details Log</a>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-pie-chart1 align-middle mr-1\"></i> Statistics</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"\"><i class=\"icon-x align-middle mr-1\"></i> Clear List</a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left pt-0\">\n        <div class=\"content\">\n\n          <div echarts [options]=\"chartRevenueYearly\" [autoResize]=\"true\" style=\"height: 320px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">SALES REVENUE BY CUSTOMERS\n            COUNTRY</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-4\">Sales Performance of popular\n            countries</p>\n\n          <div echarts [options]=\"chartRevenueCountry\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-1\">\n\n        <div class=\"info\">\n          <p class=\"title text-gray text-16 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Delivery Orders</p>\n        </div>\n\n        <div class=\"action\">\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-0\">\n        <div class=\"content\">\n          <div echarts [options]=\"chartDelivery\" [autoResize]=\"true\" style=\"height: 280px;\"></div>\n          <p class=\"text-30 text-center text-orange font-family-1 font-weight-600 line-height-1 mt-0 mb-0\">$14,572</p>\n          <div class=\"row mt-2\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                <i class=\"icon-package text-orange align-top\"></i>\n                Delivered:\n                <span class=\"text-orange font-family-1 font-weight-600 ml-2\">$7,454</span></p>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                <i class=\"icon-box text-orange align-top\"></i>\n                Estimated:\n                <span class=\"text-orange font-family-1 font-weight-600 ml-2\">$7,454</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"card bm-card-12 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n          <p class=\"title text-15 font-family-1 font-weight-400 mt-0 mb-2\">Top Referring & Destination Sites</p>\n\n          <div class=\"row mt-1 ml-0 mr-0\">\n\n            <div class=\"data-chart\">\n              <div echarts [options]=\"chartLineOption12\" [autoResize]=\"true\" style=\"height: 335px;\"></div>\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/card-widgets/card-widgets.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/card-widgets/card-widgets.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWidgetsComponent", function() { return CardWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardWidgetsComponent = /** @class */ (function () {
    function CardWidgetsComponent() {
    }
    CardWidgetsComponent.prototype.ngOnInit = function () {
        this.chartOption1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid: {
                left: '0%',
                top: '0%',
                right: '-1%',
                bottom: '0%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'This Week',
                    type: 'line',
                    smooth: true,
                    data: [30, 40, 20, 50, 40, 80, 90],
                    symbolSize: 8,
                    lineStyle: {
                        color: 'rgb(255, 112, 14)',
                        opacity: 1,
                        width: 1,
                    },
                    itemStyle: {
                        color: '#ff5721',
                        borderColor: '#ff5721',
                        borderWidth: 1.5,
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1,
                            shadowColor: 'rgba(255, 112, 14, 1)',
                            shadowBlur: 30,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0, color: 'rgba(255, 112, 14, 1)'
                                    }, {
                                        offset: 0.3, color: 'rgba(255, 112, 14, 0.7)'
                                    }, {
                                        offset: 1, color: 'rgba(255, 112, 14, 0)'
                                    }]
                            }
                        }
                    }
                },
            ]
        });
        this.chartOption2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid: {
                left: '0%',
                top: '0%',
                right: '-1%',
                bottom: '0%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10'],
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'Last Month',
                    type: 'line',
                    smooth: true,
                    data: [30, 40, 20, 50, 40, 80, 90, 100, 80, 120],
                    symbolSize: 8,
                    lineStyle: {
                        color: 'rgb(73, 163, 77)',
                        opacity: 1,
                        width: 1,
                    },
                    itemStyle: {
                        color: '#49a34d',
                        borderColor: '#49a34d',
                        borderWidth: 1.5,
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1,
                            shadowColor: 'rgba(73, 163, 77, 1)',
                            shadowBlur: 30,
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0, color: 'rgba(73, 163, 77, 1)'
                                    }, {
                                        offset: 0.5, color: 'rgba(73, 163, 77, 0.7)'
                                    }, {
                                        offset: 1, color: 'rgba(73, 163, 77, 0)'
                                    }]
                            }
                        }
                    }
                },
            ]
        });
        this.chartDelivery = {
            color: ['#ff7110', '#fdb772', '#fcddbd'],
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: 'Sessions',
                    type: 'pie',
                    radius: ['50%', '85%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '13',
                                fontWeight: 'normal'
                            },
                            formatter: "{a}",
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '13',
                                fontWeight: 'bold',
                                color: '#ff7110'
                            },
                            formatter: "{b} \n{c} ({d}%)",
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: 'Delivered' },
                        { value: 310, name: 'Packed' },
                        { value: 234, name: 'Remaining' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.chartRevenueYearly = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["BarChart2"]);
        this.chartRevenueYearly.color = ['#f10075', '#eee'];
        this.chartRevenueYearly.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.chartRevenueYearly.series[0].name = 'Online';
        this.chartRevenueYearly.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        this.chartRevenueYearly.series[0].color = '#c4dbf0';
        this.chartRevenueYearly.series[1].name = 'Offline';
        this.chartRevenueYearly.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        this.chartRevenueYearly.series[1].color = '#2c80bf';
        this.chartRevenueCountry = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["PaiChart1"]);
        this.chartRevenueCountry.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
        this.chartRevenueCountry.series[0].name = 'Sales by Country';
        this.chartRevenueCountry.series[0].data = [
            { value: 335, name: 'USA' },
            { value: 310, name: 'CANADA' },
            { value: 234, name: 'MEXICO' },
            { value: 135, name: 'UK' },
            { value: 148, name: 'AUSTRALIA' },
            { value: 548, name: 'INDIA' }
        ];
        this.chartLineOption12 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: "{a} <br />{b} - {c}%"
            },
            xAxis: {
                show: false,
                axisTick: {
                    show: false
                }
            },
            grid: {
                top: '2%',
                left: '10%',
                bottom: '2%',
                right: '30%',
            },
            series: [
                {
                    type: 'tree',
                    name: 'Traffic In',
                    left: '20%',
                    right: '50%',
                    data: [
                        {
                            "children": [
                                {
                                    name: "Direct",
                                    value: "36.52",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#d94e20'
                                    },
                                    label: {
                                        color: '#d94e20',
                                        position: 'left',
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#d94e20',
                                        width: 2,
                                        curveness: 0.5
                                    },
                                },
                                {
                                    name: "Google",
                                    value: "35.20",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#ef8b2c'
                                    },
                                    label: {
                                        color: '#ef8b2c',
                                        position: 'left',
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#ef8b2c',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Facebook",
                                    value: "35.20",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#3f51b5'
                                    },
                                    label: {
                                        color: '#3f51b5',
                                        position: 'left',
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#3f51b5',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Youtube",
                                    value: "35.20",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#c02f1d'
                                    },
                                    label: {
                                        color: '#c02f1d',
                                        position: 'left',
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#c02f1d',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Twitter",
                                    value: "35.20",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#1294ba'
                                    },
                                    label: {
                                        color: '#1294ba',
                                        position: 'left',
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#1294ba',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Others",
                                    value: "35.20",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#0f5a78'
                                    },
                                    label: {
                                        color: '#0f5a78',
                                        position: 'left',
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#0f5a78',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                }
                            ]
                        }
                    ],
                    symbolSize: 10,
                    orient: 'RL',
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
                    lineStyle: {
                        color: '#aaa',
                        width: 1.5,
                        curveness: 0.5
                    },
                    leaves: {
                        color: '#eee',
                        label: {
                            fontSize: 15,
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
                    expandAndCollapse: false,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                },
                {
                    type: 'tree',
                    name: 'Trafic Out',
                    left: '50%',
                    right: '20%',
                    data: [
                        {
                            "children": [
                                {
                                    name: "github.com",
                                    value: "15.50",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#d94e20'
                                    },
                                    label: {
                                        color: '#d94e20',
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#d94e20',
                                        width: 2,
                                        curveness: 0.5
                                    },
                                },
                                {
                                    name: "paypal",
                                    value: "15.50",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#ef8b2c'
                                    },
                                    label: {
                                        color: '#ef8b2c',
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#ef8b2c',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Facebook",
                                    value: "15.50",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#3f51b5'
                                    },
                                    label: {
                                        color: '#3f51b5',
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#3f51b5',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Youtube",
                                    value: "15.50",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#c02f1d'
                                    },
                                    label: {
                                        color: '#c02f1d',
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#c02f1d',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Twitter",
                                    value: "15.50",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#1294ba'
                                    },
                                    label: {
                                        color: '#1294ba',
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#1294ba',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                },
                                {
                                    name: "Others",
                                    value: "15.50",
                                    symbolSize: 10,
                                    itemStyle: {
                                        borderColor: '#0f5a78'
                                    },
                                    label: {
                                        color: '#0f5a78',
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left',
                                        fontSize: 15,
                                        fontWeight: 'Normal',
                                        fontFamily: 'Roboto'
                                    },
                                    lineStyle: {
                                        color: '#0f5a78',
                                        width: 2,
                                        curveness: 0.5
                                    }
                                }
                            ]
                        }
                    ],
                    symbolSize: 10,
                    orient: 'LR',
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
                    lineStyle: {
                        color: '#aaa',
                        width: 1.5,
                        curveness: 0.5
                    },
                    leaves: {
                        color: '#eee',
                        label: {
                            fontSize: 15,
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
                    expandAndCollapse: false,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        });
    };
    CardWidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-widgets',
            template: __webpack_require__(/*! ./card-widgets.component.html */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.html"),
            styles: [__webpack_require__(/*! ./card-widgets.component.scss */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardWidgetsComponent);
    return CardWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1 mr-1\"></i> UI Kits</a>\n      </li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Card eCommerce</li>\n      <span class=\"spacer\"></span>\n      <li class=\"breadcrumb-item no-driver\">\n        <a href=\"\" class=\"text-muted link-primary\">\n          <i class=\"icon-bubbles\"></i> Support</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\n        <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n        </div>\n\n      </li>\n    </ol>\n\n  </nav>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"card card-ecommerce-1 mb-4\">\n        <div class=\"card-body text-center\">\n          <i class=\"icon-cloud-lightning text-70 mb-3\"></i>\n          <h5 class=\"text-primary mt-2 mb-2\">Cloud product one</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptates?</p>\n          <button class=\"btn btn-primary\">Buy now</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3\">\n      <div class=\"card card-ecommerce-2 o-hidden mb-4\">\n        <img class=\"card-img-top\" src=\"./assets/images/photo-long-10.png\" alt=\"\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <h5 class=\"m-0 font-weight-bold text-muted\">Cloud product one</h5>\n            <p class=\"m-0\">$30</p>\n          </div>\n          <div class=\"card-action\">\n            <i class=\"icon text-primary icon-shopping-cart1\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div class=\"card card-ecommerce-3 o-hidden mb-4\">\n        <div class=\"d-flex\">\n          <div class=\"\">\n            <img class=\"card-img-left\" src=\"./assets/images/photo-wide-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"flex-grow-1 p-4\">\n            <h5 class=\"m-0 font-weight-bold text-muted\">Produt featured</h5>\n            <p class=\"m-0 text-small text-muted\">By ABC Cafe</p>\n            <p class=\"m-0\">$40 <del>$55</del></p>\n            <p class=\"text-muted mt-3\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n              Nesciunt placeat esse tempore debitis.</p>\n            <div class=\"actions\">\n              <button class=\"btn btn-round btn-float btn-outline-primary\">\n                <i class=\"icon icon-shopping-cart1\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts ***!
  \****************************************************************************/
/*! exports provided: CardsEcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsEcommerceComponent", function() { return CardsEcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsEcommerceComponent = /** @class */ (function () {
    function CardsEcommerceComponent() {
    }
    CardsEcommerceComponent.prototype.ngOnInit = function () {
    };
    CardsEcommerceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-ecommerce',
            template: __webpack_require__(/*! ./cards-ecommerce.component.html */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./cards-ecommerce.component.scss */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsEcommerceComponent);
    return CardsEcommerceComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/cards/cards.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n\t<nav aria-label=\"breadcrumb\">\n\t\t<ol class=\"breadcrumb\">\n\t\t\t<li class=\"breadcrumb-item\">\n\t\t\t\t<a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1 mr-1\"></i> UI Kits</a>\n\t\t\t</li>\n\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Cards</li>\n\t\t\t<span class=\"spacer\"></span>\n\t\t\t<li class=\"breadcrumb-item no-driver\">\n\t\t\t\t<a href=\"\" class=\"text-muted link-primary\">\n\t\t\t\t\t<i class=\"icon-bubbles\"></i> Support</a>\n\t\t\t</li>\n\t\t\t<li class=\"breadcrumb-item\">\n\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t\t aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n\t\t\t\t</div>\n\n\t\t\t</li>\n\t\t</ol>\n\n\t</nav>\n\n\t<div class=\"separator-breadcrumb border-top\"></div>\n\n\t<div class=\"row\">\n\n\t\t<!-- Style 1 -->\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t\t<div class=\"card bm-card-10 o-hidden mb-4\">\n\n\t\t\t\t<div class=\"card-body text-center\">\n\n\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t<i class=\"icon-box text-orange text-50\"></i>\n\t\t\t\t\t\t<p class=\"text-orange text-25 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">213</p>\n\t\t\t\t\t\t<p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">Products</p>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t\t<div class=\"card bm-card-10 o-hidden mb-4\">\n\n\t\t\t\t<div class=\"card-body text-center\">\n\n\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t<i class=\"icon-users1 text-orange text-50\"></i>\n\t\t\t\t\t\t<p class=\"text-orange text-25 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">4,155</p>\n\t\t\t\t\t\t<p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">Customers</p>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<!-- Style 2 -->\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t\t<div class=\"card bm-card-10 bg-1 border-0 o-hidden mb-4\">\n\n\t\t\t\t<div class=\"card-body text-center\">\n\n\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t<i class=\"icon-tv1 text-white text-50\"></i>\n\t\t\t\t\t\t<p class=\"text-white text-25 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">13</p>\n\t\t\t\t\t\t<p class=\"text-white text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">Events</p>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t\t<div class=\"card bm-card-10 bg-2 border-0 o-hidden mb-4\">\n\n\t\t\t\t<div class=\"card-body text-center\">\n\n\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t<i class=\"icon-tag text-white text-50\"></i>\n\t\t\t\t\t\t<p class=\"text-white text-25 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">4,155</p>\n\t\t\t\t\t\t<p class=\"text-white text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">Tickets</p>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<!-- Style 3 -->\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t\t\t<div class=\"card card-icon-bg o-hidden mb-4\">\n\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t<i class=\"icon-user-plus1\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t<p class=\"text-gray font-weight-500 line-height-1 mt-2 mb-1\">New Leads</p>\n\t\t\t\t\t\t<p class=\"text-primary text-24 font-weight-500 line-height-1 mb-2\">205</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t\t\t<div class=\"card card-icon-bg o-hidden mb-4\">\n\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t<i class=\"icon-shopping-cart\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t<p class=\"text-gray font-weight-500 line-height-1 mt-2 mb-1\">Sales</p>\n\t\t\t\t\t\t<p class=\"text-primary text-24 font-weight-500 line-height-1 mb-2\">4021</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t\t\t<div class=\"card card-icon-bg o-hidden mb-4\">\n\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t<i class=\"icon-package\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t<p class=\"text-gray font-weight-500 line-height-1 mt-2 mb-1\">Orders</p>\n\t\t\t\t\t\t<p class=\"text-primary text-24 font-weight-500 line-height-1 mb-2\">80</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\t\t\t<div class=\"card card-icon-bg o-hidden mb-4\">\n\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t<i class=\"icon-credit-card1\"></i>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t<p class=\"text-gray font-weight-500 line-height-1 mt-2 mb-1\">Expanse</p>\n\t\t\t\t\t\t<p class=\"text-primary text-24 font-weight-500 line-height-1 mb-2\">1,234</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Style 4 -->\n\t\t<div class=\"col-lg-6 col-md-6 col-sm-6\">\n\n\t\t\t<div class=\"card bm-card-7 o-hidden mb-4\">\n\n\t\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t<p class=\"title text-15 text-primary font-family-1 font-weight-400 mt-0 mb-1\">EXPANSIONS</p>\n\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-2 mr-0\">Customers who have upgraded\n\t\t\t\t\t\t\tthe\n\t\t\t\t\t\t\tlevel of your service.</p>\n\n\t\t\t\t\t\t<div class=\"data-list\">\n\t\t\t\t\t\t\t<table class=\"table table-striped table-dashboard-two\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sources mb-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"title text-17 font-family-2 font-weight-600 ml-0\">$1,500</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"subtitle text-17 font-family-2 font-weight-600 ml-0\">$1,320</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress mb-1\" style=\"height: 4px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-blue\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sources mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">This Month</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">Previous Month</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-lg-6 col-md-6 col-sm-6\">\n\n\t\t\t<div class=\"card bm-card-7 o-hidden mb-4\">\n\n\t\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t<p class=\"title text-15 text-danger font-family-1 font-weight-400 mt-0 mb-1\">CANCELLATIONS</p>\n\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-2 mr-0\">Customers who have ended their\n\t\t\t\t\t\t\tsubscription with you.</p>\n\n\t\t\t\t\t\t<div class=\"data-list\">\n\t\t\t\t\t\t\t<table class=\"table table-striped table-dashboard-two\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sources mb-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"title text-17 font-family-2 font-weight-600 ml-0\">$1,500</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"subtitle text-17 font-family-2 font-weight-600 ml-0\">$1,320</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress mb-1\" style=\"height: 4px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n\t\t\t\t\t\t\t\t\t\t\t\t aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sources mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">This Month</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">Previous Month</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\n\t<!-- CARD ICON -->\n\t<div class=\"row\">\n\n\t\t<div class=\"col-md-6\">\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Style 5 -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-6\">\n\n\t\t\t\t\t<div class=\"card bm-card-9 o-hidden mb-4\">\n\n\t\t\t\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t\t\t\t<div class=\"content mb-2\">\n\n\t\t\t\t\t\t\t\t<p class=\"title text-15 font-family-1 font-weight-400 mt-0 mb-1\">Time to Resolve Complaint</p>\n\t\t\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 line-height-1 font-weight-400 mt-0 mb-4\">Measure how quickly support\n\t\t\t\t\t\t\t\t\tstaff\n\t\t\t\t\t\t\t\t\tresolve any complain.</p>\n\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between mb-2\">\n\t\t\t\t\t\t\t\t\t<p class=\"text-30 font-family-1 font-weight-400 line-height-1 mb-0\">7m:32s</p>\n\t\t\t\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 align-self-end mb-0\">Goal: 8m:0s</p>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<div class=\"progress mb-0\" style=\"height: 4px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\n\t\t\t\t\t\t\t\t\t aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-6\">\n\n\t\t\t\t\t<div class=\"card bm-card-9 o-hidden mb-4\">\n\n\t\t\t\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t\t\t\t<div class=\"content mb-2\">\n\n\t\t\t\t\t\t\t\t<p class=\"title text-15 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Avg. Response Time</p>\n\t\t\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mt-0 mb-4\">Measure how quickly support\n\t\t\t\t\t\t\t\t\tstaff\n\t\t\t\t\t\t\t\t\tanswer calls.</p>\n\n\t\t\t\t\t\t\t\t<p class=\"text-33 font-family-1 font-weight-400 line-height-1 mb-1\">0m:32s</p>\n\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Style 6 -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n\t\t\t\t\t<div class=\"card bm-card-8 o-hidden mb-4\">\n\n\t\t\t\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t\t\t\t<p class=\"title text-15 font-family-1 font-weight-400 mt-0 mb-4\">MRR (September)\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"progress-legend\">\n\t\t\t\t\t\t\t\t\t\t\t<li>Expansion</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"ml-2\">New</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<div class=\"progress-wrapper mb-4\">\n\t\t\t\t\t\t\t\t\t<label>None:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"progressbar-body ml-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar text-12 font-weight-500 bg-primary\" role=\"progressbar\" style=\"width: 30%\"\n\t\t\t\t\t\t\t\t\t\t\t aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">30%</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar text-12 font-weight-500 bg-danger\" role=\"progressbar\" style=\"width: 52%\"\n\t\t\t\t\t\t\t\t\t\t\t aria-valuenow=\"52\" aria-valuemin=\"0\" aria-valuemax=\"100\">52%</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"progress-wrapper\">\n\t\t\t\t\t\t\t\t\t<label>Partner:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"progressbar-body ml-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar text-12 font-weight-500 bg-primary\" role=\"progressbar\" style=\"width: 25%\"\n\t\t\t\t\t\t\t\t\t\t\t aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">25%</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar text-12 font-weight-500 bg-danger\" role=\"progressbar\" style=\"width: 32%\"\n\t\t\t\t\t\t\t\t\t\t\t aria-valuenow=\"32\" aria-valuemin=\"0\" aria-valuemax=\"100\">32%</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Style Tab -->\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t\t<ngb-tabset>\n\t\t\t\t\t\t\t<ngb-tab title=\"Simple\">\n\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro\n\t\t\t\t\t\t\t\t\t\tsynth\n\t\t\t\t\t\t\t\t\t\tmaster cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro\n\t\t\t\t\t\t\t\t\t\tkeffiyeh\n\t\t\t\t\t\t\t\t\t\tdreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia\n\t\t\t\t\t\t\t\t\t\tcillum\n\t\t\t\t\t\t\t\t\t\tiphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-tab>\n\t\t\t\t\t\t\t<ngb-tab>\n\t\t\t\t\t\t\t\t<ng-template ngbTabTitle>Fancy title</ng-template>\n\t\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee\n\t\t\t\t\t\t\t\t\tsquid.\n\t\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko\n\t\t\t\t\t\t\t\t\t\tfarm-to-table\n\t\t\t\t\t\t\t\t\t\tcraft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad\n\t\t\t\t\t\t\t\t\t\tvinyl\n\t\t\t\t\t\t\t\t\t\tcillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS\n\t\t\t\t\t\t\t\t\t\tsalvia\n\t\t\t\t\t\t\t\t\t\tyr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable\n\t\t\t\t\t\t\t\t\t\tjean\n\t\t\t\t\t\t\t\t\t\tshorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher\n\t\t\t\t\t\t\t\t\t\tvero\n\t\t\t\t\t\t\t\t\t\tsint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-tab>\n\t\t\t\t\t\t\t<ngb-tab title=\"Disabled\" [disabled]=\"true\">\n\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla\n\t\t\t\t\t\t\t\t\t\tfacilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu,\n\t\t\t\t\t\t\t\t\t\tcongue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices\n\t\t\t\t\t\t\t\t\t\tet. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus\n\t\t\t\t\t\t\t\t\t\tfaucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci\n\t\t\t\t\t\t\t\t\t\tvarius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac\n\t\t\t\t\t\t\t\t\t\tlorem\n\t\t\t\t\t\t\t\t\t\taliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-tab>\n\t\t\t\t\t\t</ngb-tabset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t<div class=\"card card-profile-1 mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<div class=\"avatar box-shadow-2 mb-3\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/images/faces/16.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h5 class=\"m-0\">Jassica Hike</h5>\n\t\t\t\t\t\t\t<p class=\"mt-0\">UI/UX Designer</p>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Contact Jassica</button>\n\t\t\t\t\t\t\t<div class=\"card-socials-simple mt-4\">\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Linkedin-2\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Facebook-2\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Twitter\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\tFeatured\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title text</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n\t\t\t\t\t\t\t<button href=\"#\" class=\"btn btn-primary\">Go somewhere</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t<div class=\"card bg-dark border-0 text-white o-hidden mb-4\">\n\t\t\t\t\t\t<img class=\"\" src=\"./assets/images/photo-wide-2.jpg\" alt=\"Card image\">\n\t\t\t\t\t\t<div class=\"card-img-overlay\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content.\n\t\t\t\t\t\t\t\tThis content is a little bit longer.</p>\n\t\t\t\t\t\t\t<p class=\"card-text\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n\t\t\t\t\t\t\t\tcontent.</p>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Card link</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Another link</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-md-6\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- BG IMAGE CARDS -->\n\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t<div class=\"card bg-dark border-0 text-white o-hidden mb-4\">\n\t\t\t\t\t\t<img class=\"card-img\" src=\"./assets/images/photo-long-1.jpg\" alt=\"Card image\">\n\t\t\t\t\t\t<div class=\"card-img-overlay\">\n\t\t\t\t\t\t\t<div class=\"text-center pt-4\">\n\t\t\t\t\t\t\t\t<h5 class=\"card-title mb-2\">Card title</h5>\n\t\t\t\t\t\t\t\t<div class=\"separator border-top mb-2\"></div>\n\t\t\t\t\t\t\t\t<p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n\t\t\t\t\t\t\t\t<span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t<div class=\"card bg-dark border-0 text-white o-hidden mb-4\">\n\t\t\t\t\t\t<img class=\"\" src=\"./assets/images/photo-long-2.jpg\" alt=\"Card image\">\n\t\t\t\t\t\t<div class=\"card-img-overlay\">\n\n\t\t\t\t\t\t\t<div class=\"text-center pt-4\">\n\t\t\t\t\t\t\t\t<h5 class=\"card-title mb-2\">Card title</h5>\n\t\t\t\t\t\t\t\t<div class=\"separator border-top mb-2\"></div>\n\t\t\t\t\t\t\t\t<p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n\t\t\t\t\t\t\t\t<span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t<div class=\"card mb-4 o-hidden\">\n\t\t\t\t\t\t<img class=\"\" src=\"./assets/images/photo-wide-2.jpg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cumque!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t\t\t<div class=\"card mb-4 o-hidden\">\n\t\t\t\t\t\t<img class=\"\" src=\"./assets/images/photo-wide-3.jpg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n\t\t\t\t\t\t\t\tcontent.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\">Cras justo odio</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">Dapibus ac facilisis in</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">Vestibulum at eros</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Card link</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Another link</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/cards/cards.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/cards/cards.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.ts ***!
  \********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(productService) {
        this.productService = productService;
    }
    CardsComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/views/ui-kits/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/views/ui-kits/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/loaders/loaders.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1 mr-1\"></i> UI Kits</a>\n      </li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Loaders</li>\n      <span class=\"spacer\"></span>\n      <li class=\"breadcrumb-item no-driver\">\n        <a href=\"\" class=\"text-muted link-primary\">\n          <i class=\"icon-bubbles\"></i> Support</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\n        <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n        </div>\n\n      </li>\n    </ol>\n\n  </nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Loading Spinners</div>\n        <span class=\"spinner-glow spinner-glow-primary mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-secondary mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-warning mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-danger mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-success mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-info mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-light mr-5\"></span>\n        <span class=\"spinner-glow spinner-glow-dark mr-5\"></span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Loading Spinners</div>\n        <div class=\"spinner spinner-primary mr-3\"></div>\n        <div class=\"spinner spinner-secondary mr-3\"></div>\n        <div class=\"spinner spinner-warning mr-3\"></div>\n        <div class=\"spinner spinner-danger mr-3\"></div>\n        <div class=\"spinner spinner-success mr-3\"></div>\n        <div class=\"spinner spinner-info mr-3\"></div>\n        <div class=\"spinner spinner-light mr-3\"></div>\n        <div class=\"spinner spinner-dark mr-3\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Loading Spinners</div>\n\n        <div class=\"spinner-bubble spinner-bubble-primary m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-secondary m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-warning m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-danger m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-success m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-info m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-light m-5\"></div>\n        <div class=\"spinner-bubble spinner-bubble-dark m-5\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Loading Spinners</div>\n        <div class=\"loader-bubble loader-bubble-primary m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-secondary m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-success m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-warning m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-danger m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-info m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-light m-5\"></div>\n        <div class=\"loader-bubble loader-bubble-dark m-5\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/loaders/loaders.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/loaders/loaders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.ts ***!
  \************************************************************/
/*! exports provided: LoadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersComponent", function() { return LoadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadersComponent = /** @class */ (function () {
    function LoadersComponent() {
    }
    LoadersComponent.prototype.ngOnInit = function () {
    };
    LoadersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loaders',
            template: __webpack_require__(/*! ./loaders.component.html */ "./src/app/views/ui-kits/loaders/loaders.component.html"),
            styles: [__webpack_require__(/*! ./loaders.component.scss */ "./src/app/views/ui-kits/loaders/loaders.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadersComponent);
    return LoadersComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/modals/modals.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-layers1 mr-1\"></i> UI Kits</a>\n    </li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Modals</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">\n          Basic Modal\n        </div>\n        <button class=\"btn btn-outline-primary\" (click)=\"open(modalBasic)\">Launch demo modal</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">\n          Confirm Modal\n        </div>\n        <button class=\"btn btn-outline-primary\" (click)=\"confirm(modalConfirm)\">Delete</button>\n        <p class=\"mb-0 mt-3\">{{confirmResut}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">\n          Large Content Modal\n        </div>\n        <button class=\"btn btn-outline-primary\" (click)=\"open(modalLong)\">Launch Modal</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">\n          Small Modal\n        </div>\n        <button class=\"btn btn-outline-primary\" (click)=\"openSmall(modalSmall)\">Launch Modal</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #modalBasic let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Modal Basic</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"picker1\">Date picker</label>\n        <div class=\"input-group\">\n          <input id=\"picker1\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" (click)=\"dp.toggle()\" type=\"button\">\n              <i class=\"icon-regular i-Calendar-4\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n<ng-template #modalConfirm let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-title\">Profile deletion</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close button\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><strong>Are you sure you want to delete <span class=\"text-primary\">\"John Doe\"</span> profile?</strong></p>\n    <p>All information associated to this user profile will be permanently deleted.\n      <span class=\"text-danger\">This operation can not be undone.</span>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel')\">Cancel</button>\n    <button type=\"button\" ngbAutofocus class=\"btn btn-danger\" (click)=\"modal.close('Ok')\">Ok</button>\n  </div>\n</ng-template>\n\n<ng-template #modalSmall let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Small Modal</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Lorem ipsum dolor sit amet consectetur.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('ok')\">Ok</button>\n  </div>\n</ng-template>\n\n<ng-template #modalLong let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Modal With large content</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?</p>\n\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum,\n      vero similique?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('ok')\">Ok</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/views/ui-kits/modals/modals.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/modals/modals.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.ngOnInit = function () {
    };
    ModalsComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    ModalsComponent.prototype.openSmall = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    ModalsComponent.prototype.confirm = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.confirmResut = "Closed with: " + result;
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/views/ui-kits/modals/modals.component.html"),
            styles: [__webpack_require__(/*! ./modals.component.scss */ "./src/app/views/ui-kits/modals/modals.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/ui-kits-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/ui-kits/ui-kits-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UiKitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitsRoutingModule", function() { return UiKitsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/views/ui-kits/buttons/buttons.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/views/ui-kits/cards/cards.component.ts");
/* harmony import */ var _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-ecommerce/cards-ecommerce.component */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts");
/* harmony import */ var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordions/accordions.component */ "./src/app/views/ui-kits/accordions/accordions.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/views/ui-kits/modals/modals.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/views/ui-kits/alerts/alerts.component.ts");
/* harmony import */ var _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-metrics/card-metrics.component */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.ts");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badges/badges.component */ "./src/app/views/ui-kits/badges/badges.component.ts");
/* harmony import */ var _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-widgets/card-widgets.component */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/views/ui-kits/loaders/loaders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'alerts',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"]
    },
    {
        path: 'accordions',
        component: _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__["AccordionsComponent"]
    },
    {
        path: 'badges',
        component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_9__["BadgesComponent"]
    },
    {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"]
    },
    {
        path: 'cards',
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
    },
    {
        path: 'cards-widget',
        component: _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_10__["CardWidgetsComponent"]
    },
    {
        path: 'cards-ecommerce',
        component: _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__["CardsEcommerceComponent"]
    },
    {
        path: 'cards-metrics',
        component: _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_8__["CardMetricsComponent"]
    },
    {
        path: 'modals',
        component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"]
    },
    {
        path: 'loaders',
        component: _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__["LoadersComponent"]
    }
];
var UiKitsRoutingModule = /** @class */ (function () {
    function UiKitsRoutingModule() {
    }
    UiKitsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UiKitsRoutingModule);
    return UiKitsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/ui-kits.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/ui-kits/ui-kits.module.ts ***!
  \*************************************************/
/*! exports provided: UiKitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitsModule", function() { return UiKitsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-kits-routing.module */ "./src/app/views/ui-kits/ui-kits-routing.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/views/ui-kits/buttons/buttons.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/views/ui-kits/cards/cards.component.ts");
/* harmony import */ var _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-ecommerce/cards-ecommerce.component */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordions/accordions.component */ "./src/app/views/ui-kits/accordions/accordions.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/views/ui-kits/modals/modals.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/views/ui-kits/alerts/alerts.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-metrics/card-metrics.component */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./badges/badges.component */ "./src/app/views/ui-kits/badges/badges.component.ts");
/* harmony import */ var _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card-widgets/card-widgets.component */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/views/ui-kits/loaders/loaders.component.ts");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var UiKitsModule = /** @class */ (function () {
    function UiKitsModule() {
    }
    UiKitsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_13__["NgxEchartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__["SharedComponentsModule"],
                _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiKitsRoutingModule"]
            ],
            declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"], _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["CardsEcommerceComponent"], _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__["AccordionsComponent"], _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__["ModalsComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__["AlertsComponent"], _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__["CardMetricsComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__["BadgesComponent"], _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__["CardWidgetsComponent"], _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__["LoadersComponent"]]
        })
    ], UiKitsModule);
    return UiKitsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-ui-kits-ui-kits-module.js.map
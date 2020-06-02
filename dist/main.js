(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/calendar/calendar.module": [
		"./src/app/views/calendar/calendar.module.ts",
		"views-calendar-calendar-module"
	],
	"./views/charts/charts.module": [
		"./src/app/views/charts/charts.module.ts",
		"default~views-charts-charts-module~views-dashboard-dashboard-module~views-ui-kits-ui-kits-module",
		"common",
		"views-charts-charts-module"
	],
	"./views/chat/chat.module": [
		"./src/app/views/chat/chat.module.ts",
		"views-chat-chat-module"
	],
	"./views/dashboard/dashboard.module": [
		"./src/app/views/dashboard/dashboard.module.ts",
		"default~views-dashboard-dashboard-module~views-data-tables-data-tables-module~views-ecommerce-ecomme~c6a6698a",
		"default~views-charts-charts-module~views-dashboard-dashboard-module~views-ui-kits-ui-kits-module",
		"common",
		"views-dashboard-dashboard-module"
	],
	"./views/data-tables/data-tables.module": [
		"./src/app/views/data-tables/data-tables.module.ts",
		"default~views-dashboard-dashboard-module~views-data-tables-data-tables-module~views-ecommerce-ecomme~c6a6698a",
		"common",
		"views-data-tables-data-tables-module"
	],
	"./views/ecommerce/ecommerce.module": [
		"./src/app/views/ecommerce/ecommerce.module.ts",
		"default~views-dashboard-dashboard-module~views-data-tables-data-tables-module~views-ecommerce-ecomme~c6a6698a",
		"common",
		"views-ecommerce-ecommerce-module"
	],
	"./views/forms/forms.module": [
		"./src/app/views/forms/forms.module.ts",
		"views-forms-forms-module"
	],
	"./views/inbox/inbox.module": [
		"./src/app/views/inbox/inbox.module.ts",
		"views-inbox-inbox-module"
	],
	"./views/others/others.module": [
		"./src/app/views/others/others.module.ts",
		"views-others-others-module"
	],
	"./views/sessions/sessions.module": [
		"./src/app/views/sessions/sessions.module.ts",
		"views-sessions-sessions-module"
	],
	"./views/ui-kits/ui-kits.module": [
		"./src/app/views/ui-kits/ui-kits.module.ts",
		"default~views-dashboard-dashboard-module~views-data-tables-data-tables-module~views-ecommerce-ecomme~c6a6698a",
		"default~views-charts-charts-module~views-dashboard-dashboard-module~views-ui-kits-ui-kits-module",
		"common",
		"views-ui-kits-ui-kits-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout/admin-layout.component */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/auth.gaurd */ "./src/app/shared/services/auth.gaurd.ts");
/* harmony import */ var _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/layouts/blank-layout/blank-layout.component */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'dashboard/v1',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"],
        children: [
            {
                path: 'sessions',
                loadChildren: './views/sessions/sessions.module#SessionsModule'
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_5__["BlankLayoutComponent"],
        children: [
            {
                path: 'others',
                loadChildren: './views/others/others.module#OthersModule'
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutComponent"],
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_4__["AuthGaurd"]],
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'uikits',
                loadChildren: './views/ui-kits/ui-kits.module#UiKitsModule'
            },
            {
                path: 'ecommerce',
                loadChildren: './views/ecommerce/ecommerce.module#EcommerceModule'
            },
            {
                path: 'forms',
                loadChildren: './views/forms/forms.module#AppFormsModule'
            },
            {
                path: 'charts',
                loadChildren: './views/charts/charts.module#ChartsModule'
            },
            {
                path: 'inbox',
                loadChildren: './views/inbox/inbox.module#InboxModule'
            },
            {
                path: 'calendar',
                loadChildren: './views/calendar/calendar.module#CalendarAppModule'
            },
            {
                path: 'chat',
                loadChildren: './views/chat/chat.module#ChatModule'
            },
            {
                path: 'tables',
                loadChildren: './views/data-tables/data-tables.module#DataTablesModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bootDash';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/inmemory-db/inmemory-db.service */ "./src/app/shared/inmemory-db/inmemory-db.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_8__["InMemoryDataService"], { passThruUnknownUrl: true }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/animations/shared-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/shared-animations.ts ***!
  \********************************************************/
/*! exports provided: SharedAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedAnimations", function() { return SharedAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var SharedAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
];


/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn {{btnClass}}\" [type]=\"type\" [disabled]=\"loading\" [ngClass]=\"{loading: loading}\">\n  <div class=\"btn-spinner float-left\" *ngIf=\"loading\"></div>\n  <span *ngIf=\"!loading\">  \n    <ng-content></ng-content>\n  </span>\n  <span *ngIf=\"loading\">{{loadingText}}</span>\n</button>"

/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  position: relative;\n  transition: all .15s ease-in-out; }\n  button.loading {\n    padding-left: 36px; }\n  button .btn-spinner {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    left: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.ts ***!
  \************************************************************************/
/*! exports provided: BtnLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnLoadingComponent", function() { return BtnLoadingComponent; });
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

var BtnLoadingComponent = /** @class */ (function () {
    function BtnLoadingComponent() {
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    BtnLoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('loading'),
        __metadata("design:type", Boolean)
    ], BtnLoadingComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('btnClass'),
        __metadata("design:type", String)
    ], BtnLoadingComponent.prototype, "btnClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('loadingText'),
        __metadata("design:type", String)
    ], BtnLoadingComponent.prototype, "loadingText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", String)
    ], BtnLoadingComponent.prototype, "type", void 0);
    BtnLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'btn-loading',
            template: __webpack_require__(/*! ./btn-loading.component.html */ "./src/app/shared/components/btn-loading/btn-loading.component.html"),
            styles: [__webpack_require__(/*! ./btn-loading.component.scss */ "./src/app/shared/components/btn-loading/btn-loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BtnLoadingComponent);
    return BtnLoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i [attr.data-feather]=\"name\"></i>"

/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIconComponent", function() { return FeatherIconComponent; });
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

var FeatherIconComponent = /** @class */ (function () {
    function FeatherIconComponent() {
    }
    FeatherIconComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            feather.replace();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", Object)
    ], FeatherIconComponent.prototype, "name", void 0);
    FeatherIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'feather-icon',
            template: __webpack_require__(/*! ./feather-icon.component.html */ "./src/app/shared/components/feather-icon/feather-icon.component.html"),
            styles: [__webpack_require__(/*! ./feather-icon.component.scss */ "./src/app/shared/components/feather-icon/feather-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatherIconComponent);
    return FeatherIconComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer o-hidden\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\t\t\t<p class=\"text-20 font-family-1 font-weight-400 mb-0\">Blumingo - Angular Bootstrap Admin Dashboard Template</p>\n\t\t\t<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero\n\t\t\t\tquis beatae officia saepe perferendis voluptatum minima eveniet voluptates dolorum,\n\t\t\t\ttemporibus nisi maxime\n\t\t\t\tnesciunt totam repudiandae commodi sequi dolor quibusdam sunt.</p>\n\t\t</div>\n\t</div>\n\t<div class=\"footer-bottom border-top pt-3 row\">\n\n\t\t<div class=\"left-side d-flex align-items-center col-md-6 col-sm-12\">\n\t\t\t<p class=\"m-0\">&copy; 2019.\n\t\t\t\t<a class=\"font-weight-500\" href=\"https://themeforest.net/item/blumingo-angular-bootstrap-admin-dashboard-template-ui-kit/23230012\"\n\t\t\t\t target=\"_blank\">Blumingo</a> by\n\t\t\t\t<a class=\"font-weight-500\" href=\"https://themeforest.net/user/mh_rafi/portfolio\">Mh. Rafi</a>\n\t\t\t</p>\n\t\t</div>\n\n\t\t<div class=\"right-side col-md-6 col-sm-12\">\n\n\t\t\t<a class=\"btn btn-link text-danger border-transparent\" href=\"https://themeforest.net/item/blumingo-angular-bootstrap-admin-dashboard-template-ui-kit/23230012\"\n\t\t\t target=\"_blank\">\n\t\t\t\t<i class=\"icon-shopping-cart\"></i>Purchase</a>\n\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n\n    <div id=\"toggle-sidebar\" class=\"menu-toggle\">\n        <div class=\"menu-icon\">\n            <i class=\"icon-menu5\"></i>\n        </div>\n    </div>\n\n    <div class=\"logo\">\n        <img class=\"logo-small\" src=\"./assets/images/logo@400.png\" alt=\"\">\n        <img class=\"logo-wide\" src=\"./assets/images/logo-wide.png\" alt=\"\">\n    </div>\n\n\n\n    <div class=\"d-flex align-items-center\">\n        <!-- Mega menu -->\n        <div ngbDropdown class=\"mega-menu d-md-block\">\n            <button ngbDropdownToggle class=\"btn text-muted dropdown-toggle mr-3\">Mega Menu</button>\n            <div ngbDropdownMenu perfectScrollbar>\n                <div class=\"row m-0\">\n                    <div class=\"col-md-4 p-4 bg-img\">\n                        <h2 class=\"title\">Mega Menu <br> Sidebar</h2>\n                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus\n                            laboriosam fugit, consequatur.\n                        </p>\n                        <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n                            Exercitationem odio amet eos dolore suscipit placeat.</p>\n                        <button class=\"btn btn-lg btn-rounded btn-outline-warning\">Learn More</button>\n                    </div>\n                    <div class=\"col-md-4 p-4\">\n                        <p class=\"text-primary text--cap border-bottom-primary d-inline-block\">Features</p>\n                        <div class=\"menu-icon-grid w-auto p-0\">\n                            <a routerLink=\"/dashboard/v1\"><i class=\"icon-home\"></i> Home</a>\n                            <a routerLink=\"/uikits/buttons\"><i class=\"icon-layers1\"></i> UI Kits</a>\n                            <a routerLink=\"/forms/actions\"><i class=\"icon-edit-pencil\"></i> Forms</a>\n                            <a routerLink=\"/charts/area\"><i class=\"icon-chart-bar\"></i> Charts</a>\n                            <a routerLink=\"/tables/basic\"><i class=\"icon-table2\"></i> Tables</a>\n                            <a routerLink=\"/sessions/signup\"><i class=\"icon-user-solid-circle\"></i> Sessions</a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 p-4\">\n                        <p class=\"text-primary text--cap border-bottom-primary d-inline-block\">Components</p>\n                        <ul class=\"links\">\n                            <li><a routerLink=\"/uikits/accordions\">Accordion</a></li>\n                            <li><a routerLink=\"/uikits/alerts\">Alerts</a></li>\n                            <li><a routerLink=\"/uikits/buttons\">Buttons</a></li>\n                            <li><a routerLink=\"/uikits/badges\">Badges</a></li>\n                            <li><a routerLink=\"/uikits/cards\">Cards</a></li>\n                            <li><a routerLink=\"/uikits/loaders\">Loaders</a></li>\n                            <li><a routerLink=\"/tables/basic\">Tables</a></li>\n                            <li><a routerLink=\"/tables/list\">Lists</a></li>\n                            <li><a routerLink=\"/forms/actions\">Form Actions</a></li>\n                            <li><a routerLink=\"/uikits/modals\">Modals</a></li>\n                            <li><a routerLink=\"/inbox\">Inbox</a></li>\n                            <li><a routerLink=\"/chat\">Chat</a></li>\n                            <li><a routerLink=\"/calendar\">Calendar</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Search bar -->\n        <div class=\"search-bar\">\n            <input type=\"text\" placeholder=\"Search\" (focus)=\"searchService.searchOpen = true\">\n            <i class=\"search-icon text-muted icon-search1\"></i>\n        </div>\n    </div>\n    <div style=\"margin: auto\"></div>\n    <div class=\"header-part-right\">\n        <div ngbDropdown [placement]=\"'bottom-right'\" class=\"d-sm-inline-block\">\n            <i class=\"icon-search1 text-muted header-icon\" role=\"button\" (click)=\"searchService.searchOpen = true\"></i>\n            <i ngbDropdownToggle class=\"icon-layers text-muted header-icon\" role=\"button\"></i>\n            <div ngbDropdownMenu>\n                <div class=\"menu-icon-grid\">\n                    <a routerLink=\"/dashboard/v1\"><i class=\"icon-home\"></i> Home</a>\n                    <a routerLink=\"/uikits/buttons\"><i class=\"icon-layers1\"></i> UI Kits</a>\n                    <a routerLink=\"/forms/actions\"><i class=\"icon-edit-pencil\"></i> Forms</a>\n                    <a routerLink=\"/charts/area\"><i class=\"icon-chart-bar\"></i> Charts</a>\n                    <a routerLink=\"/tables/basic\"><i class=\"icon-table2\"></i> Tables</a>\n                    <a routerLink=\"/sessions/signup\"><i class=\"icon-user-solid-circle\"></i> Sessions</a>\n                </div>\n            </div>\n        </div>\n        <div ngbDropdown [placement]=\"'bottom-right'\" class=\"\">\n            <div class=\"badge-top-container\">\n                <span class=\"badge badge-primary\">{{notifications.length}}</span>\n                <i class=\"icon-bell1 text-muted header-icon\" id=\"dropdownBasic1\" ngbDropdownToggle></i>\n            </div>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"notification-dropdown\" perfectScrollbar>\n                <div class=\"dropdown-item d-flex\" *ngFor=\"let item of notifications\" [routerLink]=\"[item.link]\">\n                    <div class=\"notification-icon\">\n                        <i class=\"{{item.icon}} text-{{item.status}} mr-1\"></i>\n                    </div>\n                    <div class=\"notification-details flex-grow-1\">\n                        <p class=\"m-0 d-flex align-items-center\">\n                            <span>{{item.title}}</span>\n                            <span class=\"badge badge-pill badge-{{item.status}} ml-1 mr-1\">{{item.badge}}</span>\n                            <span class=\"flex-grow-1\"></span>\n                            <span class=\"text-small text-muted ml-auto\">{{item.time | relativeTime}}</span>\n                        </p>\n                        <p class=\"text-small text-muted m-0\">{{item.text | excerpt:30}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div ngbDropdown [placement]=\"'bottom-right'\" class=\"user col align-self-end\">\n            <img src=\"./assets/images/faces/1.jpg\" id=\"userDropdown\" ngbDropdownToggle alt=\"\">\n\n            <div ngbDropdownMenu aria-labelledby=\"userDropdown\">\n                <div class=\"dropdown-header\">\n                    <i class=\"icon-user-solid-circle mr-1\"></i> Timothy Carlson\n                </div>\n                <button class=\"dropdown-item\">Account settings</button>\n                <button class=\"dropdown-item\">Billing history</button>\n                <button class=\"dropdown-item\" (click)=\"signout()\">Sign out</button>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navService, searchService, auth) {
        this.navService = navService;
        this.searchService = searchService;
        this.auth = auth;
        this.notifications = [
            {
                icon: 'icon-message-square',
                title: 'New message',
                badge: '3',
                text: 'James: Hey! are you busy?',
                time: new Date(),
                status: 'primary',
                link: '/chat'
            },
            {
                icon: 'icon-file-plus',
                title: 'New order received',
                badge: '$4036',
                text: '1 Headphone, 3 iPhone x',
                time: new Date('11/11/2018'),
                status: 'success',
                link: '/tables/full'
            },
            {
                icon: 'icon-box',
                title: '4 Products are out of stock',
                badge: '4',
                text: 'Headphone E67, R98, XL90, Q77',
                time: new Date('11/10/2018'),
                status: 'danger',
                link: '/tables/list'
            },
            {
                icon: 'icon-server',
                title: 'Server up!',
                badge: 'New',
                text: 'Server rebooted successfully',
                time: new Date('11/08/2018'),
                status: 'success',
                link: '/dashboard/v2'
            },
            {
                icon: 'icon-alert-triangle',
                title: 'Server down!',
                badge: 'New',
                text: 'Region 1: Server crashed!',
                time: new Date('11/06/2018'),
                status: 'danger',
                link: '/dashboard/v3'
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        if (!state.sidenavOpen) {
            return state.sidenavOpen = true;
        }
        if (state.childnavOpen && state.sidenavOpen) {
            return state.childnavOpen = false;
        }
        if (!state.childnavOpen && state.sidenavOpen) {
            return state.sidenavOpen = false;
        }
    };
    HeaderComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-admin-wrap sidebar-short\">\n    <div>\n        <app-header></app-header>\n    </div>\n    <div class=\"side-content-wrap\">\n        <app-sidebar></app-sidebar>\n    </div>\n    <div class=\"main-content-wrap d-flex flex-column\" \n    [ngClass]=\"{'sidenav-open': navService.sidebarState.sidenavOpen}\">\n        <router-outlet></router-outlet>\n        <div class=\"flex-grow-1\"></div>\n        <app-footer></app-footer>\n        <div class=\"module-loader\" *ngIf=\"moduleLoading\">\n            <div class=\"spinner spinner-bubble spinner-bubble-primary mr-3\"></div>\n        </div>\n    </div>\n</div>\n\n<app-search *ngIf=\"searchService.searchOpen\"></app-search>"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ResolveStart"]) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ResolveEnd"]) {
                _this.moduleLoading = false;
            }
        });
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_3__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-layout-wrap\"\n    style=\"background-image: url(./assets/images/bg-005.jpg)\">\n    <div class=\"auth-content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
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

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return BlankLayoutComponent; });
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

var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngOnInit = function () {
    };
    BlankLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-layout',
            template: __webpack_require__(/*! ./blank-layout.component.html */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.html"),
            styles: [__webpack_require__(/*! ./blank-layout.component.scss */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankLayoutComponent);
    return BlankLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-ui\" perfectScrollbar [@animate]=\"{value:'*',params:{y:'120px',opacity:'0',delay:'100ms', duration: '400ms'}}\">\n\t<div class=\"search-header\">\n\t\t<img src=\"./assets/images/logo.png\" alt=\"\" class=\"logo\">\n\t\t<button class=\"btn btn-icon bg-transparent float-right mt-2\" (click)=\"searchService.searchOpen = false\">\n\t\t\t<i class=\"icon-x-circle text-22 text-muted\"></i>\n\t\t</button>\n\t</div>\n\n\t<input type=\"text\" placeholder=\"Type here\" class=\"search-input\" [formControl]=\"searchCtrl\" autofocus>\n\n\t<div class=\"search-title\">\n\t\t<span class=\"text-light\">Search results</span>\n\t</div>\n\n\t<div class=\"search-results list-horizontal\">\n\t\t<div *ngFor=\"let item of results$ | async | paginate: { itemsPerPage: pageSize, currentPage: page }; let i = index;\"\n\t\t\tclass=\"list-item col-md-12 p-0\"\n\t\t\t[@animate]=\"{value:'*',params:{delay: (i*100)+'ms', y:'50px'}}\"\n\t\t>\n\t\t\t<div class=\"card o-hidden flex-row mb-4 d-flex\">\n\t\t\t\t<div class=\"list-thumb d-flex\">\n\t\t\t\t\t<!-- TUMBNAIL -->\n\t\t\t\t\t<img [src]=\"item.photo\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex-grow-1 pl-2 d-flex\">\n\t\t\t\t\t<div class=\"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row\">\n\t\t\t\t\t\t<!-- OTHER DATA -->\n\t\t\t\t\t\t<a href=\"\" class=\"w-40 w-sm-100\">\n\t\t\t\t\t\t<div class=\"item-title\">{{item.name}}</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p class=\"m-0 text-muted text-small w-15 w-sm-100\">Gadget</p>\n\t\t\t\t\t\t<p class=\"m-0 text-muted text-small w-15 w-sm-100\">\n\t\t\t\t\t\t{{item?.price?.sale | currency}}\n\t\t\t\t\t\t<del class=\"text-secondary\">{{item?.price?.previous | currency}}</del>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges\">\n\t\t\t\t\t\t<span class=\"badge badge-outline-{{item?.badge?.color}}\">{{item?.badge?.text}}</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- PAGINATION CONTROL -->\n\t<div class=\"col-md-12 mt-3\" *ngIf=\"results$ | async\">\n\t\t<pagination-controls (pageChange)=\"page = $event\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/shared/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(dl, searchService) {
        this.dl = dl;
        this.searchService = searchService;
        this.page = 1;
        this.pageSize = 6;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.results$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.dl.getProducts(), this.searchCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var products = _a[0], searchTerm = _a[1];
            return products.filter(function (p) {
                return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }));
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/shared/components/search/search.component.scss")],
            animations: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search/search.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/search/search.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "./src/app/shared/components/search/search.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
            ],
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
            exports: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/shared/components/shared-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn-loading/btn-loading.component */ "./src/app/shared/components/btn-loading/btn-loading.component.ts");
/* harmony import */ var _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feather-icon/feather-icon.component */ "./src/app/shared/components/feather-icon/feather-icon.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/blank-layout/blank-layout.component */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var components = [
    _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__["BtnLoadingComponent"],
    _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
    _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
    _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
    _layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_8__["BlankLayoutComponent"]
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_11__["SharedPipesModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_13__["SharedDirectivesModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_12__["SearchModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            declarations: components,
            exports: components
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-left\" perfectScrollbar>\n  <ul class=\"navigation-left\">\n    <li [ngClass]=\"{active: item.active}\" (click)=\"onClickChangeActiveFlag(item)\" class=\"nav-item lvl1\" *ngFor=\"let item of nav\">\n      <div class=\"nav-item-hold\" routerLink=\"{{item.state}}\" (click)=\"closeChildNav()\" *ngIf=\"item.type === 'link'\">\n        <i class=\"material-icons\">{{item.icon}}</i>\n      </div>\n\n      <div class=\"nav-item-hold\" data-id=\"{{item.name}}\" (click)=\"selectItem(item)\" (mouseover)=\"previewSecondaryItem(item)\"\n        *ngIf=\"item.type === 'dropDown'\">\n\n        <div class=\"mat-icon\">\n          <i [class]=\"item.icon\"></i>\n          <span class=\"nav-text\">{{item.name}}</span>\n        </div>\n\n      </div>\n\n      <div class=\"nav-item-hold\" *ngIf=\"item.type === 'extLink'\">\n        <a [href]=\"item.state\" target=\"_blank\">\n          <i [class]=\"'nav-icon '+ item.icon \"></i>\n        </a>\n      </div>\n\n    </li>\n  </ul>\n</div>\n\n<div class=\"sidebar-left-secondary\" perfectScrollbar>\n  <ng-container *ngTemplateOutlet=\"menuTemplate;context:{parentItem: selectedItem}\"></ng-container>\n</div>\n\n<ng-template #menuTemplate let-parentItem=\"parentItem\">\n\n  <div class=\"sidebar-header\">\n    <div class=\"sidebar-logo d-inline-block\">\n      <img src=\"./assets/images/logo.png\">\n    </div>\n    <p class=\"m-0 d-inline text-20 align-middle\">{{parentItem?.name}}</p>\n  </div>\n\n  <ul class=\"childNav\" appDropdown>\n    <li *ngFor=\"let item of parentItem?.sub\" appDropdownLink class=\"nav-item \">\n\n      <a routerLink=\"{{item.state}}\" *ngIf=\"item.type === 'link'\" class=\"\" routerLinkActive=\"open\">\n        <i [class]=\"'nav-icon '+ item.icon \"></i>\n        <span class=\"item-name lvl1\">{{item.name}}</span>\n      </a>\n\n      <div *ngIf=\"item.type === 'dropDown'\">\n        <a appDropdownToggle class=\"\" routerLinkActive=\"open\">\n          <i [class]=\"'nav-icon '+ item.icon \"></i>\n          <span class=\"item-name\">{{item.name}}</span>\n          <span class=\"dd-arrow lnr lnr-chevron-right\"></span>\n        </a>\n        <ng-container *ngTemplateOutlet=\"menuTemplate;context:{parentItem: item}\"></ng-container>\n      </div>\n\n    </li>\n  </ul>\n</ng-template>\n\n<div class=\"sidebar-overlay\"></div>"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, navService) {
        this.router = router;
        this.navService = navService;
        if (window && !window['routerEvent']) {
            window['routerEvent'] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_5__["getScript"]('./assets/js/app-sidebar.js');
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.routeSubscriber = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
            if (window) {
                window['routerEvent'].emit(routeChange);
            }
        });
        this.navService.menuItems$
            .subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        if (this.routeSubscriber) {
            this.routeSubscriber.unsubscribe();
        }
    };
    SidebarComponent.prototype.selectItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
        this.setActiveMainItem(item);
    };
    SidebarComponent.prototype.previewSecondaryItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
    };
    SidebarComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarComponent.prototype.setActiveMouseoverMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    item.active = true;
                    _this.selectedItem = item;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            item.active = true;
                            _this.selectedItem = item;
                        }
                    });
                }
            });
        }
    };
    SidebarComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarComponent.prototype, "onResize", null);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown-anchor.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownAnchorDirective.prototype, "onClick", null);
    DropdownAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])),
        __metadata("design:paramtypes", [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]])
    ], DropdownAnchorDirective);
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown-link.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DropdownLinkDirective.prototype, "open", null);
    DropdownLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]])
    ], DropdownLinkDirective);
    return DropdownLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppDropdownDirective);
    return AppDropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/scroll-to.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    ;
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ;
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToDirective.prototype, "smoothScroll", null);
    ScrollToDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[scrollTo]' }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('scrollTo')),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollToDirective);
    return ScrollToDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/shared-directives.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to.directive */ "./src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var directives = [
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownAnchorDirective"],
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownLinkDirective"],
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContainerDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContentDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarTogglerDirective"]
];
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: directives,
            exports: directives
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarContainerDirective, SidebarContentDirective, SidebarDirective, SidebarTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainerDirective", function() { return SidebarContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContentDirective", function() { return SidebarContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTogglerDirective", function() { return SidebarTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sidebar-helper.service */ "./src/app/shared/services/sidebar-helper.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SidebarContainerDirective = /** @class */ (function () {
    function SidebarContainerDirective(el, _sidenavHelperService) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.nativeEl = this.el.nativeElement;
        this.nativeEl.className += ' sidebar-container';
    }
    SidebarContainerDirective.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebarContainer'),
        __metadata("design:type", String)
    ], SidebarContainerDirective.prototype, "id", void 0);
    SidebarContainerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarContainer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"]])
    ], SidebarContainerDirective);
    return SidebarContainerDirective;
}());

var SidebarContentDirective = /** @class */ (function () {
    function SidebarContentDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.nativeEl = this.el.nativeElement;
        this.container.content = this;
        this.nativeEl.className += ' sidebar-content';
    }
    SidebarContentDirective.prototype.createBackdrop = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebarContent'),
        __metadata("design:type", String)
    ], SidebarContentDirective.prototype, "id", void 0);
    SidebarContentDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarContent]'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(SidebarContainerDirective)),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"],
            SidebarContainerDirective])
    ], SidebarContentDirective);
    return SidebarContentDirective;
}());

var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.align = 'left';
        this.mode = 'side';
        this.nativeEl = this.el.nativeElement;
        this.containerNativeEl = this.container.el.nativeElement;
        this.contentNativeEl = this.container.content.el.nativeElement;
        this.nativeEl.className += ' sidebar';
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.width = this.el.nativeElement.offsetWidth + 'px';
        this._sidenavHelperService.setSidenav(this.id, this);
        this.initSidebar();
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.initSidebar();
    };
    SidebarDirective.prototype.initSidebar = function () {
        this.closed = _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile();
        if (this.closed) {
            this.close();
        }
        else {
            this.open();
        }
    };
    SidebarDirective.prototype.open = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile()) {
                this.contentNativeEl.style.marginLeft = this.width;
            }
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile()) {
                this.contentNativeEl.style.marginRight = this.width;
            }
        }
        this.closed = false;
    };
    SidebarDirective.prototype.close = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = '-' + this.width;
            this.contentNativeEl.style.marginLeft = 0;
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = '-' + this.width;
            this.contentNativeEl.style.marginRight = 0;
        }
        this.closed = true;
    };
    SidebarDirective.prototype.toggle = function () {
        if (this.closed) {
            this.open();
        }
        else {
            this.close();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('align'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mode'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebar'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('closed'),
        __metadata("design:type", Boolean)
    ], SidebarDirective.prototype, "closed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    SidebarDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebar]'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(SidebarContainerDirective)),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"],
            SidebarContainerDirective])
    ], SidebarDirective);
    return SidebarDirective;
}());

var SidebarTogglerDirective = /** @class */ (function () {
    function SidebarTogglerDirective(_sidenavHelperService) {
        this._sidenavHelperService = _sidenavHelperService;
    }
    SidebarTogglerDirective.prototype.onClick = function () {
        this._sidenavHelperService.getSidenav(this.id).toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebarToggler'),
        __metadata("design:type", Object)
    ], SidebarTogglerDirective.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SidebarTogglerDirective.prototype, "onClick", null);
    SidebarTogglerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"]])
    ], SidebarTogglerDirective);
    return SidebarTogglerDirective;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/chat-db.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
  \***********************************************/
/*! exports provided: ChatDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDB", function() { return ChatDB; });
var ChatDB = /** @class */ (function () {
    function ChatDB() {
    }
    ChatDB.user = [
        {
            id: "7863a6802ez0e277a0f98534",
            name: "John Doe",
            avatar: "assets/images/faces/1.jpg",
            status: "online",
            chatInfo: [
                {
                    chatId: "89564a680b3249760ea21fe77",
                    contactId: "323sa680b3249760ea21rt47",
                    contactName: "Frank Powell",
                    unread: 4,
                    lastChatTime: "2017-06-12T02:10:18.931Z"
                },
                {
                    chatId: "3289564a680b2134760ea21fe7753",
                    contactId: "14663a3406eb47ffa63d4fec9429cb71",
                    contactName: "Betty Diaz",
                    unread: 0,
                    lastChatTime: "2017-06-12T02:10:18.931Z"
                }
            ]
        }
    ];
    ChatDB.contacts = [
        {
            id: "323sa680b3249760ea21rt47",
            name: "Frank Powell",
            avatar: "assets/images/faces/13.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "14663a3406eb47ffa63d4fec9429cb71",
            name: "Betty Diaz",
            avatar: "assets/images/faces/12.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "43bd9bc59d164b5aea498e3ae1c24c3c",
            name: "Brian Stephens",
            avatar: "assets/images/faces/3.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "3fc8e01f3ce649d1caf884fbf4f698e4",
            name: "Jacqueline Day",
            avatar: "assets/images/faces/16.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "e929b1d790ab49968ed8e34648553df4",
            name: "Arthur Mendoza",
            avatar: "assets/images/faces/10.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "d6caf04bba614632b5fecf91aebf4564",
            name: "Jeremy Lee",
            avatar: "assets/images/faces/9.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "be0fb188c8e242f097fafa24632107e4",
            name: "Johnny Newman",
            avatar: "assets/images/faces/5.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "dea902191b964a68ba5f2d93cff37e13",
            name: "Jeffrey Little",
            avatar: "assets/images/faces/15.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "0bf58f5ccc4543a9f8747350b7bda3c7",
            name: "Barbara Romero",
            avatar: "assets/images/faces/4.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "c5d7498bbcb84d81fc72168871ac6a6e",
            name: "Daniel James",
            avatar: "assets/images/faces/2.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "97bfbdd9413e46efdaca2010400fe18c",
            name: "Alice Sanders",
            avatar: "assets/images/faces/17.jpg",
            status: "offline",
            mood: ""
        }
    ];
    ChatDB.chatCollection = [
        {
            id: "89564a680b3249760ea21fe77",
            chats: [
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Do you ever find yourself falling into the “discount trap?”",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Giving away your knowledge or product just to gain clients?",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Yes",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Don’t feel bad. It happens to a lot of us",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Do you ever find yourself falling into the “discount trap?”",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Giving away your knowledge or product just to gain clients?",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Yes",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Don’t feel bad. It happens to a lot of us",
                    time: "2018-02-32T08:45:28.291Z"
                }
            ]
        },
        {
            id: "3289564a680b2134760ea21fe7753",
            chats: [
                {
                    contactId: "14663a3406eb47ffa63d4fec9429cb71",
                    text: "Do you ever find yourself falling into the “discount trap?”",
                    time: "2018-03-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Giving away your knowledge or product just to gain clients?",
                    time: "2018-03-32T08:45:28.291Z"
                },
                {
                    contactId: "14663a3406eb47ffa63d4fec9429cb71",
                    text: "Yes",
                    time: "2018-03-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Don’t feel bad. It happens to a lot of us",
                    time: "2018-03-32T08:45:28.291Z"
                }
            ]
        }
    ];
    return ChatDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/countries.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/inmemory-db/countries.ts ***!
  \*************************************************/
/*! exports provided: CountryDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDB", function() { return CountryDB; });
var CountryDB = /** @class */ (function () {
    function CountryDB() {
    }
    CountryDB.countries = [
        { display: 'Afghanistan', value: 'AF' },
        { display: 'Åland Islands', value: 'AX' },
        { display: 'Albania', value: 'AL' },
        { display: 'Algeria', value: 'DZ' },
        { display: 'American Samoa', value: 'AS' },
        { display: 'AndorrA', value: 'AD' },
        { display: 'Angola', value: 'AO' },
        { display: 'Anguilla', value: 'AI' },
        { display: 'Antarctica', value: 'AQ' },
        { display: 'Antigua and Barbuda', value: 'AG' },
        { display: 'Argentina', value: 'AR' },
        { display: 'Armenia', value: 'AM' },
        { display: 'Aruba', value: 'AW' },
        { display: 'Australia', value: 'AU' },
        { display: 'Austria', value: 'AT' },
        { display: 'Azerbaijan', value: 'AZ' },
        { display: 'Bahamas', value: 'BS' },
        { display: 'Bahrain', value: 'BH' },
        { display: 'Bangladesh', value: 'BD' },
        { display: 'Barbados', value: 'BB' },
        { display: 'Belarus', value: 'BY' },
        { display: 'Belgium', value: 'BE' },
        { display: 'Belize', value: 'BZ' },
        { display: 'Benin', value: 'BJ' },
        { display: 'Bermuda', value: 'BM' },
        { display: 'Bhutan', value: 'BT' },
        { display: 'Bolivia', value: 'BO' },
        { display: 'Bosnia and Herzegovina', value: 'BA' },
        { display: 'Botswana', value: 'BW' },
        { display: 'Bouvet Island', value: 'BV' },
        { display: 'Brazil', value: 'BR' },
        { display: 'British Indian Ocean Territory', value: 'IO' },
        { display: 'Brunei Darussalam', value: 'BN' },
        { display: 'Bulgaria', value: 'BG' },
        { display: 'Burkina Faso', value: 'BF' },
        { display: 'Burundi', value: 'BI' },
        { display: 'Cambodia', value: 'KH' },
        { display: 'Cameroon', value: 'CM' },
        { display: 'Canada', value: 'CA' },
        { display: 'Cape Verde', value: 'CV' },
        { display: 'Cayman Islands', value: 'KY' },
        { display: 'Central African Republic', value: 'CF' },
        { display: 'Chad', value: 'TD' },
        { display: 'Chile', value: 'CL' },
        { display: 'China', value: 'CN' },
        { display: 'Christmas Island', value: 'CX' },
        { display: 'Cocos (Keeling) Islands', value: 'CC' },
        { display: 'Colombia', value: 'CO' },
        { display: 'Comoros', value: 'KM' },
        { display: 'Congo', value: 'CG' },
        { display: 'Congo, The Democratic Republic of the', value: 'CD' },
        { display: 'Cook Islands', value: 'CK' },
        { display: 'Costa Rica', value: 'CR' },
        { display: 'Cote D\'Ivoire', value: 'CI' },
        { display: 'Croatia', value: 'HR' },
        { display: 'Cuba', value: 'CU' },
        { display: 'Cyprus', value: 'CY' },
        { display: 'Czech Republic', value: 'CZ' },
        { display: 'Denmark', value: 'DK' },
        { display: 'Djibouti', value: 'DJ' },
        { display: 'Dominica', value: 'DM' },
        { display: 'Dominican Republic', value: 'DO' },
        { display: 'Ecuador', value: 'EC' },
        { display: 'Egypt', value: 'EG' },
        { display: 'El Salvador', value: 'SV' },
        { display: 'Equatorial Guinea', value: 'GQ' },
        { display: 'Eritrea', value: 'ER' },
        { display: 'Estonia', value: 'EE' },
        { display: 'Ethiopia', value: 'ET' },
        { display: 'Falkland Islands (Malvinas)', value: 'FK' },
        { display: 'Faroe Islands', value: 'FO' },
        { display: 'Fiji', value: 'FJ' },
        { display: 'Finland', value: 'FI' },
        { display: 'France', value: 'FR' },
        { display: 'French Guiana', value: 'GF' },
        { display: 'French Polynesia', value: 'PF' },
        { display: 'French Southern Territories', value: 'TF' },
        { display: 'Gabon', value: 'GA' },
        { display: 'Gambia', value: 'GM' },
        { display: 'Georgia', value: 'GE' },
        { display: 'Germany', value: 'DE' },
        { display: 'Ghana', value: 'GH' },
        { display: 'Gibraltar', value: 'GI' },
        { display: 'Greece', value: 'GR' },
        { display: 'Greenland', value: 'GL' },
        { display: 'Grenada', value: 'GD' },
        { display: 'Guadeloupe', value: 'GP' },
        { display: 'Guam', value: 'GU' },
        { display: 'Guatemala', value: 'GT' },
        { display: 'Guernsey', value: 'GG' },
        { display: 'Guinea', value: 'GN' },
        { display: 'Guinea-Bissau', value: 'GW' },
        { display: 'Guyana', value: 'GY' },
        { display: 'Haiti', value: 'HT' },
        { display: 'Heard Island and Mcdonald Islands', value: 'HM' },
        { display: 'Holy See (Vatican City State)', value: 'VA' },
        { display: 'Honduras', value: 'HN' },
        { display: 'Hong Kong', value: 'HK' },
        { display: 'Hungary', value: 'HU' },
        { display: 'Iceland', value: 'IS' },
        { display: 'India', value: 'IN' },
        { display: 'Indonesia', value: 'ID' },
        { display: 'Iran, Islamic Republic Of', value: 'IR' },
        { display: 'Iraq', value: 'IQ' },
        { display: 'Ireland', value: 'IE' },
        { display: 'Isle of Man', value: 'IM' },
        { display: 'Israel', value: 'IL' },
        { display: 'Italy', value: 'IT' },
        { display: 'Jamaica', value: 'JM' },
        { display: 'Japan', value: 'JP' },
        { display: 'Jersey', value: 'JE' },
        { display: 'Jordan', value: 'JO' },
        { display: 'Kazakhstan', value: 'KZ' },
        { display: 'Kenya', value: 'KE' },
        { display: 'Kiribati', value: 'KI' },
        { display: 'Korea, Democratic People\'S Republic of', value: 'KP' },
        { display: 'Korea, Republic of', value: 'KR' },
        { display: 'Kuwait', value: 'KW' },
        { display: 'Kyrgyzstan', value: 'KG' },
        { display: 'Lao People\'S Democratic Republic', value: 'LA' },
        { display: 'Latvia', value: 'LV' },
        { display: 'Lebanon', value: 'LB' },
        { display: 'Lesotho', value: 'LS' },
        { display: 'Liberia', value: 'LR' },
        { display: 'Libyan Arab Jamahiriya', value: 'LY' },
        { display: 'Liechtenstein', value: 'LI' },
        { display: 'Lithuania', value: 'LT' },
        { display: 'Luxembourg', value: 'LU' },
        { display: 'Macao', value: 'MO' },
        { display: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
        { display: 'Madagascar', value: 'MG' },
        { display: 'Malawi', value: 'MW' },
        { display: 'Malaysia', value: 'MY' },
        { display: 'Maldives', value: 'MV' },
        { display: 'Mali', value: 'ML' },
        { display: 'Malta', value: 'MT' },
        { display: 'Marshall Islands', value: 'MH' },
        { display: 'Martinique', value: 'MQ' },
        { display: 'Mauritania', value: 'MR' },
        { display: 'Mauritius', value: 'MU' },
        { display: 'Mayotte', value: 'YT' },
        { display: 'Mexico', value: 'MX' },
        { display: 'Micronesia, Federated States of', value: 'FM' },
        { display: 'Moldova, Republic of', value: 'MD' },
        { display: 'Monaco', value: 'MC' },
        { display: 'Mongolia', value: 'MN' },
        { display: 'Montserrat', value: 'MS' },
        { display: 'Morocco', value: 'MA' },
        { display: 'Mozambique', value: 'MZ' },
        { display: 'Myanmar', value: 'MM' },
        { display: 'Namibia', value: 'NA' },
        { display: 'Nauru', value: 'NR' },
        { display: 'Nepal', value: 'NP' },
        { display: 'Netherlands', value: 'NL' },
        { display: 'Netherlands Antilles', value: 'AN' },
        { display: 'New Caledonia', value: 'NC' },
        { display: 'New Zealand', value: 'NZ' },
        { display: 'Nicaragua', value: 'NI' },
        { display: 'Niger', value: 'NE' },
        { display: 'Nigeria', value: 'NG' },
        { display: 'Niue', value: 'NU' },
        { display: 'Norfolk Island', value: 'NF' },
        { display: 'Northern Mariana Islands', value: 'MP' },
        { display: 'Norway', value: 'NO' },
        { display: 'Oman', value: 'OM' },
        { display: 'Pakistan', value: 'PK' },
        { display: 'Palau', value: 'PW' },
        { display: 'Palestinian Territory, Occupied', value: 'PS' },
        { display: 'Panama', value: 'PA' },
        { display: 'Papua New Guinea', value: 'PG' },
        { display: 'Paraguay', value: 'PY' },
        { display: 'Peru', value: 'PE' },
        { display: 'Philippines', value: 'PH' },
        { display: 'Pitcairn', value: 'PN' },
        { display: 'Poland', value: 'PL' },
        { display: 'Portugal', value: 'PT' },
        { display: 'Puerto Rico', value: 'PR' },
        { display: 'Qatar', value: 'QA' },
        { display: 'Reunion', value: 'RE' },
        { display: 'Romania', value: 'RO' },
        { display: 'Russian Federation', value: 'RU' },
        { display: 'RWANDA', value: 'RW' },
        { display: 'Saint Helena', value: 'SH' },
        { display: 'Saint Kitts and Nevis', value: 'KN' },
        { display: 'Saint Lucia', value: 'LC' },
        { display: 'Saint Pierre and Miquelon', value: 'PM' },
        { display: 'Saint Vincent and the Grenadines', value: 'VC' },
        { display: 'Samoa', value: 'WS' },
        { display: 'San Marino', value: 'SM' },
        { display: 'Sao Tome and Principe', value: 'ST' },
        { display: 'Saudi Arabia', value: 'SA' },
        { display: 'Senegal', value: 'SN' },
        { display: 'Serbia and Montenegro', value: 'CS' },
        { display: 'Seychelles', value: 'SC' },
        { display: 'Sierra Leone', value: 'SL' },
        { display: 'Singapore', value: 'SG' },
        { display: 'Slovakia', value: 'SK' },
        { display: 'Slovenia', value: 'SI' },
        { display: 'Solomon Islands', value: 'SB' },
        { display: 'Somalia', value: 'SO' },
        { display: 'South Africa', value: 'ZA' },
        { display: 'South Georgia and the South Sandwich Islands', value: 'GS' },
        { display: 'Spain', value: 'ES' },
        { display: 'Sri Lanka', value: 'LK' },
        { display: 'Sudan', value: 'SD' },
        { display: 'Suridisplay', value: 'SR' },
        { display: 'Svalbard and Jan Mayen', value: 'SJ' },
        { display: 'Swaziland', value: 'SZ' },
        { display: 'Sweden', value: 'SE' },
        { display: 'Switzerland', value: 'CH' },
        { display: 'Syrian Arab Republic', value: 'SY' },
        { display: 'Taiwan, Province of China', value: 'TW' },
        { display: 'Tajikistan', value: 'TJ' },
        { display: 'Tanzania, United Republic of', value: 'TZ' },
        { display: 'Thailand', value: 'TH' },
        { display: 'Timor-Leste', value: 'TL' },
        { display: 'Togo', value: 'TG' },
        { display: 'Tokelau', value: 'TK' },
        { display: 'Tonga', value: 'TO' },
        { display: 'Trinidad and Tobago', value: 'TT' },
        { display: 'Tunisia', value: 'TN' },
        { display: 'Turkey', value: 'TR' },
        { display: 'Turkmenistan', value: 'TM' },
        { display: 'Turks and Caicos Islands', value: 'TC' },
        { display: 'Tuvalu', value: 'TV' },
        { display: 'Uganda', value: 'UG' },
        { display: 'Ukraine', value: 'UA' },
        { display: 'United Arab Emirates', value: 'AE' },
        { display: 'United Kingdom', value: 'GB' },
        { display: 'United States', value: 'US' },
        { display: 'United States Minor Outlying Islands', value: 'UM' },
        { display: 'Uruguay', value: 'UY' },
        { display: 'Uzbekistan', value: 'UZ' },
        { display: 'Vanuatu', value: 'VU' },
        { display: 'Venezuela', value: 'VE' },
        { display: 'Viet Nam', value: 'VN' },
        { display: 'Virgin Islands, British', value: 'VG' },
        { display: 'Virgin Islands, U.S.', value: 'VI' },
        { display: 'Wallis and Futuna', value: 'WF' },
        { display: 'Western Sahara', value: 'EH' },
        { display: 'Yemen', value: 'YE' },
        { display: 'Zambia', value: 'ZM' },
        { display: 'Zimbabwe', value: 'ZW' }
    ];
    return CountryDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/inmemory-db.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
  \***********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./src/app/shared/inmemory-db/products.ts");
/* harmony import */ var _mails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mails */ "./src/app/shared/inmemory-db/mails.ts");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries */ "./src/app/shared/inmemory-db/countries.ts");
/* harmony import */ var _chat_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-db */ "./src/app/shared/inmemory-db/chat-db.ts");




var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'products': _products__WEBPACK_IMPORTED_MODULE_0__["ProductDB"].products,
            'mails': _mails__WEBPACK_IMPORTED_MODULE_1__["MailDB"].messages,
            'countries': _countries__WEBPACK_IMPORTED_MODULE_2__["CountryDB"].countries,
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].user
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/mails.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/mails.ts ***!
  \*********************************************/
/*! exports provided: MailDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDB", function() { return MailDB; });
var MailDB = /** @class */ (function () {
    function MailDB() {
    }
    MailDB.messages = [
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('1/25/2018'),
            selected: false,
            subject: 'Welcome to Angular World',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/3.jpg'
            },
            date: new Date('4/3/2017'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/4.jpg'
            },
            date: new Date('1/20/2017'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/5.jpg'
            },
            date: new Date('1/8/2017'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/9.jpg'
            },
            date: new Date('10/3/2016'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/10.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/15.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/12.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/13.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/16.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/17.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('10/3/2012'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        }
    ];
    return MailDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/products.ts":
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/products.ts ***!
  \************************************************/
/*! exports provided: ProductDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDB", function() { return ProductDB; });
var ProductDB = /** @class */ (function () {
    function ProductDB() {
    }
    ProductDB.products = [
        {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Liberty Solar Plant',
            'originator': 'Fields Renewables Inc.',
            'size': 30000000,
            'rate': 0.06,
            'type': [
                'PRIVATE LOAN',
                'SOLAR BOND',
                'TRANSITION BOND'
            ],
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': 'https://images.unsplash.com/photo-1586366461834-d2d65d725a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
            'gallery': [
                '/assets/images/products/speaker-1.jpg',
                '/assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048bbe',
            'name': 'Plants Renovation',
            'originator': 'Sundesk Industries',
            'size': 25000000,
            'rate': 0.043,
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': 'https://images.unsplash.com/photo-1539186607619-df476afe6ff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            'gallery': [
                '/assets/images/products/speaker-1.jpg',
                '/assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae210d9a8d6dda7256417',
            'name': '5Y High Yield Notes',
            'originator': 'Mount Syndicate',
            'size': 140000000,
            'rate': 0.073,
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': 'https://images.unsplash.com/photo-1505547828843-176834e42154?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210e8329237332e56d7',
            'name': 'RMBS Multi-Tranche',
            'originator': 'Commercial Corp.',
            'size': 200000000,
            'rate': 0.083,
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': 'https://images.unsplash.com/photo-1524633712235-22da046738b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            'gallery': [
                '/assets/images/products/watch-1.jpg',
                '/assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '10% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210cb9937d28c6eca1a',
            'name': 'Fleet Renovation',
            'originator': 'Mediterranean Shipping',
            'size': 50000000,
            'rate': 0.1,
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': 'https://images.unsplash.com/photo-1551403793-9beb68d417af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            'gallery': [
                '/assets/images/products/watch-1.jpg',
                '/assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '4% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': '/assets/images/products/headphone-3.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$4 off',
                'color': 'success'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92e27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': '/assets/images/products/headphone-4.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$5 off',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2108970b01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': '/assets/images/products/iphone-2.jpg',
            'gallery': [
                '/assets/images/products/iphone-1.jpg',
                '/assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c04707145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': '/assets/images/products/iphone-1.jpg',
            'gallery': [
                '/assets/images/products/iphone-1.jpg',
                '/assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': '/assets/images/products/headphone-1.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }, {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': '/assets/images/products/speaker-1.jpg',
            'gallery': [
                '/assets/images/products/speaker-1.jpg',
                '/assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048dsbbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': '/assets/images/products/speaker-2.jpg',
            'gallery': [
                '/assets/images/products/speaker-1.jpg',
                '/assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2sd10d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': '/assets/images/products/headphone-2.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'warning'
            }
        },
        {
            '_id': '5a9ae210e8329fs237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': '/assets/images/products/watch-1.jpg',
            'gallery': [
                '/assets/images/products/watch-1.jpg',
                '/assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae210cba9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': '/assets/images/products/watch-2.jpg',
            'gallery': [
                '/assets/images/products/watch-1.jpg',
                '/assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5ad9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': '/assets/images/products/headphone-3.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92fe27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': '/assets/images/products/headphone-4.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2108970bs01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': '/assets/images/products/iphone-2.jpg',
            'gallery': [
                '/assets/images/products/iphone-1.jpg',
                '/assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c0470f7145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': '/assets/images/products/iphone-1.jpg',
            'gallery': [
                '/assets/images/products/iphone-1.jpg',
                '/assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9aef21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': '/assets/images/products/headphone-1.jpg',
            'gallery': [
                '/assets/images/products/headphone-1.jpg',
                '/assets/images/products/headphone-2.jpg',
                '/assets/images/products/headphone-3.jpg',
                '/assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }
    ];
    return ProductDB;
}());



/***/ }),

/***/ "./src/app/shared/pipes/excerpt.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit)
            return text;
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'excerpt' })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/get-value-by-key.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetValueByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function() { return GetValueByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "getValueByKey",
            pure: false
        })
    ], GetValueByKeyPipe);
    return GetValueByKeyPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/relative-time.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date))
            value = new Date(value);
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };
    RelativeTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'relativeTime' })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excerpt.pipe */ "./src/app/shared/pipes/excerpt.pipe.ts");
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-value-by-key.pipe */ "./src/app/shared/pipes/get-value-by-key.pipe.ts");
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative-time.pipe */ "./src/app/shared/pipes/relative-time.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pipes = [
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__["ExcerptPipe"],
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__["GetValueByKeyPipe"],
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__["RelativeTimePipe"]
];
var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: pipes,
            exports: pipes
        })
    ], SharedPipesModule);
    return SharedPipesModule;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.gaurd.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.gaurd.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.auth.authenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/sessions/signin');
        }
    };
    AuthGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-store.service */ "./src/app/shared/services/local-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(store, router) {
        this.store = store;
        this.router = router;
        this.authenticated = false;
        this.checkAuth();
    }
    AuthService.prototype.checkAuth = function () {
        this.authenticated = this.store.getItem('demo_login_status');
    };
    AuthService.prototype.getuser = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    };
    AuthService.prototype.signin = function () {
        this.authenticated = true;
        this.store.setItem('demo_login_status', true);
    };
    AuthService.prototype.signout = function () {
        this.authenticated = false;
        this.store.setItem('demo_login_status', false);
        this.router.navigateByUrl('/sessions/signin');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/data-layer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/data-layer.service.ts ***!
  \*******************************************************/
/*! exports provided: DataLayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerService", function() { return DataLayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataLayerService = /** @class */ (function () {
    function DataLayerService(http) {
        this.http = http;
    }
    DataLayerService.prototype.getMails = function () {
        return this.http.get('/api/mails');
    };
    DataLayerService.prototype.getCountries = function () {
        return this.http.get('/api/countries');
    };
    DataLayerService.prototype.getProducts = function () {
        return this.http.get('api/products');
    };
    DataLayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataLayerService);
    return DataLayerService;
}());



/***/ }),

/***/ "./src/app/shared/services/local-store.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreService", function() { return LocalStoreService; });
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

var LocalStoreService = /** @class */ (function () {
    function LocalStoreService() {
        this.ls = window.localStorage;
    }
    LocalStoreService.prototype.setItem = function (key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    };
    LocalStoreService.prototype.getItem = function (key) {
        var value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            // console.log(e)
            return null;
        }
    };
    LocalStoreService.prototype.clear = function () {
        this.ls.clear();
    };
    LocalStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStoreService);
    return LocalStoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/navigation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.sidebarState = {
            sidenavOpen: true,
            childnavOpen: false
        };
        this.defaultMenu = [
            {
                name: 'Dashboard',
                type: 'dropDown',
                icon: 'icon-home',
                sub: [
                    { icon: 'icon-activity', name: 'Analytics', state: '/dashboard/v1', type: 'link' },
                    { icon: 'icon-pie-chart1', name: 'Sales', state: '/dashboard/v2', type: 'link' },
                    { icon: 'icon-bar-chart-2', name: 'Campaign', state: '/dashboard/v3', type: 'link' },
                    { icon: 'icon-credit-card1', name: 'Finance', state: '/dashboard/v4', type: 'link' },
                    { icon: 'icon-trending-up', name: 'Stock', state: '/dashboard/v5', type: 'link' },
                    { icon: 'icon-package', name: 'Fund Managent', state: '/dashboard/v6', type: 'link' },
                    { icon: 'icon-calendar1', name: 'Event', state: '/dashboard/v7', type: 'link' },
                    { icon: 'icon-gift1', name: 'Bonus', state: '/dashboard/v8', type: 'link' },
                ]
            },
            {
                name: 'UI kits',
                type: 'dropDown',
                icon: 'icon-layers1',
                sub: [
                    { icon: 'icon-alert-triangle', name: 'Alerts', state: '/uikits/alerts', type: 'link' },
                    { icon: 'icon-chevrons-down', name: 'Accordions', state: '/uikits/accordions', type: 'link' },
                    { icon: 'icon-award', name: 'Badges', state: '/uikits/badges', type: 'link' },
                    { icon: 'icon-arrow-right-circle', name: 'Buttons', state: '/uikits/buttons', type: 'link' },
                    { icon: 'icon-copy1', name: 'Cards', state: '/uikits/cards', type: 'link' },
                    { icon: 'icon-box', name: 'Cards widget', state: '/uikits/cards-widget', type: 'link' },
                    { icon: 'icon-bar-chart', name: 'Cards metrics', state: '/uikits/cards-metrics', type: 'link' },
                    { icon: 'icon-shopping-bag', name: 'Cards ecommerce', state: '/uikits/cards-ecommerce', type: 'link' },
                    { icon: 'icon-square', name: 'Modals', state: '/uikits/modals', type: 'link' },
                    { icon: 'icon-loader', name: 'Loaders', state: '/uikits/loaders', type: 'link' },
                ]
            },
            // {
            //   name: 'Ecommerce',
            //   type: 'dropDown',
            //   icon: 'icon-shopping-bag',
            //   sub: [
            //     { icon: 'icon-package', name: 'Products', state: '/ecommerce/products', type: 'link' },
            //     { icon: 'icon-book-open', name: 'Product Details', state: '/ecommerce/product-details', type: 'link' },
            //     { icon: 'icon-shopping-cart', name: 'Cart', state: '/ecommerce/cart', type: 'link' },
            //     { icon: 'icon-credit-card1', name: 'Checkout', state: '/ecommerce/checkout', type: 'link' }
            //   ]
            // },
            {
                name: 'Forms',
                type: 'dropDown',
                icon: 'icon-edit-pencil',
                sub: [
                    { icon: 'icon-book-open', name: 'Basic Inputs', state: '/forms/basic', type: 'link' },
                    { icon: 'icon-bookmark1', name: 'Tag Input', state: '/forms/tag-input', type: 'link' },
                    { icon: 'icon-edit', name: 'Input Group', state: '/forms/input-group', type: 'link' },
                    { icon: 'icon-grid', name: 'Input Grids', state: '/forms/input-grids', type: 'link' },
                    { icon: 'icon-zap', name: 'Actions', state: '/forms/actions', type: 'link' },
                    { icon: 'icon-magic-wand', name: 'Wizards', state: '/forms/wizard', type: 'link' },
                    { icon: 'icon-check-square', name: 'Validation', state: '/forms/validation', type: 'link' },
                    { icon: 'icon-layout', name: 'Layouts', state: '/forms/layouts', type: 'link' },
                    { icon: 'icon-crop1', name: 'Image Cropper', state: '/forms/img-cropper', type: 'link' },
                ]
            },
            {
                name: 'Charts',
                type: 'dropDown',
                icon: 'icon-chart-bar',
                sub: [
                    { icon: 'icon-activity', name: 'Line Charts', state: '/charts/line', type: 'link' },
                    { icon: 'icon-chart', name: 'Area Charts', state: '/charts/area', type: 'link' },
                    { icon: 'icon-bar-chart-2', name: 'Bar Charts', state: '/charts/bar', type: 'link' },
                    { icon: 'icon-pie-chart1', name: 'Pai & Donut', state: '/charts/pai', type: 'link' },
                    { icon: 'icon-time', name: 'Timeriver', state: '/charts/timeriver', type: 'link' },
                    { icon: 'icon-sliders', name: 'Candlestick', state: '/charts/candlestick', type: 'link' },
                    { icon: 'icon-sun1', name: 'Heatmap', state: '/charts/heatmap', type: 'link' },
                    { icon: 'icon-load-balancer', name: 'Treemap', state: '/charts/treemap', type: 'link' },
                ]
            },
            {
                name: 'Data Tables',
                type: 'dropDown',
                icon: 'icon-view-column',
                sub: [
                    { icon: 'icon-align-justify', name: 'Basic Tables', state: '/tables/basic', type: 'link' },
                    { icon: 'icon-list1', name: 'List', state: '/tables/list', type: 'link' },
                    { icon: 'icon-maximize', name: 'Fullscreen', state: '/tables/full', type: 'link' },
                    { icon: 'icon-book-open', name: 'Paging', state: '/tables/paging', type: 'link' },
                    { icon: 'icon-filter1', name: 'Filter', state: '/tables/filter', type: 'link' },
                ]
            },
            {
                name: 'Apps',
                type: 'dropDown',
                icon: 'icon-inbox-download',
                sub: [
                    { icon: 'icon-inbox', name: 'Inbox', state: '/inbox', type: 'link' },
                    { icon: 'icon-message-square', name: 'Chat', state: '/chat', type: 'link' },
                    { icon: 'icon-calendar1', name: 'Calendar', state: '/calendar', type: 'link' },
                ]
            },
            {
                name: 'Sessions',
                type: 'dropDown',
                icon: 'icon-user-solid-circle',
                sub: [
                    { icon: 'icon-log-in', name: 'Sign up', state: '/sessions/signup', type: 'link' },
                    { icon: 'icon-log-out', name: 'Sign in', state: '/sessions/signin', type: 'link' },
                    { icon: 'icon-users1', name: 'Forgot', state: '/sessions/forgot', type: 'link' }
                ]
            },
            {
                name: 'Others',
                type: 'dropDown',
                icon: 'icon-stroke-width',
                sub: [
                    { icon: 'icon-window', name: 'Not found', state: '/others/404', type: 'link' }
                ]
            }
        ];
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
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

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/services/sidebar-helper.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/sidebar-helper.service.ts ***!
  \***********************************************************/
/*! exports provided: SidebarHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHelperService", function() { return SidebarHelperService; });
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

var SidebarHelperService = /** @class */ (function () {
    function SidebarHelperService() {
        this.sidenavInstances = [];
    }
    /**
     * Set sidenav
     *
     * @param id
     * @param instance
     */
    SidebarHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    /**
     * Get sidenav
     *
     * @param id
     * @returns {any}
     */
    SidebarHelperService.prototype.getSidenav = function (id) {
        console.log(this.sidenavInstances);
        return this.sidenavInstances[id];
    };
    SidebarHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarHelperService);
    return SidebarHelperService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isMobile = function () {
        return window && window.matchMedia("(max-width: 767px)").matches;
    };
    Utils.ngbDateToDate = function (ngbDate) {
        if (!ngbDate) {
            return null;
        }
        return new Date(ngbDate.month + "/" + ngbDate.day + "/" + ngbDate.year);
    };
    Utils.dateToNgbDate = function (date) {
        if (!date) {
            return null;
        }
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    };
    Utils.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Proprietario\Documents\git\blumingo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-charts-charts-module"],{

/***/ "./src/app/views/charts/area-chart/area-chart.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/charts/area-chart/area-chart.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Area Charts</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Area Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartAreaOption1\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Stacked Area with Gradient </p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartAreaOption2\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Stacked Area With pointer</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartAreaOption3\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Stacked Area Chart without pointer</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartAreaOption4\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Solid Area Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartAreaOption5\" [autoResize]=\"true\" style=\"height: 120px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/charts/area-chart/area-chart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/views/charts/area-chart/area-chart.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/area-chart/area-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/charts/area-chart/area-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: AreaChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartComponent", function() { return AreaChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaChartComponent = /** @class */ (function () {
    function AreaChartComponent() {
    }
    AreaChartComponent.prototype.ngOnInit = function () {
        this.chartAreaOption1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart1"]);
        // this.chartAreaOption1.xAxis.data = ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'];
        // this.chartAreaOption1.series[0].lineStyle.color = ['#009588'];
        // this.chartAreaOption1.series[0].itemStyle.color = ['#009588'];
        // this.chartAreaOption1.series[0].areaStyle.color = ['#009588'];
        // this.chartAreaOption1.series[0].data = [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4];
        this.chartAreaOption2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart2"]);
        this.chartAreaOption3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart3"]);
        this.chartAreaOption4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart4"]);
        this.chartAreaOption5 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart5"]);
        this.chartAreaOption5.xAxis.data = ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'];
        this.chartAreaOption5.series[0].lineStyle.color = ['#009588'];
        this.chartAreaOption5.series[0].itemStyle.color = ['#009588'];
        this.chartAreaOption5.series[0].areaStyle.color = ['#009588'];
        this.chartAreaOption5.series[0].data = [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4];
    };
    AreaChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area-chart',
            template: __webpack_require__(/*! ./area-chart.component.html */ "./src/app/views/charts/area-chart/area-chart.component.html"),
            styles: [__webpack_require__(/*! ./area-chart.component.scss */ "./src/app/views/charts/area-chart/area-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AreaChartComponent);
    return AreaChartComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/bar-chart/bar-chart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/charts/bar-chart/bar-chart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Bar Charts</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Bar Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartBarOption1\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Multiple Bars </p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartBarOption2\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Bar Chart With pointer</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartBarOption3\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Bar Chart\n            with Multiple Bars</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartBarOption4\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Bar Chart\n            with Scrool Zoom</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartBarOption5\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/charts/bar-chart/bar-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/charts/bar-chart/bar-chart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/bar-chart/bar-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/charts/bar-chart/bar-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.chartBarOption1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["BarChart1"]);
        this.chartBarOption1.color = ['#5f6bc2'];
        this.chartBarOption1.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartBarOption1.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartBarOption2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["BarChart2"]);
        this.chartBarOption2.color = ['#f10075', '#eee'];
        this.chartBarOption2.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.chartBarOption2.series[0].name = 'Online';
        this.chartBarOption2.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        this.chartBarOption2.series[0].color = '#c4dbf0';
        this.chartBarOption2.series[1].name = 'Offline';
        this.chartBarOption2.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        this.chartBarOption2.series[1].color = '#2c80bf';
        this.chartBarOption3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["BarChart3"]);
        this.chartBarOption3.color = ['#6f42c1'];
        this.chartBarOption3.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.chartBarOption3.series[0].name = 'mettings';
        this.chartBarOption3.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];
        this.chartBarOption4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["BarChart4"]);
        this.chartBarOption5 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["BarChart5"]);
        // this.chartBarOption2.color = ['#f10075', '#eee'];
        // this.chartBarOption2.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        // this.chartBarOption2.series[0].name = 'Online';
        // this.chartBarOption2.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        // this.chartBarOption2.series[0].color = '#c4dbf0';
        // this.chartBarOption2.series[1].name = 'Offline';
        // this.chartBarOption2.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        // this.chartBarOption2.series[1].color = '#2c80bf';
    };
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            template: __webpack_require__(/*! ./bar-chart.component.html */ "./src/app/views/charts/bar-chart/bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./bar-chart.component.scss */ "./src/app/views/charts/bar-chart/bar-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/candlestick/candlestick.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/charts/candlestick/candlestick.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Candlestick Chart</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Candlestick Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"candlestickChartOption\" [autoResize]=\"true\" style=\"height: 600px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/charts/candlestick/candlestick.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/charts/candlestick/candlestick.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/candlestick/candlestick.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/charts/candlestick/candlestick.component.ts ***!
  \*******************************************************************/
/*! exports provided: CandlestickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickComponent", function() { return CandlestickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandlestickComponent = /** @class */ (function () {
    function CandlestickComponent() {
    }
    CandlestickComponent.prototype.ngOnInit = function () {
        this.candlestickChartOption = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["CandleStick"]);
    };
    CandlestickComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candlestick',
            template: __webpack_require__(/*! ./candlestick.component.html */ "./src/app/views/charts/candlestick/candlestick.component.html"),
            styles: [__webpack_require__(/*! ./candlestick.component.scss */ "./src/app/views/charts/candlestick/candlestick.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CandlestickComponent);
    return CandlestickComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/charts-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/charts/charts-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/views/charts/line-chart/line-chart.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/views/charts/bar-chart/bar-chart.component.ts");
/* harmony import */ var _pai_chart_pai_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pai-chart/pai-chart.component */ "./src/app/views/charts/pai-chart/pai-chart.component.ts");
/* harmony import */ var _timeriver_chart_timeriver_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeriver-chart/timeriver-chart.component */ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.ts");
/* harmony import */ var _candlestick_candlestick_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candlestick/candlestick.component */ "./src/app/views/charts/candlestick/candlestick.component.ts");
/* harmony import */ var _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heatmap/heatmap.component */ "./src/app/views/charts/heatmap/heatmap.component.ts");
/* harmony import */ var _treemap_treemap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treemap/treemap.component */ "./src/app/views/charts/treemap/treemap.component.ts");
/* harmony import */ var _area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./area-chart/area-chart.component */ "./src/app/views/charts/area-chart/area-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'line',
        component: _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]
    },
    {
        path: 'area',
        component: _area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_9__["AreaChartComponent"]
    },
    {
        path: 'bar',
        component: _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["BarChartComponent"]
    },
    {
        path: 'pai',
        component: _pai_chart_pai_chart_component__WEBPACK_IMPORTED_MODULE_4__["PaiChartComponent"]
    },
    {
        path: 'timeriver',
        component: _timeriver_chart_timeriver_chart_component__WEBPACK_IMPORTED_MODULE_5__["TimeriverChartComponent"]
    },
    {
        path: 'candlestick',
        component: _candlestick_candlestick_component__WEBPACK_IMPORTED_MODULE_6__["CandlestickComponent"]
    },
    {
        path: 'heatmap',
        component: _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_7__["HeatmapComponent"]
    },
    {
        path: 'treemap',
        component: _treemap_treemap_component__WEBPACK_IMPORTED_MODULE_8__["TreemapComponent"]
    },
];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/views/charts/line-chart/line-chart.component.ts");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/views/charts/charts-routing.module.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/views/charts/bar-chart/bar-chart.component.ts");
/* harmony import */ var _pai_chart_pai_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pai-chart/pai-chart.component */ "./src/app/views/charts/pai-chart/pai-chart.component.ts");
/* harmony import */ var _timeriver_chart_timeriver_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeriver-chart/timeriver-chart.component */ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.ts");
/* harmony import */ var _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./heatmap/heatmap.component */ "./src/app/views/charts/heatmap/heatmap.component.ts");
/* harmony import */ var _treemap_treemap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treemap/treemap.component */ "./src/app/views/charts/treemap/treemap.component.ts");
/* harmony import */ var _candlestick_candlestick_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./candlestick/candlestick.component */ "./src/app/views/charts/candlestick/candlestick.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./area-chart/area-chart.component */ "./src/app/views/charts/area-chart/area-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__["SharedComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_12__["NgxEchartsModule"],
                _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"]
            ],
            declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], _pai_chart_pai_chart_component__WEBPACK_IMPORTED_MODULE_7__["PaiChartComponent"], _timeriver_chart_timeriver_chart_component__WEBPACK_IMPORTED_MODULE_8__["TimeriverChartComponent"], _heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_9__["HeatmapComponent"], _treemap_treemap_component__WEBPACK_IMPORTED_MODULE_10__["TreemapComponent"], _candlestick_candlestick_component__WEBPACK_IMPORTED_MODULE_11__["CandlestickComponent"], _area_chart_area_chart_component__WEBPACK_IMPORTED_MODULE_13__["AreaChartComponent"]],
            exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/views/charts/heatmap/heatmap.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/charts/heatmap/heatmap.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Heatmap</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Heatmap</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"heatMapOption\" [autoResize]=\"true\" style=\"height: 600px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/charts/heatmap/heatmap.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/charts/heatmap/heatmap.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/heatmap/heatmap.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/charts/heatmap/heatmap.component.ts ***!
  \***********************************************************/
/*! exports provided: HeatmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapComponent", function() { return HeatmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent() {
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        var week = ['1', '2', '3', '4',
            '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
            '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        var days = ['Jan', 'Feb', 'March',
            'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var data = [
            [0, 0, 0], [1, 0, 4], [2, 0, 45], [3, 0, 120], [4, 0, 95], [5, 0, 110], [6, 0, 62], [7, 0, 55], [8, 0, 64], [9, 0, 57],
            [10, 0, 85], [11, 0, 90], [12, 0, 45], [13, 0, 120], [14, 0, 95], [15, 0, 110], [16, 0, 62], [17, 0, 55], [18, 0, 64], [19, 0, 57],
            [20, 0, 50], [21, 0, 74], [22, 0, 45], [23, 0, 120], [24, 0, 95], [25, 0, 110], [26, 0, 62], [27, 0, 55], [28, 0, 64], [29, 0, 57],
            [30, 0, 80],
            [0, 1, 0], [1, 1, 4], [2, 1, 45], [3, 1, 120], [4, 1, 95], [5, 1, 110], [6, 1, 62], [7, 1, 55], [8, 1, 64], [9, 1, 57],
            [10, 1, 85], [11, 1, 90], [12, 1, 45], [13, 1, 120], [14, 1, 95], [15, 1, 110], [16, 1, 62], [17, 1, 55], [18, 1, 64], [19, 1, 57],
            [20, 1, 50], [21, 1, 74], [22, 1, 45], [23, 1, 120], [24, 1, 95], [25, 1, 110], [26, 1, 62], [27, 1, 55], [28, 1, 64], [29, 1, 57],
            [30, 1, 80],
            [0, 2, 0], [1, 2, 4], [2, 2, 45], [3, 2, 121], [4, 2, 95], [5, 2, 110], [6, 2, 62], [7, 2, 55], [8, 2, 64], [9, 2, 57],
            [10, 2, 85], [11, 2, 90], [12, 2, 45], [13, 2, 121], [14, 2, 95], [15, 2, 110], [16, 2, 62], [17, 2, 55], [18, 2, 64], [19, 2, 57],
            [20, 2, 50], [21, 2, 74], [22, 2, 45], [23, 2, 121], [24, 2, 95], [25, 2, 110], [26, 2, 62], [27, 2, 55], [28, 2, 64], [29, 2, 57],
            [30, 2, 80],
        ];
        this.heatMapOption = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["HeatMap"]);
        this.heatMapOption.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
        this.heatMapOption.visualMap.min = 0;
        this.heatMapOption.visualMap.max = 150;
        this.heatMapOption.xAxis.data = week;
        this.heatMapOption.yAxis.data = days;
        this.heatMapOption.series[0].name = 'Sales';
        this.heatMapOption.series[0].data = data;
    };
    HeatmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heatmap',
            template: __webpack_require__(/*! ./heatmap.component.html */ "./src/app/views/charts/heatmap/heatmap.component.html"),
            styles: [__webpack_require__(/*! ./heatmap.component.scss */ "./src/app/views/charts/heatmap/heatmap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeatmapComponent);
    return HeatmapComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/line-chart/line-chart.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/charts/line-chart/line-chart.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Line Charts</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Line</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"LineChart2\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Line without pointer</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"LineChart1\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Line</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"LineChart3\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Line without pointer</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"LineChart4\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Line Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"LineChart13\" [autoResize]=\"true\" style=\"height: 400px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Line Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"LineChart14\" [autoResize]=\"true\" style=\"height: 400px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/charts/line-chart/line-chart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/views/charts/line-chart/line-chart.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/line-chart/line-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/charts/line-chart/line-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.LineChart1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["LineChart1"]);
        this.LineChart1.color = ['#ff5721'];
        this.LineChart1.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.LineChart1.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.LineChart1.series[0].smooth = true;
        this.LineChart2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["LineChart2"]);
        this.LineChart2.color = ['#5f6bc2'];
        this.LineChart2.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.LineChart2.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.LineChart2.series[0].smooth = true;
        this.LineChart3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["LineChart1"]);
        this.LineChart3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.LineChart3.series[0].lineStyle.color = ['#4cae4f'];
        this.LineChart3.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.LineChart4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["LineChart2"]);
        this.LineChart4.xAxis.data = ['1st Dec', '2nd Dec', '3rd Dec', '4th Dec', '5th Dec', '6th Dec', '7th Dec', '8th Dec', '9th Dec', '10th Dec', '11th Dec', '12th  Dec'];
        this.LineChart4.series[0].lineStyle.color = ['#04a9f4'];
        this.LineChart4.series[0].data = [820, 982, 701, 1034, 790, 1430, 1120, 1300, 790, 1430, 1120, 1300];
        this.LineChart4.series[1].lineStyle.color = ['#4cae4f'];
        this.LineChart4.series[1].data = [620, 882, 901, 934, 500, 830, 1220, 1100, 860, 1130, 1020, 1400];
        this.LineChart13 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["LineChart4"]);
        this.LineChart13.color = ['#5f6bc2'];
        this.LineChart13.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.LineChart13.series[0].data = [70, 65, 85, 75, 95, 86, 93];
        this.LineChart13.series[1].data = [80, 90, 75, 104, 75, 80, 70];
        this.LineChart13.series[2].data = [110, 95, 102, 90, 105, 95, 108];
        this.LineChart14 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["LineChart5"]);
        this.LineChart14.color = ['#5f6bc2'];
        this.LineChart14.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.LineChart14.series[0].data = [70, 65, 85, 75, 95, 86, 93];
        this.LineChart14.series[1].data = [80, 90, 75, 104, 75, 80, 70];
        this.LineChart14.series[2].data = [110, 95, 102, 90, 105, 95, 108];
    };
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__(/*! ./line-chart.component.html */ "./src/app/views/charts/line-chart/line-chart.component.html"),
            styles: [__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/views/charts/line-chart/line-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/pai-chart/pai-chart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/charts/pai-chart/pai-chart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Pai Charts</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Pai Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartPaiOption1\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Stacked Bar </p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartPaiOption2\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Pai Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartPaiOption3\" [autoResize]=\"true\" style=\"height: 500px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Pai Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartPaiOption4\" [autoResize]=\"true\" style=\"height: 500px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Pai Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartPaiOption5\" [autoResize]=\"true\" style=\"height: 500px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Pai Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"chartPaiOption6\" [autoResize]=\"true\" style=\"height: 500px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/charts/pai-chart/pai-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/charts/pai-chart/pai-chart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/pai-chart/pai-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/charts/pai-chart/pai-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: PaiChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaiChartComponent", function() { return PaiChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaiChartComponent = /** @class */ (function () {
    function PaiChartComponent() {
    }
    PaiChartComponent.prototype.ngOnInit = function () {
        this.chartPaiOption1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["PaiChart1"]);
        this.chartPaiOption1.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
        this.chartPaiOption1.series[0].name = 'Sales by Country';
        this.chartPaiOption1.series[0].data = [
            { value: 335, name: 'USA' },
            { value: 310, name: 'CANADA' },
            { value: 234, name: 'MEXICO' },
            { value: 135, name: 'UK' },
            { value: 148, name: 'AUSTRALIA' },
            { value: 548, name: 'INDIA' }
        ];
        this.chartPaiOption2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["PaiChart2"]);
        this.chartPaiOption3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["PaiChart3"]);
        this.chartPaiOption4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["PaiChart4"]);
        this.chartPaiOption5 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["PaiChart5"]);
        this.chartPaiOption6 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_1__["PaiChart6"]);
    };
    PaiChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pai-chart',
            template: __webpack_require__(/*! ./pai-chart.component.html */ "./src/app/views/charts/pai-chart/pai-chart.component.html"),
            styles: [__webpack_require__(/*! ./pai-chart.component.scss */ "./src/app/views/charts/pai-chart/pai-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaiChartComponent);
    return PaiChartComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/charts/timeriver-chart/timeriver-chart.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Timeriver Chart</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Timeriver Chart</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"timeriverOption\" [autoResize]=\"true\" style=\"height: 600px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/charts/timeriver-chart/timeriver-chart.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/charts/timeriver-chart/timeriver-chart.component.ts ***!
  \***************************************************************************/
/*! exports provided: TimeriverChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeriverChartComponent", function() { return TimeriverChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/charts */ "./src/app/shared/charts/charts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeriverChartComponent = /** @class */ (function () {
    function TimeriverChartComponent() {
    }
    TimeriverChartComponent.prototype.ngOnInit = function () {
        this.timeriverOption = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_charts__WEBPACK_IMPORTED_MODULE_1__["Timeriver"]);
        this.timeriverOption.color = ['#e0f5fe', '#b3e5fc', '#80d4fa', '#4ec3f7', '#28b6f6', '#04a9f4'];
        this.timeriverOption.series[0].data = [
            ['2015/11/08', 10, 'Facebook'], ['2015/11/09', 15, 'Facebook'], ['2015/11/10', 35, 'Facebook'],
            ['2015/11/11', 38, 'Facebook'], ['2015/11/12', 22, 'Facebook'], ['2015/11/13', 16, 'Facebook'],
            ['2015/11/14', 7, 'Facebook'], ['2015/11/15', 2, 'Facebook'], ['2015/11/16', 17, 'Facebook'],
            ['2015/11/17', 33, 'Facebook'], ['2015/11/18', 40, 'Facebook'], ['2015/11/19', 32, 'Facebook'],
            ['2015/11/20', 26, 'Facebook'], ['2015/11/21', 35, 'Facebook'], ['2015/11/22', 40, 'Facebook'],
            ['2015/11/23', 32, 'Facebook'], ['2015/11/24', 26, 'Facebook'], ['2015/11/25', 22, 'Facebook'],
            ['2015/11/26', 16, 'Facebook'], ['2015/11/27', 22, 'Facebook'], ['2015/11/28', 10, 'Facebook'],
            ['2015/11/08', 35, 'Twitter'], ['2015/11/09', 36, 'Twitter'], ['2015/11/10', 37, 'Twitter'],
            ['2015/11/11', 22, 'Twitter'], ['2015/11/12', 24, 'Twitter'], ['2015/11/13', 26, 'Twitter'],
            ['2015/11/14', 34, 'Twitter'], ['2015/11/15', 21, 'Twitter'], ['2015/11/16', 18, 'Twitter'],
            ['2015/11/17', 45, 'Twitter'], ['2015/11/18', 32, 'Twitter'], ['2015/11/19', 35, 'Twitter'],
            ['2015/11/20', 30, 'Twitter'], ['2015/11/21', 28, 'Twitter'], ['2015/11/22', 27, 'Twitter'],
            ['2015/11/23', 26, 'Twitter'], ['2015/11/24', 15, 'Twitter'], ['2015/11/25', 30, 'Twitter'],
            ['2015/11/26', 35, 'Twitter'], ['2015/11/27', 42, 'Twitter'], ['2015/11/28', 42, 'Twitter'],
            ['2015/11/08', 21, 'Google Search'], ['2015/11/09', 25, 'Google Search'], ['2015/11/10', 27, 'Google Search'],
            ['2015/11/11', 23, 'Google Search'], ['2015/11/12', 24, 'Google Search'], ['2015/11/13', 21, 'Google Search'],
            ['2015/11/14', 35, 'Google Search'], ['2015/11/15', 39, 'Google Search'], ['2015/11/16', 40, 'Google Search'],
            ['2015/11/17', 36, 'Google Search'], ['2015/11/18', 33, 'Google Search'], ['2015/11/19', 43, 'Google Search'],
            ['2015/11/20', 40, 'Google Search'], ['2015/11/21', 34, 'Google Search'], ['2015/11/22', 28, 'Google Search'],
            ['2015/11/23', 26, 'Google Search'], ['2015/11/24', 37, 'Google Search'], ['2015/11/25', 41, 'Google Search'],
            ['2015/11/26', 46, 'Google Search'], ['2015/11/27', 47, 'Google Search'], ['2015/11/28', 41, 'Google Search'],
            ['2015/11/08', 10, 'Youtube'], ['2015/11/09', 15, 'Youtube'], ['2015/11/10', 35, 'Youtube'],
            ['2015/11/11', 38, 'Youtube'], ['2015/11/12', 22, 'Youtube'], ['2015/11/13', 16, 'Youtube'],
            ['2015/11/14', 7, 'Youtube'], ['2015/11/15', 2, 'Youtube'], ['2015/11/16', 17, 'Youtube'],
            ['2015/11/17', 33, 'Youtube'], ['2015/11/18', 40, 'Youtube'], ['2015/11/19', 32, 'Youtube'],
            ['2015/11/20', 26, 'Youtube'], ['2015/11/21', 35, 'Youtube'], ['2015/11/22', 40, 'Youtube'],
            ['2015/11/23', 32, 'Youtube'], ['2015/11/24', 26, 'Youtube'], ['2015/11/25', 22, 'Youtube'],
            ['2015/11/26', 16, 'Youtube'], ['2015/11/27', 22, 'Youtube'], ['2015/11/28', 10, 'Youtube'],
            ['2015/11/08', 10, 'Dribbble'], ['2015/11/09', 15, 'Dribbble'], ['2015/11/10', 35, 'Dribbble'],
            ['2015/11/11', 38, 'Dribbble'], ['2015/11/12', 22, 'Dribbble'], ['2015/11/13', 16, 'Dribbble'],
            ['2015/11/14', 7, 'Dribbble'], ['2015/11/15', 2, 'Dribbble'], ['2015/11/16', 17, 'Dribbble'],
            ['2015/11/17', 33, 'Dribbble'], ['2015/11/18', 40, 'Dribbble'], ['2015/11/19', 32, 'Dribbble'],
            ['2015/11/20', 26, 'Dribbble'], ['2015/11/21', 35, 'Dribbble'], ['2015/11/22', 4, 'Dribbble'],
            ['2015/11/23', 32, 'Dribbble'], ['2015/11/24', 26, 'Dribbble'], ['2015/11/25', 22, 'Dribbble'],
            ['2015/11/26', 16, 'Dribbble'], ['2015/11/27', 22, 'Dribbble'], ['2015/11/28', 10, 'Dribbble'],
            ['2015/11/08', 10, 'Others'], ['2015/11/09', 15, 'Others'], ['2015/11/10', 35, 'Others'],
            ['2015/11/11', 38, 'Others'], ['2015/11/12', 22, 'Others'], ['2015/11/13', 16, 'Others'],
            ['2015/11/14', 7, 'Others'], ['2015/11/15', 2, 'Others'], ['2015/11/16', 17, 'Others'],
            ['2015/11/17', 33, 'Others'], ['2015/11/18', 4, 'Others'], ['2015/11/19', 32, 'Others'],
            ['2015/11/20', 26, 'Others'], ['2015/11/21', 35, 'Others'], ['2015/11/22', 40, 'Others'],
            ['2015/11/23', 32, 'Others'], ['2015/11/24', 26, 'Others'], ['2015/11/25', 22, 'Others'],
            ['2015/11/26', 16, 'Others'], ['2015/11/27', 22, 'Others'], ['2015/11/28', 10, 'Others']
        ];
    };
    TimeriverChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeriver-chart',
            template: __webpack_require__(/*! ./timeriver-chart.component.html */ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.html"),
            styles: [__webpack_require__(/*! ./timeriver-chart.component.scss */ "./src/app/views/charts/timeriver-chart/timeriver-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeriverChartComponent);
    return TimeriverChartComponent;
}());



/***/ }),

/***/ "./src/app/views/charts/treemap/treemap.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/charts/treemap/treemap.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Charts</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Treemap</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12 col-md-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-16 font-family-1 font-weight-400 line-height-1 mt-0 mb-1\">Basic Treemap</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary mr-2\"><i class=\"icon-reload\"></i></a>\n          <a href=\"\" class=\"text-muted link-primary\"><i class=\"icon-close\"></i></a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-2\">\n\n        <div class=\"content\">\n          <div echarts [options]=\"treeMapOption\" [autoResize]=\"true\" style=\"height: 600px;\"></div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/charts/treemap/treemap.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/charts/treemap/treemap.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/charts/treemap/treemap.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/charts/treemap/treemap.component.ts ***!
  \***********************************************************/
/*! exports provided: TreemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreemapComponent", function() { return TreemapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_charts_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/charts */ "./src/app/shared/charts/charts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreemapComponent = /** @class */ (function () {
    function TreemapComponent() {
    }
    TreemapComponent.prototype.ngOnInit = function () {
        this.treeMapOption = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__(src_app_shared_charts_charts__WEBPACK_IMPORTED_MODULE_1__["TreeMap"]);
    };
    TreemapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treemap',
            template: __webpack_require__(/*! ./treemap.component.html */ "./src/app/views/charts/treemap/treemap.component.html"),
            styles: [__webpack_require__(/*! ./treemap.component.scss */ "./src/app/views/charts/treemap/treemap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreemapComponent);
    return TreemapComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-charts-charts-module.js.map
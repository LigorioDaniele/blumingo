(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/echart-styles.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/echart-styles.ts ***!
  \*****************************************/
/*! exports provided: echartStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echartStyles", function() { return echartStyles; });
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
var echartStyles = /** @class */ (function () {
    function echartStyles() {
    }
    echartStyles.smoothLine = {
        type: 'line',
        smooth: true
    };
    echartStyles.lineShadow = {
        shadowColor: 'rgba(0, 0, 0, .7)',
        shadowOffsetX: -1,
        shadowOffsetY: 8,
        shadowBlur: 10
    };
    echartStyles.gridNoAxis = {
        show: false,
        top: 5,
        left: 0,
        right: 0,
        bottom: 0
    };
    echartStyles.pieRing = {
        radius: ['50%', '60%'],
        selectedMode: true,
        selectedOffset: 0,
        avoidLabelOverlap: false,
    };
    echartStyles.pieLabelOff = {
        label: { show: false },
        labelLine: { show: false, emphasis: { show: false } },
    };
    echartStyles.pieLabelCenterHover = {
        normal: {
            show: false,
            position: 'center'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontWeight: 'bold'
            }
        }
    };
    echartStyles.pieLineStyle = __assign({ color: 'rgba(0,0,0,0)', borderWidth: 2 }, echartStyles.lineShadow);
    echartStyles.pieThikLineStyle = __assign({ color: 'rgba(0,0,0,0)', borderWidth: 12 }, echartStyles.lineShadow);
    echartStyles.gridAlignLeft = {
        show: false,
        top: 6,
        right: 0,
        left: '-6%',
        bottom: 0
    };
    echartStyles.defaultOptions = {
        grid: {
            show: false,
            top: 6,
            right: 0,
            left: 0,
            bottom: 0
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: true
        },
        yAxis: {
            type: 'value',
            show: false
        }
    };
    echartStyles.lineFullWidth = {
        grid: {
            show: false,
            top: 0,
            right: '-9%',
            left: '-8.5%',
            bottom: 0
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        xAxis: {
            type: 'category',
            show: true
        },
        yAxis: {
            type: 'value',
            show: false,
        }
    };
    echartStyles.lineNoAxis = {
        grid: echartStyles.gridNoAxis,
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 0, 0, .1)'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            }
        }
    };
    return echartStyles;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
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


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('api/products');
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map
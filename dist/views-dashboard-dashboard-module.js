(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Fund</li>\n      <span class=\"spacer\"></span>\n      <li class=\"breadcrumb-item no-driver\">\n        <a href=\"\" class=\"text-muted link-primary\">\n          <i class=\"icon-bubbles\"></i> Support</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\n        <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n        </div>\n\n      </li>\n    </ol>\n\n\n  </nav>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n\n  <div class=\"row\">\n\n    \n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-0\">New Visitors</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">10000 avg</p>\n            <div class=\"card-icon \"><i class=\"icon-user-plus1 color-red text-25\"></i></div>\n\n            <div echarts [options]=\"chartLineOption1\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-0\">New Sessions</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">08:30 avg</p>\n            <div class=\"card-icon color-blue\"><i class=\"icon-watch color-red text-25\"></i></div>\n\n            <div echarts [options]=\"chartLineOption2\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-0\">Total Online</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">6,590 avg</p>\n            <div class=\"card-icon\"><i class=\"icon-user-check1 text-25 color-red\"></i></div>\n\n            <div echarts [options]=\"chartLineOption3\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-0\">Bounce Rate</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-500 mt-0 mb-0 mr-1\">17.86%</p>\n            <div class=\"card-icon\"><i class=\"icon-user-x text-25 color-red\"></i></div>\n\n            <div echarts [options]=\"chartLineOption4\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-2 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500  mt-0 mb-1\">TRAFFIC SOURCE STATISTICS</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Sales Performance for Online and Offline Revenue</p>\n\n            <div echarts [options]=\"timeriverOption\" [autoResize]=\"true\" style=\"height: 400px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-2 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">SALES STATISTICS</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Sales Performance for Online and Offline Revenue</p>\n\n            <div echarts [options]=\"chartLineOptionD2\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n            <div echarts [options]=\"chartLineOptionD1\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-2 o-hidden mb-4\">\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500  mt-0 mb-1\">PAGE VIEWS BY TITLE</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-3\">Sales Performance by Page Views</p>\n\n\n            <div class=\"data-list table-responsive\">\n              <table class=\"table table-striped\">\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-13 font-weight-500 ml-0\">Admin Home</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">/demo/admin/index.html</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-14 font-family-2 font-weight-700 ml-0 text-blue\">7756</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">31.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-13 font-weight-500 ml-0\">Form Elements</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">/demo/admin/forms.html</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-14 font-family-2 font-weight-700 ml-0 text-blue\">5756</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">42.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-13 font-weight-500 ml-0\">Utilities</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">/demo/admin/util.html</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-14 font-family-2 font-weight-700 ml-0 text-blue\">6756</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">81.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-13 font-weight-500 ml-0\">Form Validation</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">/demo/admin/validation.html</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-14 font-family-2 font-weight-700 ml-0 text-blue\">3756</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">52.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-13 font-weight-500 ml-0\">Modals</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">/demo/admin/modals.html</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-14 font-family-2 font-weight-700 ml-0 text-blue\">1756</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">96.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-13 font-weight-500 ml-0\">Admin Home</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">/demo/admin/index.html</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-14 font-family-2 font-weight-700 ml-0 text-blue\">2756</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">21.74% (-100%)</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-11 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n\n          <div class=\"content\">\n\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">SESSIONS BY SOURCES</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-1\">Sales Performance for Online and Offline Revenue</p>\n\n            <div class=\"row mt-1 ml-0 mr-0\">\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 data-chart\">\n                <div echarts [options]=\"chartPaiOption3\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 data-list table-responsive\">\n\n                <table class=\"table table-striped\">\n                  <tbody>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">Organic</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">Search Engine.</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">Email</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-red\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left mt-1 mb-1\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">Referral</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">Social</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">Others</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-12 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">TOP REFERRING & DESTINATIONS</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-1\">Sales Performance for Online and Offline Revenue</p>\n\n            <div class=\"row mt-1 ml-0 mr-0\">\n\n              <div class=\"data-chart\">\n                <div echarts [options]=\"chartLineOption12\" [autoResize]=\"true\" style=\"height: 325px;\"></div>\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-13 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">PAGES YOUR USERS VISIT</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-4\">Part of this date range occurs\n              before the new users metric had been calculated, so the old users metric is displayed.</p>\n\n            <div class=\"data-list mt-1 table-responsive\">\n              <table class=\"table table-striped table-dashboard-two\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\">COUNTRY</th>\n                    <th class=\"text-right\">ENTRANCES</th>\n                    <th class=\"text-right\">BOUNCE RATE</th>\n                    <th class=\"text-right\">EXITS</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                      <p class=\"text-13\">United States</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-gb flag-icon-squared\"></i>\n                      <p class=\"text-13\">United Kingdom</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-au flag-icon-squared\"></i>\n                      <p class=\"text-13\">Australia</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-ca flag-icon-squared\"></i>\n                      <p class=\"text-13\">Canada</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-in flag-icon-squared\"></i>\n                      <p class=\"text-13\">India</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-nl flag-icon-squared\"></i>\n                      <p class=\"text-13\">Netherlands</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                      <p class=\"text-13\">Germany</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                      <p class=\"text-13\">Germany</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                      <p class=\"text-13\">Germany</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">134 (1.51%)</td>\n                    <td class=\"text-right font-weight-500\">33.58%</td>\n                    <td class=\"text-right font-weight-500\">15.47%</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n          <div class=\"card bm-card-7 o-hidden mb-4\">\n\n            <div class=\"card-body text-left\">\n\n              <div class=\"content\">\n\n                <p class=\"title text-15 text-primary font-family-1 font-weight-400 mt-0 mb-1\">EXPANSIONS</p>\n                <p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-3 mr-0\">Customers who have upgraded\n                  the\n                  level of your service.</p>\n\n                <div class=\"data-list\">\n                  <table class=\"table table-striped table-dashboard-two\">\n                    <tbody>\n                      <tr>\n                        <td class=\"text-left\">\n                          <div class=\"sources mb-1\">\n                            <p class=\"title text-17 font-family-2 font-weight-600 ml-0\">$1,500</p>\n                            <p class=\"subtitle text-17 font-family-2 font-weight-600 ml-0\">$1,320</p>\n                          </div>\n                          <div class=\"progress mb-1\" style=\"height: 4px;\">\n                            <div class=\"progress-bar bg-blue\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                          </div>\n                          <div class=\"sources mb-0\">\n                            <p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">This Month</p>\n                            <p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">Previous Month</p>\n                          </div>\n                        </td>\n                      </tr>\n\n                    </tbody>\n                  </table>\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n          <div class=\"card bm-card-7 o-hidden mb-4\">\n\n            <div class=\"card-body text-left\">\n\n              <div class=\"content\">\n\n                <p class=\"title text-15 text-danger font-family-1 font-weight-400 mt-0 mb-1\">CANCELLATIONS</p>\n                <p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-3 mr-0\">Customers who have ended their\n                  subscription with you.</p>\n\n                <div class=\"data-list\">\n                  <table class=\"table table-striped table-dashboard-two\">\n                    <tbody>\n                      <tr>\n                        <td class=\"text-left\">\n                          <div class=\"sources mb-1\">\n                            <p class=\"title text-17 font-family-2 font-weight-600 ml-0\">$1,500</p>\n                            <p class=\"subtitle text-17 font-family-2 font-weight-600 ml-0\">$1,320</p>\n                          </div>\n                          <div class=\"progress mb-1\" style=\"height: 4px;\">\n                            <div class=\"progress-bar bg-red\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                          </div>\n                          <div class=\"sources mb-0\">\n                            <p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">This Month</p>\n                            <p class=\"progressbar-subtext text-12 font-weight-500 ml-0\">Previous Month</p>\n                          </div>\n                        </td>\n                      </tr>\n\n                    </tbody>\n                  </table>\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n          <div class=\"card bm-card-8 o-hidden mb-4\">\n\n            <div class=\"card-body text-left\">\n\n              <div class=\"content\">\n\n                <p class=\"title text-15 font-family-1 font-weight-400 mt-0 mb-4\">MRR (Sept)\n                  <span>\n                    <ul class=\"progress-legend\">\n                      <li>Expansion</li>\n                      <li class=\"ml-2\">New</li>\n                    </ul>\n                  </span>\n                </p>\n\n                <div class=\"progress-wrapper mb-4\">\n                  <label>None:</label>\n                  <div class=\"progressbar-body ml-2\">\n                    <div class=\"progress\" style=\"height: 20px;\">\n                      <div class=\"progress-bar text-12 font-weight-500 bg-primary\" role=\"progressbar\" style=\"width: 30%\"\n                        aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\">30%</div>\n                      <div class=\"progress-bar text-12 font-weight-500 bg-red\" role=\"progressbar\" style=\"width: 52%\"\n                        aria-valuenow=\"52\" aria-valuemin=\"0\" aria-valuemax=\"100\">52%</div>\n\n                    </div>\n                  </div>\n\n\n\n                </div>\n\n                <div class=\"progress-wrapper\">\n                  <label>Partner:</label>\n                  <div class=\"progressbar-body ml-2\">\n                    <div class=\"progress\" style=\"height: 20px;\">\n                      <div class=\"progress-bar text-12 font-weight-500 bg-primary\" role=\"progressbar\" style=\"width: 25%\"\n                        aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">25%</div>\n                      <div class=\"progress-bar text-12 font-weight-500 bg-red\" role=\"progressbar\" style=\"width: 32%\"\n                        aria-valuenow=\"32\" aria-valuemin=\"0\" aria-valuemax=\"100\">32%</div>\n\n                    </div>\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsComponent", function() { return DashboardAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var _shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/charts/charts */ "./src/app/shared/charts/charts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
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




var DashboardAnalyticsComponent = /** @class */ (function () {
    function DashboardAnalyticsComponent() {
    }
    DashboardAnalyticsComponent.prototype.ngOnInit = function () {
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
        this.timeriverOption = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["Timeriver"]);
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
        this.chartLineOptionD2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["LineChart5"]);
        this.chartLineOptionD2.color = ['#5f6bc2'];
        this.chartLineOptionD2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.chartLineOptionD2.series[0].data = [70, 65, 85, 75, 95, 86, 93];
        this.chartLineOptionD2.series[1].data = [80, 90, 75, 104, 75, 80, 70];
        this.chartLineOptionD2.series[2].data = [110, 95, 102, 90, 105, 95, 108];
        this.chartLineOptionD1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["AreaChart5"]);
        this.chartLineOptionD1.xAxis.data = ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'];
        this.chartLineOptionD1.series[0].lineStyle.color = ['#f36d12'];
        this.chartLineOptionD1.series[0].itemStyle.color = ['#f36d12'];
        this.chartLineOptionD1.series[0].areaStyle.color = ['#f36d12'];
        this.chartLineOptionD1.series[0].data = [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4];
        this.chartPaiOption3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(_shared_charts_charts__WEBPACK_IMPORTED_MODULE_2__["PaiChart3"]);
        this.chartPaiOption3.color = ['#c13018', '#f36e12', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'];
        this.chartPaiOption3.series[0].name = 'Session';
        this.chartPaiOption3.series[0].data = [
            { value: 335, name: 'Organic' },
            { value: 310, name: 'Search Eng.' },
            { value: 234, name: 'Email' },
            { value: 135, name: 'Referal' },
            { value: 148, name: 'Social' },
            { value: 548, name: 'Others' }
        ];
        this.chartLineOption12 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
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
    DashboardAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-analytics',
            template: __webpack_require__(/*! ./dashboard-analytics.component.html */ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-analytics.component.scss */ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardAnalyticsComponent);
    return DashboardAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Default</h1>\n  <ul>\n    <li><a href=\"\">Dashboard</a></li>\n    <li>Bonus</li>\n  </ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-6 col-md-12\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n          <div class=\"card-body\">\n            <div class=\"card-title m-0\">Network Stats</div>\n            <p class=\"text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-4\">\n                <div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n                  <i class=\"icon-upload-cloud text-32 mr-3\"></i>\n                  <div>\n                    <h4 class=\"text-18 font-weight-400 mb-1\">Backups</h4>\n                    <span>Total: 32</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-4\">\n                <div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n                  <i class=\"icon-database1 text-32 mr-3\"></i>\n                  <div>\n                    <h4 class=\"text-18 font-weight-400 mb-1\">Databases</h4>\n                    <span>Total: 302</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-4\">\n                <div class=\"p-4 border border-light rounded d-flex align-items-center\">\n                  <i class=\"icon-cloud1 text-32 mr-3\"></i>\n                  <div>\n                    <h4 class=\"text-18 font-weight-400 mb-1\">Space used</h4>\n                    <span>Total: 160GB</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"p-4 border border-light rounded d-flex align-items-center\">\n                  <i class=\"icon-download-cloud text-32 mr-3\"></i>\n                  <div>\n                    <h4 class=\"text-18 font-weight-400 mb-1\">Downloaded</h4>\n                    <span>Total: 30GB</span>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card card-profile-1 mb-4\">\n          <div class=\"card-body text-center\">\n            <div class=\"avatar box-shadow-2 mb-3\">\n              <img src=\"./assets/images/faces/16.jpg\" alt=\"\">\n            </div>\n            <h5 class=\"m-0\">Jassica Hike</h5>\n            <p class=\"mt-0 text-muted\">UI/UX Designer</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>\n            <button class=\"btn btn-primary\">Contact Jassica</button>\n            <div class=\"card-socials-simple mt-4\">\n              <a href=\"\">\n                <i class=\"icon-linkedin2\"></i>\n              </a>\n              <a href=\"\">\n                <i class=\"icon-facebook\"></i>\n              </a>\n              <a href=\"\">\n                <i class=\"icon-twitter\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card card-profile-1 mb-4\">\n          <div class=\"card-body text-center\">\n            <div class=\"avatar box-shadow-2 mb-3\">\n              <img src=\"./assets/images/faces/2.jpg\" alt=\"\">\n            </div>\n            <h5 class=\"m-0\">James Hike</h5>\n            <p class=\"mt-0 text-muted\">VR Developer</p>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>\n            <button class=\"btn btn-primary\">Contact James</button>\n            <div class=\"card-socials-simple mt-4\">\n              <a href=\"\">\n                <i class=\"icon-linkedin2\"></i>\n              </a>\n              <a href=\"\">\n                <i class=\"icon-facebook\"></i>\n              </a>\n              <a href=\"\">\n                <i class=\"icon-twitter\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card card-ecommerce-3 o-hidden mb-4\">\n          <div class=\"d-flex\">\n            <div class=\"\">\n              <img class=\"card-img-left\" src=\"./assets/images/photo-wide-1.jpg\" alt=\"\">\n            </div>\n            <div class=\"flex-grow-1 p-4\">\n              <h5 class=\"m-0 font-weight-500 text-muted mb-1\">Produt featured</h5>\n              <p class=\"m-0 text-11 font-weight-500 text-gray mb-1\">By ABC Cafe</p>\n              <p class=\"m-0\">$40 <del>$55</del></p>\n              <p class=\"text-muted mt-3\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n                Nesciunt placeat esse tempore debitis.</p>\n              <div class=\"actions\">\n                <button class=\"btn btn-sm rounded-circle btn-icon btn-outline-primary\">\n                  <i class=\"icon-cart align-middle\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card card-ecommerce-3 o-hidden mb-4\">\n          <div class=\"d-flex\">\n            <div class=\"\">\n              <img class=\"card-img-left\" src=\"./assets/images/photo-wide-2.jpg\" alt=\"\">\n            </div>\n            <div class=\"flex-grow-1 p-4\">\n              <h5 class=\"m-0 font-weight-500 text-muted mb-1\">Produt featured</h5>\n              <p class=\"m-0 text-11 font-weight-500 text-gray mb-1\">By ABC Cafe</p>\n              <p class=\"m-0\">$40 <del>$55</del></p>\n              <p class=\"text-muted mt-3\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n                Nesciunt placeat esse tempore debitis.</p>\n              <div class=\"actions\">\n                <button class=\"btn btn-sm rounded-circle btn-icon btn-outline-primary\">\n                  <i class=\"icon-cart align-middle\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 col-sm-6\">\n        <div class=\"card bg-dark text-white o-hidden mb-4\">\n          <img class=\"\" src=\"./assets/images/photo-long-1.jpg\" alt=\"Card image\">\n          <div class=\"card-img-overlay\">\n            <div class=\"text-center pt-4\">\n              <h5 class=\"card-title mb-2\">Card title</h5>\n              <div class=\"separator border-top mb-2\"></div>\n              <p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n            </div>\n            <div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n              <span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n              <span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-sm-6\">\n        <div class=\"card bg-dark text-white o-hidden mb-4\">\n          <img class=\"\" src=\"./assets/images/photo-long-2.jpg\" alt=\"Card image\">\n          <div class=\"card-img-overlay\">\n            <div class=\"text-center pt-4\">\n              <h5 class=\"card-title mb-2\">Card title</h5>\n              <div class=\"separator border-top mb-2\"></div>\n              <p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n            </div>\n            <div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n              <span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n              <span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card mb-4\">\n          <div class=\"card-body\">\n            <h6 class=\"mb-0 text-primary\">Subscription/Registration</h6>\n            <p class=\"text-24 font-weight-light mb-1\">20/80</p>\n            <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-4\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h6 class=\"mb-0 text-danger\">Project Running/Completed</h6>\n            <p class=\"text-24 font-weight-light mb-1\">40/60</p>\n            <div echarts [options]=\"chartPie2\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n          <div class=\"card-body\">\n            <h6 class=\"mb-2\">Last 7 days traffic status</h6>\n            <p class=\"text-24 font-weight-light mb-1\"><i class=\"i-Up text-success\"></i> 15%</p>\n            <div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n          <div class=\"card-body\">\n            <h6 class=\"mb-2\">Server failures</h6>\n            <p class=\"text-24 font-weight-light mb-1\"><i class=\"i-Down text-danger\"></i> 5%</p>\n            <div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-8 col-md-12 col-sm-12\">\n\n      <div class=\"card bm-card-2 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-15 font-family-1 font-weight-500 mt-0 mb-1\">Your Most Recent Earnings</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-4 mr-1\">This is your most recent earnings\n              for today's date.</p>\n\n            <div class=\"data-table table-responsive\">\n              <table class=\"table table-striped table-dashboard-two\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\">Date</th>\n                    <th class=\"text-right\">Sales Count</th>\n                    <th class=\"text-right\">Earnings</th>\n                    <th class=\"text-right\">Tax Witheld</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">05 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">25</td>\n                    <td class=\"text-right font-weight-500\">$380.50</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">04 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">34</td>\n                    <td class=\"text-right font-weight-500\">$503.20</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$13.45</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">03 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">30</td>\n                    <td class=\"text-right font-weight-500\">$489.65</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$20.98</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">02 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">27</td>\n                    <td class=\"text-right font-weight-500\">$421.80</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$22.22</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">31</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">31</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">31</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12\">\n      <div class=\"card bm-card-2 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-15 font-family-1 font-weight-500 mt-0 mb-1\">Sales By Top Countries</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-2\">Sales performance revenue based on\n              countries</p>\n\n            <div class=\"data-list table-responsive\">\n              <table class=\"table table-striped table-dashboard-two\">\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                      <p class=\"text-13\">United States</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,671.10</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-gb flag-icon-squared\"></i>\n                      <p class=\"text-13\">United Kingdom</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,551.40</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-au flag-icon-squared\"></i>\n                      <p class=\"text-13\">Australia</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,401.85</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-ca flag-icon-squared\"></i>\n                      <p class=\"text-13\">Canada</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,305.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-in flag-icon-squared\"></i>\n                      <p class=\"text-13\">India</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,260.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-nl flag-icon-squared\"></i>\n                      <p class=\"text-13\">Netherlands</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,175.95</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                      <p class=\"text-13\">Germany</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,079.90</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardBonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBonusComponent", function() { return DashboardBonusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
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


var DashboardBonusComponent = /** @class */ (function () {
    function DashboardBonusComponent() {
    }
    DashboardBonusComponent.prototype.ngOnInit = function () {
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
    };
    DashboardBonusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-bonus',
            template: __webpack_require__(/*! ./dashboard-bonus.component.html */ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-bonus.component.scss */ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardBonusComponent);
    return DashboardBonusComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n\t<ol class=\"breadcrumb\">\n\t\t<li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Offering</li>\n\t\t<span class=\"spacer\"></span>\n\t\t<li class=\"breadcrumb-item no-driver\">\n\t\t\t<a href=\"\" class=\"text-muted link-primary\">\n\t\t\t\t<i class=\"icon-bubbles\"></i> Support</a>\n\t\t</li>\n\t\t<li class=\"breadcrumb-item\">\n\n\t\t\t<a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n\t\t\t</div>\n\n\t\t</li>\n\t</ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\t<div class=\"col-lg-4 col-md-12 col-sm-12\">\n\t\t<div class=\"card bm-card-9 o-hidden mb-4\">\n\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t<div class=\"content mb-2\">\n\t\t\t\t\t<p class=\"text-33 font-family-1 font-weight-800 line-height-1 mb-4\">Fleet Renewal</p>\n\t\t\t\t\t<p class=\"title text-15 font-family-1 font-weight-400 line-height-1 mt-0 mb-2\">Originated by: <span class=\"font-weight-600\"><a href=\"#\">Mediterranean Marine</a></span></p>\n\t\t\t\t\t<p class=\"title text-15 font-family-1 font-weight-400 line-height-1 mt-0 mb-2\">Offering type: <span class=\"font-weight-600\">Marine Bond</span></p>\n\t\t\t\t\t<p class=\"title text-15 font-family-1 font-weight-400 line-height-1 mt-0 mb-2\">Arrangers: <span class=\"\"><a href=\"#\">Fields Fund Management</a> - <a href=\"#\">International Credit</a></span></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-8 col-md-12 col-sm-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-sm-12\">\n\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 _ngcontent-c6=\"\" class=\"title text-25 font-family-1 font-weight-800  mt-0 mb-1 card-title\">OFFERING SUMMARY:</h5>\n\t\t\t\t\t\t<p class=\"card-text\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qu</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card bg-dark border-0 text-white o-hidden mb-4\">\n\t\t\t\t\t\t\t<img class=\"\" src=\"https://images.unsplash.com/photo-1496347326319-2935d381b307?ixlib=rb-1.2.1&auto=format&fit=crop&w=2691&q=80\" alt=\"Card image\">\n\t\t\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\t\n\t</div>\n\n</div>\n\n<div class=\"row\">\n\n\t<div class=\"col-lg-6 col-md-5 col-sm-12\">\n\t\t\t<div class=\"card bm-card-9 o-hidden mb-4\">\n\n\t\t\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t\t\t<div class=\"content mb-2\">\n\n\t\t\t\t\t\t\t<p class=\"title text-25 font-family-1 font-weight-800 mt-0 mb-1 card-title\">OFFERING SIZE:</p>\n\t\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 line-height-1 font-weight-400 mt-0 mb-4\">Measure how quickly support\n\t\t\t\t\t\t\t\tstaff\n\t\t\t\t\t\t\t\tresolve any complain.</p>\n\n\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between mb-2\">\n\t\t\t\t\t\t\t\t<p class=\"text-30 font-family-1 font-weight-800 line-height-1 mb-0\">€ 175,000,000</p>\n\t\t\t\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 align-self-end mb-0\">Status: <span class=\"badge badge-pill badge-success\">FUNDED</span></p>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"progress mb-0\" style=\"height: 4px;\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\n\t\t\t\t\t\t\t\t aria-valuemax=\"100\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t<div class=\"card bm-card-10 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<p class=\"title text-25 text-default font-family-1 font-weight-800 mt-0 mb-1 card-title\">YIELD</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 line-height-1 font-weight-400 mt-0 mb-0\">The return that you will receive.</p>\n\t\t\t\t\t<p class=\"subtitle text-30 font-family-2 font-weight-800 mt-0 mb-0 line-height-1\">5%</p>\n\n\t\t\t\t\t<div echarts [options]=\"chartLineOptionD3\" [autoResize]=\"true\" style=\"height: 30px;\"></div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t<div class=\"card bm-card-10 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<p class=\"title text-default text-25 font-family-1 font-weight-800 mt-0 mb-1 card-title\">FEE</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 line-height-1 font-weight-400 mt-0 mb-0\">Total mgmt and admin fee.</p>\n\t\t\t\t\t<p class=\"subtitle text-30 font-family-2 font-weight-800 mt-0 mb-0 line-height-1\">0,7%</p>\n\n\t\t\t\t\t<div echarts [options]=\"chartLineOptionD4\" [autoResize]=\"true\" style=\"height: 30px;\"></div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-2 o-hidden mb-4\">\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-25 font-family-1 font-weight-800  mt-0 mb-1\">INVESTMENT SUMMARY</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-3\">Your offering details:</p>\n\n\n            <div class=\"data-list table-responsive\">\n              <table class=\"table table-striped\">\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-20 font-weight-500 ml-0\">Annual interest</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">Target interest</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-20 font-family-2 font-weight-700 ml-0 text-blue\">5%</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">31.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-20 font-weight-500 ml-0\">Term</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-20 font-family-2 font-weight-700 ml-0 text-blue\">3 Years</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">05/05/2020 - 05/05/2023</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-20 font-weight-500 ml-0\">Fee summary</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-20 font-family-2 font-weight-700 ml-0 text-blue\">0.7%</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">81.74% (-100%)</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-20 font-weight-500 ml-0\">Interest Type</p>\n                      <p class=\"subtitle text-12 font-weight-400 ml-0\">Acrrual standard</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-20 font-family-2 font-weight-700 ml-0 text-blue\">Monthly 30/360</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">Daily accrual</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"title text-20 font-weight-500 ml-0\">Payment schedule</p>\n                    </td>\n                    <td class=\"text-right\">\n                      <p class=\"title text-20 font-family-2 font-weight-700 ml-0 text-blue\">Monthly</p>\n                      <p class=\"subtitle text-12 font-family-2 font-weight-500 ml-0\">96.74% (-100%)</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-5 col-md-12 col-sm-12 col-xs-12\">\n\n      <div class=\"card bm-card-11 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n\n          <div class=\"content\">\n\n            <p class=\"title text-25 font-family-1 font-weight-800  mt-0 mb-1 card-title\">ESG ALLOCATION</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-1\">ESG distribution of funds for this offering</p>\n\n            <div class=\"row mt-1 ml-0 mr-0\">\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 data-chart\">\n                <div echarts [options]=\"chartPaiOption3\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 data-list table-responsive\">\n\n                <table class=\"table table-striped\">\n                  <tbody>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">ENVIRONMENT</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">SOCIAL</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">GOVERNANCE</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-red\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left mt-1 mb-1\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">ENERGY</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <div class=\"sources mb-1\">\n                          <p class=\"title text-13 font-weight-500 ml-0\">INNOVATION</p>\n                          <p class=\"subtitle text-12 font-family-2 font-weight-700 ml-0\">1,320 <span>(25%)</span></p>\n                        </div>\n                        <div class=\"progress\" style=\"height: 3px;\">\n                          <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-blue\"\n                            role=\"progressbar\" style=\"width: 25%\"></div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-12\">\n\t\t\t<div class=\"card mb-4 o-hidden\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"title text-25 font-family-1 font-weight-800  mt-0 mb-1 card-title\">INVESTMENT DOCUMENTATION</h5>\n\t\t\t\t\t<p class=\"card-text\">The offering complete documentation</p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t<li class=\" text-20 font-weight-500 ml-0 list-group-item\"><a href=\"#\">Offering Agreement</a></li>\n\t\t\t\t\t<li class=\" text-20 font-weight-500 ml-0 list-group-item\"><a href=\"#\">Legal prospectus</a></li>\n\t\t\t\t\t<li class=\" text-20 font-weight-500 ml-0 list-group-item\"><a href=\"#\">Structure prospectus</a></li>\n\t\t\t\t\t<li class=\" text-20 font-weight-500 ml-0 list-group-item\"><a href=\"#\">Tax document</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n  </div>\n\n<div class=\"row\">\n\n\t<div class=\"col-lg-7 col-md-12 col-sm-12\">\n\n\t\t<div class=\"card eg-card-1 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header mb-3 row\">\n\n\t\t\t\t<div class=\"info col-md-9 col-sm-12\">\n\t\t\t\t\t<p class=\"title text-25 font-family-1 font-weight-800 mt-0 mb-1\">INVESTMENT PERFORMANCE</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Actual vs. estimated performance since inception: <span class=\"text-success font-weight-800\">05/05/2020</span></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action col-md-3 col-sm-12\">\n\t\t\t\t\t<div class=\"btn-group btn-group-small btn-group-toggle\" data-toggle=\"buttons\">\n\t\t\t\t\t\t<label class=\"btn btn-outline-primary\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Month\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"btn btn-outline-primary\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Quarter\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"btn btn-outline-primary active\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Year\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-3\">\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<div class=\"info-box text-wrap mr-5 mb-4\">\n\t\t\t\t\t\t<p class=\"title text-12 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">INVESTMENT</p>\n\t\t\t\t\t\t<p class=\"title text-25 font-family-2 font-weight-800 line-height-1 mt-0 mb-0\">€175,000,000</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"info-box text-wrap mr-5 mb-4\">\n\t\t\t\t\t\t<p class=\"title text-12 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">INTEREST OUTSTANDING</p>\n\t\t\t\t\t\t<p class=\"title text-25 font-family-2 font-weight-800 line-height-1 mt-0 mb-0\">€150,000</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"info-box text-wrap mr-5 mb-4\">\n\t\t\t\t\t\t<p class=\"title text-12 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">TOTAL RETURN</p>\n\t\t\t\t\t\t<p class=\"title text-25 font-family-2 font-weight-800 line-height-1 mt-0 mb-0\">5.09%</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div echarts [options]=\"chartCampaignMatrics\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-5 col-md-12 col-sm-12\">\n\n\t\t<div class=\"card eg-card-7 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between mb-1\">\n\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-25 font-family-1 font-weight-800 mt-0 mb-1\">ESG SPENDING</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Investment spending on ESG</p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-0\">\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<div class=\"data-list table-responsive mt-4\">\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"text-left\">CATEGORY</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-left\">PERFORMANCE</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">MONTHLY CHANGE</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">SPENT</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t\t<tbody>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"source-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i _ngcontent-c6=\"\" class=\"icon-sun\"></i>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"source-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-15 text-default font-weight-400\">ENVIRONMENTAL</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n\t\t\t\t\t\t\t\t\t\t<div echarts [options]=\"chartLineOptionD5\" [autoResize]=\"true\" style=\"height: 50px; width: 80px;\"></div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center text-success font-weight-500 align-middle\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-arrow-up2\"></i> 2.43%</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center font-weight-600 align-middle\">$15,256</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"source-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i _ngcontent-c6=\"\" class=\"icon-user-plus\"></i>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"source-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-15 text-default font-weight-400\">SOCIAL</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n\t\t\t\t\t\t\t\t\t\t<div echarts [options]=\"chartLineOptionD5\" [autoResize]=\"true\" style=\"height: 50px; width: 80px;\"></div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center text-success font-weight-500 align-middle\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-arrow-up2\"></i> 2.43%</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center font-weight-600 align-middle\">$15,256</td>\n\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"source-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i _ngcontent-c6=\"\" class=\"icon-star\"></i>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"source-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-15 text-default font-weight-400\">GOVERNANCE</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n\t\t\t\t\t\t\t\t\t\t<div echarts [options]=\"chartLineOptionD5\" [autoResize]=\"true\" style=\"height: 50px; width: 80px;\"></div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center text-success font-weight-500 align-middle\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-arrow-up2\"></i> 2.43%</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center font-weight-600 align-middle\">$15,256</td>\n\n\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<div class=\"row\">\n\n\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n\t\t<div class=\"card eg-card-7 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between mb-2\">\n\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-25 font-family-1 font-weight-800 mt-0 mb-1 card-title\">CASH FLOW</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-2\">Updated overview of the investment cash-flow</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\"></div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body text-left pt-2\">\n\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<div class=\"data-table-2 table-responsive\">\n\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th colspan=\"5\" class=\"border-right border-top\">Quarter To Date (QTD)</th>\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"border-top\">Year To Date (YTD)</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"border-right\">&nbsp;</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Actual</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Forecast</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Variance</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right border-right\">% Variance</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Actual</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Forecast</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody class=\"text-right\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Office &amp; Supplies</td>\n\t\t\t\t\t\t\t\t\t<td>232,243</td>\n\t\t\t\t\t\t\t\t\t<td>399,768</td>\n\t\t\t\t\t\t\t\t\t<td>40,234</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">5.1%</td>\n\t\t\t\t\t\t\t\t\t<td>2,983,098</td>\n\t\t\t\t\t\t\t\t\t<td>2,092,243</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Salaries &amp; Benefits</td>\n\t\t\t\t\t\t\t\t\t<td>2,232,877</td>\n\t\t\t\t\t\t\t\t\t<td>3,099,565</td>\n\t\t\t\t\t\t\t\t\t<td>400,020</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">6.8%</td>\n\t\t\t\t\t\t\t\t\t<td>28,983,091</td>\n\t\t\t\t\t\t\t\t\t<td>29,092,765</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Professional Services</td>\n\t\t\t\t\t\t\t\t\t<td>32,435</td>\n\t\t\t\t\t\t\t\t\t<td>99,789</td>\n\t\t\t\t\t\t\t\t\t<td>20,020</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">16.9%</td>\n\t\t\t\t\t\t\t\t\t<td>183,566</td>\n\t\t\t\t\t\t\t\t\t<td>292,897</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Human Resources</td>\n\t\t\t\t\t\t\t\t\t<td>76,877</td>\n\t\t\t\t\t\t\t\t\t<td>98,565</td>\n\t\t\t\t\t\t\t\t\t<td>123,020</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">15.0%</td>\n\t\t\t\t\t\t\t\t\t<td>101,675</td>\n\t\t\t\t\t\t\t\t\t<td>122,232</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Travel &amp; Entertainment</td>\n\t\t\t\t\t\t\t\t\t<td>2,232</td>\n\t\t\t\t\t\t\t\t\t<td>3,099</td>\n\t\t\t\t\t\t\t\t\t<td>400</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">1.2%</td>\n\t\t\t\t\t\t\t\t\t<td>13,091</td>\n\t\t\t\t\t\t\t\t\t<td>14,765</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left font-weight-600 border-right\">Grand Total</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">3,433,232</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">4,768,099</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">999,400</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600 border-right\">88.2%</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">30,643,091</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">31,644,765</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n\n<div class=\"row\">\n\n\t<div class=\"col-lg-12  col-md-12 col-sm-12\">\n\n\t\t<div class=\"card bm-card-5 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between mb-1\">\n\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-25 font-family-1 font-weight-800 mt-0 mb-1 card-title\">REVENUE DISTRIBUTION</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\">\n\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"\" class=\"dropdown-toggle text-muted link-primary text-15 font-family-1 font-weight-400 line-height-1 mt-0 mb-0\"\n\t\t\t\t\t\t type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<i class=\"icon-calendar2 mr-2\"></i>Last 7 days</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item \" href=\"\">\n\t\t\t\t\t\t\t\tLast 7 days</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item \" href=\"\">\n\t\t\t\t\t\t\t\tLast 14 days</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"\">\n\t\t\t\t\t\t\t\tLast 30 days</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"\">\n\t\t\t\t\t\t\t\tAll time</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-2\">\n\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<div class=\"row mb-1\">\n\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n\t\t\t\t\t\t\t<div class=\"chart-data-1 ml-2\">\n\t\t\t\t\t\t\t\t<p class=\"lead-text text-16 font-weight-500 mt-2 mb-0\">38,289</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-growth text-12 text-success font-weight-500 color-blue mt-2 mb-0 ml-2\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-arrow-up1\"></i>\n\t\t\t\t\t\t\t\t\t(+16.2%)</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-time text-13 font-weight-500 mt-0 mb-1\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-flag1 text-purple mr-1\"></i>Campaign</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n\t\t\t\t\t\t\t<div class=\"chart-data-1 ml-2\">\n\t\t\t\t\t\t\t\t<p class=\"lead-text text-16 font-weight-500 mt-2 mb-0\">38,289</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-growth text-12 text-success font-weight-500 color-blue mt-2 mb-0 ml-2\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-arrow-up1\"></i>\n\t\t\t\t\t\t\t\t\t(+16.2%)</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-time text-13 font-weight-500 mt-0 mb-1\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-activity text-success mr-1\"></i>Organic</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n\t\t\t\t\t\t\t<div class=\"chart-data-1 ml-2\">\n\t\t\t\t\t\t\t\t<p class=\"lead-text text-16 font-weight-500 mt-2 mb-0\">38,289</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-growth text-12 text-danger font-weight-500 color-blue mt-2 mb-0 ml-2\"><i class=\"icon-arrow-down2\"></i>\n\t\t\t\t\t\t\t\t\t(-11.2%)</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-time text-13 font-weight-500 mt-0 mb-1\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-zap text-danger mr-1\"></i>Direct</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n\t\t\t\t\t\t\t<div class=\"bm-donut-chart-1\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"chart-data-1 ml-2\">\n\t\t\t\t\t\t\t\t<p class=\"lead-text text-16 font-weight-500 mt-2 mb-0\">38,289</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-growth text-12 text-success font-weight-500 color-blue mt-2 mb-0 ml-2\"><i class=\"icon-arrow-up2\"></i>\n\t\t\t\t\t\t\t\t\t(+16.2%)</p>\n\t\t\t\t\t\t\t\t<p class=\"lead-time text-13 font-weight-500 mt-0 mb-1\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-share-2 text-primary mr-1\"></i>Referal</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div echarts [options]=\"chartTraficSources\" [autoResize]=\"true\" style=\"height: 500px;\"></div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.ts ***!
  \************************************************************************************/
/*! exports provided: DashboardCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCampaignComponent", function() { return DashboardCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
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




var DashboardCampaignComponent = /** @class */ (function () {
    function DashboardCampaignComponent() {
    }
    DashboardCampaignComponent.prototype.ngOnInit = function () {
        this.chartLineOptionD1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD1.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD1.series[0].lineStyle.color = ['#5f6ac2'];
        this.chartLineOptionD1.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD2.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD2.series = src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"].series.slice();
        this.chartLineOptionD2.series[0].lineStyle.color = ['#ff5721'];
        this.chartLineOptionD2.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD3.series[0].lineStyle.color = '#4cae4f';
        this.chartLineOptionD3.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD4.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD4.series[0].lineStyle.color = '#04a9f4';
        this.chartLineOptionD4.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD5 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart2"]);
        this.chartLineOptionD5.xAxis.data = ['1st Dec', '2nd Dec', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'];
        this.chartLineOptionD5.series[0].lineStyle.color = ['#04a9f4'];
        this.chartLineOptionD5.series[0].data = [820, 982, 701, 1034, 790, 1430, 1120, 1300, 790, 1430, 1120, 1300];
        this.chartLineOptionD5.series[1].lineStyle.color = ['#4cae4f'];
        this.chartLineOptionD5.series[1].data = [620, 882, 901, 934, 500, 830, 1220, 1100, 860, 1130, 1020, 1400];
        this.chartDonut1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["DonutChart1"]);
        this.chartDonut1.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
        this.chartDonut1.series[0].data = [
            { value: 335, name: 'Social Media' },
            { value: 310, name: 'Youtube' },
            { value: 234, name: 'Google AdWord' }
        ];
        this.chartDonut2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["DonutChart1"]);
        this.chartDonut2.color = ['#28b6f6', '#ef534f', '#81c784', '#7986cb', '#4db5ab', '#4ec3f7'];
        this.chartDonut2.series[0].data = [
            { value: 235, name: 'Pending' },
            { value: 310, name: 'Active' },
            { value: 110, name: 'On Hold' },
            { value: 234, name: 'Canceled' }
        ];
        this.chartDonut3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["DonutChart1"]);
        this.chartDonut3.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
        this.chartDonut3.series[0].data = [
            { value: 335, name: 'Social Media' },
            { value: 310, name: 'Youtube' },
            { value: 234, name: 'Google AdWord' }
        ];
        this.chartPaiOption3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["PaiChart3"]);
        this.chartPaiOption3.color = ['#6be8a0', '#66e7ed', '#ffde8d', '#3864d6', '#0d94bc', '#135bba'];
        this.chartPaiOption3.series[0].name = 'Session';
        this.chartPaiOption3.series[0].data = [
            { value: 335, name: 'Environmental' },
            { value: 310, name: 'Social' },
            { value: 234, name: 'Governance' },
            { value: 135, name: 'Energy' },
            { value: 148, name: 'Waste' },
            { value: 548, name: 'Efficiency' }
        ];
        this.chartHours = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["BarChart3"]);
        this.chartHours.color = ['#6f42c1'];
        this.chartHours.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.chartHours.series[0].name = 'mettings';
        this.chartHours.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];
        this.chartProductivity = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["BarChart3"]);
        this.chartProductivity.color = ['#5c6ac0'];
        this.chartProductivity.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.chartProductivity.series[0].name = 'statements';
        this.chartProductivity.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];
        this.chartCampaignMatrics = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: '4%',
                top: '4%',
                right: '3%',
                bottom: '10%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
                ],
                axisLabel: {
                    formatter: '{value}',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    formatter: '{value}k',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        width: 1,
                        opacity: 0.5
                    }
                }
            },
            series: [
                {
                    name: 'Impression',
                    type: 'line',
                    smooth: true,
                    data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                        140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                        135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95],
                    symbolSize: 8,
                    lineStyle: {
                        color: 'rgb(255, 87, 33)',
                        opacity: 1,
                        width: 1.5,
                    },
                    itemStyle: {
                        color: '#ff5721',
                        borderColor: '#ff5721',
                        borderWidth: 1.5
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
                                        offset: 0, color: 'rgba(255, 87, 33, 1)'
                                    }, {
                                        offset: 0.3, color: 'rgba(255, 87, 33, 0.7)'
                                    }, {
                                        offset: 1, color: 'rgba(255, 87, 33, 0)'
                                    }]
                            }
                        }
                    }
                },
                {
                    name: 'Clicks',
                    type: 'line',
                    smooth: true,
                    data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
                        104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
                        70, 65, 86, 75, 80, 70, 50, 70],
                    symbolSize: 8,
                    lineStyle: {
                        color: 'rgb(95, 107, 194)',
                        opacity: 1,
                        width: 1.5,
                    },
                    itemStyle: {
                        color: '#5f6cc1',
                        borderColor: '#5f6cc1',
                        borderWidth: 1.5
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
                                        offset: 0, color: 'rgba(95, 107, 194, 1)'
                                    }, {
                                        offset: 0.5, color: 'rgba(95, 107, 194, 0.7)'
                                    }, {
                                        offset: 1, color: 'rgba(95, 107, 194, 0)'
                                    }]
                            }
                        }
                    }
                },
            ]
        });
        this.chartAudienceMatrics = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            grid: {
                left: '5%',
                top: '5%',
                right: '5%',
                bottom: '5%'
            },
            series: [
                {
                    name: 'DEMOGRAPHY',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{b} \n {c} ',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 635, name: 'Male', selected: true },
                        { value: 679, name: 'Female' },
                        { value: 248, name: 'Others' }
                    ]
                },
                {
                    name: 'COUNTRY',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 22,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        { value: 335, name: 'USA' },
                        { value: 310, name: 'CAN' },
                        { value: 234, name: 'MEX' },
                        { value: 135, name: 'UK' },
                        { value: 1048, name: 'GER' },
                        { value: 251, name: 'AUS' },
                        { value: 147, name: 'IND' },
                        { value: 102, name: 'CHI' },
                        { value: 122, name: 'OTHERS' }
                    ]
                }
            ]
        };
        this.chartTraficSources = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 400,
                interval: 100,
                axisLabel: {
                    formatter: '{value}k',
                    color: '#333',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        width: 1,
                        opacity: 0.5
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: [
                    'Dec, 1', 'Dec, 2', 'Dec, 3', 'Dec, 4', 'Dec, 5', 'Dec, 6', 'Dec, 7'
                ],
                axisLabel: {
                    formatter: '{value}',
                    color: '#333',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                }
            },
            series: [
                {
                    color: '#3864d6',
                    name: 'ENVIRONMENTAL',
                    type: 'bar',
                    barGap: 0,
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [320, 332, 301, 334, 390, 350, 215]
                },
                {
                    color: '#66e7ed',
                    name: 'SOCIAL',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [220, 182, 191, 234, 290, 190, 210]
                },
                {
                    color: '#25adc2',
                    name: 'GOVERNANCE',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [150, 232, 201, 154, 190, 150, 130]
                },
                {
                    color: '#6be8a0',
                    name: 'REPUTATION',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [98, 77, 101, 99, 40, 30, 50]
                }
            ]
        };
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
    };
    DashboardCampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-campaign',
            template: __webpack_require__(/*! ./dashboard-campaign.component.html */ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-campaign.component.scss */ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardCampaignComponent);
    return DashboardCampaignComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-event/dashboard-event.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Investor</li>\n      <span class=\"spacer\"></span>\n      <li class=\"breadcrumb-item no-driver\">\n        <a href=\"\" class=\"text-muted link-primary\">\n          <i class=\"icon-bubbles mr-1\"></i> Support</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\n        <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\"><i class=\"icon-cog mr-1\"></i> Settings</a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key mr-1\"></i> Account Sicurity</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots mr-1\"></i> Analytics</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility mr-1\"></i> Accessibility</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog mr-1\"></i> All settings</a>\n        </div>\n\n      </li>\n    </ol>\n\n\n  </nav>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n\n  <div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-center\">\n\n        <div class=\"content\">\n\n          <i class=\"icon-loader text-default text-50\"></i>\n          <p class=\"text-default text-30 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">4</p>\n          <p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">INVESTMENTS</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-center\">\n\n        <div class=\"content\">\n\n          <i class=\"icon-trending-up text-default text-50\"></i>\n          <p class=\"text-default text-30 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">25%</p>\n          <p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">TOTAL RETURN</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-center\">\n\n        <div class=\"content\">\n\n          <i class=\"icon-dollar-sign text-default text-50\"></i>\n          <p class=\"text-default text-30 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">€ 100<span class=\"text-13\">K</span></p>\n          <p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">PAYMENTS COLLECTED</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-4 col-md-4 col-sm-12\">\n\n    <div class=\"card bm-card-9 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content mb-2\">\n\n          <p class=\"title text-15 font-family-1 font-weight-400 mt-0 mb-1\">Next payment</p>\n          <p class=\"subtitle text-13 font-family-1 line-height-1 font-weight-400 mt-0 mb-4\">\n            Upcoming payment of principal and interest you will receive:\n          </p>\n\n          <div class=\"d-flex justify-content-between mb-2\">\n            <p class=\"text-30 font-family-1 font-weight-400 line-height-1 mb-0\">€ 100,000.00</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 align-self-end mb-0\">When: 12 July 2020</p>\n          </div>\n\n\n          <div class=\"progress mb-0\" style=\"height: 4px;\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\n             aria-valuemax=\"100\"></div>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-2 col-md-2 col-sm-2\">\n      <div class=\"card mb-4\">\n          <div class=\"card-header\">\n            You have one document:\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Q3 Financials</h5>\n            <button href=\"#\" class=\"btn btn-success\">Download</button>\n          </div>\n        </div>\n  </div>\n\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-8 col-md-12 col-sm-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-1\">\n\n        <div class=\"info\">\n          <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">THIS YEAR'S PAYMENTS</p>\n          <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">The principal and interest earned from your investments:</p>\n        </div>\n\n        <div class=\"action\">\n          <div class=\"dropdown\">\n            <a href=\"\" class=\"dropdown-toggle text-muted link-primary\" type=\"button\" id=\"dropdownMenuButton\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"icon-menu5 align-middle mr-1\"></i>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-reload align-middle mr-1\"></i> Reload Data</a>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-list1 align-middle mr-1\"></i> Details Log</a>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-pie-chart1 align-middle mr-1\"></i> Statistics</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"\"><i class=\"icon-x align-middle mr-1\"></i> Clear List</a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left pt-0\">\n        <div class=\"content\">\n\n          <div echarts [options]=\"chartRevenueYearly\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-12 col-sm-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-3\">\n\n        <div class=\"info\">\n          <p class=\"title text-gray text-16 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Total invested</p>\n        </div>\n\n        <div class=\"action\">\n\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-0\">\n        <div class=\"content\">\n          <div echarts [options]=\"chartDelivery\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n          <p class=\"text-30 text-center text-default font-family-1 font-weight-600 line-height-1 mt-0 mb-0\"> € 200,000,000</p>\n          <div class=\"row mt-3\">\n            <div class=\"col-lg-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                New investments:\n                <span class=\"text-default font-family-1 font-weight-600 ml-2\">€50,000,000</span></p>\n            </div>\n            <div class=\"col-lg-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                Completed:\n                <span class=\"text-default font-family-1 font-weight-600 ml-2\">€150,000,000</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n  \n\n  <div class=\"row\">\n      <div class=\"col-lg-12 col-sm-12\">\n    \n          <div class=\"card bm-card-5 o-hidden mb-4\">\n      \n            <div class=\"card-header justify-content-between mb-0\">\n      \n              <div class=\"info\">\n                <p class=\"title text-gray text-17 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Your Investments</p>\n              </div>\n      \n              <div class=\"action\">\n                <a href=\"\" class=\"text-muted link-primary text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">\n                  View All\n                </a>\n              </div>\n      \n            </div>\n      \n            <div class=\"card-body text-left\">\n      \n              <div class=\"content\">\n      \n                <div class=\"data-list table-responsive mt-0\">\n                  <table class=\"table table-striped table-dashboard-two\">\n                    <thead>\n                      <tr>\n                        <th class=\"text-left\">OFFERING</th>\n                        <th class=\"text-center\">ISSUER</th>\n                        <th class=\"text-center\">INVESTMENT</th>\n                        <th class=\"text-center\">INTEREST RATE</th>\n                        <th class=\"text-center\">FEE</th>\n                        <th class=\"text-center\">TYPE</th>\n                        <th class=\"text-center\">LOCATION</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"text-left\">\n                          <div class=\"source-icon\">\n                            <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                          </div>\n                          <div class=\"source-info\">\n                            <p class=\"text-15 text-default font-weight-500\">Fleet Redesign</p>\n                            <p class=\"text-12 text-gray font-weight-500\">Athens</p>\n                          </div>\n      \n                        </td>\n                        <td class=\"text-center text-gray font-weight-500 align-middle\">Sand Corp.</td>\n                        <td class=\"text-center text-success font-weight-500 align-middle\">€ 50,000,000</td>\n                        <td class=\"text-center text-default font-weight-500 align-middle\">4%</td>\n                        <td class=\"text-center font-weight-600 align-middle text-default\">1%</td>\n                        <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                          <span class=\"badge badge-pill badge-primary\">Marine</span>\n                        </td>\n                        <td class=\"text-center font-weight-600 align-middle text-default\">Greece</td>\n      \n                      </tr>\n\n                      <tr>\n                        <td class=\"text-left\">\n                          <div class=\"source-icon\">\n                            <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                          </div>\n                          <div class=\"source-info\">\n                            <p class=\"text-15 text-default font-weight-500\">Fleet Redesign</p>\n                            <p class=\"text-12 text-gray font-weight-500\">Athens</p>\n                          </div>\n      \n                        </td>\n                        <td class=\"text-center text-gray font-weight-500 align-middle\">Sand Corp.</td>\n                        <td class=\"text-center text-success font-weight-500 align-middle\">€ 50,000,000</td>\n                        <td class=\"text-center text-default font-weight-500 align-middle\">4%</td>\n                        <td class=\"text-center font-weight-600 align-middle text-default\">1%</td>\n                        <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                          <span class=\"badge badge-pill badge-primary\">Marine</span>\n                        </td>\n                        <td class=\"text-center font-weight-600 align-middle text-default\">Greece</td>\n      \n                      </tr>\n\n                      <tr>\n                        <td class=\"text-left\">\n                          <div class=\"source-icon\">\n                            <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                          </div>\n                          <div class=\"source-info\">\n                            <p class=\"text-15 text-default font-weight-500\">Fleet Redesign</p>\n                            <p class=\"text-12 text-gray font-weight-500\">Athens</p>\n                          </div>\n      \n                        </td>\n                        <td class=\"text-center text-gray font-weight-500 align-middle\">Sand Corp.</td>\n                        <td class=\"text-center text-success font-weight-500 align-middle\">€ 50,000,000</td>\n                        <td class=\"text-center text-default font-weight-500 align-middle\">4%</td>\n                        <td class=\"text-center font-weight-600 align-middle text-default\">1%</td>\n                        <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                          <span class=\"badge badge-pill badge-primary\">Marine</span>\n                        </td>\n                        <td class=\"text-center font-weight-600 align-middle text-default\">Greece</td>\n      \n                      </tr>\n      \n                    </tbody>\n                  </table>\n                </div>\n      \n      \n      \n              </div>\n            </div>\n      \n          </div>\n      \n        </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n    \n          <div class=\"card bm-card-13 o-hidden mb-4\">\n      \n              <div class=\"card-header justify-content-between mb-0\">\n      \n                  <div class=\"info\">\n                    <p class=\"title text-gray text-17 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Payments</p>\n                  </div>\n          \n                  <div class=\"action\">\n                    <a href=\"\" class=\"text-muted link-primary text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">\n                      View All\n                    </a>\n                  </div>\n          \n                </div>\n      \n            <div class=\"card-body text-left\">\n              <div class=\"content\">\n      \n                <div class=\"data-list mt-1 table-responsive\">\n                  <table class=\"table table-striped table-dashboard-two\">\n                    <thead>\n                      <tr>\n                        <th class=\"text-left\">OFFERING</th>\n                        <th class=\"text-right\">AMOUNT</th>\n                        <th class=\"text-right\">TYPE</th>\n                        <th class=\"text-right\">STATUS</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"text-left\">\n                          <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                          <p class=\"text-13\">Fleet redesign</p>\n                        </td>\n                        <td class=\"text-right text-success font-weight-500\">€ 15,000</td>\n                        <td class=\"text-right font-weight-500\">Semi-annual coupon</td>\n                        <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                          <span class=\"badge badge-pill badge-success\">Paid</span>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"text-left\">\n                          <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                          <p class=\"text-13\">Fleet redesign</p>\n                        </td>\n                        <td class=\"text-right text-success font-weight-500\">€ 15,000</td>\n                        <td class=\"text-right font-weight-500\">Semi-annual coupon</td>\n                        <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                          <span class=\"badge badge-pill badge-success\">Paid</span>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"text-left\">\n                          <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                          <p class=\"text-13\">Fleet redesign</p>\n                        </td>\n                        <td class=\"text-right text-success font-weight-500\">€ 15,000</td>\n                        <td class=\"text-right font-weight-500\">Semi-annual coupon</td>\n                        <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                          <span class=\"badge badge-pill badge-warning\">On hold</span>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n      \n              </div>\n      \n            </div>\n      \n          </div>\n      \n        </div>\n    \n    \n    \n      <div class=\"col-lg-6 col-md-12\">\n    \n        <div class=\"card bm-card-13 o-hidden mb-4\">\n    \n            <div class=\"card-header justify-content-between mb-0\">\n    \n                <div class=\"info\">\n                  <p class=\"title text-gray text-17 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Documents</p>\n                </div>\n        \n                <div class=\"action\">\n                  <a href=\"\" class=\"text-muted link-primary text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">\n                    View All\n                  </a>\n                </div>\n        \n              </div>\n    \n          <div class=\"card-body text-left\">\n            <div class=\"content\">\n    \n              <div class=\"data-list mt-1 table-responsive\">\n                <table class=\"table table-striped table-dashboard-two\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-left\">OFFERING</th>\n                      <th class=\"text-right\">TITLE</th>\n                      <th class=\"text-right\">STATUS</th>\n                      <th class=\"text-right\">ACTION</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                        <p class=\"text-13\">Fleet redesign</p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">Q2 Financials</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-success\">Approved</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                        <a href=\"\"><i class=\"icon-download\"></i></a>\n                      </td>\n                      \n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-gb flag-icon-squared\"></i>\n                        <p class=\"text-13\">Fields Solar Farm</p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">Q2 ESG Report</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-success\">Approved</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                        <a href=\"\"><i class=\"icon-download\"></i></a>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-au flag-icon-squared\"></i>\n                        <p class=\"text-13\">Fields Solar Farm</p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">Q2 Financials</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-success\">Approved</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                        <a href=\"\"><i class=\"icon-download\"></i></a>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-ca flag-icon-squared\"></i>\n                        <p class=\"text-13\">Rail Grid </p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">Loan prospectus</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-success\">Approved</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                        <a href=\"\"><i class=\"icon-download\"></i></a>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-in flag-icon-squared\"></i>\n                        <p class=\"text-13\">Intercom Works</p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">Q3 Report</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-warning\">On hold</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-nl flag-icon-squared\"></i>\n                        <p class=\"text-13\">Office Developments</p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">Q1 Financials</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-warning\">On hold</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-left\">\n                        <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                        <p class=\"text-13\">Wind Turbines</p>\n                      </td>\n                      <td class=\"text-right font-weight-500\">ESG Overview</td>\n                      <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                        <span class=\"badge badge-pill badge-warning\">On hold</span>\n                      </td>\n                      <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n    \n            </div>\n    \n          </div>\n    \n        </div>\n    \n      </div>\n    \n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-event/dashboard-event.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-event/dashboard-event.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEventComponent", function() { return DashboardEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
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





var DashboardEventComponent = /** @class */ (function () {
    function DashboardEventComponent(productService) {
        this.productService = productService;
    }
    DashboardEventComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
        this.chartCampaignMatrics = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: '4%',
                top: '4%',
                right: '3%',
                bottom: '10%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisLabel: {
                    formatter: '{value}',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 150,
                interval: 50,
                axisLabel: {
                    formatter: '{value}',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        width: 1,
                        opacity: 0.5
                    }
                }
            },
            series: [
                {
                    name: 'This Year',
                    type: 'line',
                    smooth: true,
                    data: [55, 80, 60, 125, 95, 110, 80, 60, 95, 120, 85, 67],
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
                {
                    name: 'Last Year',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: [40, 45, 55, 35, 65, 20, 60, 20, 50, 40, 25, 10],
                    symbolSize: 8,
                    lineStyle: {
                        show: true,
                        color: 'rgb(73, 163, 77)',
                        width: 1,
                        opacity: 1,
                    },
                    itemStyle: {
                        color: '#49a34d',
                        borderColor: '#49a34d',
                        borderWidth: 1.5,
                        emphasis: {
                            opacity: 1,
                            shadowColor: 'rgba(73, 163, 77, 1)',
                            shadowBlur: 20,
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
                }
            ]
        });
        this.chartDelivery = {
            color: ['#6be8a0', '#66e7ed', '#ffde8d', '#3864d6'],
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            grid: {
                top: '10%',
                left: '3%',
                right: '4%',
                bottom: '2%',
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
                    radius: ['55%', '85%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    hoverOffset: 0,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                fontSize: '13',
                                fontWeight: 'bold'
                            },
                            formatter: "{a}",
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '15',
                                fontWeight: 'bold',
                                color: '#11110f'
                            },
                            formatter: "{c} EUR\n{b}",
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 20000, name: 'Environmental' },
                        { value: 35000, name: 'Social' },
                        { value: 45000, name: 'Governance' },
                        { value: 60000, name: 'Innovation' },
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
        this.chartInterestGroup = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        opacity: 0
                    }
                }
            },
            xAxis: {
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    name: 'Interested',
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
                    animation: false
                },
                {
                    name: 'Going',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' }
                            ])
                        },
                        emphasis: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 220, 182, 191, 234, 290, 330, 310, 123, 442, 212]
                }
            ]
        });
        this.chartLineOption1 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            series: [{
                    data: [1, 1, 1, 50, 40, 1, 90, 1, 40, 20, 1, 1, 1, 90, 0, 40, 0, 50, 0],
                    markArea: {
                        label: {
                            show: true
                        }
                    },
                    areaStyle: {
                        color: 'rgba(102, 51, 153, .2)',
                        origin: 'start'
                    },
                    lineStyle: {
                        color: '#663399',
                    },
                    itemStyle: {
                        color: '#663399'
                    },
                    type: 'line'
                }]
        });
        this.chartLineOption2 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [30, 10, 40, 10, 40, 20, 90] }, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 193, 7, 0.2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#FFC107'
                    }, itemStyle: {
                        color: '#FFC107'
                    } })]
        });
        this.chartLineOption3 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
                    lineStyle: __assign({ color: 'rgba(102, 51, 153, 0.86)', width: 3 }, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow),
                    label: { show: true, color: '#212121' },
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        borderColor: 'rgba(102, 51, 153, 1)'
                    }
                }]
        });
        this.chartLineOption4 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption4.color = ['#5f6bc2'];
        this.chartLineOption4.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption4.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption5 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption5.color = ['#ff5721'];
        this.chartLineOption5.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption5.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption6 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption6.color = ['#4cae4f'];
        this.chartLineOption6.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption6.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption7 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption7.color = ['#135bba'];
        this.chartLineOption7.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption7.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption8 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart2"]);
        this.chartLineOption8.color = ['#f10075', '#eee'];
        this.chartLineOption8.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.chartLineOption8.series[0].name = 'Online';
        this.chartLineOption8.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        this.chartLineOption8.series[0].color = '#c4dbf0';
        this.chartLineOption8.series[1].name = 'Offline';
        this.chartLineOption8.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        this.chartLineOption8.series[1].color = '#2c80bf';
        this.chartRevenueYearly = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart2"]);
        this.chartRevenueYearly.color = ['#f10075', '#eee'];
        this.chartRevenueYearly.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.chartRevenueYearly.series[0].name = 'Interest';
        this.chartRevenueYearly.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        this.chartRevenueYearly.series[0].color = '#66e7ed';
        this.chartRevenueYearly.series[1].name = 'Principal';
        this.chartRevenueYearly.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        this.chartRevenueYearly.series[1].color = '#4a8ad2';
        this.chartLineOption9 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["PaiChart1"]);
        this.chartLineOption9.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
        this.chartLineOption9.series[0].name = 'Sales by Country';
        this.chartLineOption9.series[0].data = [
            { value: 335, name: 'USA' },
            { value: 310, name: 'CANADA' },
            { value: 234, name: 'MEXICO' },
            { value: 135, name: 'UK' },
            { value: 148, name: 'AUSTRALIA' },
            { value: 548, name: 'INDIA' }
        ];
        this.chartLineOption10 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            color: ['#003765', '#0167c1', '#4a92ea', '#88c2f9', '#5a99d5', '#017bff'],
            title: {
                text: 'World Population (2010)',
                subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
                sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
                left: 'center',
                top: 'top'
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                        + '.' + value[1];
                    return params.seriesName + '<br/>' + params.name + ' : ' + value;
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 0,
                max: 1000000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: 'World Population (2010)',
                    type: 'map',
                    mapType: 'world',
                    roam: true,
                    itemStyle: {
                        emphasis: { label: { show: true } }
                    },
                    data: [
                        { name: 'Afghanistan', value: 28397.812 },
                        { name: 'Angola', value: 19549.124 },
                        { name: 'Albania', value: 3150.143 },
                        { name: 'United Arab Emirates', value: 8441.537 },
                        { name: 'Argentina', value: 40374.224 },
                        { name: 'Armenia', value: 2963.496 },
                        { name: 'French Southern and Antarctic Lands', value: 268.065 },
                        { name: 'Australia', value: 22404.488 },
                        { name: 'Austria', value: 8401.924 },
                        { name: 'Azerbaijan', value: 9094.718 },
                        { name: 'Burundi', value: 9232.753 },
                        { name: 'Belgium', value: 10941.288 },
                        { name: 'Benin', value: 9509.798 },
                        { name: 'Burkina Faso', value: 15540.284 },
                        { name: 'Bangladesh', value: 151125.475 },
                        { name: 'Bulgaria', value: 7389.175 },
                        { name: 'The Bahamas', value: 66402.316 },
                        { name: 'Bosnia and Herzegovina', value: 3845.929 },
                        { name: 'Belarus', value: 9491.07 },
                        { name: 'Belize', value: 308.595 },
                        { name: 'Bermuda', value: 64.951 },
                        { name: 'Bolivia', value: 716.939 },
                        { name: 'Brazil', value: 195210.154 },
                        { name: 'Brunei', value: 27.223 },
                        { name: 'Bhutan', value: 716.939 },
                        { name: 'Botswana', value: 1969.341 },
                        { name: 'Central African Republic', value: 4349.921 },
                        { name: 'Canada', value: 34126.24 },
                        { name: 'Switzerland', value: 7830.534 },
                        { name: 'Chile', value: 17150.76 },
                        { name: 'China', value: 1359821.465 },
                        { name: 'Ivory Coast', value: 60508.978 },
                        { name: 'Cameroon', value: 20624.343 },
                        { name: 'Democratic Republic of the Congo', value: 62191.161 },
                        { name: 'Republic of the Congo', value: 3573.024 },
                        { name: 'Colombia', value: 46444.798 },
                        { name: 'Costa Rica', value: 4669.685 },
                        { name: 'Cuba', value: 11281.768 },
                        { name: 'Northern Cyprus', value: 1.468 },
                        { name: 'Cyprus', value: 1103.685 },
                        { name: 'Czech Republic', value: 10553.701 },
                        { name: 'Germany', value: 83017.404 },
                        { name: 'Djibouti', value: 834.036 },
                        { name: 'Denmark', value: 5550.959 },
                        { name: 'Dominican Republic', value: 10016.797 },
                        { name: 'Algeria', value: 37062.82 },
                        { name: 'Ecuador', value: 15001.072 },
                        { name: 'Egypt', value: 78075.705 },
                        { name: 'Eritrea', value: 5741.159 },
                        { name: 'Spain', value: 46182.038 },
                        { name: 'Estonia', value: 1298.533 },
                        { name: 'Ethiopia', value: 87095.281 },
                        { name: 'Finland', value: 5367.693 },
                        { name: 'Fiji', value: 860.559 },
                        { name: 'Falkland Islands', value: 49.581 },
                        { name: 'France', value: 63230.866 },
                        { name: 'Gabon', value: 1556.222 },
                        { name: 'United Kingdom', value: 62066.35 },
                        { name: 'Georgia', value: 4388.674 },
                        { name: 'Ghana', value: 24262.901 },
                        { name: 'Guinea', value: 10876.033 },
                        { name: 'Gambia', value: 1680.64 },
                        { name: 'Guinea Bissau', value: 10876.033 },
                        { name: 'Equatorial Guinea', value: 696.167 },
                        { name: 'Greece', value: 11109.999 },
                        { name: 'Greenland', value: 56.546 },
                        { name: 'Guatemala', value: 14341.576 },
                        { name: 'French Guiana', value: 231.169 },
                        { name: 'Guyana', value: 786.126 },
                        { name: 'Honduras', value: 7621.204 },
                        { name: 'Croatia', value: 4338.027 },
                        { name: 'Haiti', value: 9896.4 },
                        { name: 'Hungary', value: 10014.633 },
                        { name: 'Indonesia', value: 240676.485 },
                        { name: 'India', value: 1205624.648 },
                        { name: 'Ireland', value: 4467.561 },
                        { name: 'Iran', value: 240676.485 },
                        { name: 'Iraq', value: 30962.38 },
                        { name: 'Iceland', value: 318.042 },
                        { name: 'Israel', value: 7420.368 },
                        { name: 'Italy', value: 60508.978 },
                        { name: 'Jamaica', value: 2741.485 },
                        { name: 'Jordan', value: 6454.554 },
                        { name: 'Japan', value: 127352.833 },
                        { name: 'Kazakhstan', value: 15921.127 },
                        { name: 'Kenya', value: 40909.194 },
                        { name: 'Kyrgyzstan', value: 5334.223 },
                        { name: 'Cambodia', value: 14364.931 },
                        { name: 'South Korea', value: 51452.352 },
                        { name: 'Kosovo', value: 97.743 },
                        { name: 'Kuwait', value: 2991.58 },
                        { name: 'Laos', value: 6395.713 },
                        { name: 'Lebanon', value: 4341.092 },
                        { name: 'Liberia', value: 3957.99 },
                        { name: 'Libya', value: 6040.612 },
                        { name: 'Sri Lanka', value: 20758.779 },
                        { name: 'Lesotho', value: 2008.921 },
                        { name: 'Lithuania', value: 3068.457 },
                        { name: 'Luxembourg', value: 507.885 },
                        { name: 'Latvia', value: 2090.519 },
                        { name: 'Morocco', value: 31642.36 },
                        { name: 'Moldova', value: 103.619 },
                        { name: 'Madagascar', value: 21079.532 },
                        { name: 'Mexico', value: 117886.404 },
                        { name: 'Macedonia', value: 507.885 },
                        { name: 'Mali', value: 13985.961 },
                        { name: 'Myanmar', value: 51931.231 },
                        { name: 'Montenegro', value: 620.078 },
                        { name: 'Mongolia', value: 2712.738 },
                        { name: 'Mozambique', value: 23967.265 },
                        { name: 'Mauritania', value: 3609.42 },
                        { name: 'Malawi', value: 15013.694 },
                        { name: 'Malaysia', value: 28275.835 },
                        { name: 'Namibia', value: 2178.967 },
                        { name: 'New Caledonia', value: 246.379 },
                        { name: 'Niger', value: 15893.746 },
                        { name: 'Nigeria', value: 159707.78 },
                        { name: 'Nicaragua', value: 5822.209 },
                        { name: 'Netherlands', value: 16615.243 },
                        { name: 'Norway', value: 4891.251 },
                        { name: 'Nepal', value: 26846.016 },
                        { name: 'New Zealand', value: 4368.136 },
                        { name: 'Oman', value: 2802.768 },
                        { name: 'Pakistan', value: 173149.306 },
                        { name: 'Panama', value: 3678.128 },
                        { name: 'Peru', value: 29262.83 },
                        { name: 'Philippines', value: 93444.322 },
                        { name: 'Papua New Guinea', value: 6858.945 },
                        { name: 'Poland', value: 38198.754 },
                        { name: 'Puerto Rico', value: 3709.671 },
                        { name: 'North Korea', value: 1.468 },
                        { name: 'Portugal', value: 10589.792 },
                        { name: 'Paraguay', value: 6459.721 },
                        { name: 'Qatar', value: 1749.713 },
                        { name: 'Romania', value: 21861.476 },
                        { name: 'Russia', value: 21861.476 },
                        { name: 'Rwanda', value: 10836.732 },
                        { name: 'Western Sahara', value: 514.648 },
                        { name: 'Saudi Arabia', value: 27258.387 },
                        { name: 'Sudan', value: 35652.002 },
                        { name: 'South Sudan', value: 9940.929 },
                        { name: 'Senegal', value: 12950.564 },
                        { name: 'Solomon Islands', value: 526.447 },
                        { name: 'Sierra Leone', value: 5751.976 },
                        { name: 'El Salvador', value: 6218.195 },
                        { name: 'Somaliland', value: 9636.173 },
                        { name: 'Somalia', value: 9636.173 },
                        { name: 'Republic of Serbia', value: 3573.024 },
                        { name: 'Suriname', value: 524.96 },
                        { name: 'Slovakia', value: 5433.437 },
                        { name: 'Slovenia', value: 2054.232 },
                        { name: 'Sweden', value: 9382.297 },
                        { name: 'Swaziland', value: 1193.148 },
                        { name: 'Syria', value: 7830.534 },
                        { name: 'Chad', value: 11720.781 },
                        { name: 'Togo', value: 6306.014 },
                        { name: 'Thailand', value: 66402.316 },
                        { name: 'Tajikistan', value: 7627.326 },
                        { name: 'Turkmenistan', value: 5041.995 },
                        { name: 'East Timor', value: 10016.797 },
                        { name: 'Trinidad and Tobago', value: 1328.095 },
                        { name: 'Tunisia', value: 10631.83 },
                        { name: 'Turkey', value: 72137.546 },
                        { name: 'United Republic of Tanzania', value: 44973.33 },
                        { name: 'Uganda', value: 33987.213 },
                        { name: 'Ukraine', value: 46050.22 },
                        { name: 'Uruguay', value: 3371.982 },
                        { name: 'United States of America', value: 312247.116 },
                        { name: 'Uzbekistan', value: 27769.27 },
                        { name: 'Venezuela', value: 236.299 },
                        { name: 'Vietnam', value: 89047.397 },
                        { name: 'Vanuatu', value: 236.299 },
                        { name: 'West Bank', value: 13.565 },
                        { name: 'Yemen', value: 22763.008 },
                        { name: 'South Africa', value: 51452.352 },
                        { name: 'Zambia', value: 13216.985 },
                        { name: 'Zimbabwe', value: 13076.978 }
                    ]
                }
            ]
        });
    };
    DashboardEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-event',
            template: __webpack_require__(/*! ./dashboard-event.component.html */ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-event.component.scss */ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], DashboardEventComponent);
    return DashboardEventComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n\t<ol class=\"breadcrumb\">\n\t\t<li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Finance</li>\n\t\t<span class=\"spacer\"></span>\n\t\t<li class=\"breadcrumb-item no-driver\">\n\t\t\t<a href=\"\" class=\"text-muted link-primary\">\n\t\t\t\t<i class=\"icon-bubbles\"></i> Support</a>\n\t\t</li>\n\t\t<li class=\"breadcrumb-item\">\n\n\t\t\t<a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n\t\t\t aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n\t\t\t</div>\n\n\t\t</li>\n\t</ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top mb-5\"></div>\n\n<div class=\"row\">\n\n\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t<div class=\"card bm-card-14 bg-red o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$212,088</p>\n\t\t\t\t\t<p class=\"subtitle text-14 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL SALES</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\">\n\t\t\t\t\t<i class=\"icon-anchor text-30 text-white\"></i>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<div class=\"content mt-1\">\n\n\t\t\t\t\t<div echarts [options]=\"chartLineOptionD1\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t<div class=\"card bm-card-14 bg-blue o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$72,088</p>\n\t\t\t\t\t<p class=\"subtitle text-14 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL COST</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\">\n\t\t\t\t\t<i class=\"icon-adjust text-30 text-white\"></i>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t<div class=\"content mt-1\">\n\n\n\n\t\t\t\t\t<div echarts [options]=\"chartLineOptionD2\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t<div class=\"card bm-card-14 bg-purple o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$22,088</p>\n\t\t\t\t\t<p class=\"subtitle text-16 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL TAX</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\">\n\t\t\t\t\t<i class=\"icon-chart-pie text-30 text-white\"></i>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t<div class=\"content mt-1\">\n\n\n\n\t\t\t\t\t<div echarts [options]=\"chartLineOptionD3\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n\t\t<div class=\"card bm-card-14 bg-green o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-30 font-family-2 font-weight-500 mt-0 mb-0 line-height-1\">$28,088</p>\n\t\t\t\t\t<p class=\"subtitle text-16 font-family-1 font-weight-500 mt-0 mb-0\">TOTAL EARNINGS</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\">\n\t\t\t\t\t<i class=\"icon-currency-dollar text-30 text-white\"></i>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body text-left\">\n\n\t\t\t\t<div class=\"content mt-1\">\n\n\t\t\t\t\t<div echarts [options]=\"chartLineOptionD4\" [autoResize]=\"true\" style=\"height: 150px;\"></div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<div class=\"row\">\n\n\t<div class=\"col-md-8 col-md-12 col-sm-12\">\n\n\t\t<div class=\"card eg-card-1 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header mb-3 row\">\n\n\t\t\t\t<div class=\"info col-md-9 col-sm-12\">\n\t\t\t\t\t<p class=\"title text-gray text-16 font-family-1 font-weight-500 mt-0 mb-1\">SALES ANALYSIS</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Audience to which the users belonged while on the\n\t\t\t\t\t\tcurrent date range</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action col-md-3 col-sm-12\">\n\t\t\t\t\t<div class=\"btn-group btn-group-small btn-group-toggle\" data-toggle=\"buttons\">\n\t\t\t\t\t\t<label class=\"btn btn-outline-primary\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Day\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"btn btn-outline-primary\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Week\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label class=\"btn btn-outline-primary active\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Month\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pt-1\">\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<div class=\"info-box text-wrap mr-5 mb-4\">\n\t\t\t\t\t\t<p class=\"title text-14 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">\n\t\t\t\t\t\t\t<i class=\"icon-disc text-orange\"></i>\n\t\t\t\t\t\t\tSALES</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"info-box text-wrap mr-5 mb-4\">\n\t\t\t\t\t\t<p class=\"title text-14 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">\n\t\t\t\t\t\t\t<i class=\"icon-disc text-success\"></i>\n\t\t\t\t\t\t\tVISITS</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"info-box text-wrap mr-5 mb-4\">\n\t\t\t\t\t\t<p class=\"title text-14 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">\n\t\t\t\t\t\t\t<i class=\"icon-disc text-primary\"></i>\n\t\t\t\t\t\t\tCLICKS</p>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div echarts [options]=\"chartCampaignMatrics\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-md-4 col-md-12 col-sm-12\">\n\n\t\t<div class=\"card eg-card-1 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between mb-2\">\n\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-gray text-16 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">DISCOVER PEOPLE</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-0\">Audience to which the users\n\t\t\t\t\t\tbelonged\n\t\t\t\t\t\twhile on the current date range</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\">\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n\t\t\t\t\t<img class=\"avatar-md mr-3\" src=\"./assets/images/faces/2.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t<h5 class=\"m-0 font-weight-400 text-muted\">David Hopkins</h5>\n\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary btn-sm\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n\t\t\t\t\t<img class=\"avatar-md mr-3\" src=\"./assets/images/faces/3.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t<h5 class=\"m-0 font-weight-400 text-muted\">James Mitchell</h5>\n\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary btn-sm\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n\t\t\t\t\t<img class=\"avatar-md mr-3\" src=\"./assets/images/faces/4.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t<h5 class=\"m-0 font-weight-400 text-muted\">Jessica Mitchell</h5>\n\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary btn-sm\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n\t\t\t\t\t<img class=\"avatar-md mr-3\" src=\"./assets/images/faces/4.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t<h5 class=\"m-0 font-weight-400 text-muted\">Jessica Mitchell</h5>\n\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary btn-sm\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex align-items-center border-bottom-dotted-dim pb-1 mb-2\">\n\t\t\t\t\t<img class=\"avatar-md mr-3\" src=\"./assets/images/faces/5.jpg\" alt=\"\">\n\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t<h5 class=\"m-0 font-weight-400 text-muted\">Jessica Mitchell</h5>\n\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-outline-primary btn-sm\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"row\">\n\n\t<div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n\t\t<div class=\"card eg-card-7 o-hidden mb-4\">\n\n\t\t\t<div class=\"card-header justify-content-between mb-2\">\n\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<p class=\"title text-gray text-16 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">FINANCIAL MANAGEMENT\n\t\t\t\t\t\tREVIEW</p>\n\t\t\t\t\t<p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-2\">Audience to which the users\n\t\t\t\t\t\tbelonged\n\t\t\t\t\t\twhile on the current date range</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"action\"></div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body text-left pt-2\">\n\n\t\t\t\t<div class=\"content\">\n\n\t\t\t\t\t<div class=\"data-table-2 table-responsive\">\n\n\t\t\t\t\t\t<table class=\"table table-striped\">\n\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th colspan=\"5\" class=\"border-right border-top\">Quarter To Date (QTD)</th>\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"border-top\">Year To Date (YTD)</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"border-right\">&nbsp;</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Actual</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Forecast</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Variance</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right border-right\">% Variance</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Actual</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Forecast</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody class=\"text-right\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Office &amp; Supplies</td>\n\t\t\t\t\t\t\t\t\t<td>232,243</td>\n\t\t\t\t\t\t\t\t\t<td>399,768</td>\n\t\t\t\t\t\t\t\t\t<td>40,234</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">5.1%</td>\n\t\t\t\t\t\t\t\t\t<td>2,983,098</td>\n\t\t\t\t\t\t\t\t\t<td>2,092,243</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Salaries &amp; Benefits</td>\n\t\t\t\t\t\t\t\t\t<td>2,232,877</td>\n\t\t\t\t\t\t\t\t\t<td>3,099,565</td>\n\t\t\t\t\t\t\t\t\t<td>400,020</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">6.8%</td>\n\t\t\t\t\t\t\t\t\t<td>28,983,091</td>\n\t\t\t\t\t\t\t\t\t<td>29,092,765</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Professional Services</td>\n\t\t\t\t\t\t\t\t\t<td>32,435</td>\n\t\t\t\t\t\t\t\t\t<td>99,789</td>\n\t\t\t\t\t\t\t\t\t<td>20,020</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">16.9%</td>\n\t\t\t\t\t\t\t\t\t<td>183,566</td>\n\t\t\t\t\t\t\t\t\t<td>292,897</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Human Resources</td>\n\t\t\t\t\t\t\t\t\t<td>76,877</td>\n\t\t\t\t\t\t\t\t\t<td>98,565</td>\n\t\t\t\t\t\t\t\t\t<td>123,020</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">15.0%</td>\n\t\t\t\t\t\t\t\t\t<td>101,675</td>\n\t\t\t\t\t\t\t\t\t<td>122,232</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left border-right\">Travel &amp; Entertainment</td>\n\t\t\t\t\t\t\t\t\t<td>2,232</td>\n\t\t\t\t\t\t\t\t\t<td>3,099</td>\n\t\t\t\t\t\t\t\t\t<td>400</td>\n\t\t\t\t\t\t\t\t\t<td class=\"border-right\">1.2%</td>\n\t\t\t\t\t\t\t\t\t<td>13,091</td>\n\t\t\t\t\t\t\t\t\t<td>14,765</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-left font-weight-600 border-right\">Grand Total</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">3,433,232</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">4,768,099</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">999,400</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600 border-right\">88.2%</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">30,643,091</td>\n\t\t\t\t\t\t\t\t\t<td class=\"font-weight-600\">31,644,765</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardFinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardFinanceComponent", function() { return DashboardFinanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);
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





var DashboardFinanceComponent = /** @class */ (function () {
    function DashboardFinanceComponent(productService) {
        this.productService = productService;
    }
    DashboardFinanceComponent.prototype.ngOnInit = function () {
        this.chartLineOptionD1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["LineChart3"]);
        this.chartLineOptionD1.series[0].lineStyle.normal.color = ['#F44336'];
        this.chartLineOptionD2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["LineChart3"]);
        this.chartLineOptionD2.series[0].lineStyle.normal.color = ['#0065c4'];
        this.chartLineOptionD3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["LineChart3"]);
        this.chartLineOptionD3.series[0].lineStyle.normal.color = ['#673ab7'];
        this.chartLineOptionD4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["LineChart3"]);
        this.chartLineOptionD4.series[0].lineStyle.normal.color = ['#538c28'];
        this.chartCampaignMatrics = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].lineFullWidth, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: '4%',
                top: '4%',
                right: '3%',
                bottom: '10%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
                    'Nov', 'Dec'
                ],
                axisLabel: {
                    formatter: '{value}',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    formatter: '{value}k',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        width: 1,
                        opacity: 0.5
                    }
                }
            },
            series: [
                {
                    name: 'Visit',
                    type: 'line',
                    smooth: true,
                    data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                        140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                        135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        color: 'rgb(255, 87, 33)',
                        opacity: 1,
                        width: 1.5,
                    },
                    itemStyle: {
                        show: false,
                        color: '#ff5721',
                        borderColor: '#ff5721',
                        borderWidth: 1.5
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
                                        offset: 0, color: 'rgba(255, 87, 33, 1)'
                                    }, {
                                        offset: 0.3, color: 'rgba(255, 87, 33, 0.7)'
                                    }, {
                                        offset: 1, color: 'rgba(255, 87, 33, 0)'
                                    }]
                            }
                        }
                    }
                },
                {
                    name: 'Sales',
                    type: 'line',
                    smooth: true,
                    data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
                        104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
                        70, 65, 86, 75, 80, 70, 50, 70],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        color: 'rgb(95, 107, 194)',
                        opacity: 1,
                        width: 1.5,
                    },
                    itemStyle: {
                        color: '#5f6cc1',
                        borderColor: '#5f6cc1',
                        borderWidth: 1.5
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
                                        offset: 0, color: 'rgba(95, 107, 194, 1)'
                                    }, {
                                        offset: 0.5, color: 'rgba(95, 107, 194, 0.7)'
                                    }, {
                                        offset: 1, color: 'rgba(95, 107, 194, 0)'
                                    }]
                            }
                        }
                    }
                },
            ]
        });
        this.chartLineSmall1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].defaultOptions, {
            grid: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].gridAlignLeft,
            series: [__assign({ data: [30, 40, 20, 50, 40, 80, 90, 40] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#fff' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].lineShadow), itemStyle: {
                        color: '#fff'
                    } })]
        });
        this.lineChart1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .15)',
                        origin: 'start'
                    }, lineStyle: {
                        // width: 1,
                        color: 'rgba(102, 51, 153, 0.68)',
                    }, itemStyle: {
                        color: '#663399'
                    } }), __assign({ data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_2__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 152, 0, 0.15)',
                        origin: 'start'
                    }, lineStyle: {
                        // width: 1,
                        color: 'rgba(255, 152, 0, .6)',
                    }, itemStyle: {
                        color: 'rgba(255, 152, 0, 1)'
                    } })]
        });
        this.products$ = this.productService.getProducts();
    };
    DashboardFinanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-finance',
            template: __webpack_require__(/*! ./dashboard-finance.component.html */ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-finance.component.scss */ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], DashboardFinanceComponent);
    return DashboardFinanceComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-products/dashboard-products.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">FUND MANAGEMENT</li>\n    <span class=\"spacer\"></span>\n    <li class=\"breadcrumb-item no-driver\">\n      <a href=\"\" class=\"text-muted link-primary\">\n        <i class=\"icon-bubbles\"></i> Support</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n\n      <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\"><i class=\"icon-cog\"></i> Settings</a>\n\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Account Sicurity</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Analytics</a>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Accessibility</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> All settings</a>\n      </div>\n\n    </li>\n  </ol>\n\n</nav>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-center\">\n\n        <div class=\"content\">\n\n          <i class=\"icon-loader text-default text-50\"></i>\n          <p class=\"text-default text-30 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">3</p>\n          <p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">ACTIVE OFFERINGS</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-center\">\n\n        <div class=\"content\">\n\n          <i class=\"icon-users text-default text-50\"></i>\n          <p class=\"text-default text-30 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">250</p>\n          <p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">INVESTORS</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-2 col-md-6 col-sm-6\">\n\n    <div class=\"card bm-card-10 o-hidden mb-4\">\n\n      <div class=\"card-body text-center\">\n\n        <div class=\"content\">\n\n          <i class=\"icon-dollar-sign text-default text-50\"></i>\n          <p class=\"text-default text-30 font-family-1 font-weight-500 line-height-1 mt-2 mb-1\">€ 200<span class=\"text-13\">K</span></p>\n          <p class=\"text-gray text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0 \">FEE COLLECTED</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-4 col-md-4 col-sm-6\">\n\n    <div class=\"card bm-card-9 o-hidden mb-4\">\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content mb-2\">\n\n          <p class=\"title text-15 font-family-1 font-weight-400 mt-0 mb-1\">Next payment</p>\n          <p class=\"subtitle text-13 font-family-1 line-height-1 font-weight-400 mt-0 mb-4\">\n            Upcoming payment of principal and interest to your investors.\n          </p>\n\n          <div class=\"d-flex justify-content-between mb-2\">\n            <p class=\"text-30 font-family-1 font-weight-400 line-height-1 mb-0\">€ 100,000.00</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 align-self-end mb-0\">When: 12 July 2020</p>\n          </div>\n\n\n          <div class=\"progress mb-0\" style=\"height: 4px;\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\"\n             aria-valuemax=\"100\"></div>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-2 col-md-2 col-sm-2\">\n      <div class=\"card mb-4\">\n          <div class=\"card-header\">\n            Next coupon\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">€ 30,000.00</h5>\n            <button href=\"#\" class=\"btn btn-success\">Send payment</button>\n          </div>\n        </div>\n  </div>\n\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-4 col-md-12 col-sm-12\">\n\n    <div class=\"card eg-card-1 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-3\">\n\n        <div class=\"info\">\n          <p class=\"title text-gray text-16 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Total managed</p>\n        </div>\n\n        <div class=\"action\">\n\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-0\">\n        <div class=\"content\">\n          <div echarts [options]=\"chartDelivery\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n          <p class=\"text-30 text-center text-default font-family-1 font-weight-600 line-height-1 mt-0 mb-0\"> € 200,000,000</p>\n          <div class=\"row mt-3\">\n            <div class=\"col-lg-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                New investments:\n                <span class=\"text-default font-family-1 font-weight-600 ml-2\">€50,000,000</span></p>\n            </div>\n            <div class=\"col-lg-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                Completed:\n                <span class=\"text-default font-family-1 font-weight-600 ml-2\">€150,000,000</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-lg-8 col-md-12 col-sm-12\">\n\n    <div class=\"card eg-card-7 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-4\">\n\n        <div class=\"info\">\n          <p class=\"title text-gray text-16 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Overall performance</p>\n        </div>\n\n        <div class=\"action\">\n\n          <a href=\"#\" class=\"dropdown-toggle text-gray\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">All\n            Types</a>\n\n          <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key\"></i> Sales</a>\n            <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots\"></i> Stock</a>\n            <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility\"></i> Orders</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog\"></i> Customers</a>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card-body pt-0\">\n        <div class=\"content mb-2\">\n          <div echarts [options]=\"chartCampaignMatrics\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n          <div class=\"row mt-4\">\n            <div class=\"col-lg-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                <i class=\"icon-crosshair text-default align-top\"></i>\n                This Year:\n                <span class=\"text-default font-family-1 font-weight-600 ml-1\">+ €30,000,000</span></p>\n            </div>\n            <div class=\"col-lg-6\">\n              <p class=\"text-15 text-center font-family-1 font-weight-500 line-height-1 mt-0 mb-1 text-gray\">\n                <i class=\"icon-target1 text-default align-top\"></i>\n                Last Year:\n                <span class=\"text-default font-family-1 font-weight-600 ml-1\">+ €15,000,000</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-12\">\n\n    <div class=\"card bm-card-5 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-0\">\n\n        <div class=\"info\">\n          <p class=\"title text-gray text-17 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Your Investors</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">\n            View All\n          </a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content\">\n\n          <div class=\"data-list table-responsive mt-0\">\n            <table class=\"table table-striped table-dashboard-two\">\n              <thead>\n                <tr>\n                  <th class=\"text-left\">INVESTOR</th>\n                  <th class=\"text-center\">TOTAL INVESTMENT</th>\n                  <th class=\"text-center\">ACTIVE INVESTMENTS</th>\n                  <th class=\"text-center\">EMAIL</th>\n                  <th class=\"text-center\">PHONE</th>\n                  <th class=\"text-center\">PAYMENT DUE</th>\n                  <th class=\"text-center\">PAYMENTS STATUS</th>\n                  <th class=\"text-center\">SEND PAYMENT</th>\n                  <th class=\"text-center\">SEND DOCUMENTS</th>\n                  <th class=\"text-center\">CONTACT</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Tower Partners</p>\n                      <p class=\"text-12 text-gray font-weight-500\">USA</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 250,000</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">3</td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">contact@tower.com</td>\n                  <td class=\"text-center font-weight-600 align-middle text-grey\">+1 039 231 4231</td>\n                  <td class=\"text-center font-weight-600 align-middle text-primary\">$15,256</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-dollar-sign\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n\n                </tr>\n\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Tower Partners</p>\n                      <p class=\"text-12 text-gray font-weight-500\">USA</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 250,000</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">3</td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">contact@tower.com</td>\n                  <td class=\"text-center font-weight-600 align-middle text-grey\">+1 039 231 4231</td>\n                  <td class=\"text-center font-weight-600 align-middle text-primary\">$15,256</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-dollar-sign\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n\n                </tr>\n\n\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Tower Partners</p>\n                      <p class=\"text-12 text-gray font-weight-500\">USA</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 250,000</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">3</td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">contact@tower.com</td>\n                  <td class=\"text-center font-weight-600 align-middle text-grey\">+1 039 231 4231</td>\n                  <td class=\"text-center font-weight-600 align-middle text-primary\">$15,256</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-warning\">To be approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-dollar-sign\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n\n                </tr>\n\n\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Tower Partners</p>\n                      <p class=\"text-12 text-gray font-weight-500\">USA</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 250,000</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">3</td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">contact@tower.com</td>\n                  <td class=\"text-center font-weight-600 align-middle text-grey\">+1 039 231 4231</td>\n                  <td class=\"text-center font-weight-600 align-middle text-primary\">$15,256</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-dollar-sign\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n\n                </tr>\n\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Tower Partners</p>\n                      <p class=\"text-12 text-gray font-weight-500\">USA</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 250,000</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">3</td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">contact@tower.com</td>\n                  <td class=\"text-center font-weight-600 align-middle text-grey\">+1 039 231 4231</td>\n                  <td class=\"text-center font-weight-600 align-middle text-primary\">$15,256</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-dollar-sign\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n\n                </tr>\n\n\n\n              </tbody>\n            </table>\n          </div>\n\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  \n  <div class=\"col-lg-7 col-sm-12\">\n\n    <div class=\"card bm-card-5 o-hidden mb-4\">\n\n      <div class=\"card-header justify-content-between mb-0\">\n\n        <div class=\"info\">\n          <p class=\"title text-gray text-17 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Managed offerings</p>\n        </div>\n\n        <div class=\"action\">\n          <a href=\"\" class=\"text-muted link-primary text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">\n            View All\n          </a>\n        </div>\n\n      </div>\n\n      <div class=\"card-body text-left\">\n\n        <div class=\"content\">\n\n          <div class=\"data-list table-responsive mt-0\">\n            <table class=\"table table-striped table-dashboard-two\">\n              <thead>\n                <tr>\n                  <th class=\"text-left\">OFFERING</th>\n                  <th class=\"text-center\">ISSUER</th>\n                  <th class=\"text-center\">SIZE</th>\n                  <th class=\"text-center\">INTEREST RATE</th>\n                  <th class=\"text-center\">FEE</th>\n                  <th class=\"text-center\">INVESTORS</th>\n                  <th class=\"text-center\">TYPE</th>\n                  <th class=\"text-center\">LOCATION</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Fleet Redesign</p>\n                      <p class=\"text-12 text-gray font-weight-500\">Athens</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">Sand Corp.</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 50,000,000</td>\n                  <td class=\"text-center text-default font-weight-500 align-middle\">4%</td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">1%</td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">115</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-primary\">Marine</span>\n                  </td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">Greece</td>\n\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Fleet Redesign</p>\n                      <p class=\"text-12 text-gray font-weight-500\">Athens</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">Sand Corp.</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 50,000,000</td>\n                  <td class=\"text-center text-default font-weight-500 align-middle\">4%</td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">1%</td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">115</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-primary\">Marine</span>\n                  </td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">Greece</td>\n\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <div class=\"source-icon\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    </div>\n                    <div class=\"source-info\">\n                      <p class=\"text-15 text-default font-weight-500\">Fleet Redesign</p>\n                      <p class=\"text-12 text-gray font-weight-500\">Athens</p>\n                    </div>\n\n                  </td>\n                  <td class=\"text-center text-gray font-weight-500 align-middle\">Sand Corp.</td>\n                  <td class=\"text-center text-success font-weight-500 align-middle\">€ 50,000,000</td>\n                  <td class=\"text-center text-default font-weight-500 align-middle\">4%</td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">1%</td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">115</td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <span class=\"badge badge-pill badge-primary\">Marine</span>\n                  </td>\n                  <td class=\"text-center font-weight-600 align-middle text-default\">Greece</td>\n\n                </tr>\n\n                \n\n\n\n\n              </tbody>\n            </table>\n          </div>\n\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"col-lg-5 col-md-12\">\n\n    <div class=\"card bm-card-13 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-between mb-0\">\n\n            <div class=\"info\">\n              <p class=\"title text-gray text-17 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">Documents</p>\n            </div>\n    \n            <div class=\"action\">\n              <a href=\"\" class=\"text-muted link-primary text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-0\">\n                View All\n              </a>\n            </div>\n    \n          </div>\n\n      <div class=\"card-body text-left\">\n        <div class=\"content\">\n\n          <div class=\"data-list mt-1 table-responsive\">\n            <table class=\"table table-striped table-dashboard-two\">\n              <thead>\n                <tr>\n                  <th class=\"text-left\">OFFERING</th>\n                  <th class=\"text-right\">TITLE</th>\n                  <th class=\"text-right\">STATUS</th>\n                  <th class=\"text-right\">ACTION</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                    <p class=\"text-13\">Fleet redesign</p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">Q2 Financials</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                  \n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-gb flag-icon-squared\"></i>\n                    <p class=\"text-13\">Fields Solar Farm</p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">Q2 ESG Report</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-au flag-icon-squared\"></i>\n                    <p class=\"text-13\">Fields Solar Farm</p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">Q2 Financials</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-ca flag-icon-squared\"></i>\n                    <p class=\"text-13\">Rail Grid </p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">Loan prospectus</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-success\">Approved</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-send\"></i></a>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-in flag-icon-squared\"></i>\n                    <p class=\"text-13\">Intercom Works</p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">Q3 Report</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-warning\">On hold</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-nl flag-icon-squared\"></i>\n                    <p class=\"text-13\">Office Developments</p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">Q1 Financials</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-warning\">On hold</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"text-left\">\n                    <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                    <p class=\"text-13\">Wind Turbines</p>\n                  </td>\n                  <td class=\"text-right font-weight-500\">ESG Overview</td>\n                  <td class=\"text-right text-15 font-weight-500 align-right color-blue\">\n                    <span class=\"badge badge-pill badge-warning\">On hold</span>\n                  </td>\n                  <td class=\"text-center text-15 font-weight-500 align-middle color-blue\">\n                    <a href=\"\"><i class=\"icon-edit\"></i></a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-products/dashboard-products.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-products/dashboard-products.component.ts ***!
  \************************************************************************************/
/*! exports provided: DashboardProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProductsComponent", function() { return DashboardProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__);
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




var DashboardProductsComponent = /** @class */ (function () {
    function DashboardProductsComponent() {
    }
    DashboardProductsComponent.prototype.ngOnInit = function () {
        this.chartLineOptionD1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD1.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD1.series[0].lineStyle.color = ['#5f6ac2'];
        this.chartLineOptionD1.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD2.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD2.series = src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"].series.slice();
        this.chartLineOptionD2.series[0].lineStyle.color = ['#ff5721'];
        this.chartLineOptionD2.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD3.series[0].lineStyle.color = '#4cae4f';
        this.chartLineOptionD3.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD4 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart1"]);
        this.chartLineOptionD4.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
            '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
        this.chartLineOptionD4.series[0].lineStyle.color = '#04a9f4';
        this.chartLineOptionD4.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.chartLineOptionD5 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["LineChart2"]);
        this.chartLineOptionD5.xAxis.data = ['1st Dec', '2nd Dec', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'];
        this.chartLineOptionD5.series[0].lineStyle.color = ['#04a9f4'];
        this.chartLineOptionD5.series[0].data = [820, 982, 701, 1034, 790, 1430, 1120, 1300, 790, 1430, 1120, 1300];
        this.chartLineOptionD5.series[1].lineStyle.color = ['#4cae4f'];
        this.chartLineOptionD5.series[1].data = [620, 882, 901, 934, 500, 830, 1220, 1100, 860, 1130, 1020, 1400];
        this.chartDonut1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["DonutChart1"]);
        this.chartDonut1.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
        this.chartDonut1.series[0].data = [
            { value: 335, name: 'Social Media' },
            { value: 310, name: 'Youtube' },
            { value: 234, name: 'Google AdWord' }
        ];
        this.chartDonut2 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["DonutChart1"]);
        this.chartDonut2.color = ['#28b6f6', '#ef534f', '#81c784', '#7986cb', '#4db5ab', '#4ec3f7'];
        this.chartDonut2.series[0].data = [
            { value: 235, name: 'Pending' },
            { value: 310, name: 'Active' },
            { value: 110, name: 'On Hold' },
            { value: 234, name: 'Canceled' }
        ];
        this.chartDonut3 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["DonutChart1"]);
        this.chartDonut3.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
        this.chartDonut3.series[0].data = [
            { value: 335, name: 'Social Media' },
            { value: 310, name: 'Youtube' },
            { value: 234, name: 'Google AdWord' }
        ];
        this.chartHours = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["BarChart3"]);
        this.chartHours.color = ['#6f42c1'];
        this.chartHours.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.chartHours.series[0].name = 'mettings';
        this.chartHours.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];
        this.chartProductivity = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_3__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_2__["BarChart3"]);
        this.chartProductivity.color = ['#5c6ac0'];
        this.chartProductivity.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.chartProductivity.series[0].name = 'statements';
        this.chartProductivity.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];
        this.chartCampaignMatrics = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: '4%',
                top: '4%',
                right: '3%',
                bottom: '10%'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                axisLabel: {
                    formatter: '{value}',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    formatter: '{value}',
                    color: '#666',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        width: 1,
                        opacity: 0.5
                    }
                }
            },
            series: [
                {
                    name: 'Last Year',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: [80, 95, 75, 125, 95, 110, 80, 60, 90, 100, 125, 100],
                    symbolSize: 8,
                    lineStyle: {
                        show: false,
                        color: 'rgb(95, 107, 194)',
                        opacity: 0,
                        width: 1,
                        type: 'line'
                    },
                    itemStyle: {
                        color: '#5f6cc1',
                        borderColor: '#5f6cc1',
                        borderWidth: 1.5,
                        emphasis: {
                            opacity: 0,
                            shadowColor: 'rgba(253, 183, 113, 1)',
                            shadowBlur: 20,
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
                                        offset: 0, color: '#66e7ed'
                                    }, {
                                        offset: 0.5, color: '#56fd61'
                                    }, {
                                        offset: 1, color: 'rgba(114, 225, 195, 0.49)'
                                    }]
                            }
                        }
                    }
                },
                {
                    name: 'This Year',
                    type: 'line',
                    smooth: true,
                    data: [35, 80, 60, 125, 95, 110, 80, 60],
                    symbolSize: 8,
                    lineStyle: {
                        color: 'rgba(9, 22, 58, 0.76)',
                        opacity: 1,
                        width: 1.5,
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
                                        offset: 0, color: '#34e0c0'
                                    }, {
                                        offset: 0.3, color: '#77dca9'
                                    }, {
                                        offset: 1, color: 'rgba(103, 236, 149, 0.21)'
                                    }]
                            }
                        }
                    }
                }
            ]
        });
        this.chartAudienceMatrics = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            grid: {
                left: '5%',
                top: '5%',
                right: '5%',
                bottom: '5%'
            },
            series: [
                {
                    name: 'DEMOGRAPHY',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{b} \n {c} ',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 635, name: 'Male', selected: true },
                        { value: 679, name: 'Female' },
                        { value: 248, name: 'Others' }
                    ]
                },
                {
                    name: 'COUNTRY',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 22,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        { value: 335, name: 'USA' },
                        { value: 310, name: 'CAN' },
                        { value: 234, name: 'MEX' },
                        { value: 135, name: 'UK' },
                        { value: 1048, name: 'GER' },
                        { value: 251, name: 'AUS' },
                        { value: 147, name: 'IND' },
                        { value: 102, name: 'CHI' },
                        { value: 122, name: 'OTHERS' }
                    ]
                }
            ]
        };
        this.chartTraficSources = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 500,
                interval: 100,
                axisLabel: {
                    formatter: '{value}k',
                    color: '#333',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd',
                        width: 1,
                        opacity: 0.5
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: [
                    'Dec, 1', 'Dec, 2', 'Dec, 3', 'Dec, 4', 'Dec, 5', 'Dec, 6', 'Dec, 7'
                ],
                axisLabel: {
                    formatter: '{value}',
                    color: '#333',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 400,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ccc',
                        width: 1
                    }
                }
            },
            series: [
                {
                    color: '#3182bd',
                    name: 'Campaign',
                    type: 'bar',
                    barGap: 0,
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [320, 332, 301, 334, 390, 350, 215]
                },
                {
                    color: '#74c475',
                    name: 'Steppe',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [220, 182, 191, 234, 290, 190, 210]
                },
                {
                    color: '#e6550d',
                    name: 'Desert',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [150, 232, 201, 154, 190, 150, 130]
                },
                {
                    color: '#756bb1',
                    name: 'Wetland',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideBottom',
                            distance: 5,
                            align: 'left',
                            verticalAlign: 'middle',
                            rotate: 90,
                            formatter: '{c}  {name|{a}}',
                            fontSize: 14,
                            fontWeight: 'bold',
                            rich: {
                                name: {
                                    color: '#fff',
                                }
                            }
                        }
                    },
                    data: [98, 77, 101, 99, 40, 30, 50]
                }
            ]
        };
        this.chartDelivery = {
            color: ['#6be8a0', '#66e7ed', '#3864d6'],
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            grid: {
                top: '10%',
                left: '3%',
                right: '4%',
                bottom: '2%',
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
                                fontSize: '15',
                                fontWeight: 'bold',
                                color: '#11110f'
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
                        { value: 150000, name: 'Environmental' },
                        { value: 200000, name: 'Social' },
                        { value: 500000, name: 'Governance' },
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
    };
    DashboardProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-products',
            template: __webpack_require__(/*! ./dashboard-products.component.html */ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-products.component.scss */ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardProductsComponent);
    return DashboardProductsComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_analytics_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-analytics/dashboard-analytics.component */ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.ts");
/* harmony import */ var _dashboard_sales_dashboard_sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-sales/dashboard-sales.component */ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.ts");
/* harmony import */ var _dashboard_campaign_dashboard_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-campaign/dashboard-campaign.component */ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.ts");
/* harmony import */ var _dashboard_finance_dashboard_finance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-finance/dashboard-finance.component */ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.ts");
/* harmony import */ var _dashboard_stock_dashboard_stock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-stock/dashboard-stock.component */ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.ts");
/* harmony import */ var _dashboard_products_dashboard_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-products/dashboard-products.component */ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.ts");
/* harmony import */ var _dashboard_event_dashboard_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-event/dashboard-event.component */ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.ts");
/* harmony import */ var _dashboard_bonus_dashboard_bonus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-bonus/dashboard-bonus.component */ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'v1',
        component: _dashboard_analytics_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_2__["DashboardAnalyticsComponent"]
    },
    {
        path: 'v2',
        component: _dashboard_sales_dashboard_sales_component__WEBPACK_IMPORTED_MODULE_3__["DashboardSalesComponent"]
    },
    {
        path: 'v3',
        component: _dashboard_campaign_dashboard_campaign_component__WEBPACK_IMPORTED_MODULE_4__["DashboardCampaignComponent"]
    },
    {
        path: 'v4',
        component: _dashboard_finance_dashboard_finance_component__WEBPACK_IMPORTED_MODULE_5__["DashboardFinanceComponent"]
    },
    {
        path: 'v5',
        component: _dashboard_stock_dashboard_stock_component__WEBPACK_IMPORTED_MODULE_6__["DashboardStockComponent"]
    },
    {
        path: 'v6',
        component: _dashboard_products_dashboard_products_component__WEBPACK_IMPORTED_MODULE_7__["DashboardProductsComponent"]
    },
    {
        path: 'v7',
        component: _dashboard_event_dashboard_event_component__WEBPACK_IMPORTED_MODULE_8__["DashboardEventComponent"]
    },
    {
        path: 'v8',
        component: _dashboard_bonus_dashboard_bonus_component__WEBPACK_IMPORTED_MODULE_9__["DashboardBonusComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Sales</li>\n      <span class=\"spacer\"></span>\n      <li class=\"breadcrumb-item no-driver\">\n        <a href=\"\" class=\"text-muted link-primary\">\n          <i class=\"icon-bubbles mr-1\"></i> Support</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\n        <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\"><i class=\"icon-cog mr-1\"></i> Settings</a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key mr-1\"></i> Account Sicurity</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots mr-1\"></i> Analytics</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility mr-1\"></i> Accessibility</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog mr-1\"></i> All settings</a>\n        </div>\n\n      </li>\n    </ol>\n  </nav>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">ORDERS</p>\n            <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">3,590</p>\n            <div class=\"trend d-inline-block line-height-1\">\n              <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-danger\"><i class=\"icon-trending-down mr-1\"></i>9%</p>\n              <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n            </div>\n\n            <div echarts [options]=\"chartOrders\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">TOTAL SALES</p>\n            <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">$13,590</p>\n            <div class=\"trend d-inline-block line-height-1\">\n              <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-success\"><i class=\"icon-trending-up mr-1\"></i>3%</p>\n              <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n            </div>\n\n            <div echarts [options]=\"chartSales\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">TOTAL COST</p>\n            <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">$10,456</p>\n            <div class=\"trend d-inline-block line-height-1\">\n              <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-success\"><i class=\"icon-trending-up mr-1\"></i>2%</p>\n              <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n            </div>\n\n            <div echarts [options]=\"chartCost\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\n\n      <div class=\"card bm-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-12 line-height-1 font-weight-600 mt-0 mb-2\">NET PROFIT</p>\n            <p class=\"title text-30 line-height-1 font-weight-400  mt-0 mb-2 d-inline-block\">$3,450</p>\n            <div class=\"trend d-inline-block line-height-1\">\n              <p class=\"text-14 mb-0 ml-1 trend-up d-inline-block text-success\"><i class=\"icon-trending-up mr-1\"></i>7%</p>\n              <p class=\"text-14 mb-0 ml-1 d-inline-block\">of target</p>\n            </div>\n\n            <div echarts [options]=\"chartProfit\" [autoResize]=\"true\" style=\"height: 50px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-8 col-md-12 col-sm-12\">\n\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-between mb-1\">\n\n          <div class=\"info\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">THIS YEAR'S TOTAL REVENUE</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Sales Performance for Online\n              and Offline Revenue</p>\n          </div>\n\n          <div class=\"action\">\n            <div class=\"dropdown\">\n              <a href=\"\" class=\"dropdown-toggle text-muted link-primary\" type=\"button\" id=\"dropdownMenuButton\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"icon-menu5 align-middle mr-1\"></i>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-reload align-middle mr-1\"></i> Reload Data</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-list1 align-middle mr-1\"></i> Details Log</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-pie-chart1 align-middle mr-1\"></i> Statistics</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"\"><i class=\"icon-x align-middle mr-1\"></i> Clear List</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"card-body text-left pt-0\">\n          <div class=\"content\">\n\n            <div echarts [options]=\"chartRevenueYearly\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12\">\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">SALES REVENUE BY COUNTRY</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Sales Performance of popular\n              countries</p>\n\n            <div echarts [options]=\"chartRevenueCountry\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card bm-card-6 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">YOUR ANUAL SALES HEATMAP</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mt-0 mb-1\">This is your most recent\n              earnings\n              for today's date.</p>\n\n            <div class=\"chart-wrapper heatmap\">\n              <div echarts [options]=\"chartLineOptionHeatMap\" [autoResize]=\"true\" style=\"height: 450px;\"></div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-8 col-md-12 col-sm-12\">\n\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">YOUR MOST RECENT EARNINGS</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-4\">This is your most recent\n              earnings for today's date.</p>\n\n            <div class=\"data-table table-responsive\">\n              <table class=\"table table-striped table-dashboard-two\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\">Date</th>\n                    <th class=\"text-right\">Sales Count</th>\n                    <th class=\"text-right\">Earnings</th>\n                    <th class=\"text-right\">Tax Witheld</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">05 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">25</td>\n                    <td class=\"text-right font-weight-500\">$380.50</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">04 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">34</td>\n                    <td class=\"text-right font-weight-500\">$503.20</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$13.45</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">03 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">30</td>\n                    <td class=\"text-right font-weight-500\">$489.65</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$20.98</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">02 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">27</td>\n                    <td class=\"text-right font-weight-500\">$421.80</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$22.22</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">31</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">31</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-right font-weight-500\">31</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-sm-12\">\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">SALES BY TOP COUNTRIES</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-4\">Sales performance revenue\n              based by country</p>\n\n            <div class=\"data-list-3 table-responsive\">\n              <table class=\"table table-striped table-dashboard-two\">\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-us flag-icon-squared\"></i>\n                      <p class=\"text-13\">United States</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,671.10</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-gb flag-icon-squared\"></i>\n                      <p class=\"text-13\">United Kingdom</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,551.40</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-au flag-icon-squared\"></i>\n                      <p class=\"text-13\">Australia</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,401.85</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-ca flag-icon-squared\"></i>\n                      <p class=\"text-13\">Canada</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,305.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-in flag-icon-squared\"></i>\n                      <p class=\"text-13\">India</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,260.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-nl flag-icon-squared\"></i>\n                      <p class=\"text-13\">Netherlands</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,175.95</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">\n                      <i class=\"flag-icon flag-icon-de flag-icon-squared\"></i>\n                      <p class=\"text-13\">Germany</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,079.90</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSalesComponent", function() { return DashboardSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
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






var DashboardSalesComponent = /** @class */ (function () {
    function DashboardSalesComponent(productService) {
        this.productService = productService;
    }
    DashboardSalesComponent.prototype.ngOnInit = function () {
        this.chartOrders = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartOrders.color = ['#5f6bc2'];
        this.chartOrders.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartOrders.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartSales = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartSales.color = ['#ff5721'];
        this.chartSales.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartSales.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartCost = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartCost.color = ['#4cae4f'];
        this.chartCost.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartCost.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartProfit = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartProfit.color = ['#135bba'];
        this.chartProfit.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartProfit.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
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
        this.chartLineOptionHeatMap = src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["HeatMap"];
        this.chartLineOptionHeatMap.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
        this.chartLineOptionHeatMap.visualMap.min = 0;
        this.chartLineOptionHeatMap.visualMap.max = 150;
        this.chartLineOptionHeatMap.xAxis.data = week;
        this.chartLineOptionHeatMap.yAxis.data = days;
        this.chartLineOptionHeatMap.series[0].name = 'Sales';
        this.chartLineOptionHeatMap.series[0].data = data;
        this.chartRevenueYearly = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart2"]);
        this.chartRevenueYearly.color = ['#f10075', '#eee'];
        this.chartRevenueYearly.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.chartRevenueYearly.series[0].name = 'Online';
        this.chartRevenueYearly.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        this.chartRevenueYearly.series[0].color = '#c4dbf0';
        this.chartRevenueYearly.series[1].name = 'Offline';
        this.chartRevenueYearly.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        this.chartRevenueYearly.series[1].color = '#2c80bf';
        this.chartRevenueCountry = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["PaiChart1"]);
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
        this.chartLineOption1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            grid: {
                left: '0%',
                right: '0%',
                top: '7%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    min: 0,
                    max: 35,
                    interval: 6,
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false,
                        interval: 'auto'
                    },
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    axisLabel: {
                        formatter: '{value}k'
                    },
                    min: 0,
                    max: 100,
                    interval: 25,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }
            ],
            series: [{
                    name: 'Online',
                    data: [35, 36, 38, 40, 42, 44, 46, 48, 50, 53, 20, 35, 35, 69, 25, 60, 50, 50, 30, 80, 70, 60, 20, 35, 35, 69, 22, 60, 50, 50, 30, 80, 70, 60, 20, 35, 60, 90],
                    label: { show: false, color: '#0168c1' },
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    color: 'rgba(1, 103, 193, 1)',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 103, 193, 0.7)'
                            }, {
                                offset: 0.7,
                                color: 'rgba(1, 103, 193, 0.1)'
                            }])
                    },
                    markArea: {
                        label: {
                            show: true
                        }
                    },
                    lineStyle: {
                        color: 'rgba(1, 103, 193, 1)',
                    }
                },
                {
                    name: 'Offline',
                    data: [45, 82, 35, 93, 71, 89, 49, 91, 80, 86, 35, 40],
                    label: { show: false, color: '#0168c1' },
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    color: '#0168c1',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 103, 193, 0.5)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(1, 103, 193, 0.1)'
                            }])
                    },
                    markArea: {
                        label: {
                            show: true
                        }
                    },
                    lineStyle: {
                        color: 'rgba(1, 103, 193, 1)',
                    }
                }]
        });
        this.chartPie1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            legend: {
                show: true,
                bottom: 0,
            },
            series: [__assign({ type: 'pie' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieRing, { label: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelCenterHover, data: [{
                            name: 'Completed',
                            value: 80,
                            itemStyle: {
                                color: '#663399',
                            }
                        }, {
                            name: 'Pending',
                            value: 20,
                            itemStyle: {
                                color: '#ced4da',
                            }
                        }] })]
        });
        this.chartLineOption3 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    data: [40, 80, 20, 90, 30, 80, 40],
                    lineStyle: {
                        color: 'rgba(102, 51, 153, .86)',
                        width: 3,
                        shadowColor: 'rgba(0, 0, 0, .2)',
                        shadowOffsetX: -1,
                        shadowOffsetY: 8,
                        shadowBlur: 10
                    },
                    label: { show: true, color: '#212121' },
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        borderColor: 'rgba(69, 86, 172, 0.86)'
                    }
                }]
        });
        this.chartLineOption3.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.products$ = this.productService.getProducts();
        this.chartLineOption4 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            color: ['rgba(1, 103, 193, 1.0)'],
            grid: {
                left: '-2%',
                right: '-2%',
                top: '7%',
                bottom: '0%',
                containLabel: false
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
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
            series: [{
                    data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
                    label: { show: false, color: 'rgba(1, 103, 193, 1.0)' },
                    type: 'line',
                    barWidth: '70%',
                    smooth: false,
                    symbol: 'none',
                    areaStyle: {
                        color: new echarts__WEBPACK_IMPORTED_MODULE_4__["graphic"].LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 103, 193, 0.9)'
                            }, {
                                offset: 0.7,
                                color: 'rgba(1, 103, 193, 0.4)'
                            }])
                    }
                }]
        });
        this.chartLineOption5 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            color: ['#017bff'],
            xAxis: [
                {
                    type: 'category',
                    data: ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: 'Earnings',
                    data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barWidth: '80%',
                    smooth: true
                }]
        });
        this.chartLineOption6 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            color: ['#eee'],
            xAxis: [
                {
                    type: 'category',
                    data: ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: 'Earnings',
                    data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barWidth: '80%',
                    smooth: true
                }]
        });
        this.chartLineOption7 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            // color: ['#f10075'],
            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                top: '1%',
                containLabel: false
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }
            ],
            series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005, 35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barGap: 0,
                    barWidth: '40%',
                    color: '#3f51b5',
                    smooth: true
                },
                {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050, 45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    color: '#04a9f4',
                    barWidth: '40%',
                    smooth: true
                }
            ]
        });
        this.chartLineOption8 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            // color: ['#f10075'],
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                x: 'right',
                data: ['Online', 'Offline']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }
            ],
            series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barGap: 0,
                    // barWidth: '50%',
                    color: '#9ac4e7',
                    smooth: true
                },
                {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    color: '#0168c1',
                    // barWidth: '50%',
                    smooth: true
                }
            ]
        });
        this.chartLineOption9 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    color: ['#2F5DB3', '#00102D', '#001D54', '#0A2E72', '#A4C2F9', '#ddd'],
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    hoverOffset: 0,
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            textStyle: {
                                fontSize: '15',
                                fontWeight: 'regular'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '15',
                                fontWeight: 'regular'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: [
                        { value: 335, name: 'Organic' },
                        { value: 310, name: 'Email' },
                        { value: 234, name: 'Referral' },
                        { value: 135, name: 'Social' },
                        { value: 1548, name: 'Others' }
                    ]
                }
            ]
        });
        this.chartLineOption10 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    type: 'tree',
                    name: 'tree1',
                    data: [
                        {
                            "name": "",
                            "children": [
                                {
                                    "name": "Direct",
                                    "value": 1250,
                                },
                                {
                                    "name": "Google",
                                },
                                {
                                    "name": "Facebook",
                                },
                                {
                                    "name": "Thubler",
                                },
                                {
                                    "name": "Others",
                                }
                            ]
                        }
                    ],
                    top: '2%',
                    left: '0%',
                    bottom: '2%',
                    right: '30%',
                    symbolSize: 7,
                    orient: 'LR',
                    label: {
                        normal: {
                            position: 'left',
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
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        });
        this.chartLineOption11 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    type: 'tree',
                    name: 'tree1',
                    data: [
                        {
                            "name": "Earl Gray",
                            "children": [
                                {
                                    "name": "Direct",
                                    "value": "12.50%",
                                },
                                {
                                    "name": "Google",
                                },
                                {
                                    "name": "Facebook",
                                },
                                {
                                    "name": "Thubler",
                                },
                                {
                                    "name": "Others",
                                }
                            ]
                        }
                    ],
                    top: '2%',
                    left: '30%',
                    bottom: '2%',
                    right: '0%',
                    symbolSize: 7,
                    orient: 'RL',
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    },
                    lineStyle: {
                        color: '#aaa',
                        width: 1.5,
                        curveness: 0.5
                    },
                    leaves: {
                        color: '#eee',
                        label: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        });
        this.chartLineOption12 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            color: ['#2F5DB3', '#00102D', '#001D54', '#0A2E72', '#A4C2F9'],
            legend: {
                data: ['Forest', 'Steppe', 'Desert', 'Wetland']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Direct', 'Google', 'Facebook', 'Youtube', 'Others'],
                    axisTick: {
                        show: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true
                    }
                }
            ],
            series: [{
                    name: 'Trafic',
                    data: [
                        {
                            name: 'Name',
                            value: 200,
                            itemStyle: {
                                color: '#eee'
                            }
                        },
                        {
                            name: 'Name',
                            value: 300,
                            itemStyle: {
                                color: '#fff'
                            }
                        },
                        {
                            name: 'Name',
                            value: 400,
                            itemStyle: {
                                color: '#aaa'
                            }
                        },
                        {
                            name: 'Name',
                            value: 500,
                            itemStyle: {
                                color: '#bbb'
                            }
                        },
                        {
                            name: 'Name',
                            value: 600,
                            itemStyle: {
                                color: '#bbb'
                            }
                        }
                    ],
                    label: {
                        normal: {
                            show: true,
                            color: '#000',
                            position: 'top'
                        }
                    },
                    type: 'bar',
                    barWidth: '80%',
                    smooth: true
                }]
        });
    };
    DashboardSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-sales',
            template: __webpack_require__(/*! ./dashboard-sales.component.html */ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sales.component.scss */ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], DashboardSalesComponent);
    return DashboardSalesComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\" class=\"link-primary font-weight-500\"><i class=\"icon-home\"></i> Home</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Stock Exchange</li>\n      <span class=\"spacer\"></span>\n      <li class=\"breadcrumb-item no-driver\">\n        <a href=\"\" class=\"text-muted link-primary\">\n          <i class=\"icon-bubbles mr-1\"></i> Support</a>\n      </li>\n      <li class=\"breadcrumb-item\">\n\n        <a href=\"#\" class=\"dropdown-toggle text-muted link-primary\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\"><i class=\"icon-cog mr-1\"></i> Settings</a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\">\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-key mr-1\"></i> Account Sicurity</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-stats-dots mr-1\"></i> Analytics</a>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-accessibility mr-1\"></i> Accessibility</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"\"><i class=\"icon-cog mr-1\"></i> All settings</a>\n        </div>\n\n      </li>\n    </ol>\n\n\n  </nav>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n\n      <div class=\"card bm-card-15 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-start\">\n\n          <div class=\"info-icon mr-1\">\n            <a href=\"\">\n              <img src=\"http://www.insightintodiversity.com/wp-content/uploads/2016/01/apple_topic.png?w=1400\" class=\"rounded-circle\"\n                width=\"32\" height=\"32\" alt=\"\">\n            </a>\n          </div>\n\n          <div class=\"info flex-fill\">\n\n            <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">Apple Inc.</p>\n            <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: AAPL</p>\n          </div>\n\n          <div class=\"action text-right\">\n            <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$148.26 <span class=\"text-15\"></span></p>\n            <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">4.27%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n          </div>\n\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"content mt-1\">\n\n            <div echarts [options]=\"chartLineOption1\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4\">\n\n      <div class=\"card bm-card-15 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-start\">\n\n          <div class=\"info-icon mr-1\">\n            <a href=\"\">\n              <img src=\"https://xebialabs.com/assets/files/logos/gtest%20logo.png\" class=\"rounded-circle\" width=\"32\"\n                height=\"32\" alt=\"\">\n            </a>\n          </div>\n\n          <div class=\"info flex-fill\">\n\n            <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">Alphabet Inc.</p>\n            <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: GOOGL</p>\n\n          </div>\n\n          <div class=\"action text-right\">\n            <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$1,078.07 <span class=\"text-15\"></span></p>\n            <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">5.13%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n          </div>\n\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"content mt-1\">\n\n            <div echarts [options]=\"chartLineOption2\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-4\">\n\n      <div class=\"card bm-card-15 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-start\">\n\n          <div class=\"info-icon mr-1\">\n            <a href=\"\">\n              <img src=\"src/assets/images/brands/facebook.png\" class=\"rounded-circle\" width=\"32\" height=\"32\" alt=\"\">\n            </a>\n          </div>\n\n          <div class=\"info flex-fill\">\n\n            <p class=\"title text-20 text-gray font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">Facebook Inc.</p>\n            <p class=\"title text-12 font-family-1 font-weight-500 mt-0 mb-0\">NASDAQ: FB</p>\n\n          </div>\n\n          <div class=\"action text-right\">\n            <p class=\"subtitle text-20 font-family-1 font-weight-400 mt-0 mb-0 line-height-1\">$137.95 <span class=\"text-15\"></span></p>\n            <p class=\"title text-12 text-success font-family-1 font-weight-500 mt-0 mb-0\">4.71%<i class=\"icon-arrow-up1 ml-0\"></i></p>\n\n          </div>\n\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"content mt-1\">\n\n            <div echarts [options]=\"chartLineOption3\" [autoResize]=\"true\" style=\"height: 100px;\"></div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-between mb-3\">\n\n          <div class=\"info\">\n            <p class=\"title text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">DOW JONES INDEX</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-0\">Sales Performance for Online\n              and Offline Revenue</p>\n          </div>\n\n          <div class=\"action\">\n            <div class=\"dropdown\">\n              <a href=\"\" class=\"dropdown-toggle text-muted link-primary\" type=\"button\" id=\"dropdownMenuButton\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"icon-menu5 align-middle mr-1\"></i>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-reload align-middle mr-1\"></i> Reload Data</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-list1 align-middle mr-1\"></i> Details Log</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"icon-pie-chart1 align-middle mr-1\"></i> Statistics</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"\"><i class=\"icon-x align-middle mr-1\"></i> Clear List</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"card-body text-left pt-0\">\n          <div class=\"content\">\n\n            <div echarts [options]=\"StockIndexChart\" [autoResize]=\"true\" style=\"height: 600px;\"></div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\n\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">TOP STOCK CHANGES</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-4\">This is your most recent\n              earnings for today's date.</p>\n\n            <div class=\"data-table table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\">Stock</th>\n                    <th class=\"text-right\">Change</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"text-15 text-primary font-family-1 font-weight-500 mb-0\">APPL</p>\n                      <p class=\"text-13 text-gray font-family-1 line-height-1 font-weight-400 mb-0\">Apple Inc.</p>\n\n                    </td>\n                    <td class=\"text-right font-weight-500\">\n                      <p class=\"text-15 text-primary mb-0\">$195.87</p>\n                      <p class=\"text-12 text-success mb-0\">+6.56(4.5%)<i class=\"icon-trending-up text-success ml-1\"></i></p>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"text-15 text-primary font-family-1 font-weight-500 mb-0\">FB</p>\n                      <p class=\"text-13 text-gray font-family-1 line-height-1 font-weight-400 mb-0\">Facebook Inc.</p>\n\n                    </td>\n                    <td class=\"text-right font-weight-500\">\n                      <p class=\"text-15 text-primary mb-0\">$195.87</p>\n                      <p class=\"text-12 text-danger mb-0\">+6.56(4.5%)<i class=\"icon-trending-down text-danger ml-1\"></i></p>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"text-15 text-primary font-family-1 font-weight-500 mb-0\">FB</p>\n                      <p class=\"text-13 text-gray font-family-1 line-height-1 font-weight-400 mb-0\">Facebook Inc.</p>\n\n                    </td>\n                    <td class=\"text-right font-weight-500\">\n                      <p class=\"text-15 text-primary mb-0\">$195.87</p>\n                      <p class=\"text-12 text-danger mb-0\">+6.56(4.5%)<i class=\"icon-trending-down text-danger ml-1\"></i></p>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"text-15 text-primary font-family-1 font-weight-500 mb-0\">FB</p>\n                      <p class=\"text-13 text-gray font-family-1 line-height-1 font-weight-400 mb-0\">Facebook Inc.</p>\n\n                    </td>\n                    <td class=\"text-right font-weight-500\">\n                      <p class=\"text-15 text-primary mb-0\">$195.87</p>\n                      <p class=\"text-12 text-danger mb-0\">+6.56(4.5%)<i class=\"icon-trending-down text-danger ml-1\"></i></p>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"text-15 text-primary font-family-1 font-weight-500 mb-0\">FB</p>\n                      <p class=\"text-13 text-gray font-family-1 line-height-1 font-weight-400 mb-0\">Facebook Inc.</p>\n\n                    </td>\n                    <td class=\"text-right font-weight-500\">\n                      <p class=\"text-15 text-primary mb-0\">$195.87</p>\n                      <p class=\"text-12 text-danger mb-0\">+6.56(4.5%)<i class=\"icon-trending-down text-danger ml-1\"></i></p>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td class=\"text-left\">\n                      <p class=\"text-15 text-primary font-family-1 font-weight-500 mb-0\">FB</p>\n                      <p class=\"text-13 text-gray font-family-1 line-height-1 font-weight-400 mb-0\">Facebook Inc.</p>\n\n                    </td>\n                    <td class=\"text-right font-weight-500\">\n                      <p class=\"text-15 text-primary mb-0\">$195.87</p>\n                      <p class=\"text-12 text-danger mb-0\">+6.56(4.5%)<i class=\"icon-trending-down text-danger ml-1\"></i></p>\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-6 col-md-12 col-sm-12\">\n\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-between mb-2\">\n\n          <div class=\"info\">\n            <p class=\"title text-13 font-family-1 font-weight-500 mt-0 mb-1\">TRADE HISTORY</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 mb-0\">Market trade history for last\n              month</p>\n          </div>\n\n          <div class=\"action\">\n            <div class=\"btn-group btn-group-small btn-group-toggle\" data-toggle=\"buttons\">\n              <label class=\"btn btn-outline-primary active\">\n                <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>Market\n              </label>\n              <label class=\"btn btn-outline-primary\">\n                <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">Yours\n              </label>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"card-body text-left\">\n          <div class=\"content\">\n\n            <div class=\"data- table-responsive\">\n              <table class=\"table table-striped mb-1\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\">Date</th>\n                    <th class=\"text-center\">Time</th>\n                    <th class=\"text-right\">Amount</th>\n                    <th class=\"text-right\">Price</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"text-left\">05 Oct 2018</td>\n                    <td class=\"text-center\">11:55:09am</td>\n                    <td class=\"text-right font-weight-500\">380.50</td>\n                    <td class=\"text-right text-danger font-weight-500\">$123.50</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">04 Oct 2018</td>\n                    <td class=\"text-center\">01:25:25pm</td>\n                    <td class=\"text-right font-weight-500\">503.20</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$13.45</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">03 Oct 2018</td>\n                    <td class=\"text-center\">03:36:34pm</td>\n                    <td class=\"text-right font-weight-500\">$489.65</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$20.98</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">02 Oct 2018</td>\n                    <td class=\"text-center\">01:25:25pm</td>\n                    <td class=\"text-right font-weight-500\">421.80</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$22.22</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-center\">01:25:25pm</td>\n                    <td class=\"text-right font-weight-500\">518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-center\">01:25:25pm</td>\n                    <td class=\"text-right font-weight-500\">$518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                  <tr>\n                    <td class=\"text-left\">01 Oct 2018</td>\n                    <td class=\"text-center\">01:25:25pm</td>\n                    <td class=\"text-right font-weight-500\">518.60</td>\n                    <td class=\"text-right text-danger font-weight-500\">-$23.01</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card eg-card-1 o-hidden mb-4\">\n\n        <div class=\"card-header justify-content-between mb-4\">\n\n          <div class=\"info\">\n            <p class=\"title text-13 font-family-1 font-weight-500 line-height-1 mt-0 mb-1\">INDEX HISTORY</p>\n            <p class=\"subtitle text-13 font-family-1 font-weight-400 line-height-1 mb-0\">Stock exchange index changes</p>\n          </div>\n\n          <div class=\"action\">\n            <a class=\"text-muted link-primary\" href=\"\" id=\"dropdownMenuButton\" type=\"button\">\n              <i class=\"icon-reload align-middle mr-0\"></i>\n            </a>\n          </div>\n\n        </div>\n\n        <div class=\"card-body text-left pt-0\">\n          <div class=\"content\">\n\n            <div class=\"data-list-5 table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th class=\"text-left\">Date</th>\n                    <th class=\"text-center\">Stock</th>\n                    <th class=\"text-right\">Open</th>\n                    <th class=\"text-right\">Close</th>\n                    <th class=\"text-right\">Lowest</th>\n                    <th class=\"text-right\">heights</th>\n                    <th class=\"text-right\">Change</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"up\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"down\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n\n                  <tr class=\"\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"down\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n                  <tr class=\"down\">\n                    <td class=\"text-left\">06 Jan, 2019</td>\n                    <td class=\"text-center\">\n                      <p class=\"text-14 text-primary font-weight-500 m-0\">APPL</p>\n                    </td>\n                    <td class=\"text-right font-weight-500\">$1,67.10</td>\n                    <td class=\"text-right font-weight-500\">$1,75.50</td>\n                    <td class=\"text-right font-weight-500\">$1,83.50</td>\n                    <td class=\"text-right font-weight-500\">$1,62.90</td>\n                    <td class=\"text-right font-weight-500\">4.20%</td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardStockComponent", function() { return DashboardStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/charts/barcharts */ "./src/app/shared/charts/barcharts.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
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







var DashboardStockComponent = /** @class */ (function () {
    function DashboardStockComponent(productService) {
        this.productService = productService;
    }
    DashboardStockComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
        this.chartLineOptionD1 = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["LineChart3"]);
        this.chartLineOptionD1.series[0].lineStyle.normal.color = ['#F44336'];
        this.chartLineOption1 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
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
        this.chartLineOption2 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
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
        this.chartLineOption3 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
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
        this.chartLineOption4 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
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
        this.chartLineOption5 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption5.color = ['#ff5721'];
        this.chartLineOption5.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption5.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption6 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption6.color = ['#4cae4f'];
        this.chartLineOption6.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption6.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption7 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart1"]);
        this.chartLineOption7.color = ['#135bba'];
        this.chartLineOption7.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
        this.chartLineOption7.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
        this.chartLineOption8 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["BarChart2"]);
        this.chartLineOption8.color = ['#f10075', '#eee'];
        this.chartLineOption8.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.chartLineOption8.series[0].name = 'Online';
        this.chartLineOption8.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
        this.chartLineOption8.series[0].color = '#c4dbf0';
        this.chartLineOption8.series[1].name = 'Offline';
        this.chartLineOption8.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
        this.chartLineOption8.series[1].color = '#2c80bf';
        this.chartLineOption9 = __assign({}, src_app_shared_charts_barcharts__WEBPACK_IMPORTED_MODULE_3__["PaiChart1"]);
        this.chartLineOption9.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
        this.chartLineOption9.series[0].name = 'Sales by Country';
        this.chartLineOption9.series[0].data = [
            { value: 335, name: 'USA' },
            { value: 310, name: 'CANADA' },
            { value: 234, name: 'MEXICO' },
            { value: 135, name: 'UK' },
            { value: 148, name: 'AUSTRALIA' },
            { value: 548, name: 'INDIA' }
        ];
        this.chartLineOption10 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            color: ['#003765', '#0167c1', '#4a92ea', '#88c2f9', '#5a99d5', '#017bff'],
            title: {
                text: 'World Population (2010)',
                subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
                sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
                left: 'center',
                top: 'top'
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                        + '.' + value[1];
                    return params.seriesName + '<br/>' + params.name + ' : ' + value;
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                min: 0,
                max: 1000000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: 'World Population (2010)',
                    type: 'map',
                    mapType: 'world',
                    roam: true,
                    itemStyle: {
                        emphasis: { label: { show: true } }
                    },
                    data: [
                        { name: 'Afghanistan', value: 28397.812 },
                        { name: 'Angola', value: 19549.124 },
                        { name: 'Albania', value: 3150.143 },
                        { name: 'United Arab Emirates', value: 8441.537 },
                        { name: 'Argentina', value: 40374.224 },
                        { name: 'Armenia', value: 2963.496 },
                        { name: 'French Southern and Antarctic Lands', value: 268.065 },
                        { name: 'Australia', value: 22404.488 },
                        { name: 'Austria', value: 8401.924 },
                        { name: 'Azerbaijan', value: 9094.718 },
                        { name: 'Burundi', value: 9232.753 },
                        { name: 'Belgium', value: 10941.288 },
                        { name: 'Benin', value: 9509.798 },
                        { name: 'Burkina Faso', value: 15540.284 },
                        { name: 'Bangladesh', value: 151125.475 },
                        { name: 'Bulgaria', value: 7389.175 },
                        { name: 'The Bahamas', value: 66402.316 },
                        { name: 'Bosnia and Herzegovina', value: 3845.929 },
                        { name: 'Belarus', value: 9491.07 },
                        { name: 'Belize', value: 308.595 },
                        { name: 'Bermuda', value: 64.951 },
                        { name: 'Bolivia', value: 716.939 },
                        { name: 'Brazil', value: 195210.154 },
                        { name: 'Brunei', value: 27.223 },
                        { name: 'Bhutan', value: 716.939 },
                        { name: 'Botswana', value: 1969.341 },
                        { name: 'Central African Republic', value: 4349.921 },
                        { name: 'Canada', value: 34126.24 },
                        { name: 'Switzerland', value: 7830.534 },
                        { name: 'Chile', value: 17150.76 },
                        { name: 'China', value: 1359821.465 },
                        { name: 'Ivory Coast', value: 60508.978 },
                        { name: 'Cameroon', value: 20624.343 },
                        { name: 'Democratic Republic of the Congo', value: 62191.161 },
                        { name: 'Republic of the Congo', value: 3573.024 },
                        { name: 'Colombia', value: 46444.798 },
                        { name: 'Costa Rica', value: 4669.685 },
                        { name: 'Cuba', value: 11281.768 },
                        { name: 'Northern Cyprus', value: 1.468 },
                        { name: 'Cyprus', value: 1103.685 },
                        { name: 'Czech Republic', value: 10553.701 },
                        { name: 'Germany', value: 83017.404 },
                        { name: 'Djibouti', value: 834.036 },
                        { name: 'Denmark', value: 5550.959 },
                        { name: 'Dominican Republic', value: 10016.797 },
                        { name: 'Algeria', value: 37062.82 },
                        { name: 'Ecuador', value: 15001.072 },
                        { name: 'Egypt', value: 78075.705 },
                        { name: 'Eritrea', value: 5741.159 },
                        { name: 'Spain', value: 46182.038 },
                        { name: 'Estonia', value: 1298.533 },
                        { name: 'Ethiopia', value: 87095.281 },
                        { name: 'Finland', value: 5367.693 },
                        { name: 'Fiji', value: 860.559 },
                        { name: 'Falkland Islands', value: 49.581 },
                        { name: 'France', value: 63230.866 },
                        { name: 'Gabon', value: 1556.222 },
                        { name: 'United Kingdom', value: 62066.35 },
                        { name: 'Georgia', value: 4388.674 },
                        { name: 'Ghana', value: 24262.901 },
                        { name: 'Guinea', value: 10876.033 },
                        { name: 'Gambia', value: 1680.64 },
                        { name: 'Guinea Bissau', value: 10876.033 },
                        { name: 'Equatorial Guinea', value: 696.167 },
                        { name: 'Greece', value: 11109.999 },
                        { name: 'Greenland', value: 56.546 },
                        { name: 'Guatemala', value: 14341.576 },
                        { name: 'French Guiana', value: 231.169 },
                        { name: 'Guyana', value: 786.126 },
                        { name: 'Honduras', value: 7621.204 },
                        { name: 'Croatia', value: 4338.027 },
                        { name: 'Haiti', value: 9896.4 },
                        { name: 'Hungary', value: 10014.633 },
                        { name: 'Indonesia', value: 240676.485 },
                        { name: 'India', value: 1205624.648 },
                        { name: 'Ireland', value: 4467.561 },
                        { name: 'Iran', value: 240676.485 },
                        { name: 'Iraq', value: 30962.38 },
                        { name: 'Iceland', value: 318.042 },
                        { name: 'Israel', value: 7420.368 },
                        { name: 'Italy', value: 60508.978 },
                        { name: 'Jamaica', value: 2741.485 },
                        { name: 'Jordan', value: 6454.554 },
                        { name: 'Japan', value: 127352.833 },
                        { name: 'Kazakhstan', value: 15921.127 },
                        { name: 'Kenya', value: 40909.194 },
                        { name: 'Kyrgyzstan', value: 5334.223 },
                        { name: 'Cambodia', value: 14364.931 },
                        { name: 'South Korea', value: 51452.352 },
                        { name: 'Kosovo', value: 97.743 },
                        { name: 'Kuwait', value: 2991.58 },
                        { name: 'Laos', value: 6395.713 },
                        { name: 'Lebanon', value: 4341.092 },
                        { name: 'Liberia', value: 3957.99 },
                        { name: 'Libya', value: 6040.612 },
                        { name: 'Sri Lanka', value: 20758.779 },
                        { name: 'Lesotho', value: 2008.921 },
                        { name: 'Lithuania', value: 3068.457 },
                        { name: 'Luxembourg', value: 507.885 },
                        { name: 'Latvia', value: 2090.519 },
                        { name: 'Morocco', value: 31642.36 },
                        { name: 'Moldova', value: 103.619 },
                        { name: 'Madagascar', value: 21079.532 },
                        { name: 'Mexico', value: 117886.404 },
                        { name: 'Macedonia', value: 507.885 },
                        { name: 'Mali', value: 13985.961 },
                        { name: 'Myanmar', value: 51931.231 },
                        { name: 'Montenegro', value: 620.078 },
                        { name: 'Mongolia', value: 2712.738 },
                        { name: 'Mozambique', value: 23967.265 },
                        { name: 'Mauritania', value: 3609.42 },
                        { name: 'Malawi', value: 15013.694 },
                        { name: 'Malaysia', value: 28275.835 },
                        { name: 'Namibia', value: 2178.967 },
                        { name: 'New Caledonia', value: 246.379 },
                        { name: 'Niger', value: 15893.746 },
                        { name: 'Nigeria', value: 159707.78 },
                        { name: 'Nicaragua', value: 5822.209 },
                        { name: 'Netherlands', value: 16615.243 },
                        { name: 'Norway', value: 4891.251 },
                        { name: 'Nepal', value: 26846.016 },
                        { name: 'New Zealand', value: 4368.136 },
                        { name: 'Oman', value: 2802.768 },
                        { name: 'Pakistan', value: 173149.306 },
                        { name: 'Panama', value: 3678.128 },
                        { name: 'Peru', value: 29262.83 },
                        { name: 'Philippines', value: 93444.322 },
                        { name: 'Papua New Guinea', value: 6858.945 },
                        { name: 'Poland', value: 38198.754 },
                        { name: 'Puerto Rico', value: 3709.671 },
                        { name: 'North Korea', value: 1.468 },
                        { name: 'Portugal', value: 10589.792 },
                        { name: 'Paraguay', value: 6459.721 },
                        { name: 'Qatar', value: 1749.713 },
                        { name: 'Romania', value: 21861.476 },
                        { name: 'Russia', value: 21861.476 },
                        { name: 'Rwanda', value: 10836.732 },
                        { name: 'Western Sahara', value: 514.648 },
                        { name: 'Saudi Arabia', value: 27258.387 },
                        { name: 'Sudan', value: 35652.002 },
                        { name: 'South Sudan', value: 9940.929 },
                        { name: 'Senegal', value: 12950.564 },
                        { name: 'Solomon Islands', value: 526.447 },
                        { name: 'Sierra Leone', value: 5751.976 },
                        { name: 'El Salvador', value: 6218.195 },
                        { name: 'Somaliland', value: 9636.173 },
                        { name: 'Somalia', value: 9636.173 },
                        { name: 'Republic of Serbia', value: 3573.024 },
                        { name: 'Suriname', value: 524.96 },
                        { name: 'Slovakia', value: 5433.437 },
                        { name: 'Slovenia', value: 2054.232 },
                        { name: 'Sweden', value: 9382.297 },
                        { name: 'Swaziland', value: 1193.148 },
                        { name: 'Syria', value: 7830.534 },
                        { name: 'Chad', value: 11720.781 },
                        { name: 'Togo', value: 6306.014 },
                        { name: 'Thailand', value: 66402.316 },
                        { name: 'Tajikistan', value: 7627.326 },
                        { name: 'Turkmenistan', value: 5041.995 },
                        { name: 'East Timor', value: 10016.797 },
                        { name: 'Trinidad and Tobago', value: 1328.095 },
                        { name: 'Tunisia', value: 10631.83 },
                        { name: 'Turkey', value: 72137.546 },
                        { name: 'United Republic of Tanzania', value: 44973.33 },
                        { name: 'Uganda', value: 33987.213 },
                        { name: 'Ukraine', value: 46050.22 },
                        { name: 'Uruguay', value: 3371.982 },
                        { name: 'United States of America', value: 312247.116 },
                        { name: 'Uzbekistan', value: 27769.27 },
                        { name: 'Venezuela', value: 236.299 },
                        { name: 'Vietnam', value: 89047.397 },
                        { name: 'Vanuatu', value: 236.299 },
                        { name: 'West Bank', value: 13.565 },
                        { name: 'Yemen', value: 22763.008 },
                        { name: 'South Africa', value: 51452.352 },
                        { name: 'Zambia', value: 13216.985 },
                        { name: 'Zimbabwe', value: 13076.978 }
                    ]
                }
            ]
        });
        var upColor = '#f36c12';
        var upBorderColor = '#f36c12';
        var downColor = '#00da3c';
        var downBorderColor = '#008F28';
        function splitData(rawData) {
            var categoryData = [];
            var values = [];
            for (var i = 0; i < rawData.length; i++) {
                categoryData.push(rawData[i].splice(0, 1)[0]);
                values.push(rawData[i]);
            }
            return {
                categoryData: categoryData,
                values: values
            };
        }
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data0.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        }
        var data0 = splitData([
            ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
            ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
            ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
            ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
            ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
            ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
            ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
            ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
            ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
            ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
            ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
            ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
            ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
            ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
            ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
            ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
            ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
            ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
            ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
            ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
            ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
            ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
            ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
            ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
            ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
            ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
            ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
            ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
            ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
            ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
            ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
            ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
            ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
            ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
            ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
            ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
            ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
            ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
            ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
            ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
            ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
            ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
            ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
            ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
            ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
            ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
            ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
            ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
            ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
            ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
            ['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
            ['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
            ['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
            ['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
            ['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
            ['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
            ['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
            ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
            ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
            ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
            ['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
            ['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
            ['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
            ['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
            ['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
            ['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
            ['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
            ['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
            ['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
            ['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
            ['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
            ['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
            ['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
            ['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
            ['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
            ['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
            ['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
            ['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
            ['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
            ['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
            ['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
            ['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
            ['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
            ['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
            ['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
            ['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
            ['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
            ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
        ]);
        this.StockIndexChart = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            color: ['#003765', '#0167c1', '#4a92ea', '#88c2f9', '#5a99d5', '#017bff'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['Dow Jones Index', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: data0.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {
                    onZero: false,
                    show: false,
                    lineStyle: {
                        color: '#000'
                    }
                },
                axisLabel: {
                    color: '#333'
                },
                splitLine: { show: false },
                splitArea: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: 'Dow Jones Index',
                    type: 'candlestick',
                    data: data0.values,
                    itemStyle: {
                        normal: {
                            color: upColor,
                            color0: downColor,
                            borderColor: upBorderColor,
                            borderColor0: downBorderColor
                        }
                    },
                    markPoint: {
                        label: {
                            normal: {
                                formatter: function (param) {
                                    return param != null ? Math.round(param.value) : '';
                                }
                            }
                        },
                        data: [
                            {
                                name: 'XX标点',
                                coord: ['2013/5/31', 2300],
                                value: 2300,
                                itemStyle: {
                                    normal: { color: 'rgb(41,60,85)' }
                                }
                            },
                            {
                                name: 'highest value',
                                type: 'max',
                                valueDim: 'highest'
                            },
                            {
                                name: 'lowest value',
                                type: 'min',
                                valueDim: 'lowest'
                            },
                            {
                                name: 'average value on close',
                                type: 'average',
                                valueDim: 'close'
                            }
                        ],
                        tooltip: {
                            formatter: function (param) {
                                return param.name + '<br>' + (param.data.coord || '');
                            }
                        }
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        data: [
                            [
                                {
                                    name: 'from lowest to highest',
                                    type: 'min',
                                    valueDim: 'lowest',
                                    symbol: 'circle',
                                    symbolSize: 10,
                                    label: {
                                        normal: { show: false },
                                        emphasis: { show: false }
                                    }
                                },
                                {
                                    type: 'max',
                                    valueDim: 'highest',
                                    symbol: 'circle',
                                    symbolSize: 10,
                                    label: {
                                        normal: { show: false },
                                        emphasis: { show: false }
                                    }
                                }
                            ],
                            {
                                name: 'min line on close',
                                type: 'min',
                                valueDim: 'close'
                            },
                            {
                                name: 'max line on close',
                                type: 'max',
                                valueDim: 'close'
                            }
                        ]
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: calculateMA(20),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
            ]
        });
    };
    DashboardStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-stock',
            template: __webpack_require__(/*! ./dashboard-stock.component.html */ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-stock.component.scss */ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], DashboardStockComponent);
    return DashboardStockComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_analytics_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-analytics/dashboard-analytics.component */ "./src/app/views/dashboard/dashboard-analytics/dashboard-analytics.component.ts");
/* harmony import */ var _dashboard_sales_dashboard_sales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-sales/dashboard-sales.component */ "./src/app/views/dashboard/dashboard-sales/dashboard-sales.component.ts");
/* harmony import */ var _dashboard_campaign_dashboard_campaign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-campaign/dashboard-campaign.component */ "./src/app/views/dashboard/dashboard-campaign/dashboard-campaign.component.ts");
/* harmony import */ var _dashboard_finance_dashboard_finance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-finance/dashboard-finance.component */ "./src/app/views/dashboard/dashboard-finance/dashboard-finance.component.ts");
/* harmony import */ var _dashboard_stock_dashboard_stock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-stock/dashboard-stock.component */ "./src/app/views/dashboard/dashboard-stock/dashboard-stock.component.ts");
/* harmony import */ var _dashboard_products_dashboard_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-products/dashboard-products.component */ "./src/app/views/dashboard/dashboard-products/dashboard-products.component.ts");
/* harmony import */ var _dashboard_event_dashboard_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-event/dashboard-event.component */ "./src/app/views/dashboard/dashboard-event/dashboard-event.component.ts");
/* harmony import */ var _dashboard_bonus_dashboard_bonus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-bonus/dashboard-bonus.component */ "./src/app/views/dashboard/dashboard-bonus/dashboard-bonus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ],
            declarations: [_dashboard_analytics_dashboard_analytics_component__WEBPACK_IMPORTED_MODULE_7__["DashboardAnalyticsComponent"], _dashboard_sales_dashboard_sales_component__WEBPACK_IMPORTED_MODULE_8__["DashboardSalesComponent"], _dashboard_campaign_dashboard_campaign_component__WEBPACK_IMPORTED_MODULE_9__["DashboardCampaignComponent"], _dashboard_finance_dashboard_finance_component__WEBPACK_IMPORTED_MODULE_10__["DashboardFinanceComponent"], _dashboard_stock_dashboard_stock_component__WEBPACK_IMPORTED_MODULE_11__["DashboardStockComponent"], _dashboard_products_dashboard_products_component__WEBPACK_IMPORTED_MODULE_12__["DashboardProductsComponent"], _dashboard_event_dashboard_event_component__WEBPACK_IMPORTED_MODULE_13__["DashboardEventComponent"], _dashboard_bonus_dashboard_bonus_component__WEBPACK_IMPORTED_MODULE_14__["DashboardBonusComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map
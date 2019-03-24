webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_router__ = __webpack_require__("./src/app/components/components.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components

var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__components_router__["a" /* ComponentsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_swiper_wrapper__["b" /* SwiperModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2_ngx_swiper_wrapper__["a" /* SWIPER_CONFIG */],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
];
var ComponentsRoutingModule = /** @class */ (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body data-spy=\"scroll\" data-target=\"#navbar\" data-offset=\"30\">\r\n\r\n    <!-- Nav Menu -->\r\n\r\n    <div class=\"nav-menu fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <nav class=\"navbar navbar-dark navbar-expand-md\">\r\n                        <a class=\"navbar-brand\" href=\"index.html\"><img src=\"../../../assets/images/logo.png\" class=\"img-fluid\" alt=\"logo\"></a> \r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> \r\n                          <span class=\"navbar-toggler-icon\"></span> \r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n                            <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item\"> <a class=\"nav-link active\" href=\"#home\">HOME <span class=\"sr-only\">(current)</span></a> </li>\r\n                                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#features\">FEATURES</a> </li>\r\n                                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#gallery\">GALLERY</a> </li>\r\n                                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#pricing\">PRICING</a> </li>\r\n                                <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#contact\">CONTACT</a> </li>\r\n                                <li class=\"nav-item\"><a href=\"#\" class=\"btn btn-outline-light my-3 my-sm-0 ml-lg-3\">Download</a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <header class=\"bg-gradient\" id=\"home\">\r\n        <div class=\"container mt-5\">\r\n            <h1>Mobile App Landing Page Template</h1>\r\n            <p class=\"tagline\">The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go. </p>\r\n        </div>\r\n        <div class=\"img-holder mt-3\"><img src=\"../../../assets/images/iphonex.png\" alt=\"phone\" class=\"img-fluid\"></div>\r\n    </header>\r\n\r\n    <div class=\"client-logos my-5\">\r\n        <div class=\"container text-center\">\r\n            <img src=\"../../../assets/images/client-logos.png\" alt=\"client logos\" class=\"img-fluid\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section light-bg\" id=\"features\">\r\n\r\n\r\n        <div class=\"container\">\r\n\r\n            <div class=\"section-title\">\r\n                <small>HIGHLIGHTS</small>\r\n                <h3>Features you love</h3>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-4\">\r\n                    <div class=\"card features\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"media\">\r\n                                <span class=\"ti-face-smile gradient-fill ti-3x mr-3\"></span>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Simple</h4>\r\n                                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-4\">\r\n                    <div class=\"card features\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"media\">\r\n                                <span class=\"ti-settings gradient-fill ti-3x mr-3\"></span>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Customize</h4>\r\n                                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 col-lg-4\">\r\n                    <div class=\"card features\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"media\">\r\n                                <span class=\"ti-lock gradient-fill ti-3x mr-3\"></span>\r\n                                <div class=\"media-body\">\r\n                                    <h4 class=\"card-title\">Secure</h4>\r\n                                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n    <div class=\"section\">\r\n\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-end\">\r\n                <div class=\"col-lg-6 offset-lg-6\">\r\n                    <div class=\"box-icon\"><span class=\"ti-mobile gradient-fill ti-3x\"></span></div>\r\n                    <h2>Discover our App</h2>\r\n                    <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>\r\n                    <a href=\"#\" class=\"btn btn-primary\">Read more</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"perspective-phone\">\r\n                <img src=\"../../../assets/images/perspective.png\" alt=\"perspective phone\" class=\"img-fluid\">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n\r\n    <div class=\"section light-bg\">\r\n        <div class=\"container\">\r\n            <div class=\"section-title\">\r\n                <small>FEATURES</small>\r\n                <h3>Do more with our app</h3>\r\n            </div>\r\n\r\n            <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#communication\">Communication</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#schedule\">Scheduling</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\">Messages</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#livechat\">Live Chat</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane fade show active\" id=\"communication\">\r\n                    <div class=\"d-flex flex-column flex-lg-row\">\r\n                        <img src=\"../../../assets/images/graphic.png\" alt=\"graphic\" class=\"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0\">\r\n                        <div>\r\n\r\n                            <h2>Communicate with ease</h2>\r\n                            <p class=\"lead\">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\r\n                                congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\r\n                            </p>\r\n                            <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\r\n                                sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"schedule\">\r\n                    <div class=\"d-flex flex-column flex-lg-row\">\r\n                        <div>\r\n                            <h2>Scheduling when you want</h2>\r\n                            <p class=\"lead\">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\r\n                                congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\r\n                            </p>\r\n                            <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\r\n                                sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\r\n                            </p>\r\n                        </div>\r\n                        <img src=\"../../../assets/images/graphic.png\" alt=\"graphic\" class=\"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"messages\">\r\n                    <div class=\"d-flex flex-column flex-lg-row\">\r\n                        <img src=\"../../../assets/images/graphic.png\" alt=\"graphic\" class=\"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0\">\r\n                        <div>\r\n                            <h2>Realtime Messaging service</h2>\r\n                            <p class=\"lead\">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\r\n                                congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\r\n                            </p>\r\n                            <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\r\n                                sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"livechat\">\r\n                    <div class=\"d-flex flex-column flex-lg-row\">\r\n                        <div>\r\n                            <h2>Live chat when you needed</h2>\r\n                            <p class=\"lead\">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\r\n                                congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\r\n                            </p>\r\n                            <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\r\n                                sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\r\n                            </p>\r\n                        </div>\r\n                        <img src=\"../../../assets/images/graphic.png\" alt=\"graphic\" class=\"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n    <div class=\"section\">\r\n\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <img src=\"../../../assets/images/dualphone.png\" alt=\"dual phone\" class=\"img-fluid\">\r\n                </div>\r\n                <div class=\"col-md-6 d-flex align-items-center\">\r\n                    <div>\r\n                        <div class=\"box-icon\"><span class=\"ti-rocket gradient-fill ti-3x\"></span></div>\r\n                        <h2>Launch your App</h2>\r\n                        <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Read more</a></div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n\r\n    <div class=\"section light-bg\">\r\n\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 d-flex align-items-center\">\r\n                    <ul class=\"list-unstyled ui-steps\">\r\n                        <li class=\"media\">\r\n                            <div class=\"circle-icon mr-4\">1</div>\r\n                            <div class=\"media-body\">\r\n                                <h5>Create an Account</h5>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"media my-4\">\r\n                            <div class=\"circle-icon mr-4\">2</div>\r\n                            <div class=\"media-body\">\r\n                                <h5>Share with friends</h5>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem eveniet</p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"media\">\r\n                            <div class=\"circle-icon mr-4\">3</div>\r\n                            <div class=\"media-body\">\r\n                                <h5>Enjoy your life</h5>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem </p>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <img src=\"../../../assets/images/iphonex.png\" alt=\"iphone\" class=\"img-fluid\">\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"section-title\">\r\n                <small>TESTIMONIALS</small>\r\n                <h3>What our Customers Says</h3>\r\n            </div>\r\n\r\n            <div class=\"testimonials owl-carousel\">\r\n                <div class=\"testimonials-single\">\r\n                    <img src=\"../../../assets/images/client.png\" alt=\"client\" class=\"client-img\">\r\n                    <blockquote class=\"blockquote\">Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</blockquote>\r\n                    <h5 class=\"mt-4 mb-2\">Crystal Gordon</h5>\r\n                    <p class=\"text-primary\">United States</p>\r\n                </div>\r\n                <div class=\"testimonials-single\">\r\n                    <img src=\"../../../assets/images/client.png\" alt=\"client\" class=\"client-img\">\r\n                    <blockquote class=\"blockquote\">Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</blockquote>\r\n                    <h5 class=\"mt-4 mb-2\">Crystal Gordon</h5>\r\n                    <p class=\"text-primary\">United States</p>\r\n                </div>\r\n                <div class=\"testimonials-single\">\r\n                    <img src=\"../../../assets/images/client.png\" alt=\"client\" class=\"client-img\">\r\n                    <blockquote class=\"blockquote\">Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</blockquote>\r\n                    <h5 class=\"mt-4 mb-2\">Crystal Gordon</h5>\r\n                    <p class=\"text-primary\">United States</p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n\r\n    <div class=\"section light-bg\" id=\"gallery\">\r\n        <div class=\"container\">\r\n            <div class=\"section-title\">\r\n                <small>GALLERY</small>\r\n                <h3>App Screenshots</h3>\r\n            </div>\r\n\r\n            <swiper class=\"swiper-container\" [config]=\"swiperConfig\" [(index)]=\"index\">\r\n              <div class=\"d-flex\">\r\n                  <img src=\"../../../assets/images/screen1.jpg\" alt=\"image\">\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                  <img src=\"../../../assets/images/screen2.jpg\" alt=\"image\">\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                  <img src=\"../../../assets/images/screen3.jpg\" alt=\"image\">\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                  <img src=\"../../../assets/images/screen1.jpg\" alt=\"image\">\r\n              </div>\r\n            </swiper>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"section\" id=\"pricing\">\r\n        <div class=\"container\">\r\n            <div class=\"section-title\">\r\n                <small>PRICING</small>\r\n                <h3>Upgrade to Pro</h3>\r\n            </div>\r\n\r\n            <div class=\"card-deck\">\r\n                <div class=\"card pricing\">\r\n                    <div class=\"card-head\">\r\n                        <small class=\"text-primary\">PERSONAL</small>\r\n                        <span class=\"price\">$14<sub>/m</sub></span>\r\n                    </div>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <div class=\"list-group-item\">10 Projects</div>\r\n                        <div class=\"list-group-item\">5 GB Storage</div>\r\n                        <div class=\"list-group-item\">Basic Support</div>\r\n                        <div class=\"list-group-item\"><del>Collaboration</del></div>\r\n                        <div class=\"list-group-item\"><del>Reports and analytics</del></div>\r\n                    </ul>\r\n                    <div class=\"card-body\">\r\n                        <a href=\"#\" class=\"btn btn-primary btn-lg btn-block\">Choose this Plan</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card pricing popular\">\r\n                    <div class=\"card-head\">\r\n                        <small class=\"text-primary\">FOR TEAMS</small>\r\n                        <span class=\"price\">$29<sub>/m</sub></span>\r\n                    </div>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <div class=\"list-group-item\">Unlimited Projects</div>\r\n                        <div class=\"list-group-item\">100 GB Storage</div>\r\n                        <div class=\"list-group-item\">Priority Support</div>\r\n                        <div class=\"list-group-item\">Collaboration</div>\r\n                        <div class=\"list-group-item\">Reports and analytics</div>\r\n                    </ul>\r\n                    <div class=\"card-body\">\r\n                        <a href=\"#\" class=\"btn btn-primary btn-lg btn-block\">Choose this Plan</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card pricing\">\r\n                    <div class=\"card-head\">\r\n                        <small class=\"text-primary\">ENTERPRISE</small>\r\n                        <span class=\"price\">$249<sub>/m</sub></span>\r\n                    </div>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <div class=\"list-group-item\">Unlimited Projects</div>\r\n                        <div class=\"list-group-item\">Unlimited Storage</div>\r\n                        <div class=\"list-group-item\">Collaboration</div>\r\n                        <div class=\"list-group-item\">Reports and analytics</div>\r\n                        <div class=\"list-group-item\">Web hooks</div>\r\n                    </ul>\r\n                    <div class=\"card-body\">\r\n                        <a href=\"#\" class=\"btn btn-primary btn-lg btn-block\">Choose this Plan</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div> -->\r\n    <!-- // end .section -->\r\n\r\n\r\n    <div class=\"section pt-0\">\r\n        <div class=\"container\">\r\n            <div class=\"section-title\">\r\n                <small>FAQ</small>\r\n                <h3>Frequently Asked Questions</h3>\r\n            </div>\r\n\r\n            <div class=\"row pt-4\">\r\n                <div class=\"col-md-6\">\r\n                    <h4 class=\"mb-3\">Can I try before I buy?</h4>\r\n                    <p class=\"light-font mb-5\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>\r\n                    <h4 class=\"mb-3\">What payment methods do you accept?</h4>\r\n                    <p class=\"light-font mb-5\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>\r\n\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <h4 class=\"mb-3\">Can I change my plan later?</h4>\r\n                    <p class=\"light-font mb-5\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>\r\n                    <h4 class=\"mb-3\">Do you have a contract?</h4>\r\n                    <p class=\"light-font mb-5\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n\r\n\r\n    <div class=\"section bg-gradient\">\r\n        <div class=\"container\">\r\n            <div class=\"call-to-action\">\r\n\r\n                <div class=\"box-icon\"><span class=\"ti-mobile gradient-fill ti-3x\"></span></div>\r\n                <h2>Download Anywhere</h2>\r\n                <p class=\"tagline\">Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than enterprise-wide methods of empowerment. </p>\r\n                <div class=\"my-4\">\r\n\r\n                    <a href=\"#\" class=\"btn btn-light\"><img src=\"../../../assets/images/appleicon.png\" alt=\"icon\"> App Store</a>\r\n                    <a href=\"#\" class=\"btn btn-light\"><img src=\"../../../assets/images/playicon.png\" alt=\"icon\"> Google play</a>\r\n                </div>\r\n                <p class=\"text-primary\"><small><i>*Works on iOS 10.0.5+, Android Kitkat and above. </i></small></p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n\r\n    <div class=\"light-bg py-5\" id=\"contact\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-center text-lg-left\">\r\n                    <p class=\"mb-2\"> <span class=\"ti-location-pin mr-2\"></span> 1485 Pacific St, Brooklyn, NY 11216 USA</p>\r\n                    <div class=\" d-block d-sm-inline-block\">\r\n                        <p class=\"mb-2\">\r\n                            <span class=\"ti-email mr-2\"></span> <a class=\"mr-4\" href=\"mailto:support@mobileapp.com\">support@mobileapp.com</a>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"d-block d-sm-inline-block\">\r\n                        <p class=\"mb-0\">\r\n                            <span class=\"ti-headphone-alt mr-2\"></span> <a href=\"tel:51836362800\">518-3636-2800</a>\r\n                        </p>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"social-icons\">\r\n                        <a href=\"#\"><span class=\"ti-facebook\"></span></a>\r\n                        <a href=\"#\"><span class=\"ti-twitter-alt\"></span></a>\r\n                        <a href=\"#\"><span class=\"ti-instagram\"></span></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- // end .section -->\r\n    <!-- <footer class=\"my-5 text-center\"> -->\r\n        <!-- Copyright removal is not prohibited! -->\r\n        <!-- <p class=\"mb-2\"><small>COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY <a href=\"https://colorlib.com\">COLORLIB</a></small></p>\r\n\r\n        <small>\r\n            <a href=\"#\" class=\"m-2\">PRESS</a>\r\n            <a href=\"#\" class=\"m-2\">TERMS</a>\r\n            <a href=\"#\" class=\"m-2\">PRIVACY</a>\r\n        </small>\r\n    </footer> -->\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.index = 0;
        this.swiperConfig = {
            effect: 'coverflow',
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 10,
            grabCursor: true
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
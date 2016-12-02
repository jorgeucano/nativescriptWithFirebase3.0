"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var http_1 = require('nativescript-angular/http');
var app_component_1 = require("./app.component");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    url: 'https://miappfirebase.firebaseio.com/',
    persist: true
}).then(function (result) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
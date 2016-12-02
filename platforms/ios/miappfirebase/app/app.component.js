"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var firebase = require('nativescript-plugin-firebase');
var AppComponent = (function () {
    function AppComponent(http, ngZone) {
        var _this = this;
        this.http = http;
        this.ngZone = ngZone;
        this.counter = 16;
        this.title = "soy un test";
        firebase.addValueEventListener(function (result) {
            _this.ngZone.run(function () {
                _this.onQueryEvent(result);
            });
        }, "/users");
    }
    AppComponent.prototype.onQueryEvent = function (result) {
        console.log("hit");
        if (result) {
            if (result.error) {
                console.log("error");
            }
            else if (result.value) {
                this.title = JSON.stringify(result.value);
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.siPasaAlgoEjecutate = function (result) {
        var that = this;
        console.log(JSON.stringify(result));
    };
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        firebase.push('/users', {
            'username': 'jorgeucano2',
            'email': "jorgeucano@gmail.com",
            'password': "algo"
        }).then(function (result) {
            //console.log("created key: " + result.key);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [http_1.Http, core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
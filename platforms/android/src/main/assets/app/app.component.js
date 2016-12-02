"use strict";
var core_1 = require("@angular/core");
var firebase = require('nativescript-plugin-firebase');
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
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
            console.log("created key: " + result.key);
        });
        firebase.createUser({
            email: "jorgeucano@gmail.com",
            password: "micanal"
        }).then(function (user) {
            console.dir(user);
        }, function (error) {
            console.log("ocurrio un error al crear un usuario " + error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
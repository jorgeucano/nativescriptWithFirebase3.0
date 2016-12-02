import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { AppComponent } from "./app.component";

var firebase = require("nativescript-plugin-firebase");

firebase.init({
  url: 'https://miappfirebase.firebaseio.com/',
  persist: true
}).then(
    function (result) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule
        ]
})
export class AppModule { }


import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";

var firebase = require("nativescript-plugin-firebase");

  firebase.init({
    url: 'https://miappfirebase.firebaseio.com/', // add your own endpoint
    persist: true // Persist data to disk. Default false.
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
    imports: [NativeScriptModule]
})
export class AppModule { }


import { Component, NgZone } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import firebase = require('nativescript-plugin-firebase');

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    title = "soy un test";
    constructor(private http: Http, private ngZone: NgZone ){
        firebase.addValueEventListener((result:any)=>{
            this.ngZone.run(() => {
                this.onQueryEvent(result);
            });
        }, "/users");
    }




    onQueryEvent(result:any){
        console.log("hit");
        if(result){
            if(result.error){
                console.log("error");
            }
            else if (result.value){
                this.title = JSON.stringify(result.value);
            }
        }
    }

    ngOnInit(){
       
    }


    siPasaAlgoEjecutate(result){
        let that = this;
        console.log(JSON.stringify(result));
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;

         firebase.push(
            '/users',
            {
                'username': 'jorgeucano2',
                'email': "jorgeucano@gmail.com",
                'password': "algo"
            }
        ).then(
            function (result) {
            //console.log("created key: " + result.key);
            }
        );
    }
}

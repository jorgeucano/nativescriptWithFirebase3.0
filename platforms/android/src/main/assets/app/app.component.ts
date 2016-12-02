import { Component } from "@angular/core";

import firebase = require('nativescript-plugin-firebase');

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

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
            console.log("created key: " + result.key);
            }
        );
        firebase.createUser({
            email: "jorgeucano@gmail.com",
            password: "micanal"
        }).then((user)=>{
            console.dir(user);
        }, (error) =>{
            console.log("ocurrio un error al crear un usuario " + error);
        });
    }
}

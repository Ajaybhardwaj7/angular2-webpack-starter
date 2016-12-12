import {Component} from "@angular/core";


@Component({
    selector : "app",
    template : "Hi {{name}}! This is your first Component!"
})
export class AppComponent {

    public name : string;
    constructor () {
        this.name = "Ajay";
    }

}
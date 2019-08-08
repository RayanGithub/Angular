import { Component, OnInit } from '@angular/core';

@Component({
    //selector : 'app-client',
    selector : '.app-client',
    styleUrls : ['./client.component.css'],
    templateUrl : './client.component.html'
    /*
    template : 
    `<h3>This is from Client Component</h3>
    <app-server></app-server>`
    */
})

export class ClientComponent  implements OnInit{
    ClientData = 'data';
    allowNewClient = false;

    constructor() {
        setTimeout(() => {
            this.allowNewClient = true;
        },2000)
    }
    ngOnInit() {

    }
}
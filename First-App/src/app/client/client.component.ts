import { Component } from '@angular/core';

@Component({
    //selector : 'app-client',
    selector : '.app-client',
    styleUrls : ['./client.component.css'],
    template : 
    `<h3>This is from Client Component</h3>
    <app-server></app-server>`
    //templateUrl : './client.component.html'
})

export class ClientComponent {
    ClientData = 'data'
}
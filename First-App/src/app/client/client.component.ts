import { Component } from '@angular/core';

@Component({
    selector : 'app-client',
    template : 
    `<P>This is from Client Component</P>
    <app-server></app-server>`
    //templateUrl : './client.component.html'
})

export class ClientComponent {
    ClientData = 'data'
}
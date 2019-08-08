import { Component } from '@angular/core';


@Component({
    selector : 'app-server',
    styleUrls : ['./server.component.css','./server.component2.css'],
    templateUrl : './server.Component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverName: string = 'ServerA';
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}
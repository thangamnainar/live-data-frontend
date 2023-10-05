import { Component, Inject } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent {
  userDetails: any;
  headers = [
    {header:'S.No',field:'id'},
    {header:'Name',field:'name'},
    {header:'Age',field:'age'},
    {header:'Gender',field:'gender'}
  ]
  constructor(
    @Inject(Socket)
    private socket: Socket,
    private apiService: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.socket.fromEvent<any>('newMessage').subscribe({
      next: (response) => {
        this.userDetails.push(response);
        console.log('Response from WebSocket:', response);
      },
      error: (err) => {
        console.error('WebSocket error:', err);
      },
    });

    // Call the getUser method to fetch user details via HTTP
    this.getUser();
  }

  getUser() {
    this.apiService.get('getUser').subscribe({
      next: (res) => {
        this.userDetails = res.data;
        console.log('Response from getUser API:', res);
      },
      error: (err) => {
        console.error('Error from getUser API:', err);
      },
    });
  }
}

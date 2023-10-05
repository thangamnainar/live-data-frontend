import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './service/apiservice.service';
import { TableModule } from 'primeng/table';
import { Socket, SocketIoModule } from 'ngx-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot({ url: 'http://localhost:3000', options: {} }),
    TableModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

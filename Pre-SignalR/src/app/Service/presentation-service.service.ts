import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PresentationServiceService {
  URL: string = "https://localhost:44317/"
  presentationConnection: HubConnection;
  public message$ = new BehaviorSubject<any>([]);
  public message: any[] = [];
  public presentationId: any;
  constructor(private _httpClient: HttpClient) { 
    this.createPresentationConnection();
  }

  // Create Connection
  createPresentationConnection() {
    // Define Connection
    this.presentationConnection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
      .withUrl(this.URL+'presentation').withAutomaticReconnect().build();
    // Start Connection
    this.presentationConnection.start().then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
    this.presentationConnection.on('ReceiveMessageFromAudience', (data: any) => {
      this.message.push(data);
      this.message$.next(this.message);
    })
  }

  // Stop Connection
  stopChatConnection() {
    this.presentationConnection?.stop().catch(error => console.log(error));
  }

  // Create Presentation
  public async createPresentation() {
    return this.presentationConnection.invoke("AddGroup").catch(error => console.log(error));
  }

  // Sent Message 
  public async enableAudienceMessage() {
    var EnableAudienceDTO = {
      isShow: true
    }
    return this.presentationConnection.invoke("EnableAudience",EnableAudienceDTO).catch(error => console.log(error));
  }

}

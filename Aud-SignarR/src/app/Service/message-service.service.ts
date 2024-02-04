import { Injectable } from '@angular/core';
import { AckMessage, HubConnection } from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  URL: string = "https://localhost:44317/"
  presentationConnection: HubConnection;
  public enableAudience$ = new BehaviorSubject<any>(null);
  public enableAudience :any;
  constructor(private _httpClient: HttpClient) { }
  // Create Connection
  createPresentationConnection() {
    // Define Connection
    this.presentationConnection = new HubConnectionBuilder()
      .withUrl(`${URL}presentation`).withAutomaticReconnect().build();
    // Start Connection
    this.presentationConnection.start().catch(error => {
      console.log(error);
    });

    // Enable Audience
    this.presentationConnection.on("EnableAudience",(data:any)=>{
      this.enableAudience = data;
      this.enableAudience$.next(this.enableAudience);
    });

  }
  // Stop Connection
  stopChatConnection() {
    this.presentationConnection?.stop().catch(error => console.log(error));
  }
  // Create Presentation
  public async JoinGroup(presentationId: any) {
    return this.presentationConnection.invoke("JoinGroup", presentationId).catch(error => console.log(error));
  }
  // Sent Messsage To Presenter
  public async SendMessageToPresenter(messageDTO:any){
    return this.presentationConnection.invoke("SendMessageToPresenter",{messageDTO}).catch(error => console.log(error));
  }
}

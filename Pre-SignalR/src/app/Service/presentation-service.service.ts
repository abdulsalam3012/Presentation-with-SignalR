import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  public message :any[]=[];
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
    this.presentationConnection.on('ReceiveMessageFromAudience', (data: any) => {
      this.message = [...data];
      this.message$.next(this.message);
    })
  }

  // Stop Connection
  stopChatConnection() {
    this.presentationConnection?.stop().catch(error => console.log(error));
  }

  // Create Presentation
  public async createPresentation() {
    return this.presentationConnection.invoke("AddGroup", {}).catch(error => console.log(error));
  }

  // Sent Message 
  public async sentMessageToAudience() {
    var EnableAudienceDTO = {
      isShow: true
    }
    return this.presentationConnection.invoke("EnableAudience", { EnableAudienceDTO }).catch(error => console.log(error));
  }

}

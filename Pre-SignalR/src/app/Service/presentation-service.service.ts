import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection} from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr/dist/esm/HubConnectionBuilder';
@Injectable({
  providedIn: 'root'
})
export class PresentationServiceService {
  URL:string="https://localhost:44317/"
  presentationConnection: HubConnection;
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
  }

  // Stop Connection
  stopChatConnection() {
    this.presentationConnection?.stop().catch(error => console.log(error));
  }

  // Create Presentation
 public async createPresentation(){
 return this.presentationConnection.invoke("AddGroup",{}).catch(error => console.log(error));
 }
}

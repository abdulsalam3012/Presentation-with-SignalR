import { Component, OnInit } from '@angular/core';
import { PresentationServiceService } from 'src/app/Service/presentation-service.service';

@Component({
  selector: 'app-view-presentation',
  templateUrl: './view-presentation.component.html',
  styleUrls: ['./view-presentation.component.css']
})
export class ViewPresentationComponent implements OnInit {
  messageList: any[] = [];
  constructor(private _presentationService: PresentationServiceService) {

  }
  ngOnInit(): void {
    this.getMessages();
  }
  getMessages() {
    this._presentationService.message$.subscribe(
      (response: any) => {
        this.messageList = response;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}

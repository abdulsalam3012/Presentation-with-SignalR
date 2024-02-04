import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/Service/message-service.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
  CopyText: string = "";
  constructor(private _messageService:MessageServiceService) { }

  ngOnInit(): void {

  }
  onSubmit() {
    if (this.CopyText != "") {

    }
  }
}

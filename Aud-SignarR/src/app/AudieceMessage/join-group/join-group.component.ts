import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageServiceService } from 'src/app/Service/message-service.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
  CopyText: string = "";
  errorMessage: boolean = false;
  constructor(private _messageService: MessageServiceService, private _router: Router) { }

  ngOnInit(): void {

  }
  onSubmit() {
    if (this.CopyText != "") {
      this._messageService.JoinGroup(this.CopyText).then(
        (response: any) => {
          if (response != null) {
            this._messageService.presenationId = response;
            this._router.navigateByUrl('sentMessage')
          }
        }
      )
    }
    else {
      this.errorMessage = true;
    }
  }
}

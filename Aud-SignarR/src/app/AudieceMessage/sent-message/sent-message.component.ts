import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageServiceService } from 'src/app/Service/message-service.service';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.css']
})
export class SentMessageComponent implements OnInit {
  isShow: boolean = false;
  sentMessageForm: FormGroup
  successAlert: boolean=false;
  constructor(private _messageService: MessageServiceService, private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.sentMessageForm = this._fb.group({
      Name: [''],
      Message: [''],
      Date: ['']
    });
    this.isEnableAudience();
  }
  isEnableAudience() {
    this._messageService.enableAudience$.subscribe(
      (response: any) => {
        if (response != null) {
          this.isShow = response?.isShow;
        }
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  onSubmit() {
    var payload = this.sentMessageForm.value;
    this._messageService.SendMessageToPresenter(payload).then(
      (response:any)=>{
        if(response){
          this.sentMessageForm.reset();
          this.successAlert = true;
        }
      },
      (error:any)=>{

      }
    )
  }
}

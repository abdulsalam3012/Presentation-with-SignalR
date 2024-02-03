import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationServiceService } from 'src/app/Service/presentation-service.service';

@Component({
  selector: 'app-create-presentation',
  templateUrl: './create-presentation.component.html',
  styleUrls: ['./create-presentation.component.css']
})
export class CreatePresentationComponent implements OnInit {

  constructor(
    private _presentationService: PresentationServiceService,
    private _router: Router
  ) { }
  ngOnInit(): void {

  }
  CreatePresentation() {
    this._presentationService.createPresentation().then(
      (response: any) => {
        this._router.navigateByUrl("viewpresentation");
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}

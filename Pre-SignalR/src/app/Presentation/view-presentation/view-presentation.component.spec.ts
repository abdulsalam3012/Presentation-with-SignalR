import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPresentationComponent } from './view-presentation.component';

describe('ViewPresentationComponent', () => {
  let component: ViewPresentationComponent;
  let fixture: ComponentFixture<ViewPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPresentationComponent]
    });
    fixture = TestBed.createComponent(ViewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

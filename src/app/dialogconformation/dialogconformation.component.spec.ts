import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogconformationComponent } from './dialogconformation.component';

describe('DialogconformationComponent', () => {
  let component: DialogconformationComponent;
  let fixture: ComponentFixture<DialogconformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogconformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogconformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecterrorComponent } from './selecterror.component';

describe('SelecterrorComponent', () => {
  let component: SelecterrorComponent;
  let fixture: ComponentFixture<SelecterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecterrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

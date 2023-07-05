import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrecordComponent } from './getrecord.component';

describe('GetrecordComponent', () => {
  let component: GetrecordComponent;
  let fixture: ComponentFixture<GetrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetrecordComponent]
    });
    fixture = TestBed.createComponent(GetrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrecordComponent } from './findrecord.component';

describe('FindrecordComponent', () => {
  let component: FindrecordComponent;
  let fixture: ComponentFixture<FindrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindrecordComponent]
    });
    fixture = TestBed.createComponent(FindrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

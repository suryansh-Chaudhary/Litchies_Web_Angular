import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutSuccessfullyComponent } from './log-out-successfully.component';

describe('LogOutSuccessfullyComponent', () => {
  let component: LogOutSuccessfullyComponent;
  let fixture: ComponentFixture<LogOutSuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogOutSuccessfullyComponent]
    });
    fixture = TestBed.createComponent(LogOutSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

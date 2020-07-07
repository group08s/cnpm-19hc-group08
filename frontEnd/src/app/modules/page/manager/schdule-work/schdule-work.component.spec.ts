import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchduleWorkComponent } from './schdule-work.component';

describe('SchduleWorkComponent', () => {
  let component: SchduleWorkComponent;
  let fixture: ComponentFixture<SchduleWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchduleWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchduleWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDiagramComponent } from './room-diagram.component';

describe('RoomDiagramComponent', () => {
  let component: RoomDiagramComponent;
  let fixture: ComponentFixture<RoomDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

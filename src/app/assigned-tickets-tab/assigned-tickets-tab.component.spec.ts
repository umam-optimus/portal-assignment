import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTicketsTabComponent } from './assigned-tickets-tab.component';

describe('AssignedTicketsTabComponent', () => {
  let component: AssignedTicketsTabComponent;
  let fixture: ComponentFixture<AssignedTicketsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTicketsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTicketsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

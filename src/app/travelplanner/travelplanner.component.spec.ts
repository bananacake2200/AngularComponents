import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelplannerComponent } from './travelplanner.component';

describe('TravelplannerComponent', () => {
  let component: TravelplannerComponent;
  let fixture: ComponentFixture<TravelplannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelplannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

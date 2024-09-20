import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicktrackerComponent } from './clicktracker.component';

describe('ClicktrackerComponent', () => {
  let component: ClicktrackerComponent;
  let fixture: ComponentFixture<ClicktrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClicktrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClicktrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

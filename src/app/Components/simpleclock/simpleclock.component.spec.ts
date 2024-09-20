import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleclockComponent } from './simpleclock.component';

describe('SimpleclockComponent', () => {
  let component: SimpleclockComponent;
  let fixture: ComponentFixture<SimpleclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleclockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

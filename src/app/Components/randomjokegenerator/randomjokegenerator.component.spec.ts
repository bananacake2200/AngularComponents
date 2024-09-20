import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomjokegeneratorComponent } from './randomjokegenerator.component';

describe('RandomjokegeneratorComponent', () => {
  let component: RandomjokegeneratorComponent;
  let fixture: ComponentFixture<RandomjokegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomjokegeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomjokegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

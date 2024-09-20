import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownselectorComponent } from './dropdownselector.component';

describe('DropdownselectorComponent', () => {
  let component: DropdownselectorComponent;
  let fixture: ComponentFixture<DropdownselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

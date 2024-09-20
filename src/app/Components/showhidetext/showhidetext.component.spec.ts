import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhidetextComponent } from './showhidetext.component';

describe('ShowhidetextComponent', () => {
  let component: ShowhidetextComponent;
  let fixture: ComponentFixture<ShowhidetextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowhidetextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowhidetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

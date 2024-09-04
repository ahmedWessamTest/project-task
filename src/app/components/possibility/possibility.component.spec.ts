import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilityComponent } from './possibility.component';

describe('PossibilityComponent', () => {
  let component: PossibilityComponent;
  let fixture: ComponentFixture<PossibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PossibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PossibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

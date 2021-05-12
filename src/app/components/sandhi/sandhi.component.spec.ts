import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandhiComponent } from './sandhi.component';

describe('SandhiComponent', () => {
  let component: SandhiComponent;
  let fixture: ComponentFixture<SandhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

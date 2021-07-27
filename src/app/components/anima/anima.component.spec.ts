import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaComponent } from './anima.component';

describe('AnimaComponent', () => {
  let component: AnimaComponent;
  let fixture: ComponentFixture<AnimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

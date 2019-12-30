import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAnimationComponent } from './simple-animation.component';

describe('SimpleAnimationComponent', () => {
  let component: SimpleAnimationComponent;
  let fixture: ComponentFixture<SimpleAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

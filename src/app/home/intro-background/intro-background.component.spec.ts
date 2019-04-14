import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBackgroundComponent } from './intro-background.component';

describe('IntroBackgroundComponent', () => {
  let component: IntroBackgroundComponent;
  let fixture: ComponentFixture<IntroBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

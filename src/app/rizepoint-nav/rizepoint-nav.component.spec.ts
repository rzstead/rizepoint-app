import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RizepointNavComponent } from './rizepoint-nav.component';

describe('RizepointNavComponent', () => {
  let component: RizepointNavComponent;
  let fixture: ComponentFixture<RizepointNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RizepointNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RizepointNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerHeaderComponent } from './drawer-header.component';

describe('DrawerComponent', () => {
  let component: DrawerHeaderComponent;
  let fixture: ComponentFixture<DrawerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

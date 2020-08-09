import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentPanelComponent } from './main-content-panel.component';

describe('MainContentPanelComponent', () => {
  let component: MainContentPanelComponent;
  let fixture: ComponentFixture<MainContentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

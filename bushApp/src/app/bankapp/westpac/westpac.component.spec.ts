import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestpacComponent } from './westpac.component';

describe('WestpacComponent', () => {
  let component: WestpacComponent;
  let fixture: ComponentFixture<WestpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

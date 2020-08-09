import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnzComponent } from './anz.component';

describe('AnzComponent', () => {
  let component: AnzComponent;
  let fixture: ComponentFixture<AnzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

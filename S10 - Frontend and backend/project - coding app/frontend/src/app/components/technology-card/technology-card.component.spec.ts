import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCardComponent } from './technology-card.component';

describe('TechnologyCardComponent', () => {
  let component: TechnologyCardComponent;
  let fixture: ComponentFixture<TechnologyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

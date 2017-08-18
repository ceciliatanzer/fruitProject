import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFruitComponent } from './input-fruit.component';

describe('InputFruitComponent', () => {
  let component: InputFruitComponent;
  let fixture: ComponentFixture<InputFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

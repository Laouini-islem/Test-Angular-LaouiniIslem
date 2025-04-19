import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStageComponent } from './detail-stage.component';

describe('DetailStageComponent', () => {
  let component: DetailStageComponent;
  let fixture: ComponentFixture<DetailStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailStageComponent]
    });
    fixture = TestBed.createComponent(DetailStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

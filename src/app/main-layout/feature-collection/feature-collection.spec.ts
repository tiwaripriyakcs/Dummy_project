import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCollection } from './feature-collection';

describe('FeatureCollection', () => {
  let component: FeatureCollection;
  let fixture: ComponentFixture<FeatureCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

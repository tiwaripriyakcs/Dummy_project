import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCard } from './tv-card';

describe('TvCard', () => {
  let component: TvCard;
  let fixture: ComponentFixture<TvCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

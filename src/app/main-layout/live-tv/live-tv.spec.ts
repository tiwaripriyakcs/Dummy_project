import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTv } from './live-tv';

describe('LiveTv', () => {
  let component: LiveTv;
  let fixture: ComponentFixture<LiveTv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveTv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveTv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

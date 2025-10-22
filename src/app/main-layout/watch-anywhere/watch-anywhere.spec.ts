import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchAnywhere } from './watch-anywhere';

describe('WatchAnywhere', () => {
  let component: WatchAnywhere;
  let fixture: ComponentFixture<WatchAnywhere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchAnywhere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchAnywhere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

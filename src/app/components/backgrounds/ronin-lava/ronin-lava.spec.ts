import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoninLava } from './ronin-lava';

describe('RoninLava', () => {
  let component: RoninLava;
  let fixture: ComponentFixture<RoninLava>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoninLava],
    }).compileComponents();

    fixture = TestBed.createComponent(RoninLava);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

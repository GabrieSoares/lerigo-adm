import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCadComponent } from './blog-cad.component';

describe('BlogCadComponent', () => {
  let component: BlogCadComponent;
  let fixture: ComponentFixture<BlogCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

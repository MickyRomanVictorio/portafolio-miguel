/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Meta, Title } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { personalInfo } from './data/portfolio.data';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        Title,
        Meta,
        provideAnimations()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the correct name in h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Verificamos que el h1 contenga tu nombre real importado de los datos
    expect(compiled.querySelector('h1')?.textContent).toContain(personalInfo.name);
  });
});

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Meta, Title } from '@angular/platform-browser';

// Importamos los datos desde los archivos externos
import { PROFILE_IMAGE_BASE64 } from './data/profile-image.data';
import { personalInfo, highlightedProject, skills, experience, education, certifications, languages } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Asignamos las constantes importadas a las variables de la clase
  profileImageBase64 = PROFILE_IMAGE_BASE64;
  personalInfo = personalInfo;
  highlightedProject = highlightedProject;
  skills = skills;
  experience = experience;
  education = education;
  certifications = certifications;
  languages = languages;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setSeoTags();
  }

  private setSeoTags(): void {
    // Título de la pestaña del navegador
    this.titleService.setTitle(`${this.personalInfo.name} | ${this.personalInfo.title}`);

    // Metaetiquetas para Google y SEO
    this.metaService.addTags([
      { name: 'description', content: this.personalInfo.summary },
      { name: 'keywords', content: `${this.skills.join(', ')}, Portafolio, Desarrollo de Software, Java, Angular` },
      { name: 'author', content: this.personalInfo.name },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:title', content: `${this.personalInfo.name} - Portafolio Profesional` },
      { property: 'og:description', content: this.personalInfo.summary },
      { property: 'og:type', content: 'profile' },
      { property: 'og:image', content: 'assets/profile-preview.png' }
    ]);
  }
}

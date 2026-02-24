import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

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
export class AppComponent {
  // Asignamos las constantes importadas a las variables de la clase
  profileImageBase64 = PROFILE_IMAGE_BASE64;
  personalInfo = personalInfo;
  highlightedProject = highlightedProject;
  skills = skills;
  experience = experience;
  education = education;
  certifications = certifications;
  languages = languages;
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="nav-left">
        <a class="logo" (click)="scrollToTop()">SRIDHAR</a>
        <ul class="nav-links">
          <li><a (click)="scrollToTop()" class="active">Home</a></li>
          <li><a (click)="scrollToSection('experience')">Experience</a></li>
          <li><a (click)="scrollToSection('projects')">Projects</a></li>
          <li><a (click)="scrollToSection('skills')">Skills</a></li>
        </ul>
      </div>
      
      <div class="nav-right">
        <a (click)="scrollToSection('contact')" class="contact-link">
          <i class="bi bi-bell-fill"></i>
        </a>
        <a (click)="scrollToSection('contact')" class="contact-link">
          <i class="bi bi-envelope-fill"></i>
        </a>
        
        <!-- Profile Dropdown -->
        <div class="profile-wrap" (click)="menuOpen = !menuOpen">
          <img src="/img/profile-img2.jpg" alt="Profile" class="profile-avatar" />
          <span class="caret" [class.open]="menuOpen">▾</span>
        </div>

        <div class="dropdown" *ngIf="menuOpen" (mouseleave)="menuOpen = false">
          <div class="dd-arrow"></div>
          <a class="dd-item" (click)="switchProfile('Recruiter')">
            <img src="/img/profile-img2.jpg" class="dd-avatar" /> Recruiter
          </a>
          <a class="dd-item" (click)="switchProfile('Friend')">
            <img src="/img/profile-img.jpg" class="dd-avatar" /> Friend
          </a>
          <a class="dd-item" (click)="switchProfile('Guest')">
            <img src="/img/hero-bg2.jpg" class="dd-avatar" /> Guest
          </a>
          <div class="dd-divider"></div>
          <a class="dd-item manage" (click)="switchProfile('manage')">
            <i class="bi bi-pencil-square"></i> Manage Profiles
          </a>
          <div class="dd-divider"></div>
          <a class="dd-item signout" (click)="switchProfile('SignOut')">
            Sign out of Sridhar
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      height: 68px;
      padding: 0 4%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.3s;
      z-index: 1000;
      background: linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, transparent);
    }
    nav.scrolled { background: #141414; }

    .nav-left, .nav-right { display: flex; align-items: center; }

    .logo {
      color: #e50914;
      font-size: 1.6rem;
      font-weight: 900;
      letter-spacing: 3px;
      margin-right: 2rem;
      cursor: pointer;
      user-select: none;
    }
    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.2rem;
      padding: 0; margin: 0;
    }
    .nav-links a {
      color: #b3b3b3;
      font-size: 0.85rem;
      cursor: pointer;
      transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active { color: #fff; }

    .nav-right { gap: 1.2rem; }
    .contact-link {
      color: #fff;
      font-size: 1.1rem;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    .contact-link:hover { opacity: 1; }

    /* Profile Avatar & Dropdown */
    .profile-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      position: relative;
    }
    .profile-avatar {
      width: 32px; height: 32px;
      border-radius: 4px;
      object-fit: cover;
    }
    .caret {
      color: #fff;
      font-size: 0.7rem;
      transition: transform 0.2s;
    }
    .caret.open { transform: rotate(180deg); }

    .dropdown {
      position: fixed;
      top: 60px;
      right: 4%;
      width: 200px;
      background: rgba(0,0,0,0.92);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 2px;
      z-index: 2000;
      animation: ddFade 0.15s ease;
    }
    .dd-arrow {
      position: absolute;
      top: -10px; right: 20px;
      border: 5px solid transparent;
      border-bottom-color: rgba(255,255,255,0.15);
    }

    .dd-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      color: #b3b3b3;
      font-size: 0.82rem;
      cursor: pointer;
      transition: background 0.15s;
    }
    .dd-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
    .dd-avatar {
      width: 28px; height: 28px;
      border-radius: 4px;
      object-fit: cover;
    }
    .dd-divider { height: 1px; background: rgba(255,255,255,0.12); }
    .signout { 
      justify-content: center; 
      font-weight: 600;
      padding: 14px;
    }

    @keyframes ddFade {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      nav { padding: 0 5%; height: 60px; }
      .nav-links { display: none; }
      .logo { font-size: 1.3rem; margin-right: 0; }
      .contact-link { font-size: 1rem; }
      .profile-avatar { width: 28px; height: 28px; }
      .dropdown { right: 5%; top: 55px; width: 180px; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(id: string) {
    const map: Record<string, string> = {
      contact: 'contact',
      experience: 'row-Trending Now: Work Experience',
      projects: 'row-Because You Watched: Project Experience',
      skills: 'row-Blockbuster Skills & Technologies'
    };
    const el = document.getElementById(map[id] || id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  switchProfile(profile: string) {
    this.menuOpen = false;
    if (profile === 'SignOut') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/profiles']);
    }
  }
}

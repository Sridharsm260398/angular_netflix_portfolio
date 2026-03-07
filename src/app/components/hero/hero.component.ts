import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero">
      <div class="hero-bg">
        <video autoplay muted loop playsinline [poster]="data.image">
          <source [src]="data.video" type="video/mp4">
        </video>
      </div>
      <div class="hero-vignette"></div>

      <div class="hero-body">
        <!-- <div class="badge-row">
          <span class="n-logo">S</span>
          <span class="series-label">P O R T F O L I O</span>
        </div> -->
        
        <h1 class="title">{{ data.title }}</h1>
        
        <div class="meta">
          <span class="green">99% Match</span>
          <span>2026</span>
          <span class="border-tag">Top Tier</span>
          <span>{{ data.experience }}</span>
        </div>

        <p class="roles">{{ data.roles.join(' · ') }}</p>
        <p class="description">{{ data.bio }}</p>
        
        <div class="buttons">
          <button class="btn-play" (click)="downloadResume()">
            <i class="bi bi-play-fill"></i> Resume
          </button>
          <button class="btn-info" (click)="scrollToContact()">
            <i class="bi bi-info-circle"></i> Contact Info
          </button>
        </div>
      </div>

      <div class="maturity-bar">
        <span>4+ YOE</span>
      </div>

      <div class="hero-fade-bottom"></div>
    </div>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 90vh;
      max-height: 750px;
      min-height: 500px;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: #141414;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
    }
    .hero-bg video {
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.45;
    }
    .hero-vignette {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        linear-gradient(to right, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.6) 35%, transparent 65%),
        linear-gradient(to top, #141414 0%, rgba(20,20,20,0.7) 20%, transparent 50%),
        linear-gradient(to bottom, rgba(20,20,20,0.6) 0%, transparent 10%);
    }
    .hero-body {
      position: relative;
      z-index: 2;
      padding: 0 4%;
      max-width: 44%;
      animation: heroIn 0.8s ease-out;
    }
    .badge-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    .n-logo {
      background: #e50914;
      color: #fff;
      font-weight: 900;
      font-size: 1.5rem;
      padding: 1px 9px;
      border-radius: 2px;
      line-height: 1.2;
    }
    .series-label {
      color: #999;
      font-weight: 700;
      font-size: 0.65rem;
      letter-spacing: 5px;
    }
    .title {
      font-size: 3.5rem;
      font-weight: 900;
      margin: 0 0 8px;
      letter-spacing: -1px;
      line-height: 1;
      text-shadow: 0 2px 8px rgba(0,0,0,0.6);
    }
    .meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 0.88rem;
      color: #ddd;
    }
    .green { color: #46d369; }
    .border-tag {
      border: 1px solid rgba(255,255,255,0.35);
      padding: 1px 7px;
      font-size: 0.72rem;
      border-radius: 2px;
    }
    .roles {
      font-size: 0.95rem;
      color: #ccc;
      margin: 0 0 6px;
    }
    .description {
      font-size: 0.88rem;
      line-height: 1.5;
      color: #e5e5e5;
      margin: 0 0 16px;
      text-shadow: 0 1px 3px rgba(0,0,0,0.7);
    }
    .buttons { display: flex; gap: 10px; }
    .btn-play, .btn-info {
      padding: 8px 24px;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: opacity 0.15s;
    }
    .btn-play { background: #fff; color: #000; }
    .btn-play:hover { opacity: 0.8; }
    .btn-info { background: rgba(109,109,110,0.7); color: #fff; }
    .btn-info:hover { background: rgba(109,109,110,0.4); }

    .maturity-bar {
      position: absolute;
      right: 0;
      bottom: 35%;
      z-index: 3;
      background: rgba(51,51,51,0.55);
      border-left: 3px solid #ddd;
      padding: 5px 35px 5px 8px;
      font-size: 0.85rem;
      font-weight: 500;
      color: #fff;
    }

    .hero-fade-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 120px;
      background: linear-gradient(to top, #141414, transparent);
      z-index: 2;
    }

    @keyframes heroIn {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 768px) {
      .hero { height: 85vh; min-height: 500px; justify-content: flex-start; padding-top: 8vh; }
      .hero-body { max-width: 90%; padding: 0 5%; }
      .title { font-size: 2.2rem; margin-bottom: 8px; text-align: center; }
      .description { font-size: 0.85rem; margin-bottom: 16px; text-align: center; }
      .roles { font-size: 0.85rem; text-align: center; }
      .meta { font-size: 0.8rem; justify-content: center; margin-bottom: 10px; }
      .buttons { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; gap: 12px; }
      .btn-play, .btn-info { justify-content: center; padding: 12px; font-size: 1.1rem; }
      .maturity-bar { display: none; }
      .badge-row { justify-content: center; }
    }
  `]
})
export class HeroComponent {
  @Input() data: any;

  downloadResume() {
    const a = document.createElement('a');
    a.href = this.data.resumeLink;
    a.download = 'Sridhar_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
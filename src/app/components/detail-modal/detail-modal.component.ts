import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="closeOnOverlay($event)">
      <div class="modal-content" *ngIf="item">
        
        <!-- Close Button -->
        <button class="close-btn" (click)="close.emit()">
          <i class="bi bi-x-lg"></i>
        </button>

        <!-- Hero Image Section -->
        <div class="modal-hero" [style.backgroundImage]="'url(' + item.image + ')'">
          <div class="hero-gradient"></div>
          <div class="hero-info">
            <h1>{{ item.title }}</h1>
            <div class="hero-actions" *ngIf="item.link">
              <a [href]="item.link" target="_blank" class="play-btn">▶ Visit</a>
            </div>
          </div>
        </div>

        <!-- Details Section -->
        <div class="modal-details">
          <div class="details-grid">
            <div class="details-left">
              <!-- Meta Row -->
              <div class="meta-row">
                <span class="match">98% Match</span>
                <span class="duration" *ngIf="item.duration">{{ item.duration }}</span>
                <span class="badge" *ngIf="item.client">{{ item.client }}</span>
              </div>

              <p class="full-desc">{{ item.fullDescription || item.description }}</p>
            </div>

            <div class="details-right">
              <p *ngIf="item.techStack"><span class="label">Tech Stack:</span> {{ item.techStack?.join(', ') }}</p>
              <p *ngIf="item.subtitle"><span class="label">Role:</span> {{ item.subtitle }}</p>
            </div>
          </div>

          <!-- Highlights -->
          <div class="highlights" *ngIf="item.highlights && item.highlights.length">
            <h3>Key Highlights</h3>
            <ul>
              <li *ngFor="let h of item.highlights">{{ h }}</li>
            </ul>
          </div>

          <!-- Team Section -->
          <div class="team-section" *ngIf="item.team && item.team.length">
            <h3>Team</h3>
            <div class="team-carousel">
              <button class="team-nav prev" (click)="scrollTeamLeft()"><i class="bi bi-chevron-left"></i></button>
              <div class="team-slider" #teamSlider>
                <div class="team-member" *ngFor="let member of item.team">
                  <img [src]="member.image" [alt]="member.name" />
                  <span class="member-name">{{ member.name }}</span>
                  <span class="member-role">{{ member.role }}</span>
                </div>
              </div>
              <button class="team-nav next" (click)="scrollTeamRight()"><i class="bi bi-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 2vh;
      overflow-y: auto;
      animation: fadeIn 0.2s;
    }
    .modal-content {
      background: #181818;
      border-radius: 8px;
      width: 90%;
      max-width: 850px;
      position: relative;
      overflow: hidden;
      margin-bottom: 4vh;
      box-shadow: 0 3px 30px rgba(0,0,0,0.8);
      animation: slideUp 0.35s ease-out;
    }
    .close-btn {
      position: absolute;
      top: 12px; right: 12px;
      width: 36px; height: 36px;
      border-radius: 50%;
      background: #141414;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .close-btn:hover { background: #333; }

    .modal-hero {
      width: 100%;
      height: 400px;
      background-size: cover;
      background-position: center;
      position: relative;
      display: flex;
      align-items: flex-end;
    }
    .hero-gradient {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(to top, #181818 5%, transparent 60%);
    }
    .hero-info {
      position: relative; z-index: 2;
      padding: 2rem;
    }
    .hero-info h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0 0 1rem;
    }
    .play-btn {
      background: white;
      color: black;
      padding: 0.5rem 2rem;
      border-radius: 4px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.2s;
      display: inline-block;
    }
    .play-btn:hover { opacity: 0.8; }

    .modal-details {
      padding: 1rem 2rem 2rem;
    }
    .details-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .meta-row {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .match { color: #46d369; font-weight: bold; }
    .duration { color: #fff; }
    .badge {
      border: 1px solid rgba(255,255,255,0.4);
      padding: 2px 6px;
      font-size: 0.75rem;
      border-radius: 3px;
      color: #aaa;
    }
    .full-desc {
      color: #ddd;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .details-right {
      font-size: 0.85rem;
      color: #999;
    }
    .details-right .label {
      color: #777;
    }
    .details-right p {
      margin: 0 0 0.5rem;
    }

    .highlights {
      margin-bottom: 2rem;
    }
    .highlights h3, .team-section h3 {
      color: #fff;
      font-size: 1.3rem;
      margin: 0 0 1rem;
    }
    .highlights ul {
      list-style: none;
      padding: 0;
    }
    .highlights li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #333;
      color: #ddd;
      font-size: 0.9rem;
    }
    .highlights li::before {
      content: '▶ ';
      color: var(--netflix-red);
      margin-right: 0.5rem;
    }

    /* Team Carousel */
    .team-section { margin-top: 1rem; }
    .team-carousel {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .team-nav {
      background: rgba(0,0,0,0.5);
      border: 1px solid #444;
      color: white;
      width: 36px; height: 36px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s;
    }
    .team-nav:hover { background: rgba(255,255,255,0.1); }

    .team-slider {
      display: flex;
      overflow-x: auto;
      gap: 1.5rem;
      padding: 1rem 0;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .team-slider::-webkit-scrollbar { display: none; }

    .team-member {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 100px;
      text-align: center;
      transition: transform 0.2s;
    }
    .team-member:hover {
      transform: scale(1.08);
    }
    .team-member img {
      width: 80px; height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #333;
      margin-bottom: 0.5rem;
    }
    .member-name {
      color: #fff;
      font-weight: 500;
      font-size: 0.85rem;
    }
    .member-role {
      color: #46d369;
      font-size: 0.75rem;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 768px) {
      .modal-overlay { align-items: flex-end; padding-top: 0; }
      .modal-content { 
        width: 100%; max-width: 100%; 
        border-radius: 12px 12px 0 0; 
        margin-bottom: 0; 
        max-height: 90vh; 
        overflow-y: auto;
      }
      .details-grid { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
      .modal-hero { height: 240px; }
      .hero-info { padding: 1.5rem; width: 100%; }
      .hero-info h1 { font-size: 1.6rem; text-align: center; }
      .hero-actions { display: flex; justify-content: center; }
      .play-btn { width: 100%; text-align: center; font-size: 1.1rem; padding: 12px 0; }
      .modal-details { padding: 1rem 1.5rem 2rem; }
      .close-btn { 
        top: 12px; right: 12px; 
        background: rgba(20,20,20,0.8); 
        width: 32px; height: 32px; font-size: 1rem; 
      }
      .meta-row { justify-content: center; margin-bottom: 1.2rem; }
    }
  `]
})
export class DetailModalComponent {
  @Input() item: any;
  @Output() close = new EventEmitter<void>();

  closeOnOverlay(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close.emit();
    }
  }

  scrollTeamLeft() {
    const el = document.querySelector('.team-slider');
    if (el) el.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollTeamRight() {
    const el = document.querySelector('.team-slider');
    if (el) el.scrollBy({ left: 200, behavior: 'smooth' });
  }
}

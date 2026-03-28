import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row-container" [class.full-stretch]="fullStretch">
      <h2 class="row-title" *ngIf="title" [style.paddingLeft]="fullStretch ? '4%' : '0'">{{ title }}</h2>
      <div class="slider-wrapper" (mouseenter)="showControls = true" (mouseleave)="showControls = false">
        
        <button class="nav-btn left" (click)="scrollLeft()" [class.show]="showControls && canScrollLeft">
          <i class="bi bi-chevron-left"></i>
        </button>

        <div class="slider" #slider (scroll)="checkScroll()" 
             [class.poster-row]="rowType === 'poster'"
             [class.wide-row]="rowType === 'wide'"
             [class.full-stretch-slider]="fullStretch">
          <div class="card" 
               *ngFor="let item of items; let i = index" 
               [class.poster-card]="rowType === 'poster'"
               [class.wide-card]="rowType === 'wide'"
               (click)="onItemClick(item)"
               (mousemove)="onCardMove($event, i)"
               (mouseleave)="onCardLeave(i)">
            
            <div class="card-inner" [id]="getRowUniqueId(i)">
              <div class="card-img" 
                   [class.poster-img]="rowType === 'poster'"
                   [class.wide-img]="rowType === 'wide'">
                
                <!-- Blurred Backdrop for Wide Cards (Full View) -->
                <div class="wide-backdrop" *ngIf="rowType === 'wide'" [style.backgroundImage]="'url(' + item.image + ')'"></div>
                
                <!-- Sharp Image Layer -->
                <div class="sharp-img" 
                     [style.backgroundImage]="'url(' + item.image + ')'"
                     [style.backgroundPosition]="item.imagePosition || 'center'"
                     [class.contain-mode]="rowType === 'wide'">
                </div>
                
                <div *ngIf="isRanked" class="rank-badge">{{ i + 1 }}</div>

                <div class="hover-play">
                  <div class="play-circle">
                    <i class="bi bi-play-fill"></i>
                  </div>
                </div>

                <!-- Shimmer light effect -->
                <div class="card-shimmer"></div>
              </div>

              <div class="card-info">
                <div class="info-top">
                  <h4>{{ item.title }}</h4>
                  <button class="more-btn" (click)="onMoreClick(item, $event)" title="More Info">
                    <i class="bi bi-chevron-down"></i>
                  </button>
                </div>
                <p class="card-sub">{{ item.subtitle }}</p>
              </div>
            </div>
            
          </div>
        </div>

        <button class="nav-btn right" (click)="scrollRight()" [class.show]="showControls && canScrollRight">
          <i class="bi bi-chevron-right"></i>
        </button>
        
      </div>
    </div>
  `,
  styles: [`
    .row-container {
      margin-bottom: 3rem;
      padding: 0 4%;
      perspective: 1200px;
      transition: padding 0.3s;
    }
    .row-container.full-stretch {
      padding: 0;
    }
    .full-stretch-slider {
      padding-left: 4% !important;
      padding-right: 4% !important;
    }
    .row-title {
      font-size: 1.4rem;
      color: #e5e5e5;
      font-weight: 700;
      margin: 0 0 0.8rem 0;
      font-family: 'Outfit', sans-serif;
    }
    .slider-wrapper {
      position: relative;
    }
    .slider {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      padding: 10px 0 10px;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .slider::-webkit-scrollbar { display: none; }

    .card {
      flex: 0 0 calc(100% / 5.5);
      min-width: 210px;
      cursor: pointer;
      transition: transform 0.35s cubic-bezier(0.23,1,0.32,1), z-index 0s;
      perspective: 800px;
    }
    .card:hover {
      transform: scale(1.08);
      z-index: 10;
    }
    .card.poster-card {
      flex: 0 0 calc(100% / 7.5); /* Leaner for vertical look */
      min-width: 165px;
    }
    .card.poster-card:hover { transform: scale(1.06); }
    
    /* Wide horizontal cards (for certificates) */
    .card.wide-card {
      flex: 0 0 calc(100% / 3.2);
      min-width: 300px;
    }
    .card.wide-card:hover { transform: scale(1.05); }

    .card-inner {
      border-radius: 6px;
      overflow: hidden;
      background: #1a1a1a;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
      transition: box-shadow 0.35s, transform 0.35s cubic-bezier(0.23,1,0.32,1);
      transform-style: preserve-3d;
    }
    .card:hover .card-inner {
      box-shadow: 0 12px 35px rgba(0,0,0,0.8), 0 0 20px rgba(229,9,20,0.15);
    }

    .card-img {
      width: 100%;
      height: 135px;
      background-size: cover;
      background-position: center;
      position: relative;
      overflow: hidden;
    }
    .card-img.poster-img {
      height: 240px; /* Poster aspect ratio */
    }
    .card-img.wide-img {
      height: 200px; /* More vertical space for full view */
      background-color: transparent; 
    }
    .sharp-img {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      z-index: 2;
    }
    .sharp-img.contain-mode {
      background-size: contain;
      background-repeat: no-repeat;
    }
    .wide-backdrop {
      position: absolute;
      inset: -15px;
      background-size: cover;
      background-position: center;
      filter: blur(20px) brightness(0.4);
      z-index: 1;
      transform: scale(1.1);
    }

    /* Shimmer sweep on hover */
    .card-shimmer {
      position: absolute; inset: 0;
      background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%);
      transform: translateX(-100%);
      transition: none;
    }
    .card:hover .card-shimmer {
      animation: shimmerSweep 0.7s ease forwards;
    }
    @keyframes shimmerSweep {
      to { transform: translateX(100%); }
    }

    /* Play overlay */
    .hover-play {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.3);
      opacity: 0; transition: opacity 0.25s;
    }
    .card:hover .hover-play { opacity: 1; }
    .play-circle {
      width: 44px; height: 44px; border-radius: 50%;
      border: 2px solid #fff; background: rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center;
      color: #fff; font-size: 1.4rem;
      transition: transform 0.2s, background 0.2s;
    }
    .play-circle:hover {
      transform: scale(1.15);
      background: rgba(229,9,20,0.6);
    }

    /* Rank badge */
    .rank-badge {
      position: absolute; bottom: 2px; left: 0px;
      font-size: 3.5rem; font-weight: 900; line-height: 1;
      color: rgba(51,51,51,0.55);
      -webkit-text-stroke: 2px rgba(255,255,255,0.9);
      pointer-events: none; z-index: 76;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
    }

    .card-info {
      padding: 10px 12px 10px;
    }
    .info-top {
      display: flex; align-items: center; justify-content: space-between; gap: 6px;
    }
    .info-top h4 {
      margin: 0; font-size: 0.82rem; color: #fff;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;
    }
    .more-btn {
      width: 26px; height: 26px; border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.5);
      background: transparent; color: #fff; font-size: 0.75rem;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all 0.2s;
    }
    .more-btn:hover {
      border-color: #fff; background: rgba(255,255,255,0.15);
      transform: rotate(180deg);
    }
    .card-sub {
      margin: 4px 0 0; font-size: 0.7rem; color: #46d369;
      font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }

    /* Nav buttons */
    .nav-btn {
      position: absolute; top: 0; bottom: 0; width: 45px;
      background: rgba(20,20,20,0.7); color: #fff;
      border: none; font-size: 1.6rem; cursor: pointer; z-index: 20;
      opacity: 0; transition: opacity 0.2s, background 0.2s;
      display: flex; align-items: center; justify-content: center;
    }
    .nav-btn:hover { background: rgba(20,20,20,0.95); }
    .nav-btn.left { left: -4px; border-radius: 0 4px 4px 0; }
    .nav-btn.right { right: -4px; border-radius: 4px 0 0 4px; }
    .nav-btn.show { opacity: 1; }

    @media (max-width: 768px) {
      .row-container { padding: 0 4%; margin-bottom: 2rem; }
      .slider { gap: 10px; padding: 4px 0 10px; }
      .card { flex: 0 0 42%; min-width: 140px; }
      .card-img { height: 95px; }
      .nav-btn { display: none; }
      .row-title { font-size: 1.1rem; }
      .rank-badge { font-size: 2.5rem; -webkit-text-stroke: 1.5px rgba(255,255,255,0.8); }
      .info-top h4 { font-size: 0.75rem; }
      .more-btn { width: 22px; height: 22px; font-size: 0.65rem; }
      .card-sub { font-size: 0.65rem; }
      .card:hover { transform: none; }
      .card:hover .card-inner { box-shadow: 0 2px 8px rgba(0,0,0,0.4); }
      .hover-play { display: none !important; }
      
      .card.wide-card { flex: 0 0 85%; min-width: 260px; }
      .card-img.wide-img { height: 150px; }
    }
  `]
})
export class ContentRowComponent {
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() isRanked: boolean = false;
  @Input() rowType: 'standard' | 'poster' | 'wide' = 'standard';
  @Input() fullStretch: boolean = false;
  @Output() itemClicked = new EventEmitter<any>();

  @ViewChild('slider') slider!: ElementRef;

  showControls = false;
  canScrollLeft = false;
  canScrollRight = true;

  onItemClick(item: any) {
    this.itemClicked.emit(item);
  }

  onMoreClick(item: any, event: Event) {
    event.stopPropagation();
    this.itemClicked.emit(item);
  }

  getRowUniqueId(index: number): string {
    // Create a safe ID from the title by removing spaces and special chars
    const safeTitle = this.title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    return `card-${safeTitle}-${index}`;
  }

  // 3D tilt on mouse move
  onCardMove(event: MouseEvent, index: number) {
    const card = document.getElementById(this.getRowUniqueId(index));
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onCardLeave(index: number) {
    const card = document.getElementById(this.getRowUniqueId(index));
    if (!card) return;
    card.style.transform = '';
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -(this.slider.nativeElement.offsetWidth - 80), behavior: 'smooth' });
    setTimeout(() => this.checkScroll(), 400);
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: this.slider.nativeElement.offsetWidth - 80, behavior: 'smooth' });
    setTimeout(() => this.checkScroll(), 400);
  }

  checkScroll() {
    if (!this.slider) return;
    const el = this.slider.nativeElement;
    this.canScrollLeft = el.scrollLeft > 0;
    this.canScrollRight = el.scrollWidth - el.clientWidth - el.scrollLeft > 1;
  }
}

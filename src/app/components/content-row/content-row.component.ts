import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row-container">
      <h2 class="row-title">{{ title }}</h2>
      <div class="slider-wrapper" (mouseenter)="showControls = true" (mouseleave)="showControls = false">
        
        <button class="nav-btn left" (click)="scrollLeft()" [class.show]="showControls && canScrollLeft">
          <i class="bi bi-chevron-left"></i>
        </button>

        <div class="slider" #slider (scroll)="checkScroll()">
          <div class="card" *ngFor="let item of items; let i = index" (click)="onItemClick(item)">
            
            <div class="card-inner">
              <!-- Image with centered play overlay on hover -->
              <div class="card-img" [style.backgroundImage]="'url(' + item.image + ')'"
                   [style.backgroundPosition]="item.imagePosition || 'center'">
                
                <div *ngIf="isRanked" class="rank-badge">{{ i + 1 }}</div>

                <!-- Centered play icon on hover -->
                <div class="hover-play">
                  <div class="play-circle">
                    <i class="bi bi-play-fill"></i>
                  </div>
                </div>
              </div>

              <!-- Info always visible -->
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
      margin-bottom: 2.5rem;
      padding: 0 4%;
    }
    .row-title {
      font-size: 1.3rem;
      color: #e5e5e5;
      font-weight: 600;
      margin: 0 0 0.8rem 0;
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
      padding: 4px 0 8px;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .slider::-webkit-scrollbar { display: none; }

    .card {
      flex: 0 0 calc(100% / 5.5);
      min-width: 210px;
      cursor: pointer;
      transition: transform 0.25s ease;
    }
    .card:hover {
      transform: scale(1.05);
      z-index: 10;
    }

    .card-inner {
      border-radius: 6px;
      overflow: hidden;
      background: #181818;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      transition: box-shadow 0.25s;
    }
    .card:hover .card-inner {
      box-shadow: 0 8px 25px rgba(0,0,0,0.7);
    }

    .card-img {
      width: 100%;
      height: 130px;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    /* Centered play icon on hover */
    .hover-play {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.35);
      opacity: 0;
      transition: opacity 0.2s;
    }
    .card:hover .hover-play {
      opacity: 1;
    }
    .play-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2px solid #fff;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.4rem;
      transition: transform 0.15s, background 0.15s;
    }
    .play-circle:hover {
      transform: scale(1.15);
      background: rgba(255,255,255,0.2);
    }

    /* Rank badge inside card image */
    .rank-badge {
        position: absolute;
    bottom: 2px;
    left: 0px;
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1;
    color: rgba(51, 51, 51, 0.55);
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.9);
    pointer-events: none;
    z-index: 76;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }

    .card-info {
      padding: 10px 12px 10px;
    }
    .info-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
    .info-top h4 {
      margin: 0;
      font-size: 0.82rem;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }
    .more-btn {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.5);
      background: transparent;
      color: #fff;
      font-size: 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: border-color 0.2s, background 0.2s;
    }
    .more-btn:hover {
      border-color: #fff;
      background: rgba(255,255,255,0.15);
    }
    .card-sub {
      margin: 4px 0 0;
      font-size: 0.7rem;
      color: #46d369;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Chevron nav buttons */
    .nav-btn {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 40px;
      background: rgba(0,0,0,0.6);
      color: #fff;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 20;
      opacity: 0;
      transition: opacity 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-btn:hover { background: rgba(0,0,0,0.85); }
    .nav-btn.left { left: 0; border-radius: 0 4px 4px 0; }
    .nav-btn.right { right: 0; border-radius: 4px 0 0 4px; }
    .nav-btn.show { opacity: 1; }

    @media (max-width: 768px) {
      .row-container { padding: 0 4%; margin-bottom: 2rem; }
      .slider { gap: 12px; padding: 4px 0 12px; }
      .card { flex: 0 0 42%; min-width: 140px; }
      .card-img { height: 90px; }
      .nav-btn { display: none; }
      .row-title { font-size: 1.1rem; }
      .rank-badge { font-size: 2.5rem; bottom: -2px; left: 0; -webkit-text-stroke: 1.5px rgba(255,255,255,0.8); }
      .info-top h4 { font-size: 0.75rem; }
      .more-btn { width: 22px; height: 22px; font-size: 0.65rem; }
      .card-sub { font-size: 0.65rem; }
      
      /* Disable hover transformations on touch devices */
      .card:hover { transform: none; z-index: 10; }
      .card:hover .card-inner { box-shadow: 0 2px 8px rgba(0,0,0,0.4); }
      .hover-play { display: none !important; }
    }
  `]
})
export class ContentRowComponent {
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() isRanked: boolean = false;
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

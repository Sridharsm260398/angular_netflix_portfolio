import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="closeOnOverlay($event)">

      <div class="modal-card full-modal" 
           [class.item-is-certificate]="item?.isCertificate" 
           *ngIf="item && hasRichContent()">

        <button class="close-btn" (click)="close.emit()"><i class="bi bi-x-lg"></i></button>

        <div class="bg-layer" [class.contain-mode]="item.isCertificate">
          <div class="bg-backdrop" *ngIf="item.isCertificate" [style.backgroundImage]="'url(' + item.image + ')'"></div>
          
          <div class="bg-img" *ngIf="!item.video" 
               [class.ken-burns]="isAnimating && !item.isCertificate" 
               [class.contain-bg]="item.isCertificate"
               [style.backgroundImage]="'url(' + item.image + ')'"></div>
          
          <video #previewVideo *ngIf="item.video" 
                 class="bg-video" 
                 [class.contain-video]="item.isCertificate"
                 autoplay loop playsinline 
                 [muted]="isMuted"
                 [poster]="item.image">
            <source [src]="item.video" type="video/mp4">
          </video>

          <audio #previewAudio *ngIf="item.audio" [src]="item.audio" loop [muted]="isMuted"></audio>
          <div class="bg-grad"></div>
        </div>

        <button class="mute-btn" *ngIf="item.video || item.audio" (click)="toggleMute($event)">
          <i class="bi" [class.bi-volume-up]="!isMuted" [class.bi-volume-mute]="isMuted"></i>
        </button>

        <div class="content-overlay" [class.certificate-overlay]="item.isCertificate">
          <div class="content-inner" [class.certificate-inner]="item.isCertificate">
            
            <h1 class="modal-title" [class.certificate-title]="item.isCertificate">{{ item.title }}</h1>

            <div class="meta-line">
              <span class="match">98% Match</span>
              <span *ngIf="item.duration">{{ item.duration }}</span>
              <span class="hd" *ngIf="item.client">HD</span>
            </div>

            <p class="subtitle-text" *ngIf="item.subtitle">{{ item.subtitle }}</p>

            <div class="action-btns">
              <button class="btn-play" (click)="onContinueClick($event)">
                <i class="bi bi-play-fill"></i> Continue Watching
              </button>
              <button class="btn-list" *ngIf="!item.isCertificate"><i class="bi bi-plus-lg"></i> My List</button>
            </div>

            <p class="desc-text" [class.certificate-desc]="item.isCertificate">{{ item.fullDescription || item.description }}</p>

            <div class="highlights-section" *ngIf="item.highlights">
              <div class="sub-heading">Key Highlights</div>
              <div class="highlights-grid">
                <div class="h-card" *ngFor="let h of item.highlights; let i = index" [class.show]="currentSlide >= i">
                  <i class="bi bi-check-circle-fill h-icon"></i>
                  <span>{{ h }}</span>
                </div>
              </div>
            </div>

            <div class="footer-meta" *ngIf="item.techStack || item.team || item.client">
              <div class="meta-block" *ngIf="item.techStack">
                <span class="m-label">Genres:</span>
                <span class="m-value">{{ item.techStack.join(' · ') }}</span>
              </div>
              <div class="meta-block" *ngIf="item.team">
                <span class="m-label">Cast:</span>
                <span class="m-value">{{ getTeamNames(item.team) }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="modal-card preview-modal" *ngIf="item && !hasRichContent()">
        <button class="close-btn" (click)="close.emit()"><i class="bi bi-x-lg"></i></button>
        <div class="preview-img-wrap">
          <img [src]="item.image" class="preview-img" alt="Preview" style="object-fit: contain; background: #000; height: 300px;" />
          <div class="preview-grad"></div>
        </div>
        <div class="preview-body">
          <h2 class="preview-title">{{ item.title }}</h2>
          <p class="preview-desc">{{ item.fullDescription || item.description }}</p>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.92); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      padding: 2vh 2vw; animation: fadeIn 0.3s;
    }
    @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }

    .close-btn {
      position: absolute; top: 20px; right: 20px; z-index: 110;
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(20,20,20,0.7); color: #fff;
      border: 2px solid rgba(255,255,255,0.2);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: 0.2s;
    }
    .close-btn:hover { background: #e50914; border-color: #e50914; transform: scale(1.1); }

    .full-modal {
      position: relative; width: 95%; max-width: 1400px; height: 90vh;
      border-radius: 12px; overflow: hidden; background: #141414;
      box-shadow: 0 25px 50px rgba(0,0,0,0.5);
      animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }

    /* Background Layers */
    .bg-layer { position: absolute; inset: 0; z-index: 1; transition: background 0.3s; }
    .bg-img { position: absolute; inset: 0; background-size: cover; background-position: center top; filter: brightness(0.6); }
    .bg-img.contain-bg { background-size: contain; background-repeat: no-repeat; background-position: center; filter: brightness(1); }
    .bg-layer.contain-mode { background: #000; }
    .bg-backdrop { position: absolute; inset: -20px; background-size: cover; filter: blur(40px) brightness(0.3); z-index: 0; }
    .bg-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.5); }
    .bg-video.contain-video { object-fit: contain; filter: brightness(1); }
    .bg-grad { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%), linear-gradient(0deg, #141414 5%, transparent 40%); }

    /* Content */
    .content-overlay { position: absolute; inset: 0; z-index: 10; overflow-y: auto; scrollbar-width: none; }
    .content-overlay::-webkit-scrollbar { display: none; }
    .content-inner { width: 50%; min-height: 100%; padding: 60px 50px; display: flex; flex-direction: column; gap: 20px; justify-content: flex-end; }
    .content-inner.certificate-inner { width: 45%; justify-content: flex-start; padding-top: 80px; }

    .modal-title { font-size: 3.5rem; font-weight: 900; color: #fff; line-height: 1.1; margin: 0; text-transform: uppercase; }
    .modal-title.certificate-title { font-size: 2rem; text-transform: none; }

    .meta-line { display: flex; gap: 15px; align-items: center; color: #bbb; font-weight: 600; }
    .match { color: #46d369; }

    .action-btns { display: flex; gap: 12px; }
    .btn-play { background: #fff; color: #000; border: none; padding: 12px 25px; border-radius: 4px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.1rem; }
    .btn-list { background: rgba(109,109,110,0.7); color: #fff; border: none; padding: 12px 25px; border-radius: 4px; font-weight: 700; cursor: pointer; }

    /* Highlights */
    .highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px; }
    /* UPDATED: h-card needs slightly more gap for the h-icon spacing request */
    .h-card { background: rgba(255,255,255,0.05); padding: 12px; border-radius: 6px; font-size: 0.9rem; color: #ddd; opacity: 0; transform: translateY(10px); transition: 0.4s; display: flex; align-items: flex-start; gap: 14px; /* Increased from 10/12 to 14px for more space */ }
    .h-card.show { opacity: 1; transform: translateY(0); }
    /* Ensure the icon is explicitly green and stands out, with slight top margin alignment */
    .h-icon { color: #46d369 !important; font-size: 1.1rem; margin-top: 2px; flex-shrink: 0; }

    /* MOBILE DESIGN REHAUL - Keep the improved certificate stack */
    @media (max-width: 768px) {
      .modal-overlay { padding: 0; }
      .full-modal { height: 100vh; border-radius: 0; width: 100%; }

      /* Handle Certificate Stack on Mobile */
      .item-is-certificate.full-modal { display: flex; flex-direction: column; overflow-y: auto; }
      
      .item-is-certificate .bg-layer { 
        position: relative; height: 40vh; flex-shrink: 0; 
        background: #000; border-bottom: 1px solid #333;
      }
      .item-is-certificate .bg-img.contain-bg { width: 95%; height: 95%; }
      .item-is-certificate .bg-grad { background: linear-gradient(0deg, #141414, transparent); }
      
      .item-is-certificate .content-overlay { position: relative; height: auto; overflow: visible; }
      .item-is-certificate .content-inner { width: 100%; padding: 30px 20px 60px; align-items: center; text-align: center; }
      .item-is-certificate .modal-title { font-size: 1.8rem; }
      .item-is-certificate .action-btns { width: 100%; }
      /* Button remains as Play but takes prominent color for certificates in mobile stack */
      .item-is-certificate .btn-play { width: 100%; justify-content: center; background: #e50914; color: #fff; }

      /* General Mobile Adjustments */
      .content-inner { width: 100%; padding: 40px 20px; }
      .modal-title { font-size: 2.2rem; }
      .highlights-grid { grid-template-columns: 1fr; }
      .action-btns { flex-direction: column; }
    }
  `]
})
export class DetailModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() item: any;
  @Output() close = new EventEmitter<void>();

  @ViewChild('previewVideo') previewVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('previewAudio') previewAudio!: ElementRef<HTMLAudioElement>;

  isAnimating = true;
  isMuted = true;
  currentSlide = -1;
  private slideTimer: any;

  ngOnInit() {
    this.startSlideshow();
    document.body.style.overflow = 'hidden';
  }

  ngAfterViewInit() {
    if (this.item?.video && this.previewVideo) {
      this.previewVideo.nativeElement.play().catch(() => { });
    }
    if (this.item?.audio && this.previewAudio) {
      this.previewAudio.nativeElement.play().catch(() => { });
    }
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
    document.body.style.overflow = 'auto';
  }

  hasRichContent(): boolean {
    return !!this.item && (!!this.item.highlights || !!this.item.techStack || !!this.item.team || this.item.isCertificate);
  }

  startSlideshow() {
    const total = this.item?.highlights?.length || 0;
    if (total === 0) return;
    this.slideTimer = setInterval(() => {
      this.currentSlide++;
      if (this.currentSlide >= total) clearInterval(this.slideTimer);
    }, 400);
  }

  toggleMute(event: Event) {
    event.stopPropagation();
    this.isMuted = !this.isMuted;
    if (this.previewVideo) this.previewVideo.nativeElement.muted = this.isMuted;
    if (this.previewAudio) {
      this.previewAudio.nativeElement.muted = this.isMuted;
      if (!this.isMuted) this.previewAudio.nativeElement.play().catch(() => { });
    }
  }

  onContinueClick(event: Event) {
    event.stopPropagation();
    if (this.item.link) window.open(this.item.link, '_blank');
  }

  closeOnOverlay(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close.emit();
    }
  }

  getTeamNames(team: any[]): string {
    return team?.map(m => m.name).join(', ') || '';
  }
}
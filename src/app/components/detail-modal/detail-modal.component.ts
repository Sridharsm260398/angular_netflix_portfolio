import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="closeOnOverlay($event)">

      <!-- ========== FULL EXPERIENCE MODAL (Experience, Projects, Skills) ========== -->
      <div class="modal-card full-modal" *ngIf="item && hasRichContent()">

        <!-- Close -->
        <button class="close-btn" (click)="close.emit()"><i class="bi bi-x-lg"></i></button>

        <!-- Background Image/Video Layer -->
        <div class="bg-layer">
          <div class="bg-img" *ngIf="!item.video" [class.ken-burns]="isAnimating" [style.backgroundImage]="'url(' + item.image + ')'"></div>
          
          <!-- Cinematic Video Preview -->
          <video #previewVideo *ngIf="item.video" 
                 class="bg-video" 
                 autoplay 
                 loop 
                 playsinline 
                 [muted]="isMuted"
                 [poster]="item.image">
            <source [src]="item.video" type="video/mp4">
          </video>

          <!-- Background Music -->
          <audio #previewAudio *ngIf="item.audio" 
                 [src]="item.audio" 
                 loop 
                 [muted]="isMuted">
          </audio>

          <div class="bg-grad"></div>
        </div>

        <!-- Mute/Unmute Control (Outside bg-layer for Z-index) -->
        <button class="mute-btn" *ngIf="item.video || item.audio" (click)="toggleMute($event)">
          <i class="bi" [class.bi-volume-up]="!isMuted" [class.bi-volume-mute]="isMuted"></i>
        </button>

        <!-- Left-anchored Content Overlay -->
        <div class="content-overlay">
          <div class="content-inner">
            
            <h1 class="modal-title">{{ item.title }}</h1>

            <div class="meta-line">
              <span class="match">98% Match</span>
              <span *ngIf="item.duration">{{ item.duration }}</span>
              <span class="hd" *ngIf="item.client">HD</span>
            </div>

            <p class="subtitle-text" *ngIf="item.subtitle">{{ item.subtitle }}</p>

            <!-- Action Buttons -->
            <div class="action-btns">
              <button class="btn-play" (click)="onContinueClick($event)"><i class="bi bi-play-fill"></i> Continue Watching</button>
              <button class="btn-list"><i class="bi bi-plus-lg"></i> My List</button>
            </div>

            <!-- Description -->
            <p class="desc-text">{{ item.fullDescription || item.description }}</p>

            <!-- Animated Highlight Points -->
            <div class="highlights-section" *ngIf="item.highlights">
              <div class="sub-heading">Key Highlights</div>
              <div class="highlights-grid">
                <div class="h-card" *ngFor="let h of item.highlights; let i = index"
                     [class.show]="currentSlide >= i">
                  <i class="bi bi-check-circle-fill h-icon"></i>
                  <span>{{ h }}</span>
                </div>
              </div>
            </div>

            <!-- Footer Meta -->
            <div class="footer-meta" *ngIf="item.techStack || item.team || item.client">
              <div class="meta-block" *ngIf="item.techStack">
                <span class="m-label">Genres:</span>
                <span class="m-value">{{ item.techStack.join(' · ') }}</span>
              </div>
              <div class="meta-block" *ngIf="item.team">
                <span class="m-label">Cast:</span>
                <span class="m-value">{{ getTeamNames(item.team) }}</span>
              </div>
              <div class="meta-block" *ngIf="item.client">
                <span class="m-label">Client:</span>
                <span class="m-value">{{ item.client }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- ========== SIMPLE PREVIEW MODAL (Awards, Certifications) ========== -->
      <div class="modal-card preview-modal" *ngIf="item && !hasRichContent()">
        <button class="close-btn" (click)="close.emit()"><i class="bi bi-x-lg"></i></button>
        
        <div class="preview-img-wrap">
          <img [src]="item.image" class="preview-img" alt="Preview" />
          <div class="preview-grad"></div>
        </div>

        <div class="preview-body">
          <h2 class="preview-title">{{ item.title }}</h2>
          <div class="meta-line">
            <span class="match">98% Match</span>
            <span *ngIf="item.duration">{{ item.duration }}</span>
          </div>
          <p class="preview-sub" *ngIf="item.subtitle">{{ item.subtitle }}</p>
          <p class="preview-desc">{{ item.fullDescription || item.description }}</p>
        </div>
      </div>

    </div>
  `,
  styles: [`
    /* ===== OVERLAY ===== */
    .modal-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.88); backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 2vh 2vw; animation: fadeIn 0.25s;
      overflow: hidden;
    }
    @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }

    /* ===== CLOSE BUTTON ===== */
    .close-btn {
      position: absolute; top: 18px; right: 18px; z-index: 100;
      width: 38px; height: 38px; border-radius: 50%;
      background: rgba(20,20,20,0.6); color: #fff;
      border: 2px solid rgba(255,255,255,0.3);
      font-size: 1.1rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .close-btn:hover { background: #e50914; border-color: #e50914; transform: scale(1.1); }

    /* =========================================================
       FULL EXPERIENCE MODAL — Netflix Reference Layout
       ========================================================= */
    .full-modal {
      position: relative; width: 100%; max-width: 1300px; height: 88vh;
      border-radius: 10px; overflow: hidden; background: #141414;
      box-shadow: 0 20px 60px rgba(0,0,0,0.95);
      animation: scaleIn 0.35s cubic-bezier(0.23,1,0.32,1);
    }
    @keyframes scaleIn {
      from { transform: scale(0.96) translateY(20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    /* Background Image/Video */
    .bg-layer { position: absolute; inset: 0; z-index: 1; }
    .bg-img {
      position: absolute; inset: 0;
      background-size: cover; background-position: center top;
      filter: brightness(0.55);
    }
    .bg-img.ken-burns { animation: kb 20s ease-out infinite alternate; }
    @keyframes kb {
      0% { transform: scale(1); }
      100% { transform: scale(1.06) translate(-0.5%, 0.5%); }
    }

    /* Cinematic Video Layer */
    .bg-video {
      position: absolute; inset: 0;
      width: 100%; height: 100%; object-fit: cover;
      filter: brightness(0.45);
    }

    .mute-btn {
      position: absolute; bottom: 30px; right: 50px; z-index: 101; /* High Z-index to stay above content */
      width: 38px; height: 38px; border-radius: 50%;
      background: rgba(0,0,0,0.6); color: #fff;
      border: 1px solid rgba(255,255,255,0.4);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; font-size: 1.2rem; transition: all 0.2s;
    }
    .mute-btn:hover { background: rgba(255,255,255,0.15); transform: scale(1.1); border-color: #fff; }

    /* Gradient: dark left + dark bottom */
    .bg-grad {
      position: absolute; inset: 0;
      background:
        linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 42%, rgba(0,0,0,0.1) 100%),
        linear-gradient(0deg, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.5) 30%, transparent 60%);
    }

    /* Content Overlay — Left Side, Scroll-enabled */
    .content-overlay {
      position: absolute; inset: 0; z-index: 10;
      overflow-y: auto; 
      -ms-overflow-style: none; scrollbar-width: none;
    }
    .content-overlay::-webkit-scrollbar { display: none; }

    .content-inner {
      width: 55%; min-height: 100%; padding: 60px 50px 50px;
      display: flex; flex-direction: column; gap: 18px;
      justify-content: flex-end;
    }

    .modal-title {
      font-size: 4rem; font-weight: 900; margin: 0; line-height: 1.05;
      font-family: 'Outfit', sans-serif; text-transform: uppercase;
      text-shadow: 0 4px 20px rgba(0,0,0,0.9);
      color: #fff;
    }

    .meta-line {
      display: flex; gap: 14px; align-items: center; font-size: 1rem; font-weight: 600; color: #ddd;
    }
    .match { color: #46d369; font-weight: 700; }
    .hd { border: 1px solid rgba(255,255,255,0.5); padding: 1px 7px; border-radius: 3px; font-size: 0.75rem; }

    .subtitle-text {
      font-size: 1.2rem; color: #ccc; margin: 0; font-weight: 500;
    }

    /* Buttons */
    .action-btns { display: flex; gap: 14px; }
    .btn-play {
      background: #fff; color: #000; border: none; padding: 11px 30px;
      border-radius: 4px; font-size: 1.15rem; font-weight: 700;
      cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.2s;
    }
    .btn-play:hover { background: rgba(255,255,255,0.75); }
    .btn-play i { font-size: 1.5rem; }
    .btn-list {
      background: rgba(109,109,110,0.7); color: #fff; border: none;
      padding: 11px 30px; border-radius: 4px; font-size: 1.15rem; font-weight: 700;
      cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.2s;
    }
    .btn-list:hover { background: rgba(109,109,110,0.4); }

    /* Description */
    .desc-text {
      font-size: 1.05rem; line-height: 1.65; color: #e0e0e0; margin: 0;
      text-shadow: 0 1px 4px rgba(0,0,0,0.7);
    }

    /* Highlights Section */
    .sub-heading {
      font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;
      color: #e50914; font-weight: 700; margin-bottom: 12px;
    }
    .highlights-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
    }
    .h-card {
      display: flex; align-items: flex-start; gap: 10px;
      padding: 10px 14px; border-radius: 5px;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);
      font-size: 0.9rem; color: #ddd; line-height: 1.4;
      opacity: 0; transform: translateY(12px);
      transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
    }
    .h-card.show { opacity: 1; transform: translateY(0); }
    .h-icon { color: #46d369; font-size: 0.95rem; margin-top: 2px; flex-shrink: 0; }

    /* Footer Meta */
    .footer-meta {
      display: flex; flex-direction: column; gap: 6px;
      border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px; margin-top: 10px;
    }
    .meta-block { font-size: 0.9rem; }
    .m-label { color: #777; margin-right: 6px; }
    .m-value { color: #bbb; }

    /* =========================================================
       SIMPLE PREVIEW MODAL
       ========================================================= */
    .preview-modal {
      position: relative; width: 100%; max-width: 520px;
      border-radius: 8px; overflow: hidden; background: #181818;
      box-shadow: 0 15px 40px rgba(0,0,0,0.9);
      animation: scaleIn 0.3s cubic-bezier(0.23,1,0.32,1);
    }
    .preview-img-wrap { position: relative; width: 100%; }
    .preview-img { width: 100%; display: block; }
    .preview-grad {
      position: absolute; bottom: 0; left: 0; right: 0; height: 60%;
      background: linear-gradient(to top, #181818, transparent);
    }
    .preview-body { padding: 0 28px 28px; }
    .preview-title {
      font-size: 1.8rem; font-weight: 800; margin: 0 0 10px;
      font-family: 'Outfit', sans-serif; color: #fff;
    }
    .preview-sub {
      font-size: 0.95rem; color: #aaa; margin: 6px 0 10px;
    }
    .preview-desc {
      font-size: 0.95rem; line-height: 1.6; color: #ccc; margin: 0;
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 1100px) {
      .content-inner { width: 65%; }
      .modal-title { font-size: 3.2rem; }
    }
    @media (max-width: 768px) {
      .modal-overlay { padding: 0; }
      .full-modal { height: 100vh; border-radius: 0; }
      .content-inner { width: 100%; padding: 40px 24px 30px; }
      .bg-grad { background: linear-gradient(0deg, rgba(20,20,20,0.98) 30%, rgba(20,20,20,0.7) 60%, transparent 100%); }
      .modal-title { font-size: 2.5rem; }
      .highlights-grid { grid-template-columns: 1fr; }
      .action-btns { flex-direction: column; width: 100%; }
      .btn-play, .btn-list { width: 100%; justify-content: center; }
      .preview-modal { max-width: 100%; border-radius: 0; }
    }
  `]
})
export class DetailModalComponent implements AfterViewInit {
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
    // Disable body scrolling
    document.body.style.overflow = 'hidden';
  }

  ngAfterViewInit() {
    // Attempt to play on load (browsers may require muted for autoplay)
    if (this.item?.video && this.previewVideo) {
      this.previewVideo.nativeElement.play().catch(e => console.log('Autoplay blocked:', e));
    }
    if (this.item?.audio && this.previewAudio) {
      this.previewAudio.nativeElement.play().catch(e => console.log('Audio blocked:', e));
    }
  }

  ngOnDestroy() {
    if (this.slideTimer) clearInterval(this.slideTimer);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  }

  hasRichContent(): boolean {
    return !!this.item && (!!this.item.highlights || !!this.item.techStack || !!this.item.team);
  }

  startSlideshow() {
    this.currentSlide = -1;
    const total = this.item?.highlights?.length || 0;
    if (total === 0) return;

    this.slideTimer = setInterval(() => {
      this.currentSlide++;
      if (this.currentSlide >= total) {
        clearInterval(this.slideTimer);
      }
    }, 350);
  }

  toggleMute(event: Event) {
    event.stopPropagation();
    this.isMuted = !this.isMuted;
    
    // Explicitly update native element properties and call play if unmuting
    if (this.previewVideo) {
      this.previewVideo.nativeElement.muted = this.isMuted;
    }
    
    if (this.previewAudio) {
      this.previewAudio.nativeElement.muted = this.isMuted;
      // If we are unmuting, ensure the audio is playing (some browsers block it until interaction)
      if (!this.isMuted) {
        this.previewAudio.nativeElement.play().catch(e => console.log('Audio play failed on unmute:', e));
      }
    }
  }

  onContinueClick(event: Event) {
    event.stopPropagation();
    // Unmute to let the user hear the high-energy BGM
    this.isMuted = false;
    if (this.previewVideo) this.previewVideo.nativeElement.muted = false;
    if (this.previewAudio) {
      this.previewAudio.nativeElement.muted = false;
      this.previewAudio.nativeElement.play().catch(e => console.log('Audio play failed:', e));
    }
    
    // If there is a project link, open it after a brief delay for effect
    if (this.item.link) {
      setTimeout(() => {
        window.open(this.item.link, '_blank');
      }, 800);
    }
  }

  closeOnOverlay(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close.emit();
    }
  }

  getTeamNames(team: any[]): string {
    if (!team) return '';
    return team.map(m => m.name).join(', ');
  }
}

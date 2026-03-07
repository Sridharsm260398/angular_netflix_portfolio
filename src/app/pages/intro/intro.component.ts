import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  template: `
    <div class="intro-container" (click)="playManual()" (mousemove)="playManual()" (touchstart)="playManual()">
      <div class="netflix-intro">
        <h1 class="logo-text">
          <span class="letter">S</span>
          <span class="letter">R</span>
          <span class="letter">I</span>
          <span class="letter">D</span>
          <span class="letter">H</span>
          <span class="letter">A</span>
          <span class="letter">R</span>
        </h1>
      </div>
    </div>
  `,
  styles: [`
    .intro-container {
      width: 100vw;
      height: 100vh;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
    }

    .logo-text {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .letter {
      color: #E50914;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 8rem;
      font-weight: 900;
      display: inline-block;
      opacity: 0;
      transform: scale(1.5);
      filter: blur(15px);
      animation: netflixLetterIn 1.2s cubic-bezier(0.21, 0.6, 0.35, 1) forwards;
      line-height: 1;
      text-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
    }

    /* Staggered entry - S comes first */
    .letter:nth-child(1) { animation-delay: 0s; }
    .letter:nth-child(2) { animation-delay: 0.8s; }
    .letter:nth-child(3) { animation-delay: 0.9s; }
    .letter:nth-child(4) { animation-delay: 1.0s; }
    .letter:nth-child(5) { animation-delay: 1.1s; }
    .letter:nth-child(6) { animation-delay: 1.2s; }
    .letter:nth-child(7) { animation-delay: 1.3s; }

    @keyframes netflixLetterIn {
      0% {
        opacity: 0;
        filter: blur(15px);
        transform: scale(1.5);
      }
      100% {
        opacity: 1;
        filter: blur(0);
        transform: scale(1);
      }
    }

    @media (max-width: 768px) {
      .letter { font-size: 3.5rem; gap: 8px; }
      .logo-text { gap: 8px; }
    }
  `]
})
export class IntroComponent implements OnInit {
  private hasPlayed = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.playAudio();

    // Navigate to profiles after animation completes
    setTimeout(() => {
      this.router.navigate(['/profiles']);
    }, 4500); 
  }

  playAudio() {
    if (this.hasPlayed) return;
    
    try {
      const audio = new Audio('/netflix-sound.mp3');
      audio.play().then(() => {
        this.hasPlayed = true;
      }).catch(e => {
        // Log quietly as this is expected browser behavior
        console.log('Autoplay waiting for interaction...');
      });
    } catch(err) {
      console.log('Audio init failed', err);
    }
  }

  playManual() {
    this.playAudio();
  }
}

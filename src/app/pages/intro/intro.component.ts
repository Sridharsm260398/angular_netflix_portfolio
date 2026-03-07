import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  template: `
    <div class="intro-container">
      <div class="netflix-logo-anim">
        <!-- SVG or CSS 'N' mimicking Netflix -->
        <div class="letter">S</div>
      </div>
    </div>
  `,
  styles: [`
    .intro-container {
      width: 100vw;
      height: 100vh;
      background-color: var(--netflix-black);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      animation: zoomOut 4s cubic-bezier(0.8, 0, 0.2, 1) forwards;
    }

    .netflix-logo-anim .letter {
      font-size: 15rem;
      font-weight: 800;
      color: var(--netflix-red);
      font-family: 'Helvetica Neue', Arial, sans-serif;
      text-shadow: 0 0 50px rgba(229, 9, 20, 0.8), 0 0 100px rgba(229, 9, 20, 0.4);
      animation: explode 2.5s forwards 1s;
      opacity: 0;
      transform: scale(0.5);
      animation: popIn 0.5s forwards, explode 2s forwards 2.5s;
    }

    @keyframes popIn {
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes explode {
      to {
        transform: scale(10);
        opacity: 0;
        filter: blur(20px);
      }
    }

    @keyframes zoomOut {
      0% {
        background-color: var(--netflix-black);
      }
      100% {
        background-color: transparent;
      }
    }
  `]
})
export class IntroComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Play sound if possible. Browsers block autoplay often, but we try.
    try {
      const audio = new Audio('netflix-sound.mp3');
      audio.play().catch(e => console.log('Audio autoplay blocked', e));
    } catch(err) {}

    // Navigate to profiles after animation completes
    setTimeout(() => {
      this.router.navigate(['/profiles']);
    }, 4000);
  }
}

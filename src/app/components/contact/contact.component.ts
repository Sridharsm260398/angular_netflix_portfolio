import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer-container" id="contact">
      <div class="footer-columns">
        <div class="footer-col">
          <h4>Connect With Sridhar</h4>
          <a [href]="data.linkedin" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
          <a [href]="data.github" target="_blank"><i class="bi bi-github"></i> GitHub</a>
          <a [href]="data.instagram" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>
          <a [href]="data.threads" target="_blank"><i class="bi bi-threads"></i> Threads</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p><i class="bi bi-envelope-fill"></i> {{ data.email }}</p>
          <p><i class="bi bi-telephone-fill"></i> {{ data.phone }}</p>
          <p><i class="bi bi-geo-alt-fill"></i> {{ data.location }}</p>
        </div>
        <div class="footer-col">
          <h4>Current Employer</h4>
          <a [href]="data.sisaUrl" target="_blank" class="sisa-link">
            <span class="sisa-logo">SISA</span>
            <span>sisainfosec.com</span>
          </a>
          <p class="sisa-desc">Forensic Driven Cybersecurity</p>
        </div>
        <div class="footer-col">
          <h4>Declaration</h4>
          <p class="declaration">I hereby declare that the above information is true. I am committed to delivering my best if given an opportunity.</p>
          <p class="signature">— Sridhar S M</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy;2026 Sridhar S M — Crafting Digital Experiences Worth Watching.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer-container {
      padding:10px 20px;
      background-color: var(--netflix-black);
      color: var(--netflix-gray);
      border-top: 1px solid #333;
      margin-top: 3rem;
    }
    .footer-columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
    .footer-col h4 {
      color: #e5e5e5;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    .footer-col a {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--netflix-gray);
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
      transition: color 0.2s;
    }
    .footer-col a:hover { color: var(--netflix-white); }
    .footer-col p {
      margin: 0 0 0.6rem;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .sisa-link {
      display: flex !important;
      align-items: center;
      gap: 0.7rem;
    }
    .sisa-logo {
      background: var(--netflix-red);
      color: white;
      font-weight: 900;
      padding: 4px 10px;
      border-radius: 3px;
      font-size: 0.75rem;
      letter-spacing: 1px;
    }
    .sisa-desc {
      color: #777;
      font-style: italic;
      font-size: 0.8rem !important;
    }

    .declaration {
      font-style: italic;
      font-size: 0.8rem !important;
      color: #666;
      line-height: 1.5;
    }
    .signature {
      font-weight: bold;
      color: #999;
    }

    .footer-bottom {
      border-top: 1px solid #333;
      text-align: center;
      font-size: 0.75rem;
      color: #555;
    }
  `]
})
export class ContactComponent {
  @Input() data: any;
}

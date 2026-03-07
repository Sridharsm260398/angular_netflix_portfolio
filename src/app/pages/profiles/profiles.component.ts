import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profiles-container">
      <h1 class="profiles-title">Who's watching?</h1>
      <div class="profiles-list">
        <div class="profile" (click)="selectProfile('Recruiter')">
          <div class="avatar bg-red"></div>
          <span class="name">Sridhar S M</span>
        </div>
        <div class="profile" (click)="selectProfile('Guest')">
          <div class="avatar bg-blue"></div>
          <span class="name">Guest</span>
        </div>
        <div class="profile" (click)="selectProfile('Friend')">
          <div class="avatar bg-green"></div>
          <span class="name">Friend</span>
        </div>
      </div>
      <button class="manage-btn">Manage Profiles</button>
    </div>
  `,
  styles: [`
    .profiles-container {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--netflix-black);
      color: var(--netflix-gray);
      animation: fadeIn 1s;
    }

    .profiles-title {
      color: var(--netflix-white);
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    .profiles-list {
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .profile:hover {
      transform: scale(1.1);
    }

    .profile:hover .name {
      color: var(--netflix-white);
    }

    .profile:hover .avatar {
      border: 3px solid var(--netflix-white);
    }

    .avatar {
      width: 12vw;
      height: 12vw;
      max-width: 150px;
      max-height: 150px;
      min-width: 80px;
      min-height: 80px;
      border-radius: 4px;
      margin-bottom: 0.5rem;
      border: 3px solid transparent;
      transition: border 0.2s;
      background-size: cover;
      background-position: center;
    }

    .bg-red { background-color: var(--netflix-red); background-image: url('/img/profile-img2.jpg'); }
    .bg-blue { background-color: #0b5ed7; background-image: url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200'); }
    .bg-green { background-color: #198754; background-image: url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200'); }

    .name {
      font-size: 1.2rem;
      transition: color 0.2s;
    }

    .manage-btn {
      background: transparent;
      border: 1px solid var(--netflix-gray);
      color: var(--netflix-gray);
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      transition: color 0.2s, border 0.2s;
    }

    .manage-btn:hover {
      color: var(--netflix-white);
      border-color: var(--netflix-white);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(1.1); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class ProfilesComponent {

  constructor(private router: Router) {}

  selectProfile(name: string) {
    // Store in session storage if needed
    sessionStorage.setItem('profile', name);
    this.router.navigate(['/browse']);
  }
}

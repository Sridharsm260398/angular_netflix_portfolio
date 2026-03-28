import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, PortfolioCategory } from '../../services/portfolio-data.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContentRowComponent } from '../../components/content-row/content-row.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { DetailModalComponent } from '../../components/detail-modal/detail-modal.component';

import { ResumePreviewComponent } from '../../components/resume-preview/resume-preview.component';
import { BackdropComponent } from '../../components/backdrop/backdrop.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, ContentRowComponent, ContactComponent, DetailModalComponent, ResumePreviewComponent, BackdropComponent],
  template: `
    <div class="browse-container">
      <app-backdrop></app-backdrop>
      <app-navbar (viewResume)="showResume = true"></app-navbar>
      
      <main>
        <app-hero [data]="heroData" (viewResume)="showResume = true"></app-hero>
        
        <div class="content-sections">
          <app-content-row 
            *ngFor="let category of categories"
            [id]="'row-' + category.title"
            [title]="category.title"
            [items]="category.items"
            [isRanked]="!!category.isRanked"
            [rowType]="category.title.includes('Education') ? 'wide' : 'standard'"
            [fullStretch]="category.title.includes('Education')"
            (itemClicked)="openModal($event)">
          </app-content-row>
        </div>
      </main>

      <app-contact [data]="contactData" id="contact"></app-contact>

      <!-- Netflix Detail Modal -->
      <app-detail-modal 
        *ngIf="selectedItem"
        [item]="selectedItem"
        (close)="closeModal()">
      </app-detail-modal>

      <!-- Resume Preview Modal -->
      <app-resume-preview
        *ngIf="showResume"
        (close)="showResume = false">
      </app-resume-preview>
    </div>
  `,
  styles: [`
    .browse-container {
      background-color: transparent;
      min-height: 100vh;
      color: var(--netflix-white);
      animation: fadeIn 0.8s ease-in-out;
      position: relative;
    }
    .content-sections {
      position: relative;
      z-index: 10;
      margin-top: -8vw;
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `]
})
export class BrowseComponent implements OnInit {
  heroData: any;
  contactData: any;
  categories: PortfolioCategory[] = [];
  selectedItem: any = null;
  public showResume = false;

  constructor(private dataService: PortfolioDataService) { }

  ngOnInit() {
    this.heroData = this.dataService.getHeroData();
    this.contactData = this.dataService.getContactData();
    this.categories = this.dataService.getCategories();
  }

  openModal(item: any) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden'; // Lock scroll
  }

  closeModal() {
    this.selectedItem = null;
    document.body.style.overflow = ''; // Unlock scroll
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, PortfolioCategory } from '../../services/portfolio-data.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContentRowComponent } from '../../components/content-row/content-row.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { DetailModalComponent } from '../../components/detail-modal/detail-modal.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, ContentRowComponent, ContactComponent, DetailModalComponent],
  template: `
    <div class="browse-container">
      <app-navbar></app-navbar>
      
      <main>
        <app-hero [data]="heroData"></app-hero>
        
        <div class="content-sections">
          <app-content-row 
            *ngFor="let category of categories"
            [id]="'row-' + category.title"
            [title]="category.title"
            [items]="category.items"
            [isRanked]="!!category.isRanked"
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
    </div>
  `,
  styles: [`
    .browse-container {
      background-color: var(--netflix-black);
      min-height: 100vh;
      color: var(--netflix-white);
      animation: fadeIn 0.8s ease-in-out;
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

  constructor(private dataService: PortfolioDataService) {}

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

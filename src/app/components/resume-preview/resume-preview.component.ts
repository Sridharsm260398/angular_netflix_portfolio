import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="close.emit()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="close.emit()">
          <i class="bi bi-x-lg"></i>
        </button>
        
        <div class="resume-paper">
          <header>
            <h1>SRIDHAR S M</h1>
            <p class="subtitle">Software Developer</p>
            <div class="contact-info">
              <span><i class="bi bi-geo-alt"></i> Bengaluru, KA, India</span>
              <span><i class="bi bi-telephone"></i> +91 9686802325</span>
              <span><i class="bi bi-envelope"></i> sridharsm26&#64;gmail.com</span>
            </div>
            <div class="links">
              <a href="https://linkedin.com/in/sridhar-s-m-b64274291" target="_blank">LinkedIn</a> | 
              <a href="https://github.com/Sridharsm260398" target="_blank">GitHub</a>
            </div>
          </header>

          <section>
            <h2>Professional Summary</h2>
            <p>Results-driven Software Developer with 4+ years of experience in designing and delivering responsive, high-performance UI components using Angular. Skilled in developing real-time payment solutions and cybersecurity dashboard components, with a focus on scalability, accessibility (WCAG compliance), and RESTful API integration. Adept at cloud-based deployments and optimizing UI performance to enhance user experience.</p>
          </section>

          <section>
            <h2>Technical Skills</h2>
            <div class="skills-grid">
              <div><strong>Frontend:</strong> JavaScript (ES6+), TypeScript, Angular 16, HTML5, CSS3, Bootstrap, Angular Material</div>
              <div><strong>Backend:</strong> Node.js, Express.js, REST APIs</div>
              <div><strong>Databases:</strong> PostgreSQL, DB2, MongoDB</div>
              <div><strong>Deployment:</strong> Azure, Render, Vercel, JBOSS</div>
              <div><strong>Tools:</strong> Git, Postman, Swagger UI, Jira, VS Code</div>
              <div><strong>Testing:</strong> DevTools, SoapUI</div>
            </div>
          </section>

          <section>
            <h2>Work Experience</h2>
            <div class="exp-item">
              <div class="exp-header">
                <strong>Software Engineer | SISA - Forensic Driven Cybersecurity</strong>
                <span>Feb 2025 – Present</span>
              </div>
              <ul>
                <li>Built Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts.</li>
                <li>Integrated REST APIs to display incident timelines and detection data.</li>
                <li>Improved UI accessibility and usability for security analysts.</li>
              </ul>
            </div>
            <div class="exp-item">
              <div class="exp-header">
                <strong>System Engineer | Tata Consultancy Services Pvt Ltd</strong>
                <span>Jan 2024 – Feb 2025</span>
              </div>
              <ul>
                <li>Developed Angular apps for the TCS BaNCS Payments platform.</li>
                <li>Deployed and managed environments (DEV to PROD) on Azure.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Education</h2>
            <div class="exp-item">
              <div class="exp-header">
                <strong>B.E. in Electronics and Communication</strong>
                <span>2016 – 2020</span>
              </div>
              <p>SJC Institute of Technology, VTU, Bengaluru, India | CGPA: 7.66</p>
            </div>
          </section>
        </div>
        
        <div class="actions">
          <button class="download-btn" (click)="downloadResume()">
            <i class="bi bi-download"></i> Download PDF
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      z-index: 3000;
      display: flex;
      justify-content: center;
      padding: 2rem;
      overflow-y: auto;
      backdrop-filter: blur(5px);
    }
    .modal-content {
      background: #fff;
      color: #333;
      width: 100%;
      max-width: 850px;
      position: relative;
      border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
    }
    .close-btn {
      position: absolute;
      top: -40px;
      right: -40px;
      background: none;
      border: none;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
    }
    .resume-paper {
      padding: 3rem;
      overflow-y: auto;
    }
    header {
      text-align: center;
      border-bottom: 2px solid #e50914;
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    header h1 { margin: 0; color: #000; font-size: 2.5rem; }
    .subtitle { font-size: 1.2rem; color: #666; margin: 5px 0; font-weight: 600; }
    .contact-info { display: flex; justify-content: center; gap: 20px; font-size: 0.9rem; color: #555; margin-top: 10px; }
    .links a { color: #e50914; text-decoration: none; font-weight: 600; }
    
    section { margin-bottom: 2rem; }
    h2 { 
      color: #e50914; 
      font-size: 1.3rem; 
      border-bottom: 1px solid #eee; 
      padding-bottom: 5px;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .skills-grid { 
      display: grid; 
      grid-template-columns: 1fr; 
      gap: 10px; 
      font-size: 0.95rem;
    }
    .exp-item { margin-bottom: 1.5rem; }
    .exp-header { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 1rem; }
    ul { padding-left: 20px; margin: 8px 0; }
    li { margin-bottom: 5px; font-size: 0.95rem; line-height: 1.4; }

    .actions {
      padding: 1.5rem;
      background: #f8f8f8;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      display: flex;
      justify-content: center;
    }
    .download-btn {
      background: #e50914;
      color: #fff;
      border: none;
      padding: 10px 30px;
      border-radius: 4px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.2s;
    }
    .download-btn:hover { background: #b2070f; }

    @media (max-width: 900px) {
      .modal-overlay { padding: 0; }
      .modal-content { 
        width: 100%; 
        max-width: 100%; 
        height: 100%; 
        border-radius: 0; 
      }
      .close-btn { 
        top: 15px; 
        right: 15px; 
        color: #333; 
        font-size: 1.5rem; 
        z-index: 100;
        background: rgba(255,255,255,0.8);
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .resume-paper { padding: 1.5rem; }
      .exp-header { flex-direction: column; gap: 5px; }
      .contact-info { flex-direction: column; align-items: center; gap: 5px; }
      header h1 { font-size: 1.8rem; }
    }
  `]
})
export class ResumePreviewComponent {
  @Output() close = new EventEmitter<void>();

  downloadResume() {
    const a = document.createElement('a');
    a.href = '/sridhar_resume.pdf';
    a.download = 'Sridhar_S_M_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

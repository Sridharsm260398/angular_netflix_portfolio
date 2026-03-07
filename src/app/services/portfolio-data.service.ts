import { Injectable } from '@angular/core';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
  imagePosition?: string;
  fullDescription?: string;
  techStack?: string[];
  highlights?: string[];
  team?: TeamMember[];
  duration?: string;
  client?: string;
}

export interface PortfolioCategory {
  title: string;
  isRanked?: boolean;
  items: PortfolioItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getHeroData() {
    return {
      title: 'Sridhar S M',
      roles: ['Software Developer', 'Angular Expert', 'Full Stack Developer'],
      bio: `Results-driven Software Developer with 4+ years of experience designing and delivering responsive, high-performance UI components using Angular. Skilled in developing real-time payment solutions and cybersecurity dashboard components, with a focus on scalability, accessibility (WCAG compliance), and RESTful API integration.`,
      image: '/img/profile-img2.jpg',
      video: 'https://cdn.pixabay.com/video/2020/05/11/38608-418047021_large.mp4',
      resumeLink: '/sridhar_resume.pdf',
      location: 'Bengaluru, KA, India',
      experience: '4+ Years'
    };
  }

  getTechnicalSkills() {
    return [
      { category: 'Frontend', skills: 'JavaScript (ES6+), TypeScript, Angular 16, HTML5, CSS3, Bootstrap, Angular Material' },
      { category: 'Backend', skills: 'Node.js, Express.js, REST APIs' },
      { category: 'Databases', skills: 'PostgreSQL, DB2, MongoDB' },
      { category: 'Deployment', skills: 'Azure, Render, Vercel, JBOSS' },
      { category: 'Tools', skills: 'Git, Postman, Swagger UI, Jira, VS Code' },
      { category: 'Testing', skills: 'DevTools, SoapUI' },
      { category: 'Accessibility', skills: 'WCAG 2.1' },
      { category: 'Methodologies', skills: 'Agile, Scrum, Waterfall' }
    ];
  }

  getContactData() {
    return {
      email: 'sridharsm26@gmail.com',
      phone: '+91-9686802325',
      location: 'Bengaluru, KA, India',
      linkedin: 'https://linkedin.com/in/sridhar-s-m-b64274291',
      github: 'https://github.com/Sridharsm260398',
      threads: 'https://www.threads.net/@sridhar_gowda._',
      instagram: 'https://www.instagram.com/sridhar_gowda._',
      sisaUrl: 'https://www.sisainfosec.com/login/#'
    };
  }

  getCategories(): PortfolioCategory[] {
    return [
      {
        title: 'Trending Now: Work Experience',
        isRanked: true,
        items: [
          {
            id: 1,
            title: 'Software Engineer',
            subtitle: 'SISA - Forensic Driven Cybersecurity',
            description: 'Building Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts.',
            image: '/img/sisa_compay.png',
            link: 'https://www.sisainfosec.com/login/#',
            duration: 'Feb 2025 – Present',
            client: 'SISA Information Security',
            fullDescription: 'Built Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts. Integrated REST APIs to display incident timelines and detection data. Improved UI accessibility and usability for security analysts working on forensic-driven cybersecurity solutions.',
            techStack: ['Angular 16', 'TypeScript', 'REST APIs', '.NET Backend', 'WCAG 2.1'],
            highlights: [
              'Built Angular components for ProACT MXDR to visualize threat intelligence and real-time alerts',
              'Integrated REST APIs to display incident timelines and detection data',
              'Improved UI accessibility and usability for security analysts'
            ],
            // team: [
            //   { name: 'Ravi Kumar', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
            //   { name: 'Priya Sharma', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
            //   { name: 'Arjun Nair', role: 'QA Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
            //   { name: 'Sneha Patil', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' }
            // ]
          },
          {
            id: 2,
            title: 'System Engineer',
            subtitle: 'TCS - Central Trust Bank (CTB)',
            description: 'Developed Angular apps for the TCS BaNCS Payments platform. Deployed Azure environments.',    
            image: '/img/tcs_2.png',
            duration: 'Jan 2024 – Feb 2025',
            client: 'Central Trust Bank (US Client)',
            fullDescription: 'Developed Angular apps for the TCS BaNCS Payments platform. Deployed and managed environments (DEV to PROD) on Azure. Built UI for FedNow instant payment features using Angular. Improved data flow using asynchronous API consumption. Reduced UI transaction times by 10%.',
            techStack: ['Angular 16', 'TypeScript', 'Azure', 'Node.js', 'REST APIs'],
            highlights: [
              'Built UI for FedNow instant payment features using Angular',
              'Improved data flow using asynchronous API consumption',
              'Reduced UI transaction times by 10%',
              'Deployed and managed environments (DEV to PROD) on Azure'
            ],
            // team: [
            //   { name: 'Vikram Singh', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
            //   { name: 'Meera Joshi', role: 'Angular Dev', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
            //   { name: 'Karthik R', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80' },
            //   { name: 'Ananya Das', role: 'Tester', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' },
            //   { name: 'Rohan Mehta', role: 'DevOps', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80' }
            // ]
          },
          {
            id: 3,
            title: 'Assistant System Engineer',
            subtitle: 'TCS - CIBC Payments',
            description: 'Created real-time payment UI with Angular and Node.js. Applied lazy loading for 20% performance gain.',
            image: '/img/cibc.png',
            duration: 'Dec 2021 – Dec 2023',
            client: 'Canadian Imperial Bank of Commerce (Canada)',
            fullDescription: 'Created real-time payment UI with Angular and Node.js. Applied lazy loading and code splitting for 20% performance gain. Improved accessibility and cross-device responsiveness. Developed reusable UI modules using Angular 16. Assisted in Node.js-based authentication flows. Participated in Agile sprints and maintained code quality.',
            techStack: ['Angular 16', 'Node.js', 'TypeScript', 'Bootstrap', 'WCAG'],
            highlights: [
              'Created real-time payment UI with Angular and Node.js',
              'Applied lazy loading and code splitting for 20% performance gain',
              'Improved accessibility and cross-device responsiveness',
              'Developed reusable UI modules using Angular 16',
              'Assisted in Node.js-based authentication flows'
            ],
            // team: [
            //   { name: 'Deepak Verma', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
            //   { name: 'Nisha Gupta', role: 'Sr. Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
            //   { name: 'Suresh K', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&q=80' }
            // ]
          }
        ]
      },
      {
        title: 'Because You Watched: Project Experience',
        items: [
          {
            id: 4,
            title: 'ProACT MXDR',
            subtitle: 'SISA Internal Project • Feb 2024 – Present',
            description: 'Designed alert dashboards, incident views, and data tables in Angular 16 for cybersecurity threat management.',
            image: '/img/proact_mxdr.png',
            imagePosition: 'top',
            link: 'https://www.sisainfosec.com/login/#',
            fullDescription: 'ProACT MXDR is SISA\'s flagship Managed Extended Detection and Response platform. Designed alert dashboards, incident views, and data tables in Angular 16. Consumed threat data APIs and handled real-time data rendering. Enhanced accessibility using WCAG standards to ensure all security analysts can use the platform efficiently.',
            techStack: ['Angular 16', 'TypeScript', '.NET APIs', 'WCAG 2.1', 'Real-time WebSockets'],
            highlights: [
              'Designed alert dashboards, incident views, and data tables in Angular 16',
              'Consumed threat data APIs and handled real-time data rendering',
              'Enhanced accessibility using WCAG standards',
              'Built interactive data visualizations for threat intelligence'
            ],
            // team: [
            //   { name: 'Ravi Kumar', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
            //   { name: 'Priya Sharma', role: 'Backend Dev', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
            //   { name: 'Arjun Nair', role: 'QA Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' }
            // ]
          },
          {
            id: 5,
            title: 'Central Trust Bank (CTB)',
            subtitle: 'TCS • US Client • Apr 2023 – Jan 2025',
            description: 'Built UI for FedNow instant payment features using Angular. Reduced UI transaction times by 10%.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
            fullDescription: 'Central Trust Bank is a major US banking client. Built UI for FedNow instant payment features using Angular. Improved data flow using asynchronous API consumption. Reduced UI transaction times by 10% through optimized rendering and state management.',
            techStack: ['Angular 16', 'TypeScript', 'Azure', 'FedNow APIs', 'Node.js'],
            highlights: [
              'Built UI for FedNow instant payment features',
              'Improved data flow using asynchronous API consumption',
              'Reduced UI transaction times by 10%'
            ],
            // team: [
            //   { name: 'Vikram Singh', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
            //   { name: 'Meera Joshi', role: 'Angular Dev', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' }
            // ]
          },
          {
            id: 6,
            title: 'CIBC Payments',
            subtitle: 'TCS • Canada Client • Dec 2021 – Apr 2023',
            description: 'Created real-time payment UI with Angular and Node.js. Applied lazy loading for 20% performance gain.',
            image: '/img/cibc_2.png',
            fullDescription: 'Canadian Imperial Bank of Commerce (CIBC) is a leading Canadian bank. Created real-time payment UI with Angular and Node.js. Applied lazy loading and code splitting for 20% performance gain. Improved accessibility and cross-device responsiveness.',
            techStack: ['Angular 16', 'Node.js', 'TypeScript', 'Bootstrap', 'WCAG'],
            highlights: [
              'Created real-time payment UI with Angular and Node.js',
              'Applied lazy loading and code splitting for 20% performance gain',
              'Improved accessibility and cross-device responsiveness'
            ],
            // team: [
            //   { name: 'Deepak Verma', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
            //   { name: 'Nisha Gupta', role: 'Sr. Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' }
            // ]
          },
          {
            id: 7,
            title: 'S-Cart E-Commerce',
            subtitle: 'Personal Full Stack Project',
            description: 'A comprehensive e-commerce application with Angular frontend and Node.js/PostgreSQL backend.',
            link: 'https://webapps-cart.web.app/',
            image: '/img/unsplash/img-1.jpg',
            fullDescription: 'S-Cart is a personal full-stack e-commerce application demonstrating proficiency in both frontend and backend development. Features include product browsing, cart management, user authentication, and order processing.',
            techStack: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase Hosting'],
            highlights: [
              'Full-stack application with Angular frontend',
              'RESTful API backend with Node.js and Express.js',
              'PostgreSQL database for data persistence',
              'Deployed on Firebase and Render'
            ]
          },
          {
            id: 8,
            title: 'S-Cart Swagger API',
            subtitle: 'RESTful API Documentation',
            description: 'Backend API fully documented with Swagger UI for the S-Cart application.',
            link: 'https://sridhars-webapp-restapi-postgres-v2.onrender.com/api-docs/',
            image: '/img/unsplash/img-2.jpg',
            fullDescription: 'Comprehensive RESTful API service for S-Cart, fully documented using Swagger UI. Provides endpoints for product management, user authentication, order processing, and more.',
            techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Swagger UI', 'Render'],
            highlights: [
              'Full REST API documentation with Swagger',
              'Authentication and authorization endpoints',
              'Product and order management APIs'
            ]
          }
        ]
      },
      {
        title: 'Blockbuster Skills & Technologies',
        items: [
          {
            id: 9,
            title: 'Frontend Mastery',
            subtitle: 'JavaScript (ES6+), TypeScript, Angular 16, HTML5, CSS3',
            description: 'Expert-level proficiency in modern frontend frameworks and core web technologies.',
            image: '/img/unsplash/img-3.jpg',
            fullDescription: 'Deep expertise in building enterprise-grade Angular applications with TypeScript. Proficient in modern JavaScript (ES6+), responsive HTML5/CSS3 layouts, and component-based architecture.',
            techStack: ['Angular 16', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'Angular Material']
          },
          {
            id: 10,
            title: 'Backend & Databases',
            subtitle: 'Node.js, Express.js, PostgreSQL, DB2, MongoDB',
            description: 'Full-stack capabilities with server-side and database expertise.',
            image: '/img/unsplash/img-4.jpg',
            fullDescription: 'Experienced in building scalable backend services using Node.js and Express.js. Worked with PostgreSQL, DB2, and MongoDB databases for data persistence in financial and cybersecurity applications.',
            techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'DB2', 'MongoDB', 'REST APIs']
          },
          {
            id: 11,
            title: 'Cloud & DevOps',
            subtitle: 'Azure,AWS, Render, Vercel, JBOSS',
            description: 'Cloud-based deployments and environment management across platforms.',
            image: '/img/unsplash/img-5.jpg',
            fullDescription: 'Deployed and managed enterprise applications across Azure cloud environments. Experience from DEV to PROD pipeline management. Also deployed personal projects using Render, Vercel, and Firebase.',
            techStack: ['Azure', 'Render', 'Vercel', 'JBOSS', 'Firebase', 'CI/CD']
          },
          {
            id: 12,
            title: 'Testing & Quality',
            subtitle: 'DevTools, SoapUI, WCAG 2.1, Agile/Scrum',
            description: 'Ensuring code quality, accessibility compliance, and agile development practices.',
            image: '/img/unsplash/img-6.jpg',
            fullDescription: 'Committed to code quality through thorough testing with DevTools and SoapUI. WCAG 2.1 accessibility champion. Strong advocate for Agile methodologies including Scrum and Waterfall.',
            techStack: ['DevTools', 'SoapUI', 'WCAG 2.1', 'Agile', 'Scrum', 'Waterfall', 'Jira']
          }
        ]
      },
      {
        title: 'New Releases: Certifications',
        items: [
          {
            id: 13,
            title: 'Angular – The Complete Guide',
            subtitle: 'Udemy Certification',
            description: 'Comprehensive mastery of Angular framework, from basics to advanced concepts.',
            image: '/img/unsplash/img-7.jpg'
          },
          {
            id: 14,
            title: 'Master Git and GitHub',
            subtitle: 'Udemy Certification',
            description: 'Version control mastery including branching, merging, and collaborative workflows.',
            image: '/img/unsplash/img-8.jpg'
          },
          {
            id: 15,
            title: 'ES6 JavaScript',
            subtitle: 'Udemy Certification',
            description: 'Modern JavaScript features including arrow functions, promises, async/await, and modules.',
            image: '/img/unsplash/img-9.jpg'
          },
          {
            id: 16,
            title: 'Advanced JavaScript',
            subtitle: 'Udemy Certification',
            description: 'Deep dive into closures, prototypes, event loops, and performance optimization.',
            image: '/img/unsplash/img-10.jpg'
          },
          {
            id: 17,
            title: 'HTML5 Essentials',
            subtitle: 'Udemy Certification',
            description: 'Semantic HTML5, multimedia APIs, and modern web standards.',
            image: '/img/unsplash/img-11.jpg'
          }
        ]
      },
      {
        title: 'Award-Winning: Education & Achievements',
        items: [
          {
            id: 18,
            title: 'B.E. in Electronics & Communication',
            subtitle: 'SJC Institute of Technology, VTU (2016 – 2020)',
            description: 'Graduated with CGPA 7.66. Strong foundation in engineering principles.',
            image: '/img/sjcit.png',
            fullDescription: 'Bachelor of Engineering in Electronics and Communication from SJC Institute of Technology, affiliated to Visvesvaraya Technological University (VTU), Bengaluru. Graduated with a CGPA of 7.66.'
          },
          {
            id: 19,
            title: 'TCS "Star Performer" Award',
            subtitle: 'Innovation & Excellence Recognition',
            description: 'Recognized for outstanding innovation and consistent delivery across multiple projects.',
            image: '/img/unsplash/award.jpg',
            fullDescription: 'Awarded TCS "Star Performer" recognition for innovation and consistent high-quality delivery across multiple banking and payment projects.'
          },
          {
            id: 20,
            title: 'Languages',
            subtitle: 'English, Kannada, Telugu',
            description: 'Multilingual communicator adept at working with diverse global teams.',
            image: '/img/unsplash/languages.jpg'
          }
        ]
      }
    ];
  }
}

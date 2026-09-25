export const profile = {
  name: 'T V Jeeva Anandhan',
  initials: 'TVJA',
  role: 'Software Engineer — Cross-Platform Mobile & Full-Stack Development',
  location: 'Chennai, Tamil Nadu 600124',
  phone: '+91 7904551480',
  email: 'jeevaanandhan503@gmail.com',
  linkedin: 'linkedin.com/in/jeeva-anandhan-535768289',
  linkedinUrl: 'https://linkedin.com/in/jeeva-anandhan-535768289',
  summary:
    "Full-stack and mobile engineer with 1+ year of hands-on experience designing and shipping cross-platform applications in Flutter and scalable backend services in Node.js, ASP.NET Core, C# and Django, across Android, iOS and web. Led a client-facing platform end-to-end — from architecture through production deployment — including a dynamic app-generation engine used by external clients and an AI-enabled medical diagnostics platform built for a government screening initiative. Comfortable with RESTful API design, real-time data sync and database design across PostgreSQL, MySQL and MongoDB, in Agile Scrum, Kanban and Waterfall settings.",
  photo: '/profile.jpg',
  stats: [
    { numeric: 1, suffix: '+', label: 'Years shipping production software' },
    { numeric: 2, suffix: '', label: 'End-to-end platforms led' },
    { numeric: 6, suffix: '+', label: 'Client & internal projects delivered' },
    { text: 'AWS', label: 'Certified Cloud Practitioner' },
  ],
}

export const skillGroups = [
  {
    label: 'Cross-Platform & Mobile',
    items: ['Flutter (Android & iOS)', 'Responsive UI development', 'App packaging & deployment'],
  },
  {
    label: 'Languages',
    items: ['C#', 'Dart', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Runtimes',
    items: ['ASP.NET / .NET Core', 'Blazor', 'Node.js', 'React.js', 'Django', 'RESTful APIs'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Tools & IDEs',
    items: ['Visual Studio 2019/2022', 'VS Code', 'Git', 'Postman'],
  },
  {
    label: 'Cloud & Methodology',
    items: ['AWS EC2', 'Agile Scrum', 'Kanban', 'Waterfall'],
  },
]

export const experience = [
  {
    period: '2025 — Present',
    role: 'Project Lead',
    company: 'JBB Softech Pvt Ltd',
    summary:
      'Leading APPIFYOURS, a web-to-app platform, and an AI-enabled breast cancer screening tool built for a Tamil Nadu Government initiative.',
    bullets: [
      'Architected APPIFYOURS end-to-end on Flutter, Node.js and MongoDB, letting clients turn web content and branding into production-ready Android and iOS apps with no code.',
      'Designed the dynamic customization engine that converts client web content into deployable Flutter builds, cutting manual app-build effort for the team.',
      'Built RESTful APIs for real-time sync between the web dashboard and every generated app, keeping the client and mobile experience consistent.',
      'Delivered an AI-enabled diagnostic platform for early breast cancer screening from ultrasound images, covering intake through automated reporting, with a concurrent batch-upload pipeline on AWS EC2.',
      'Set milestones and scope with cross-functional teams under Agile practices to keep platform features and client builds on schedule.',
    ],
    tech: ['Flutter', 'Node.js', 'MongoDB', 'React.js', 'Django', 'PostgreSQL', 'AWS'],
  },
  {
    period: 'Feb 2024 — Dec 2024',
    role: 'Software Developer',
    company: 'AI Lab Technology',
    summary:
      'Built a document processing system, a payroll-facing timesheet platform, and ERP modules for procurement and order tracking.',
    bullets: [
      'Built a C# back-end service for accurate document processing and format conversion, paired with an HTML/CSS review interface.',
      'Redesigned the timesheet system\'s data flow on a two-tier PostgreSQL architecture, adding grid views and file uploads for payroll accuracy.',
      'Shipped admin and director dashboards surfacing monthly payroll and employee insights.',
      'Implemented and customized ERP modules for sales, purchasing and vendor management, and trained end users on the new workflows.',
    ],
    tech: ['C#', '.NET', 'PostgreSQL', 'HTML/CSS'],
  },
  {
    period: 'Jun 2023 — Jul 2023',
    role: 'Software Development Intern',
    company: 'Ek Software Solutions',
    summary: 'Developed and maintained a retail management system on .NET.',
    bullets: ['Developed and managed a retail management system using .NET technologies.'],
    tech: ['.NET', 'C#'],
  },
  {
    period: 'May 2022 — Jun 2022',
    role: 'Web Development Intern',
    company: 'Tech Volt Software Pvt Ltd',
    summary: 'First production exposure to .NET web development.',
    bullets: ['Assisted with web development tasks and gained hands-on exposure to .NET technologies in a production environment.'],
    tech: ['.NET', 'Web'],
  },
]

export const featuredProjects = [
  {
    tag: 'Platform · Led architecture',
    title: 'APPIFYOURS',
    subtitle: 'Web-to-app generation platform',
    description:
      'A platform that turns a client\'s web content and branding into production-ready Android and iOS apps without writing code — built on a customization engine I designed from the ground up.',
    points: [
      'Flutter engine converts branding + content into deployable mobile builds',
      'Node.js + MongoDB backend with real-time dashboard-to-app sync',
      'Reduced manual build effort per client app',
    ],
    tech: ['Flutter', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    tag: 'Healthcare · Government initiative',
    title: 'Breast Cancer Detection AI',
    subtitle: 'AI-enabled diagnostic platform',
    description:
      'An AI-assisted screening platform for early breast cancer detection from ultrasound images, delivered for a Tamil Nadu Government screening initiative — covering intake through automated reporting.',
    points: [
      'Full patient workflow from case intake to automated report generation',
      'Secure medical data handling with a concurrent batch scan-upload pipeline',
      'Deployed on scalable AWS EC2 infrastructure',
    ],
    tech: ['React.js', 'Node.js', 'Django', 'PostgreSQL', 'AWS'],
  },
]

export const otherProjects = [
  {
    title: 'Document AI System',
    description: 'C# back-end for document processing and format conversion, with an HTML/CSS review interface.',
    tech: ['C#', 'HTML/CSS'],
  },
  {
    title: 'Timesheet Management System',
    description: 'Two-tier PostgreSQL system with grid views, file uploads, and payroll dashboards for admins and directors.',
    tech: ['PostgreSQL', '.NET'],
  },
  {
    title: 'ERP System',
    description: 'Sales, purchase and vendor portal modules streamlining procurement, order tracking and invoicing.',
    tech: ['.NET', 'SQL'],
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'Freelance build with Flutter front end and Node.js backend — catalog, cart, checkout and order tracking via REST APIs.',
    tech: ['Flutter', 'Node.js'],
  },
  {
    title: 'Gym & Fitness Studio Website',
    description: 'Responsive site for a fitness business covering membership plans, class schedules and inquiry forms.',
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Movie Reviews Using ML',
    description: 'NLP and MLP models predicting viewer emotion from reviews, driving personalized counseling messages.',
    tech: ['NLP', 'MLP', 'Machine Learning'],
  },
]

export const education = {
  degree: 'Bachelor of Technology — Computer Science & Engineering',
  school: 'Periyar Maniammai Institute of Science & Technology (PMIST)',
  period: '2020 — 2024',
  detail: 'CGPA 7.46',
}

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'ICT Academy', date: 'October 2022' },
  { name: '.NET with SQL (VAC)', issuer: 'PMIST', date: 'March 2022' },
  { name: 'Power BI', issuer: 'PMIST', date: 'August 2023' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

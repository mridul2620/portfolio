

import image from "next/image"

export const TECH_TAGS = [
  'React', 'Next.js', 'Node.js', 'TypeScript',
  'Java', 'Python', 'MongoDB', 'Docker', 'AWS',
] as const

export const INFO_CARDS = [
  { label: 'PROJECTS', value: '4 Enterprise Applications', subtitle: 'Production Ready' },
  { label: 'PLATFORMS', value: 'Web & Mobile', subtitle: 'Cross Platform' },
  { label: 'EXPERTISE', value: 'Full-Stack Development', subtitle: 'Frontend to Backend' },
  { label: 'FOCUS', value: 'AI-Driven Products', subtitle: 'Automation & Intelligence' },
] as const

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    className: 'md:col-span-2 lg:col-span-2',
    icon: 'Code',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    className: 'md:col-span-1 lg:col-span-1',
    icon: 'Database',
    skills: ['Java', 'Node.js', 'Express.js', 'Python', 'Spring Boot', 'FastAPI'],
  },
  {
    title: 'Cloud & DevOps',
    className: 'md:col-span-1 lg:col-span-1',
    icon: 'Cloud',
    skills: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'Git & GitHub'],
  },
  {
    title: 'Architecture & Data',
    className: 'md:col-span-2 lg:col-span-2',
    icon: 'Smartphone',
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'RESTful APIs', 'Microservices', 'MVC / MVVM', 'Agile (Scrum)'],
  },
] as const

export const EXPERIENCES = [
  {
    title: 'Programmer Analyst',
    company: 'Jaguar Land Rover',
    location: 'Gaydon, UK',
    period: 'November 2023 - Present',
    description:
      'Optimized and deployed high-performance Java microservices and scalable web applications with cloud solutions, improving UX, speed, and delivery efficiency',
    technologies: [
      'React', 'Java', 'Next.js', 'Node.js', 'TypeScript', 'Express.js',
      'AWS', 'MongoDB', 'Python', 'RESTful APIs', 'CI/CD', 'Docker', 'GitHub', 'Postman',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: 'Safety Circle Pvt Ltd',
    location: 'Chandigarh, India',
    period: 'March 2023 - November 2023',
    description:
      'Developed and integrated cross-platform Flutter applications and web applications with robust architectures, improving performance, maintainability, and user experience.',
    technologies: [
      'Flutter', 'Dart', 'React', 'Java', 'Next.js', 'Node.js', 'TypeScript',
      'Express.js', 'Figma', 'MongoDB', 'RESTful APIs', 'CI/CD', 'GitHub', 'Postman',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Research Designs and Standard Organization - Indian Railways',
    location: 'Lucknow, India',
    period: 'August 2022 - March 2023',
    description:
      'Contributed to feature development and learned industry best practices in agile environment.',
    technologies: [
      'Flutter', 'Dart', 'Java', 'Python', 'SQL', 'Git', 'GitHub',
      'Postman', 'Django', 'RESTful APIs', 'CI/CD',
    ],
  },
] as const

export type ProjectCategory = 'fullstack' | 'backend' | 'frontend' | 'research'

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  problem: string
  solution: string
  impact: string[]
  businessImpact?: string[]
  metrics: { label: string; value: string; prefix?: string; suffix?: string }[]
  features?: string[]
  architecture: string[]
  challenges?: string[]
  systemDesign?: Record<string, string>
  technologies: string[]
  category: ProjectCategory
  image: string
  gradient: string
  liveUrl: string
  githubUrl: string
  featured: boolean
  role: string
  duration: string
}

export const PROJECT_CATEGORIES = [
  { id: 'all' as const, label: 'All Projects' },
  { id: 'fullstack' as const, label: 'Full Stack' },
  { id: 'backend' as const, label: 'Backend' },
  { id: 'frontend' as const, label: 'Frontend' },
  { id: 'research' as const, label: 'Research' },
] as const

export const PROJECTS: Project[] = [
  {
id: 'timesheet',

title: 'Workforce Management & Payroll Platform',

subtitle:
'Enterprise workforce operations platform for timesheets, leave management, approvals, payroll, and analytics',

description:
'Designed and developed a full-stack workforce management platform that centralises employee timesheets, leave requests, payroll processing, project allocation, approval workflows, reporting, and workforce analytics. The system provides dedicated employee and administrator portals with automated notifications, role-based access control, and real-time operational insights.',

problem:
'The organisation relied on spreadsheets, manual approval processes, and disconnected workflows for timesheets, leave management, payroll calculations, and project allocation. This resulted in payroll inaccuracies, delayed approvals, limited visibility into workforce utilisation, and significant administrative overhead for managers and HR teams.',

solution:
'Built a centralised workforce operations platform that enables employees to submit timesheets, request leave, view team availability, and generate reports, while giving administrators the ability to manage approvals, allocate projects, calculate payroll, monitor workforce performance, and automate employee notifications through email workflows.',

businessImpact: [
'Replaced multiple spreadsheet-driven processes with a single platform',
'Reduced payroll discrepancies through automated payroll calculations',
'Accelerated timesheet and leave approval workflows',
'Improved workforce planning through real-time analytics and reporting',
'Provided organisation-wide visibility into employee utilisation and project allocation',
'Reduced administrative workload through automated notifications and approvals'
],

impact: [
'60+ active users across multiple departments',
'95% reduction in manual payroll calculation errors',
'Approval turnaround reduced from days to hours',
'500+ workforce and payroll reports generated',
],

metrics: [
{
label: 'Active Users',
value: '60',
suffix: '+',
},
{
label: 'Payroll Accuracy',
value: '99.9',
suffix: '%',
},
{
label: 'Reports Generated',
value: '500',
suffix: '+',
},
{
label: 'Approval Time Saved',
value: '90',
suffix: '%',
},
],

features: [
'Weekly and monthly timesheet submission',
'Multi-level approval workflows',
'Leave request and approval management',
'Team holiday visibility and workforce planning',
'Payroll generation by month or custom date range',
'Project assignment and allocation management',
'Email notification system',
'Role-based dashboards',
'Analytics and workforce reporting',
'CSV and PDF export functionality',
'Employee and administrator portals',
'Real-time status tracking',
],

architecture: [
'RESTful API architecture with JWT authentication',
'Role-based access control (Admin, Manager, Employee)',
'MongoDB aggregation pipelines for workforce analytics',
'Server-side pagination, sorting, and filtering',
'Email notification workflows for approvals and updates',
'Modular frontend architecture using reusable React components',
'Secure payroll processing and reporting engine',
],

challenges: [
'Designing a scalable role-based permission system',
'Building complex MongoDB aggregation pipelines for analytics',
'Implementing payroll calculations across multiple date ranges',
'Synchronising approval workflows with email notifications',
'Managing workforce reporting for large datasets',
],

systemDesign: {
frontend: 'React + Tailwind CSS',
backend: 'Node.js + Express',
database: 'MongoDB',
authentication: 'JWT',
reporting: 'CSV & PDF Generation',
notifications: 'Email Service Integration',
deployment: 'Ubuntu + Nginx',
},

technologies: [
'React',
'Node.js',
'Express',
'MongoDB',
'JWT',
'Chart.js',
'Tailwind CSS',
'Nodemailer',
],

category: 'fullstack',

image: '/images/timesheet.png',

gradient:
'from-blue-500/20 via-indigo-500/20 to-purple-500/20',

liveUrl: '#',

githubUrl: 'https://github.com/mridul2620/timesheet',

featured: true,

role: 'Lead Full Stack Developer',

duration: '4 Months',
},

  {
id: 'orderinsta',

title: 'OrderInsta Super App',

subtitle:
'AI-powered lifestyle platform for food delivery, reservations, event services, and local commerce',

description:
'Designed and developed a full-stack multi-service mobile application that combines food ordering, grocery delivery, restaurant reservations, event planning services, and AI-powered assistance into a single platform. Users can discover local businesses, place orders, book venues, hire service providers, and receive personalised recommendations through an intelligent AI Concierge.',

problem:
'Customers often rely on multiple disconnected applications to order food, buy groceries, reserve restaurants, organise events, hire catering services, subscribe to meal plans, and discover local offers. This fragmented experience creates unnecessary complexity, poor service discovery, and a lack of personalised assistance throughout the customer journey.',

solution:
'Built a unified lifestyle and hospitality platform that centralises food delivery, grocery shopping, reservations, event planning, local promotions, and service bookings. The platform features an AI Concierge capable of handling reservations, generating personalised diet plans, tracking orders, answering customer queries, and recommending services based on user preferences.',

businessImpact: [
'Unified multiple lifestyle and hospitality services into a single mobile platform',
'Simplified event planning through integrated venue and catering discovery',
'Improved user engagement through AI-driven recommendations and assistance',
'Enabled local businesses to promote offers and reach targeted customers',
'Reduced customer friction by eliminating the need for multiple applications',
'Created a scalable marketplace connecting consumers and service providers'
],

impact: [
'Integrated food, grocery, reservation, event, and service booking workflows',
'AI Concierge for bookings, recommendations, and customer assistance',
'Centralised marketplace for hospitality and lifestyle services',
'Real-time order tracking and reservation management',
],

metrics: [
{
label: 'Service Categories',
value: '6',
suffix: '+',
},
{
label: 'Integrated Services',
value: '10',
suffix: '+',
},
{
label: 'Booking Types',
value: '5',
suffix: '+',
},
{
label: 'AI Use Cases',
value: '4',
suffix: '+',
},
],

features: [
'Food ordering and delivery',
'Grocery ordering and delivery',
'Restaurant reservation management',
'Venue booking for events and private parties',
'Live promotions and discount discovery',
'Private chef hiring services',
'Catering service marketplace',
'Tiffin service subscriptions',
'Real-time order tracking',
'AI Concierge for bookings and recommendations',
'Personalised diet plan generation',
'Smart restaurant and service recommendations',
'Location-based service discovery',
'Integrated customer support assistance',
],

architecture: [
'Multi-service marketplace architecture',
'Flutter-based cross-platform mobile application',
'RESTful API integration for service orchestration',
'Location-aware service discovery system',
'AI Concierge integration for recommendations and bookings',
'Real-time order tracking workflows',
'Centralised booking and reservation engine',
],

challenges: [
'Designing a scalable architecture capable of supporting multiple service categories',
'Creating a seamless user experience across food delivery, reservations, and event services',
'Implementing AI-driven recommendation and booking workflows',
'Managing location-based search and service discovery',
'Building a unified platform while maintaining performance and usability',
],

systemDesign: {
frontend: 'Flutter',
backend: 'Node.js',
database: 'MongoDB',
ai: 'AI Concierge Engine',
location: 'Google Maps Integration',
services: 'Marketplace & Booking Engine',
},

technologies: [
'Flutter',
'Dart',
'Node.js',
'MongoDB',
'Google Maps API',
'REST APIs',
'Firebase',
'AI Integration',
],

category: 'frontend',

image: '/images/food.png',

gradient:
'from-orange-500/20 via-red-500/20 to-yellow-500/20',

liveUrl: '#',

githubUrl: 'https://github.com/mridul2620/OrderInsta',

featured: true,

role: 'Flutter Developer',

duration: '6 Months',
}
,
  {
id: 'facial-recognition',

title: 'AI-Powered Facial Recognition Platform',

subtitle:
'Real-time computer vision system for facial identification using deep learning and biometric embeddings',

description:
'Designed and developed a cross-platform facial recognition application that leverages computer vision and deep learning to identify individuals in real time. The system combines Flutter, FastAPI, Firebase Storage, MongoDB, and facial embedding models to perform accurate face detection, biometric matching, and instant identity recognition directly from a live camera feed.',

problem:
'Traditional identification methods often rely on manual verification, physical credentials, or static image searches, resulting in slower processing times and reduced efficiency. The challenge was to create a scalable and accurate biometric recognition platform capable of identifying individuals in real time while maintaining fast response times and a seamless mobile experience.',

solution:
'Built an end-to-end facial recognition platform where images captured through a mobile device are uploaded to cloud storage, processed by an AI-powered backend, converted into facial embeddings, and matched against previously registered users stored in a biometric database. Recognition results are returned instantly and displayed on the live camera interface.',

businessImpact: [
'Automated identity verification using biometric recognition',
'Eliminated manual user identification processes',
'Enabled real-time facial recognition through mobile devices',
'Created a scalable foundation for attendance, access control, and security applications',
'Reduced identification time from minutes to seconds',
'Demonstrated practical application of AI and computer vision technologies'
],

impact: [
'Real-time facial recognition from live camera feeds',
'Cloud-based biometric processing architecture',
'Automated face registration and identification workflows',
'AI-powered facial embedding and matching engine',
],

metrics: [
{
label: 'Recognition Speed',
value: '2',
suffix: 's',
},
{
label: 'AI Components',
value: '4',
suffix: '+',
},
{
label: 'Cloud Services',
value: '3',
suffix: '+',
},
{
label: 'Recognition Pipeline',
value: '100',
suffix: '%',
},
],

features: [
'Real-time face detection',
'Live facial recognition',
'Biometric user registration',
'Automatic face embedding generation',
'Firebase Storage image management',
'Cloud-based image processing',
'Identity matching engine',
'Recognition results displayed on live camera feed',
'User profile management',
'Secure metadata storage',
'Cross-platform mobile support',
'REST API integration',
],

architecture: [
'Flutter mobile application with camera integration',
'FastAPI microservice architecture',
'DeepFace / FaceNet embedding generation pipeline',
'MongoDB biometric data storage',
'Firebase Storage integration for image management',
'RESTful communication between mobile and backend services',
'Cloud-based image processing workflow',
],

challenges: [
'Building a low-latency facial recognition pipeline',
'Generating and storing biometric embeddings efficiently',
'Optimising image uploads and processing workflows',
'Maintaining recognition accuracy across different lighting conditions',
'Managing real-time communication between mobile and backend systems',
],

systemDesign: {
frontend: 'Flutter',
backend: 'FastAPI (Python)',
database: 'MongoDB',
storage: 'Firebase Storage',
ai: 'DeepFace / FaceNet',
communication: 'REST APIs',
deployment: 'Cloud Hosted Services',
},

technologies: [
'Flutter',
'Dart',
'FastAPI',
'Python',
'MongoDB',
'Firebase Storage',
'DeepFace',
'FaceNet',
'Computer Vision',
'REST APIs',
],

category: 'fullstack',

image: '/images/facial.png',

gradient:
'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',

liveUrl: '#',

githubUrl: 'https://github.com/mridul2620/Facial_recognition',

featured: false,

role: 'AI & Full Stack Developer',

duration: '3 Months',
}
,
  {
id: 'career-intelligence',

title: 'CareerIQ AI',

subtitle:
'AI-powered resume analysis platform for CV optimisation, job matching, and career guidance',

description:
'Designed and developed an AI-powered career optimisation platform that helps job seekers evaluate how well their CV aligns with specific job opportunities. Users can upload their resume, define their target role, provide a job description, and receive an AI-generated compatibility score, personalised improvement suggestions, and actionable recommendations to strengthen their applications.',

problem:
'Job seekers often submit applications without understanding how closely their skills and experience align with a job description. Many candidates struggle to identify missing skills, optimise their CV content, and tailor applications effectively, resulting in lower interview conversion rates and missed opportunities.',

solution:
'Built an intelligent career analysis platform that compares a candidate’s profile against a target job description using AI-powered evaluation. The system analyses skills, experience, qualifications, and role requirements to generate a match score, identify gaps, recommend CV improvements, and provide practical next steps to increase the likelihood of securing interviews.',

businessImpact: [
'Enabled data-driven job application preparation',
'Automated CV evaluation and job matching workflows',
'Provided personalised career guidance using AI analysis',
'Reduced time spent manually tailoring resumes for applications',
'Helped users identify skill gaps before applying for roles',
'Improved application quality through targeted recommendations'
],

impact: [
'AI-powered CV and job description comparison',
'Automated candidate-job compatibility scoring',
'Personalised CV optimisation recommendations',
'Actionable career improvement guidance',
],

metrics: [
{
label: 'Analysis Categories',
value: '4',
suffix: '+',
},
{
label: 'AI Insights',
value: '10',
suffix: '+',
},
{
label: 'Profile Inputs',
value: '5',
suffix: '+',
},
{
label: 'Evaluation Areas',
value: '100',
suffix: '%',
},
],

features: [
'Resume upload and parsing',
'Manual CV content analysis',
'Job description evaluation',
'AI-powered match scoring',
'CV improvement recommendations',
'Skill gap identification',
'Role-specific optimisation suggestions',
'Career action planning',
'Target role assessment',
'Application readiness analysis',
'Personalised career guidance',
'Responsive multi-step workflow',
],

architecture: [
'Next.js frontend with responsive multi-step user experience',
'AI-powered resume and job description analysis engine',
'Structured candidate profile processing',
'Document upload and text extraction workflow',
'Role matching and scoring algorithms',
'Real-time recommendation generation',
'Modular analysis pipeline for future AI enhancements',
],

challenges: [
'Designing accurate candidate-job matching logic',
'Extracting meaningful insights from diverse resume formats',
'Generating actionable and personalised recommendations',
'Balancing AI analysis with explainable scoring methodology',
'Creating a seamless user experience for complex evaluations',
],

systemDesign: {
frontend: 'Next.js',
framework: 'React',
ai: 'LLM-powered Analysis Engine',
processing: 'Resume Parsing & Job Matching',
scoring: 'AI Match Evaluation System',
deployment: 'Cloud Hosted',
},

technologies: [
'Next.js',
'React',
'TypeScript',
'Tailwind CSS',
'OpenAI API',
'REST APIs',
'Document Processing',
'AI Prompt Engineering',
],

category: 'frontend',

image: '/images/career.png',

gradient:
'from-violet-500/20 via-purple-500/20 to-blue-500/20',

liveUrl: '#',

githubUrl: 'https://github.com/mridul2620/student-companion',

featured: false,

role: 'Full Stack Developer',

duration: '2 Months',
},
]

export const CONTACT_INFO = [
  { label: 'Email',    value: 'mridulsriv26@gmail.com',                               href: 'mailto:mridulsriv26@gmail.com',                                  icon: 'Mail'   },
  { label: 'Phone',    value: '+44 7423036412',                                        href: 'tel:+447423036412',                                              icon: 'Phone'  },
  { label: 'Location', value: 'Coventry, UK',                                          href: 'https://www.google.com/maps/place/Coventry,+United+Kingdom/',    icon: 'MapPin' },
] as const

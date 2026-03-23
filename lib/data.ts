// ─── Centralised static data ───────────────────────────────────────────────
// Keeping these at module scope ensures they are created exactly once and
// shared across all re-renders — no object allocation on every render cycle.

// Hero -----------------------------------------------------------------------
export const TECH_TAGS = [
  'React', 'Next.js', 'Node.js', 'TypeScript',
  'Java', 'Python', 'MongoDB', 'Docker', 'AWS',
] as const

// About ----------------------------------------------------------------------
export const QUICK_FACTS = [
  { label: 'B.Tech (IT)',      sublabel: 'First Class',               icon: 'GraduationCap' },
  { label: 'Coventry, UK',     sublabel: 'Based in UK',               icon: 'MapPin'        },
  { label: '3+ Years',         sublabel: 'Production Experience',     icon: 'Code2'         },
  { label: 'System Design',    sublabel: 'APIs & Microservices',      icon: 'Lightbulb'     },
] as const

export const IMPACT_STATS = [
  { value: '60+',  label: 'Active Users',     sub: 'SaaS Platform'          },
  { value: '35%',  label: 'Load Time',        sub: 'Frontend Improvement'   },
  { value: '30%',  label: 'Query Reduction',  sub: 'DB Optimisation'        },
  { value: '25%',  label: 'API Latency',      sub: 'Performance Gain'       },
] as const

export const ABOUT_SKILLS = [
  'Java', 'Node.js', 'Python', 'React', 'Next.js',
  'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
] as const

// Skills ---------------------------------------------------------------------
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

// Experience -----------------------------------------------------------------
export const EXPERIENCES = [
  {
    title: 'Programmer Analyst',
    company: 'Pragmatic Designs & Solutions Ltd',
    location: 'Coventry, UK',
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

// Projects -------------------------------------------------------------------
export const PROJECTS = [
  {
    title: 'Timesheet Management System',
    description:
      'A comprehensive timesheet management application for tracking work hours, projects, and generating reports.',
    image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mridul2620/timesheet',
    featured: true,
  },
  {
    title: 'OrderInsta - Food Delivery',
    description:
      'Modern food delivery application with real-time tracking, payment integration, and user-friendly interface.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mridul2620/OrderInsta',
    featured: true,
  },
  {
    title: 'Research Publication',
    description:
      'Published research on modern web technologies and their applications in enterprise solutions.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Research', 'Web Technologies', 'Analysis'],
    liveUrl: 'https://www.irjmets.com/uploadedfiles/paper/issue_4_april_2023/35960/final/fin_irjmets1681551464.pdf',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-featured e-commerce platform with admin dashboard, payment processing, and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
] as const

// Contact --------------------------------------------------------------------
export const CONTACT_INFO = [
  { label: 'Email',    value: 'mridulsriv26@gmail.com',                               href: 'mailto:mridulsriv26@gmail.com',                                  icon: 'Mail'   },
  { label: 'Phone',    value: '+44 7423036412',                                        href: 'tel:+447423036412',                                              icon: 'Phone'  },
  { label: 'Location', value: 'Coventry, UK',                                          href: 'https://www.google.com/maps/place/Coventry,+United+Kingdom/',    icon: 'MapPin' },
] as const

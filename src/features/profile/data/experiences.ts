import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "tech-n-goodwill",
    companyName: "Tech N' Goodwill Limited |X| SafulPay",
    companyLogo: "/images/techngoodwill-logo.webp",
    positions: [
      {
        id: "tech-lead-2024",
        title: "Tech Team Lead",
        employmentPeriod: {
          start: "02.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Led cross-functional teams (UI/UX, marketing, backend, frontend) to plan, ship, and iterate on SafulPay (FinTech) infrastructure and core systems.
- Shipped SafulPay v2: FlutterFlow (Flutter) frontend with Go backend; collaborated on customer and agent portals, agency monitoring platform, and merchant bulk payment/collections web app.
- Rebuilt company website in React + TypeScript; transformed Figma designs into pixel-perfect, accessible UI and improved load time/performance.
- Created product tutorials and documentation; maintained API/technical notes for smooth collaboration.
- Enforced good Git/GitHub practices (structured PRs, clean commits) and accessibility/performance standards.`,
        skills: [
          "React",
          "TypeScript",
          "Flutter",
          "FlutterFlow",
          "Go",
          "Figma",
          "Git",
          "GitHub",
          "Team Leadership",
          "Cross-functional Collaboration",
          "FinTech",
          "Performance Optimization",
          "Accessibility",
          "Documentation",
        ],
        isExpanded: true,
      },
      {
        id: "frontend-dev-2023",
        title: "Frontend & Software Developer",
        employmentPeriod: {
          start: "08.2023",
          end: "02.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Collaborated with cross-functional teams to develop and maintain web applications, including an e-commerce site using Laravel and SafulPay v1; frontend in FlutterFlow backend in PHP.
- Demonstrated the ability to quickly master software tools for software development, writing, animation, and graphic design, creating engaging content tailored to client needs.`,
        skills: [
          "Laravel",
          "PHP",
          "FlutterFlow",
          "E-commerce",
          "Cross-functional Collaboration",
          "Rapid Learning",
          "Content Creation",
          "Animation",
          "Graphic Design",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "hng-internship",
    companyName: "HNG Internship",
    companyLogo: "/images/hng-logo.webp",
    positions: [
      {
        id: "frontend-intern-2025",
        title: "Frontend Engineer Intern",
        employmentPeriod: {
          start: "01.2025",
          end: "04.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Operated in a fast-paced, collaborative environment with backend/frontend engineers, PMs, designers, QA, and leads; shipped features to tight timelines.
- Co-built "Resolve" using Next.js + TypeScript: a voting platform for secure, free, and fair elections for individuals and organizations; implemented UI with Tailwind CSS and shadcn/ui components.
- Built a text processing UI in React + TypeScript using Chrome Origin Trials (Detector API, Summarization API, Translation API) to auto-detect language and translate text on the fly.
- Practiced strong engineering hygiene: accessible, responsive UI; performance optimization; structured PRs and clean commit history; collaborative reviews with cross-functional team.`,
        skills: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "shadcn/ui",
          "Chrome Origin Trials",
          "API Integration",
          "Voting Platform",
          "Text Processing",
          "Accessibility",
          "Performance Optimization",
          "Git Workflows",
          "Code Review",
          "Agile",
          "Cross-functional Collaboration",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "altschool-africa",
    companyName: "AltSchool Africa",
    companyLogo: "/images/altschool-logo.webp",
    positions: [
      {
        id: "interim-dev-2023",
        title: "Interim Developer",
        employmentPeriod: {
          start: "03.2023",
          end: "03.2024",
        },
        employmentType: "Internship",
        icon: "education",
        description: `- Intensive, education-driven internship focused on technical, soft skills and frontend engineering fundamentals.
- Built projects including "ScissorsWeb" and "Task Pilot" consuming RESTful APIs.
- Practiced Git/GitHub workflows, wrote unit tests to ensure code quality and functionality.`,
        skills: [
          "Frontend Engineering",
          "RESTful APIs",
          "Git",
          "GitHub",
          "Unit Testing",
          "Code Quality",
          "Project Development",
          "Self-learning",
          "Soft Skills",
        ],
      },
    ],
  },
  {
    id: "nimble-capital",
    companyName: "Nimble Capital Limited",
    positions: [
      {
        id: "it-specialist-2019",
        title: "IT Specialist",
        employmentPeriod: {
          start: "02.2019",
          end: "12.2021",
        },
        employmentType: "Full-time",
        icon: "business",
        description: `- Oversaw day-to-day technical operations, ensuring uptime and rapid bug resolution.
- Automated customer data collation and contact workflows for efficient records management.
- Executed targeted email/SMS outreach campaigns and collected feedback for iteration.`,
        skills: [
          "Technical Operations",
          "System Uptime",
          "Bug Resolution",
          "Process Automation",
          "Data Management",
          "Email Marketing",
          "SMS Campaigns",
          "Customer Feedback",
          "Workflow Optimization",
        ],
      },
    ],
  },
];

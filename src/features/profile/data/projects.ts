import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "safulpay-app",
    title: "SafulPay (FinTech App)",
    period: { start: "08.2023" },
    link: "https://safulpay.com/download",
    skills: [
      "FinTech",
      "FlutterFlow",
      "Flutter",
      "Go",
      "PHP",
      "Mobile",
      "Payments",
      "Multi-wallet",
    ],
    description: `Mobile money app for individuals, agents and merchants with instant transfers and multi-wallet support.
- iOS: https://apps.apple.com/ng/app/safulpay/id6480344064
- Android: https://play.google.com/store/apps/details?id=com.techengood.safulpay`,
    isExpanded: true,
  },

  {
    id: "safulpay-agency",
    title: "SafulPay — Agency Monitoring Portal",
    period: { start: "02.2024" },
    link: "https://agency.safulpay.com/",
    skills: ["React", "TypeScript", "Analytics", "Admin UI"],
    description:
      "Internal portal for agent onboarding, monitoring and operations.",
  },
  {
    id: "safulpay-merchant",
    title: "SafulPay — Merchant Web App",
    period: { start: "02.2024" },
    link: "https://app.safulpay.com/merchant",
    skills: ["Laravel", "REST API", "Bulk Payments", "Collections"],
    description:
      "Merchant UI for bulk payments and collections with REST integrations.",
  },
  {
    id: "safulpay-website",
    title: "SafulPay Website",
    period: { start: "02.2024" },
    link: "https://safulpay.com/",
    skills: ["React", "TypeScript", "Tailwind CSS", "SEO", "Performance"],
    description:
      "Rebuilt company site for speed, accessibility and clear product storytelling.",
  },
  {
    id: "resolve",
    title: "Resolve — Online Voting",
    period: { start: "01.2025" },
    link: "https://resolve.vote/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Performance",
      "Accessibility",
    ],
    description:
      "Secure online voting for organizations. Built with accessible, responsive UI and performance best practices.",
  },
  {
    id: "scissorsweb",
    title: "ScissorsWeb — URL Shortener, Analytics & QR Code",
    period: { start: "10.2024" },
    link: "https://scissorsweb.netlify.app/",
    skills: ["React", "TypeScript", "Supabase", "GSAP", "Analytics"],
    description:
      "URL shortener with QR generation, analytics, auth and storage.",
  },
  {
    id: "chatwith-isime",
    title: "Chat With Isime — Text Processing UI",
    period: { start: "03.2025" },
    link: "https://chatwithisime.netlify.app/",
    skills: [
      "React",
      "TypeScript",
      "Chrome Origin Trials",
      "Translation API",
      "Summarization API",
    ],
    description:
      "Leverages Detector, Summarization and Translation APIs to auto-detect language and translate on the fly.",
  },
  {
    id: "worldwise-yero",
    title: "WorldWise (Yero)",
    period: { start: "08.2024" },
    link: "https://worldwise-yero.netlify.app/",
    skills: ["React", "TypeScript", "Maps", "Geolocation"],
    description:
      "Track trips across cities on a world map and share your adventures.",
  },
];

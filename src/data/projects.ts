// Central project data — edit here, reflects everywhere (carousel + portfolio page)

export interface Project {
  id: number;
  title: string;
  description: string;
  category: "Android" | "Backend" | "Frontend" | "Full-Stack";
  tags: string[];
  image: string;
  highlight?: boolean;
  award?: string;
  link?: string; // External link (GitHub, live demo, etc.) — leave empty to disable
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MySporty Application",
    description:
      "A sports application that automatically tracks exercise movements using the device camera. Built with Android Jetpack Compose (Kotlin), integrated with Supabase for data storage, and TensorFlow Lite for the machine learning model.",
    category: "Android",
    tags: ["Kotlin", "Jetpack Compose", "TFLite", "Supabase"],
    image: "/portfolio/mysporty.png",
    highlight: true,
    award: "🥇 Gold Medal IIIEX",
    link: "https://youtube.com/shorts/OJAaqpDfam4?feature=share", // Replace with your GitHub or demo link
  },
  {
    id: 2,
    title: "PPID DKP Jateng",
    description: `The PPID DKP website is the official Public Information and Documentation Officer (PPID) platform for the Central Java Marine and Fisheries Service. This website is designed to provide transparent, accurate, and easily accessible public information to the community. It features an Information Request system for users to obtain specific data, an Objection Form for information request disputes, and a Civil Servant (ASN) Complaint Form to report any administrative violations. Additionally, the platform includes a News Portal for the latest updates and an Activity Gallery showcasing documentations of events, outreach programs, and key moments related to public information disclosure. Through this platform, the public can actively observe PPID's role as a reliable provider and manager of public information.`,
    category: "Full-Stack",
    tags: ["Laravel", "PHP", "MySQL", "Tailwindcss"],
    image: "/portfolio/ppid.png",
    link: "https://ppid.dkp.jatengprov.go.id/",
  },
  {
    id: 3,
    title: "Meyoi Makeup",
    description:
      "Meyoi Makeup is a video face-editing application designed for virtual makeup simulation. It allows users to apply and experiment with various digital makeup enhancements directly on their videos, featuring customizable tools for eyebrows, cheek blush, lipstick, and more.",
    category: "Android",
    tags: ["Android", "Kotlin", "Mediapipe"],
    image: "/portfolio/meyoi.png",
    link: "https://play.google.com/store/apps/details?id=com.meyoi.meyoiapp",
  },
  {
    id: 4,
    title: "Maple Hss",
    description:
      "A mobile application for booking massage therapists at Griya Bugar. Enables users to easily book available therapists and integrates with Firebase Cloud Messaging for real-time admin notifications.",
    category: "Full-Stack",
    tags: ["Android", "Next Js", "Express Js", "MySQL"],
    image: "/portfolio/maplehss.png",
    link: "https://maplehss.com/",
  },
  {
    id: 5,
    title: "Omah Lestari",
    description:
      "Oemah Lestari Marketplace is a platform that connects residents, landowners, and property developers within a single, integrated residential ecosystem.",
    category: "Backend",
    tags: ["Django", "Python", "PostgreSQL"],
    image: "/portfolio/omahlestari.png",
    link: "https://www.oemahlestari.com/home",
  },
  {
    id: 6,
    title: "Jamur Cikuda",
    description:
      "The Jamur Cikuda Nusantara website is a professional company profile platform designed to establish the brand's digital presence. It showcases the company's background, core agribusiness operations, and product offerings, providing clear and accessible information for potential clients and partners.",
    category: "Frontend",
    tags: ["Next Js", "React", "Typescript", "Tailwindcss"],
    image: "/portfolio/jamurcikuda.png",
    link: "https://jamurcikuda.co.id/",
  },
  {
    id: 7,
    title: "PT Karya Solusi Prima Sejahtera",
    description:
      "A mobile application for monitoring physical health, helping users maintain fitness through comprehensive tracking of daily activities and dietary intake. Served as Backend Developer, building and managing APIs.",
    category: "Frontend",
    tags: ["Wordpress", "Tailwindcss", "PHP"],
    image: "/portfolio/ksps.png",
    link: "https://ksps.co.id/",
  },
  {
    id: 8,
    title: "Loyalcust",
    description:
      "As the Front End Developer, I was responsible for building the user interface of a web-based Customer Relationship Management (CRM) platform. Operating on a Software as a Service (SaaS) model, this system is designed to efficiently manage and streamline online customer interactions. My focus was on delivering a responsive, intuitive, and modern web experience to ensure seamless user operations.",
    category: "Frontend",
    tags: ["Next.js", "React", "Typecript", "TailwindCSS"],
    image: "/portfolio/loyalcust.png",
    link: "https://loyalcust.campus.co.id/home",
  },
  {
    id: 9,
    title: "NSMHC — Nursing Student Motherheart Connection",
    description:
      "A training platform to help mothers practice mindfulness and emotional management techniques. Served as Backend Developer using Laravel, building APIs for both the mobile application and web dashboard.",
    category: "Backend",
    tags: ["Laravel", "PHP", "API"],
    image: "/portfolio/nsmhc.png",
    link: "#",
  },
  {
    id: 10,
    title: "Smartgrid PT Alga Bioteknologi Indonesia",
    description:
      "The Smartgrid PT Alga Bioteknologi Indonesia is an application designed for efficient energy management. It enables users to monitor real-time power consumption and configure future energy allocation, ensuring optimal and controlled power usage across operations.",
    category: "Android",
    tags: ["Android", "Flutter", "Firebase"],
    image: "/portfolio/albitec.png",
    link: "#",
  },
  {
    id: 10,
    title: "Griyabugar",
    description:
      "The Griya Bugar House Shiatsu and SPA app is a dedicated booking platform designed to streamline reservations for wellness treatments. It allows customers to easily browse, schedule, and book their preferred massage and spa sessions at Griya Bugar, providing a seamless and convenient user experience.",
    category: "Android",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    image: "/portfolio/griyabugar.png",
    link: "#",
  },
];

// Category badge color mapping — used in both carousel and portfolio page
export const categoryColors: Record<string, string> = {
  Android: "bg-green-100 text-green-700",
  Backend: "bg-blue-100 text-blue-700",
  Frontend: "bg-orange-100 text-orange-700",
  "Full-Stack": "bg-purple-100 text-purple-700",
};

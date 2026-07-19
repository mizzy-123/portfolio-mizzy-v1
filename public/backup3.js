// Central project data — edit here, reflects everywhere (carousel + portfolio page)

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Android' | 'Backend' | 'Frontend' | 'Full-Stack';
  tags: string[];
  image: string;
  highlight?: boolean;
  award?: string;
  link?: string; // External link (GitHub, live demo, etc.) — leave empty to disable
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MySporty Application',
    description:
      'A sports application that automatically tracks exercise movements using the device camera. Built with Android Jetpack Compose (Kotlin), integrated with Supabase for data storage, and TensorFlow Lite for the machine learning model.',
    category: 'Android',
    tags: ['Kotlin', 'Jetpack Compose', 'TFLite', 'Supabase'],
    image: '/project-1.png',
    highlight: true,
    award: '🥇 Gold Medal IIIEX',
    link: '#', // Replace with your GitHub or demo link
  },
  {
    id: 2,
    title: 'BelaBeli Marketplace API',
    description:
      'Backend marketplace using Laravel. Features include a product recommendation system, shopping cart, product catalog, product management, ratings & reviews, and manual payment integration using QRIS.',
    category: 'Backend',
    tags: ['Laravel', 'PHP', 'MySQL', 'QRIS'],
    image: '/project-2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'NSMHC — Nursing Student Motherheart Connection',
    description:
      'A training platform to help mothers practice mindfulness and emotional management techniques. Served as Backend Developer using Laravel, building APIs for both the mobile application and web dashboard.',
    category: 'Backend',
    tags: ['Laravel', 'PHP', 'API', 'Mobile'],
    image: '/project-3.png',
    link: '#',
  },
  {
    id: 4,
    title: 'House Shiatsu & Spa App',
    description:
      'A mobile application for booking massage therapists at Griya Bugar. Enables users to easily book available therapists and integrates with Firebase Cloud Messaging for real-time admin notifications.',
    category: 'Android',
    tags: ['Android', 'Kotlin', 'Firebase', 'FCM'],
    image: '/project-1.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Student Activity Unit Management System',
    description:
      'An information system for Student Activity Units built with Laravel (backend) and Next.js (frontend). Features include user roles (Admin, User, Super Admin), duty scheduling, meeting schedules, member lists, and email verification.',
    category: 'Full-Stack',
    tags: ['Laravel', 'Next.js', 'MySQL', 'Auth'],
    image: '/project-2.png',
    link: '#',
  },
  {
    id: 6,
    title: 'Nutrient — Nutrition Table Assistant',
    description:
      'An Android application for scanning food nutrition labels and converting them into health information based on the user\'s BMI. Themed around Health Innovation for vulnerable communities.',
    category: 'Android',
    tags: ['Android', 'Kotlin', 'ML', 'Health'],
    image: '/project-3.png',
    link: '#',
  },
  {
    id: 7,
    title: 'Fitrack Mobile Apps',
    description:
      'A mobile application for monitoring physical health, helping users maintain fitness through comprehensive tracking of daily activities and dietary intake. Served as Backend Developer, building and managing APIs.',
    category: 'Backend',
    tags: ['API', 'Laravel', 'Mobile', 'Health'],
    image: '/project-1.png',
    link: '#',
  },
  {
    id: 8,
    title: 'Serenade Story — Wedding Organizer Website',
    description:
      'A Wedding Organizer website built with Next.js. Tasks included implementing responsive designs from Figma, article pagination, and refining the chat feature.',
    category: 'Frontend',
    tags: ['Next.js', 'React', 'Figma', 'TailwindCSS'],
    image: '/project-2.png',
    link: '#',
  },
  {
    id: 9,
    title: 'E-commerce Fruit & Fresh Products',
    description:
      'A full Laravel-based e-commerce website for selling fruits and other items. Features include WhatsApp Gateway for order confirmations, invoice system, shopping cart, and account security.',
    category: 'Full-Stack',
    tags: ['Laravel', 'PHP', 'WhatsApp API', 'MySQL'],
    image: '/project-3.png',
    link: '#',
  },
];

// Category badge color mapping — used in both carousel and portfolio page
export const categoryColors: Record<string, string> = {
  Android: 'bg-green-100 text-green-700',
  Backend: 'bg-blue-100 text-blue-700',
  Frontend: 'bg-orange-100 text-orange-700',
  'Full-Stack': 'bg-purple-100 text-purple-700',
};

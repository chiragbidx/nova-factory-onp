// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Now Live",
    badgeOuter: "Introducing Calcify",
    titleBefore: "",
    titleHighlight: "Calculate Anything, Anywhere",
    titleAfter: "",
    subtitle:
      "Calcify is your all-in-one online calculator workspace. Create, organize, and share calculation sheets for your projects, teams, or personal use—securely in the cloud.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "Calcify dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted by teams everywhere",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why Calcify",
    heading: "All your calculations, always organized",
    description:
      "Calcify is built for individuals and teams that need a secure and collaborative place to keep their formulas, calculations, and sheets accessible—without spreadsheet chaos.",
    items: [
      {
        icon: "Blocks",
        title: "Organize Your Calculations",
        description: "Manage all your formulas and calculation sheets in one place—no more lost spreadsheets.",
      },
      {
        icon: "Users",
        title: "Collaborate Instantly",
        description: "Invite teammates to work together on complex calculations and track changes in real time.",
      },
      {
        icon: "Globe",
        title: "Accessible Everywhere",
        description: "Access your calculations from any device, with cloud backups and secure sharing options.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Why Calcify?",
    subtitle: "",
    items: [
      {
        icon: "Blocks",
        title: "Organize Your Calculations",
        description: "Manage all your formulas and calculation sheets in one place—no more lost spreadsheets.",
      },
      {
        icon: "Users",
        title: "Collaborate Instantly",
        description: "Invite teammates to work together on complex calculations and track changes in real time.",
      },
      {
        icon: "Globe",
        title: "Accessible Everywhere",
        description: "Access your calculations from any device, with cloud backups and secure sharing options.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "More capabilities coming soon",
    subtitle:
      "Future: Export to PDF/CSV, Google Sheets sync, API access, calculation templates, and more.",
    items: [
      { title: "Real-Time Collaboration", description: "Work together with your team in the same sheet.", pro: false },
      { title: "Calculation History", description: "Track all changes and restore previous versions.", pro: false },
      { title: "Custom Functions", description: "Define reusable custom formulas.", pro: false },
      { title: "Sharing & Permissions", description: "Control who can view and edit every sheet.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "What Our Users Say",
    reviews: [
      { image: "/demo-img.jpg", name: "Mia", role: "Project Manager", comment: "“Calcify has transformed how our team handles project estimates and budget planning.”", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Ahmed", role: "Engineer", comment: "“No more messy spreadsheets—our formulas are organized and easy to update.”", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the Calcify team",
    members: [],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, transparent pricing",
    subtitle: "Start free, pay as you grow. Calcify is built for all teams.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "For individuals getting started.",
        buttonText: "Sign Up Free",
        benefits: ["Unlimited calculation sheets", "Secure cloud storage", "Team collaboration", "24/7 Support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the Calcify team",
    description: "Questions about features, pricing, or onboarding? We’re here to help!",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 5PM"] },
    },
    formSubjects: ["General Inquiry", "Pricing", "Partnerships", "Feature Request"],
    formSubmitLabel: "Send Inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is Calcify free?", answer: "Yes! Calcify offers a free plan for getting started." },
      { question: "Can I collaborate with others?", answer: "Yes, you can invite team members for real-time collaboration." },
      { question: "Will my sheets be backed up?", answer: "All your calculation sheets are securely stored and synced in the cloud." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "Calcify",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
          { label: "Github", href: "#" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 Calcify.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "Calcify",
    routes: [
      { href: "/#features", label: "Why Calcify?" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "Calcify preview" },
    features: [
      { title: "Organize Your Calculations", description: "Manage all your formulas and calculation sheets in one place—no more lost spreadsheets." },
      { title: "Collaborate Instantly", description: "Invite teammates to work together on complex calculations and track changes in real time." },
      { title: "Accessible Everywhere", description: "Access your calculations from any device, with cloud backups and secure sharing options." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View Calcify on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// Keep this function export for backward compatibility with older imports.
// Primary consumers should import `homeContent` directly.
export function getHomeContent(): HomeContent {
  return homeContent;
}
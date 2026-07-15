export const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Web Development",
        path: "/services/web-development",
      },
      {
        title: "Mobile App Development",
        path: "/services/mobile-development",
      },
      {
        title: "Cloud Solutions",
        path: "/services/cloud-solutions",
      },
      {
        title: "AI & Machine Learning",
        path: "/services/ai-ml",
      },
      {
        title: "UI/UX Design",
        path: "/services/ui-ux-design",
      },
    ],
  },
  {
    id: 4,
    title: "Technologies",
    path: "/technologies",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Frontend",
        path: "/technologies/frontend",
      },
      {
        title: "Backend",
        path: "/technologies/backend",
      },
      {
        title: "Mobile",
        path: "/technologies/mobile",
      },
      {
        title: "Cloud",
        path: "/technologies/cloud",
      },
      {
        title: "Database",
        path: "/technologies/database",
      },
    ],
  },
  {
    id: 5,
    title: "Industries",
    path: "/industries",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Healthcare",
        path: "/industries/healthcare",
      },
      {
        title: "Fintech",
        path: "/industries/fintech",
      },
      {
        title: "Education",
        path: "/industries/education",
      },
      {
        title: "E-Commerce",
        path: "/industries/ecommerce",
      },
      {
        title: "Logistics",
        path: "/industries/logistics",
      },
    ],
  },
  {
    id: 6,
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 7,
    title: "Blogs",
    path: "/blogs",
  },
  {
    id: 8,
    title: "Contact",
    path: "/contact",
  },
];
